import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProjectsGallery from '@/components/sections/ProjectsGallery';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
      <main className="min-h-screen">
        {/* Hero Section avec 3D */}
        <Hero />

        {/* Section À Propos */}
        <About />

        {/* Section Projets */}
        <ProjectsGallery />

        {/* Section Compétences */}
        <Skills />

        {/* Section Expériences */}
        <Experience />

        {/* Section Contact */}
        <Contact />
      </main>
  );
}