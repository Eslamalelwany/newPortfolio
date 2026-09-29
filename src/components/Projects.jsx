import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal><h2 className="section-title">Projects</h2></Reveal>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} dir={i % 2 === 0 ? 'left' : 'right'} delay={(i % 2) * 120}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
