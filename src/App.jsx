import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Marquee from './components/Marquee.jsx'


export default function App() {
  return (
    <main>
      <Marquee/>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
