// Animated hero counters
function animateNumber(el, to, duration = 1200) {
  const from = 0;
  const start = performance.now();
  function frame(now) {
    const p = Math.min(1, (now - start) / duration);
    const n = Math.round(from + (to - from) * p);
    el.textContent = to >= 1000 ? n.toLocaleString() : n + (typeof to === 'number' && to < 100 ? '%' : '');
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
window.addEventListener('load', () => {
  // Theme: initialize from saved preference or system
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = saved || (prefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) toggleBtn.textContent = theme === 'light' ? 'Dark' : 'Light';

  const u = document.getElementById('stat-users');
  const t = document.getElementById('stat-threats');
  const s = document.getElementById('stat-secure');
  if (u) animateNumber(u, 2800000000);
  if (t) t.textContent = '+15%';
  if (s) s.textContent = '95%';
});

// Theme toggle handler
const toggle = document.getElementById('theme-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const next = isLight ? '' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next || 'dark');
    toggle.textContent = next === 'light' ? 'Dark' : 'Light';
  });
}

// Password strength meter
const pw = document.getElementById('pw');
const pwBar = document.getElementById('pw-bar');
const pwHint = document.getElementById('pw-hint');
function scorePassword(val) {
  let score = 0;
  if (!val) return 0;
  const sets = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/];
  sets.forEach(rx => {
    if (rx.test(val)) score += 1;
  });
  score += Math.min(4, Math.floor(val.length / 4)); // length adds up to +4
  const repeats = /(.)\1{2,}/;
  if (repeats.test(val)) score -= 1;
  return Math.max(0, Math.min(8, score));
}
function updatePw() {
  const val = pw.value;
  const score = scorePassword(val); // 0..8
  const pct = Math.round((score / 8) * 100);
  pwBar.style.width = pct + '%';
  if (pct < 35) {
    pwHint.textContent = 'Weak: add length, mix UPPER/lower, numbers, symbols.';
    pwHint.style.color = '#ef9a9a';
  } else if (pct < 70) {
    pwHint.textContent = 'Fair: consider a passphrase with 3–4 words + symbols.';
    pwHint.style.color = '#f8d38b';
  } else {
    pwHint.textContent = 'Strong: unique and long. Avoid reuse across sites.';
    pwHint.style.color = '#9be7c4';
  }
}
if (pw) {
  pw.addEventListener('input', updatePw);
}

// Phishing quick heuristics
const urlInput = document.getElementById('url');
const urlRes = document.getElementById('url-result');
function analyzeUrl(u) {
  try {
    const d = new URL(u);
    return d;
  } catch {
    return null;
  }
}
function heuristic(u) {
  if (!u) return { level: 'neutral', msg: 'Enter a full URL like https://example.com' };
  const parsed = analyzeUrl(u);
  if (!parsed) return { level: 'danger', msg: 'Not a valid URL' };
  const host = parsed.hostname.toLowerCase();
  const redFlags = [];
  if (host.split('.').length > 3) redFlags.push('suspicious subdomains');
  if (/\d+\.\d+\.\d+\.\d+/.test(host)) redFlags.push('raw IP instead of domain');
  if (host.includes('verify') || host.includes('secure') || host.includes('login')) redFlags.push('common bait words');
  if (parsed.protocol !== 'https:') redFlags.push('not using HTTPS');
  const level = redFlags.length >= 2 ? 'danger' : redFlags.length === 1 ? 'warning' : 'ok';
  return { level, msg: redFlags.length ? 'Caution: ' + redFlags.join(', ') : 'Looks okay, but always verify the source.' };
}
function updateUrl() {
  const { level, msg } = heuristic(urlInput.value.trim());
  urlRes.textContent = msg;
  const map = { ok: '#9be7c4', warning: '#f8d38b', danger: '#ef9a9a', neutral: '#a0a6b8' };
  urlRes.style.color = map[level] || map.neutral;
}
if (urlInput) {
  urlInput.addEventListener('input', updateUrl);
}

