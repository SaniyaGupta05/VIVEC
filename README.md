# VIVEC

A modern, high-performance, and visually stunning web application for the VIVEC educational platform. Built using React, Vite, and custom styled-component aesthetics using vanilla CSS.

## 🚀 Features

- **Dynamic Hero Slider**: Fully interactive and animated promotional banner section.
- **Top Utility & Navbar**: Premium navigational elements with multi-device support.
- **Course & Feature Grids**: Elegant grid-based sections displaying courses and core offerings.
- **Why Choose Us & Study Modes**: Visual guides showcasing features and flexible learning models.
- **Success Stories & Testimonials**: Slider and grid components presenting student achievements.
- **Interactive Call-To-Action (CTA) Blocks**: Seamless lead-generation sections.
- **Partners Slider**: Dynamic display of collaborating universities and brands.
- **Modern Responsive Design**: Fully responsive layout tailored for desktops, tablets, and mobile devices.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/) (v8)
- **Styling**: Vanilla CSS (modular and optimized custom design system in `src/index.css`)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (comes packaged with Node.js)

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/SaniyaGupta05/VIVEC.git
   cd VIVEC
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development

To start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Once started, open [http://localhost:5173](http://localhost:5173) (or the port specified in terminal) in your browser.

### Build and Production

To build the application for production:
```bash
npm run build
```
This generates optimized static files in the `/dist` directory.

To preview the production build locally:
```bash
npm run preview
```

### Code Linting

To check the code for syntax or styling issues:
```bash
npm run lint
```

---

## 📂 Project Structure

```text
Vivec_website/
├── public/              # Static assets (favicons, public images)
├── src/
│   ├── assets/          # Project assets (images, logos)
│   ├── components/      # Reusable UI components
│   │   ├── AboutSection.jsx
│   │   ├── CTABlocks.jsx
│   │   ├── CourseGrid.jsx
│   │   ├── FeatureGrid.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── Navbar.jsx
│   │   ├── Partners.jsx
│   │   ├── StudyModes.jsx
│   │   ├── SuccessStories.jsx
│   │   ├── Testimonials.jsx
│   │   ├── TopUtilityBar.jsx
│   │   └── WhyChooseUs.jsx
│   ├── App.jsx          # Main App entry point
│   ├── App.css          # App-specific styling
│   ├── index.css        # Core global styles & design system
│   └── main.jsx         # ReactDOM render entry point
├── eslint.config.js     # ESLint configuration
├── vite.config.js       # Vite configuration
└── package.json         # Scripts and project dependencies
```
