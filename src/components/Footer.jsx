import Reveal from './Reveal.jsx';
import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <Reveal>
          <h2 className="footer-title">Have a role or project in mind?</h2>
          <p className="footer-sub">I'm open to junior front-end and full-stack roles. Send me a message.</p>
        </Reveal>
        <Reveal delay={150}>
          <div className="footer-actions">
            <a className="btn btn-invert" href={`mailto:${profile.email}`}>Contact me</a>
            <a className="btn btn-invert-outline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-invert-outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Reveal>
        <p className="copyright">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
