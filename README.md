# Bilal Azhar Portfolio

A modern React portfolio website for presenting professional experience, technical skills, selected projects, education, resume, and contact links.

![Portfolio hero preview](src/assets/bilal-azhar-hero.png)

## What Is Built

- Responsive portfolio homepage
- Animated hero section with profile image
- Experience timeline
- Skills section
- Project showcase
- Education section
- Resume download link
- Contact and social links

## Tech Stack

- React
- Create React App
- CSS
- Framer Motion
- React Icons
- Lucide React

## Project Preview

### Ask Raghad AI

![Ask Raghad AI](src/assets/ask-raghad-ai.png)

### Wise Wheels

![Wise Wheels](src/assets/wise-wheels.png)

### EasyBMV

![EasyBMV](src/assets/easy-bmv-how-it-works.png)

### E-commerce

![E-commerce project](src/assets/eswar-spices3.jpg)

### Portfolio Website

![Portfolio website](src/assets/websiteImg.png)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the app in your browser:

```text
http://localhost:3000
```

If port `3000` is already busy, run it on another port:

```powershell
$env:PORT=3001; npm start
```

Then open:

```text
http://localhost:3001
```

## Production Build

Create a production build:

```bash
npm run build
```

The optimized output will be generated in the `build` folder.

## Deploy On Vercel

1. Push this project to GitHub.
2. Import the GitHub repository into Vercel.
3. Use these settings:

```text
Framework Preset: Create React App
Install Command: npm install
Build Command: npm run build
Output Directory: build
```

Vercel will install dependencies automatically, so do not upload `node_modules`.

## Git Ignore Notes

The project already ignores local-only files and folders such as:

```gitignore
/node_modules
/build
.env
.vercel/
.idea/
.agent/
.slingshot/
.edge-pdf-profile/
npm-start*.log
```

## Available Scripts

```bash
npm start
```

Runs the app in development mode.

```bash
npm run build
```

Builds the app for production.

```bash
npm test
```

Runs the test watcher.
