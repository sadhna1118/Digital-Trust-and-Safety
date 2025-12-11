                                          “CyberShield – Interactive Digital Trust & Safety Platform”
# Digital Trust & Safety — Cybersecurity & Safer Internet Practices

> Building a Secure and Trustworthy Digital Future

### Click below to experience the live demo 
- https://sadhna1118.github.io/Digital-Trust-and-Safety/

**Presented by:** Coder's Creed — Government College for Girls, Nacholi  
**Date:** 22 November 2025

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Content Sections](#content-sections)
- [Interactive Tools](#interactive-tools)
- [Technical Demos](#technical-demos)
- [Browser Compatibility](#browser-compatibility)
- [Technology Stack](#technology-stack)
- [Credits & References](#credits--references)
- [FAQ](#faq)

---

## 🎯 Overview

**Digital Trust & Safety** is a standalone, interactive educational web application designed to teach students and internet users about:

- ✅ Common cyber threats and how to recognize them
- ✅ Safer internet practices and protective habits
- ✅ Digital ethics and responsible online behavior
- ✅ Data classification and information security
- ✅ Industry-standard security frameworks (NIST, OWASP, ISO 27001)
- ✅ Hands-on security demonstrations and tools

The project is a **single HTML file** with no external dependencies—works entirely offline and in any modern browser.

---

## ✨ Features

### 🎓 Educational Content

| Section | Topics |
|---------|--------|
| **Common Threats** | Phishing, Malware, Data Breaches, Identity Theft, Fraud, Reporting |
| **Safer Practices** | Strong Passwords, 2FA, Safe Browsing, Privacy, Cyber Ethics, Responsibility |
| **Interactive Lab** | Real-time tools for testing security awareness |
| **Technical Demos** | Industry-level security implementations |
| **Data Classification** | Public, Internal, Confidential sensitivity levels |
| **Summary** | Print-friendly takeaways and conclusions |

### 🔐 Interactive Learning Tools

1. **Password Strength Meter**
   - Real-time evaluation with color-coded feedback
   - Considers length, character variety, and patterns
   - Suggests improvements

2. **Phishing Link Detector**
   - URL analysis with heuristic red-flag detection
   - Checks for suspicious subdomains, raw IPs, HTTPS usage
   - Instant visual feedback

3. **1-Minute Safety Quiz**
   - Multiple-choice questions with explanations
   - Tests phishing awareness and safe practices
   - Exportable results as JSON

4. **Password Generator**
   - Customizable length (8–32 characters)
   - Toggle uppercase, numbers, symbols, pronounceable mode
   - One-click copy to clipboard
   - Strength meter visualization

5. **Breach Awareness Simulator**
   - K-Anonymity concept demonstration
   - SHA-1 hashing for email privacy
   - Educational simulation (data stays local)

6. **Phishing Email Header Analyzer**
   - Detects sender/reply-to mismatches
   - Highlights spoofing indicators
   - Risk level assessment

### 🛠️ Technical Demonstrations

| Tool | Purpose |
|------|---------|
| **Security Headers Preview** | CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| **XSS Sanitization Demo** | Safe HTML rendering with dangerous tag/attribute removal |
| **Risk Matrix Calculator** | Likelihood × Impact scoring for vulnerability assessment |
| **STRIDE Threat Modeling** | Asset-based threat identification (Spoofing, Tampering, Repudiation, etc.) |
| **AES-GCM Encryption** | Local client-side encryption with PBKDF2 key derivation |
| **WCAG Contrast Checker** | Color accessibility testing (AA/AAA compliance) |

### 📊 Data Classification Gallery

- **Interactive cards** with expandable content
- **Filter controls** (Public, Internal, Confidential)
- **Sample records** with realistic metadata
- **Sensitivity indicators** and access restrictions

### 🎨 Design Features

- ✅ Dark/Light theme toggle with localStorage persistence
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations and page transitions
- ✅ Starfield parallax background with floating particles
- ✅ Keyboard navigation and ARIA accessibility labels
- ✅ Print-friendly CSS for PDF export
- ✅ Zero external dependencies (pure HTML/CSS/JS)

---

## 🚀 Quick Start

### Opening the Application

1. Double-click **`index-standalone.html`**
. The application opens in your default browser—works offline immediately

### No Installation Required

- No Node.js, npm, or build tools needed
- No external libraries or CDNs
- Just open the HTML file in any modern browser

---

## 📁 File Structure

```
safety2/
├── index-standalone.html    Main application (300+ KB, all-in-one)
├── README.md                This file
└── README.html              Alternative HTML documentation
```

| File | Purpose | Size |
|------|---------|------|
| `index-standalone.html` | Complete interactive app with styles & scripts embedded | ~300 KB |
| `README.md` | Markdown documentation (this file) | ~15 KB |
| `README.html` | HTML version of documentation | ~40 KB |

---

## 📚 Content Sections

### 1. Hero / Introduction

- Project title and tagline
- Quick stats (2.8B daily social media users, +15% annual threats, 95% weak password breaches)
- Call-to-action buttons
- "Why Digital Trust Matters" cards

### 2. Common Cyber Threats (6 Cards)

1. **Phishing** — Fake emails/sites targeting passwords and OTPs
2. **Malware** — Viruses and ransomware damaging devices
3. **Data Breaches** — Large-scale leaks of personal info
4. **Identity Theft** — Impersonation and account takeover
5. **Fraud Examples** — UPI scams, shopping fraud, social media hijacking
6. **Reporting** — Where to report incidents

### 3. Safer Internet Practices (6 Cards)

1. **Strong & Unique Passwords** — 12+ chars, avoid reuse
2. **Two-Factor Authentication** — Authenticator apps or SMS
3. **Think Before You Click** — Avoid phishing attempts
4. **Protect Personal Data** — Privacy controls, backups
5. **Cyber Ethics** — Respect, no bullying, credit creators
6. **Roles & Responsibility** — Schools, parents, government

### 4. Interactive Lab

- Password strength meter
- Phishing detector
- Quiz with feedback
- Password generator
- Breach awareness simulator
- Phishing header analyzer

### 5. Technical Demos

- Security headers reference
- XSS sanitization playground
- Risk matrix calculator
- STRIDE threat modeling
- AES-GCM encryption/decryption
- WCAG contrast checker

### 6. Data Classification

- Expandable card gallery
- Public / Internal / Confidential levels
- Filter and search capabilities
- Keyboard accessible

### 7. Project Summary

- Digital trust building factors
- Conclusion on internet safety
- Print-to-PDF button

### 8. References

- Standards (NIST, OWASP, ISO 27001)
- Educational resources (Have I Been Pwned, Google Safety, IC3)
- Libraries used and acknowledgments

---

## 🛠️ Interactive Tools Guide

### Password Strength Meter

```
Input: A password
Output: 
  - Visual bar (0–100%)
  - Color: Red (weak) → Yellow (fair) → Green (strong)
  - Tip text with suggestions
```

### Phishing URL Detector

```
Input: Paste a suspicious URL
Output:
  - Validity check
  - Red flags: suspicious subdomains, raw IP, missing HTTPS, bait words
  - Risk assessment
```

### Password Generator

```
Input: 
  - Length slider (8–32)
  - Toggle: Uppercase, Numbers, Symbols, Pronounceable
Output:
  - Generated password
  - Copy-to-clipboard button
  - Strength meter
```

### Encryption Demo (AES-GCM)

```
Input:
  - Secret text
  - Password
Output:
  - Encrypted blob (base64, salt+IV+ciphertext)
  - Decrypt with matching password
  - Uses: PBKDF2 (120k iterations) + AES-GCM
```

### STRIDE Threat Modeling

```
Input: Select an asset (Login form, Payments API, Profile settings)
Output: Threats & mitigations for:
  - Spoofing
  - Tampering
  - Repudiation
  - Information Disclosure
  - Denial of Service
  - Elevation of Privilege
```

---

## 🔧 Technical Demos

### 1. Security Headers

Shows HTTP headers that harden web applications:
- `Content-Security-Policy` (CSP)
- `Strict-Transport-Security` (HSTS)
- `Referrer-Policy`
- `X-Frame-Options`
- `Permissions-Policy`

### 2. XSS Sanitization

Input dangerous HTML → Output safe HTML with:
- Script tags removed
- Event handlers (onclick, onload, etc.) stripped
- Event handler URIs (javascript:) removed
- Safe for display without XSS risk

### 3. Risk Matrix

Scoring formula: **Likelihood × Impact = Risk Score**

| Score | Level | Controls |
|-------|-------|----------|
| 16–25 | High | CSP, MFA, segmentation, backups, monitoring |
| 9–15 | Medium | 2FA, least privilege, rate limiting |
| 1–8 | Low | Basic hygiene, regular updates |

### 4. WCAG Contrast Checker

- **Input:** Text color + Background color
- **Output:** Contrast ratio (e.g., 12.5:1)
- **Pass Criteria:**
  - ✅ **AAA:** ≥ 7:1
  - ✅ **AA:** ≥ 4.5:1
  - ❌ **Fail:** < 4.5:1

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 15+ | ✅ Full support |
| Mobile Safari (iOS) | 15+ | ✅ Full support |
| Chrome Mobile | Recent | ✅ Full support |
| Internet Explorer | Any | ❌ Not supported (Web Crypto API required) |

**Requirements:**
- ✅ JavaScript enabled
- ✅ Web Crypto API (for encryption features)
- ✅ Modern CSS support (Grid, Flexbox, Custom Properties)

---

## 💻 Technology Stack

### Languages & APIs

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure, accessibility (ARIA) |
| **CSS3** | Responsive design, animations, theming |
| **Vanilla JavaScript** | No frameworks, ~1500 lines of custom code |
| **Web Crypto API** | Client-side encryption & hashing |
| **Canvas API** | Starfield animation background |
| **IntersectionObserver** | Scroll-triggered animations |

### Key Implementations

| Feature | How It Works |
|---------|--------------|
| Password scoring | Algorithm: character sets (4 pts) + length (0-4 pts) - penalties |
| Phishing detection | Heuristic checks: subdomains, IP format, HTTPS, keywords |
| Theme toggle | CSS custom properties + localStorage |
| Encryption | PBKDF2 (120k iterations) + AES-GCM-256 |
| Contrast ratio | WCAG 2.1 luminance formula |
| Animations | CSS transitions/transforms + requestAnimationFrame |

### Performance Optimizations

- ✅ Single file = 1 HTTP request
- ✅ No render-blocking stylesheets or scripts
- ✅ CSS animations use GPU acceleration (transform, opacity)
- ✅ Starfield draws at 60 FPS with requestAnimationFrame
- ✅ Lazy-loaded elements reveal on scroll (IntersectionObserver)
- ✅ Efficient DOM updates with event delegation

### Security Features

- ✅ No external scripts or CDNs (zero third-party risk)
- ✅ All data stays on user's device (no server communication)
- ✅ XSS-safe input sanitization (removes dangerous tags)
- ✅ PBKDF2 with 120,000 iterations + random salt
- ✅ AES-GCM authenticated encryption (detects tampering)
- ✅ No sensitive data logged or transmitted

---

## 📖 How to Use Each Section

### 🎯 For Students / Learners

1. **Start with "Common Threats"** — Understand what dangers exist
2. **Study "Safer Practices"** — Learn protective habits
3. **Try "Interactive Lab"** — Test your knowledge with tools
4. **Explore "Technical Demos"** — See real security implementations
5. **Review "Summary"** — Print or save key takeaways

### 🎓 For Educators

1. Use the **"Threats" section** for threat awareness lectures
2. Demonstrate **password strength** with real examples
3. Show **phishing detection heuristics** with the URL analyzer
4. Teach **encryption concepts** with the AES-GCM demo
5. Discuss **data classification** with the gallery cards
6. Print the **summary** for handouts

### 🔒 For IT Professionals

- Reference **NIST, OWASP, ISO 27001** frameworks
- Study **STRIDE threat modeling** examples
- Explore **security headers** best practices
- Learn **WCAG accessibility** requirements
- Understand **AES-GCM encryption** implementation

---

## 🖨️ Printing & Export

### Print-Friendly Summary

1. Click **"Download Summary (Print)"** button
2. Opens print dialog (Ctrl+P / Cmd+P)
3. Save as PDF in your preferred location
4. Interactive elements are hidden in print view

### Quiz Result Export

1. Complete the safety quiz
2. Click **"Download Quiz Result"** button
3. Saves JSON file with:
   - Your answer choice
   - Correctness (true/false)
   - Time taken

### No Data Collection

- ✅ All data stays on your device
- ✅ No tracking or telemetry
- ✅ No cookies or server logging (except localStorage for theme preference)
- ✅ Completely private and offline

---

## ❓ FAQ

### Q: Do I need internet to use this?
**A:** No! The entire application works offline. Just open the HTML file locally.

### Q: Can I edit or customize the content?
**A:** Yes. It's a single HTML file—open in any text editor and modify as needed.

### Q: Is the encryption demo secure for real use?
**A:** The **AES-GCM implementation is cryptographically sound**, but it's designed for educational purposes. For production use, follow NIST guidelines and use established security libraries.

### Q: Why is the file so large (~300 KB)?
**A:** All CSS, JavaScript, and SVG graphics are embedded inline for portability. No external files needed.

### Q: Does this work on mobile devices?
**A:** Yes! It's fully responsive. Open in any mobile browser (Chrome, Safari, Firefox).

### Q: Can I use this for presentations?
**A:** Absolutely! Project it on a screen, or let students interact individually. The starfield background looks great on projectors.

### Q: How can I contribute or report issues?
**A:** Contact Coder's Creed or Government College for Girls, Nacholi with feedback.

---

## 📚 References & Standards

### Security Frameworks

- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [ISO/IEC 27001](https://www.iso.org/isoiec-27001-information-security-management.html)

### Educational Resources

- [Have I Been Pwned](https://haveibeenpwned.com) — K-Anonymity concept
- [Google Safety Center](https://safety.google) — Online safety tips
- [IC3 (FBI)](https://www.ic3.gov) — Internet Crime Complaint Center
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) — Web accessibility

### Tools & Libraries

- Custom JavaScript (no external frameworks)
- Web Crypto API (native browser API)
- Canvas 2D Context for graphics
- IntersectionObserver for animations

---

## 👥 Credits

**Developed by:** Coder's Creed  
**Institution:** Government College for Girls, Nacholi  
**Presentation Date:** 22 November 2025

### Acknowledgments

Thanks to all faculty advisors, peer reviewers, and participants who provided feedback and insights during development. This project aims to raise awareness about digital safety and foster a culture of cybersecurity in educational institutions.

### Disclaimer

This project is for **educational purposes only**. While best practices are presented, no system is 100% secure. Always stay informed and adopt a defense-in-depth mindset across all digital activities. The encryption demo illustrates concepts but is not recommended for protecting highly sensitive real-world data without additional security measures.

---

## 📄 License & Usage

This project is provided as an educational resource by Coder's Creed and Government College for Girls, Nacholi.

**You are free to:**
- Use for educational purposes
- Share with students and colleagues
- Modify and adapt for your institution
- Present and reference in academic settings

**Please acknowledge:**
- Original creators (Coder's Creed)
- Institution (Government College for Girls, Nacholi)
- Date (22 November 2025)

---

## 📞 Support

For questions or feedback:

- **Institution:** Government College for Girls, Nacholi
- **Organization:** Coder's Creed
- **Topic:** Digital Trust & Safety, Cybersecurity Education

Submit inquiries through your institution's official communication channels.

---

**Last Updated:** 22 November 2025  
**Version:** 1.0 (Standalone)  
**Status:** ✅ Complete & Production-Ready
