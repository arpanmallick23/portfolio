# Arpan Mallick – Developer Portfolio

A modern, high-performance personal developer portfolio built for **Arpan Mallick** targeting Software Development Engineer (SDE) internships and full-stack developer roles.

---

## 🚀 Tech Stack

- **Framework**: [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom charcoal theme `#09090B` & violet accents)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & JetBrains Mono

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   └── Arpan-Mallick-Resume.pdf    # Direct downloadable resume PDF
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx              # Responsive navigation with mobile menu
│   │   ├── Hero.jsx                # Introduction, CTAs & code terminal visual
│   │   ├── About.jsx               # Narrative, B.Tech CSE details & CGPA card
│   │   ├── Skills.jsx              # Categorized tech skills grid
│   │   ├── Experience.jsx          # Professional timeline (Beas Consultancy)
│   │   ├── Projects.jsx            # Filterable projects (Personal & Company work)
│   │   ├── Achievements.jsx        # Academic and competition distinctions
│   │   ├── Contact.jsx             # Contact details, quick-copy & message form
│   │   └── Footer.jsx              # Footer with socials and back-to-top
│   ├── data/
│   │   └── portfolioData.js        # Single source of truth for portfolio data
│   ├── App.jsx
│   ├── index.css                   # Custom scrollbars, glassmorphism & gradients
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```
