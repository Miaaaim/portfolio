import Hero from '../components/Hero';
import Services from '../components/Services';
import Experience from '../components/Experience';
import HireMe from '../components/HireMe';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Education from '../components/Education';
import Contact from '../components/Contact';
import SkillsTicker from '../components/SkillsTicker';
import Blog from '../components/Blog';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />
        <HireMe />
        <Portfolio />
        <Testimonials />
        <Education />
        <Blog />
        <SkillsTicker />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
