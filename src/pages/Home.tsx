import Hero from '../components/Hero';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Education from '../components/Education';
import StrengthsWeaknesses from '../components/StrengthsWeaknesses';
import SkillsTicker from '../components/SkillsTicker';
import Blog from '../components/Blog';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AgentFloatingEntry from '../components/AgentFloatingEntry';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Education />
        <StrengthsWeaknesses />
        <SkillsTicker />
        <Blog />
      </main>
      <Footer />
      <AgentFloatingEntry />
    </div>
  );
}
