import Reveal from './Reveal.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal><h2 className="section-title">Skills</h2></Reveal>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <Reveal key={s.group} dir="zoom" delay={i * 100}>
              <div className="skill-card">
                <h3>{s.group}</h3>
                <ul>
                  {s.items.map((item) => (
                    <li key={item} className="chip">{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
