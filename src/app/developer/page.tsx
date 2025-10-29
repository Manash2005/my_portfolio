import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CodingProfilesSection from '@/components/sections/CodingProfilesSection';
import ScrollProgress from '@/components/ScrollProgress';
import MiniProjectsSection from '@/components/sections/MiniProjectsSection';

export default function DeveloperPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <CodingProfilesSection />
        <ProjectsSection />
        <MiniProjectsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
