import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import BlogSection from '@/components/blog-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  useEffect(() => {
    // Add any page initialization logic here
    document.title = 'Alex Chen - Full Stack Developer Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
