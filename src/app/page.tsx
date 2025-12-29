import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import WorkExperience from '@/components/sections/WorkExperience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Hero />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