// Quiz logic
const opts = document.querySelectorAll('.opt');
const qHint = document.getElementById('quiz-hint');
opts.forEach(btn =>
  btn.addEventListener('click', () => {
    const correct = btn.getAttribute('data-correct') === 'true';
    opts.forEach(o => {
      o.disabled = true;
      if (o.getAttribute('data-correct') === 'true') o.classList.add('correct');
    });
    if (!correct) btn.classList.add('wrong');
    if (qHint)
      qHint.textContent = correct
        ? 'Correct: open the site manually and verify the sender.'
        : 'Not safe. Avoid clicking links in urgent emails.';
  })
);

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ------------------------
// Enhanced visuals: starfield parallax background
// ------------------------
(function createStarfield(){
  const cvs = document.createElement('canvas');
  cvs.setAttribute('aria-hidden','true');
  cvs.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;';
  document.body.appendChild(cvs);
  const ctx = cvs.getContext('2d');
  let w,h,stars=[]; const N=140;
  function resize(){ w= cvs.width = window.innerWidth; h=cvs.height = window.innerHeight; }
  function init(){ stars = Array.from({length:N},()=>({ x:Math.random()*w, y:Math.random()*h, r: Math.random()*1.2+0.2, s: Math.random()*0.6+0.2 })); }
  function draw(){ ctx.clearRect(0,0,w,h); for(const st of stars){ ctx.beginPath(); ctx.arc(st.x,st.y,st.r,0,Math.PI*2); ctx.fillStyle = `rgba(255,255,255,${0.5+Math.sin(Date.now()*0.002*st.s)*0.5})`; ctx.fill(); st.x += st.s*0.15; if(st.x> w+2) st.x=-2; }
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', ()=>{resize(); init();});
  resize(); init(); draw();
})();

// ------------------------
// Scroll reveal animations
// ------------------------
(function revealOnScroll(){
  if(window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.card, .hero-card, .section-title, .stat').forEach(el=>{
      gsap.from(el, { opacity:0, y:24, duration:.6, ease:'power2.out', scrollTrigger:{ trigger:el, start:'top 85%' } });
    });
  } else {
    const els = document.querySelectorAll('.card, .hero-card, .section-title, .stat');
    els.forEach(el=>{ el.style.opacity=0; el.style.transform='translateY(16px)'; el.style.transition='opacity .6s ease, transform .6s ease'; });
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.style.opacity=1; e.target.style.transform='translateY(0)'; io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el=> io.observe(el));
  }
})();

// ------------------------
// Card tilt effect
// ------------------------
(function cardTilt(){
  const max=8;
  function enter(e){ e.currentTarget.style.transition='transform .12s ease'; }
  function move(e){ const b=e.currentTarget.getBoundingClientRect(); const x=(e.clientX-b.left)/b.width; const y=(e.clientY-b.top)/b.height; const rx=(y-0.5)*-max; const ry=(x-0.5)*max; e.currentTarget.style.transform=`perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`; }
  function leave(e){ e.currentTarget.style.transform='none'; e.currentTarget.style.transition='transform .3s ease'; }
  document.querySelectorAll('.card, .hero-card').forEach(c=>{ c.addEventListener('mouseenter', enter); c.addEventListener('mousemove', move); c.addEventListener('mouseleave', leave); });
  // anime.js subtle pulse on hero badge
  if(window.anime){
    anime({ targets: '.brand-badge', scale: [1,1.04,1], duration: 2600, direction: 'alternate', easing: 'easeInOutSine', loop: true });
  }
})();

