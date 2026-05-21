import Hero from '../components/Hero';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Education from '../components/Education';
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
        <Portfolio />
        <Testimonials />
        <Education />
        <Blog />
        <SkillsTicker />
      </main>
      <Footer />
    </div>
  );
}
