# Portfolio - Full Stack Developer

A modern, visually stunning 3D-inspired personal portfolio built with Next.js 14, showcasing skills in full stack development, mobile app development, and AI.

## Features

- **Dark Theme**: Midnight blue and black theme with neon blue accents
- **Glassmorphism**: Beautiful glass-like cards with backdrop blur effects
- **3D Effects**: Subtle 3D depth using perspective, parallax, and Three.js scenes
- **Smooth Animations**: Framer Motion powered micro-interactions and transitions
- **Responsive Design**: Optimized for all devices
- **Professional Sections**:
  - Hero with animated headline and rotating roles
  - About section with professional bio
  - Skills categorized by expertise areas
  - Work experience timeline
  - Projects showcase with modal details
  - Contact form with validation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D**: @react-three/fiber + drei
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── GlassCard.tsx
│   ├── NeonButton.tsx
│   ├── SectionHeading.tsx
│   ├── AnimatedDivider.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── WorkExperience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
```

## Customization

- Update personal information in the respective section components
- Replace placeholder images in `public/` with your actual images
- Modify colors in `globals.css` if needed
- Add more projects to the `projects` array in `Projects.tsx`

## Deployment

Deploy to Vercel, Netlify, or any static hosting platform:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).
"# portfolio" 