// ------------------------
// Dynamic widgets
// ------------------------
(function addWidgets(){
  const grid = document.querySelector('#interactive .grid-3');
  if(!grid) return;

  // Password Generator
  const gen = document.createElement('div');
  gen.className='card';
  gen.innerHTML = `
    <h3>Password Generator</h3>
    <div style="display:grid; gap:8px;">
      <div style="display:flex; gap:8px; align-items:center;">
        <label style="min-width:70px">Length</label>
        <input type="range" id="pg-l" min="8" max="32" value="16" style="flex:1"/>
        <span id="pg-lv">16</span>
      </div>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <label><input type="checkbox" id="pg-u" checked/> Uppercase</label>
        <label><input type="checkbox" id="pg-n" checked/> Numbers</label>
        <label><input type="checkbox" id="pg-s" checked/> Symbols</label>
        <label><input type="checkbox" id="pg-p"/> Pronounceable</label>
      </div>
      <div style="display:flex; gap:8px;">
        <input id="pg-out" readonly style="flex:1; padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.04); color:inherit" placeholder="Click Generate"/>
        <button id="pg-gen" class="btn-primary">Generate</button>
        <button id="pg-copy" class="btn-ghost">Copy</button>
      </div>
      <div class="meter"><span id="pg-meter"></span></div>
    </div>`;
  grid.appendChild(gen);

  function randFrom(s){ return s[Math.floor(Math.random()*s.length)]; }
  function generatePassword(len, opts){
    const lowers='abcdefghijklmnopqrstuvwxyz';
    const uppers='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums='0123456789';
    const syms='!@#$%^&*()_+{}[]<>?~';
    if(opts.p){ // pronounceable pairs
      const vowels='aeiou'; const cons=lowers.replace(/[aeiou]/g,'');
      let out='';
      while(out.length < len){ out += randFrom(cons) + randFrom(vowels); }
      out = out.slice(0,len);
      if(opts.u) out = out.split('').map((ch,i)=> i%3===0 ? ch.toUpperCase() : ch).join('');
      if(opts.n) out = out.replace(/[aeiou]/g,(m)=> m+randFrom(nums));
      if(opts.s) out += randFrom(syms);
      return out.slice(0,len);
    }
    let pool=lowers; if(opts.u) pool+=uppers; if(opts.n) pool+=nums; if(opts.s) pool+=syms;
    if(pool.length===0) pool=lowers;
    return Array.from({length:len},()=> randFrom(pool)).join('');
  }
  const l = gen.querySelector('#pg-l'); const lv = gen.querySelector('#pg-lv'); const out = gen.querySelector('#pg-out'); const btn = gen.querySelector('#pg-gen'); const copy = gen.querySelector('#pg-copy');
  const u = gen.querySelector('#pg-u'); const n = gen.querySelector('#pg-n'); const s = gen.querySelector('#pg-s'); const p = gen.querySelector('#pg-p'); const mbar = gen.querySelector('#pg-meter');
  function updateLen(){ lv.textContent = l.value; }
  function genAndScore(){ const pwd = generatePassword(Number(l.value), {u:u.checked,n:n.checked,s:s.checked,p:p.checked}); out.value=pwd; const score = (function(v){ let sc=0; if(!v) return 0; const sets=[/[a-z]/,/A-Z/.source?/[A-Z]/:/.^/ ,/\d/,/[^A-Za-z0-9]/]; sets.forEach(rx=>{ if((rx).test?rx.test(v):new RegExp(rx).test(v)) sc++; }); sc += Math.min(4, Math.floor(v.length/4)); const rpt=/(.)\1{2,}/; if(rpt.test(v)) sc--; return Math.max(0,Math.min(8,sc)); })(pwd); mbar.style.width = Math.round((score/8)*100)+'%'; }
  l.addEventListener('input', ()=>{ updateLen(); genAndScore(); }); [u,n,s,p].forEach(ch=> ch.addEventListener('change', genAndScore)); btn.addEventListener('click',genAndScore);
  copy.addEventListener('click', ()=>{ if(!out.value) return; navigator.clipboard.writeText(out.value); copy.textContent='Copied'; setTimeout(()=>copy.textContent='Copy', 1200); }); updateLen();

  // Breach Awareness (simulated k-anonymity)
  const breach = document.createElement('div'); breach.className='card'; breach.innerHTML = `
    <h3>Breach Awareness (Simulated)</h3>
    <div style="display:grid; gap:8px;">
      <input id="ba-email" type="email" placeholder="Enter email (simulation)" style="width:100%; padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.04); color:inherit"/>
      <button id="ba-check" class="btn-primary">Check</button>
      <div id="ba-res" class="hint" aria-live="polite">This demo hashes your email (SHA-1) and shows how k-anonymity works without sending data.</div>
    </div>`; grid.appendChild(breach);
  async function sha1(str){ const buf = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(str)); return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('').toUpperCase(); }
  breach.querySelector('#ba-check').addEventListener('click', async ()=>{
    const email = breach.querySelector('#ba-email').value.trim().toLowerCase(); const res = breach.querySelector('#ba-res');
    if(!email){ res.textContent='Enter a valid email.'; return; }
    const h = await sha1(email); const prefix = h.slice(0,5); const tail = h.slice(5);
    // demo logic: flag as "found" if tail hex ends with a-f (pseudo-probability)
    const found = /[A-F]$/.test(tail);
    res.style.color = found ? '#ef9a9a' : '#9be7c4';
    res.textContent = found ? `Possible exposure detected (simulated). Prefix ${prefix}, tail length ${tail.length}. Use unique passwords and 2FA.` : `No exposure found in simulation. Still use unique, strong passwords.`;
  });

  // Phishing Header Simulator
  const phsim = document.createElement('div'); phsim.className='card'; phsim.innerHTML = `
    <h3>Phishing Header Simulator</h3>
    <div style="display:grid; gap:8px;">
      <select id="ph-case" style="padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.04); color:inherit">
        <option value="ok">From: support@bank.com | Reply-To: support@bank.com</option>
        <option value="warn">From: support@bank.com | Reply-To: support@bnk-secure.com</option>
        <option value="danger">From: bank-alert@security.com | Reply-To: login@ver1fy-bank.com</option>
      </select>
      <div id="ph-out" class="hint">Select a case to analyze.</div>
    </div>`; grid.appendChild(phsim);
  const phSel = phsim.querySelector('#ph-case'); const phOut = phsim.querySelector('#ph-out');
  function analyzeHeader(val){ if(val==='ok'){ phOut.style.color='#9be7c4'; return 'Headers consistent. Still be cautious.'; } if(val==='warn'){ phOut.style.color='#f8d38b'; return 'Mismatch in Reply-To domain. Treat with caution.'; } phOut.style.color='#ef9a9a'; return 'High risk: spoofing indicators present. Do not click links.'; }
  phSel.addEventListener('change', ()=>{ phOut.textContent = analyzeHeader(phSel.value); }); phOut.textContent = analyzeHeader(phSel.value);

  // Data Classification Filter
  const clf = document.createElement('section');
  clf.id='classification';
  clf.innerHTML = `
    <div class="container">
      <h2 class="section-title">Data Classification</h2>
      <p class="lead">Filter examples by sensitivity level.</p>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px;">
        <button class="btn-ghost" data-f="all">All</button>
        <button class="btn-ghost" data-f="public">Public</button>
        <button class="btn-ghost" data-f="internal">Internal</button>
        <button class="btn-ghost" data-f="confidential">Confidential</button>
      </div>
      <div class="grid-3">
        <div class="card" data-type="public"><span class="badge">Public</span><p>Campus event poster</p></div>
        <div class="card" data-type="internal"><span class="badge">Internal</span><p>Class attendance sheet</p></div>
        <div class="card" data-type="confidential"><span class="badge">Confidential</span><p>Exam question papers</p></div>
        <div class="card" data-type="internal"><span class="badge">Internal</span><p>Lab resource usage</p></div>
        <div class="card" data-type="public"><span class="badge">Public</span><p>Open course materials</p></div>
        <div class="card" data-type="confidential"><span class="badge">Confidential</span><p>Student medical records</p></div>
      </div>
    </div>`;
  document.querySelector('main').appendChild(clf);
  const filterBtns = clf.querySelectorAll('[data-f]'); const cards = clf.querySelectorAll('[data-type]');
  filterBtns.forEach(b=> b.addEventListener('click', ()=>{ const f=b.getAttribute('data-f'); cards.forEach(c=>{ c.style.display = (f==='all' || c.getAttribute('data-type')===f) ? '' : 'none'; }); }));
})();

// ------------------------
// Quiz export results
// ------------------------
(function exportQuiz(){
  const quiz = document.querySelector('#interactive .quiz'); if(!quiz) return;
  const btn = document.createElement('button'); btn.className='btn-ghost'; btn.textContent='Download Quiz Result'; btn.style.marginTop='8px';
  const hint = quiz.querySelector('#quiz-hint'); let choice = null; const started = Date.now();
  document.querySelectorAll('.opt').forEach(o=> o.addEventListener('click', ()=>{ choice = { text:o.textContent, correct: o.getAttribute('data-correct')==='true', timeMs: Date.now()-started }; }));
  btn.addEventListener('click', ()=>{ const data = { project: 'Digital Trust & Safety', quiz: choice, at: new Date().toISOString() }; const blob = new Blob([JSON.stringify(data,null,2)], {type:'application/json'}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'quiz-result.json'; a.click(); URL.revokeObjectURL(a.href); if(hint) hint.textContent='Quiz result downloaded.'; });
  quiz.appendChild(btn);
})();
