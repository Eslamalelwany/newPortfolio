import { useState } from 'react';
import { profile } from '../data.js';

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const [videoOk, setVideoOk] = useState(true);
  const words = profile.name.split(' ');
  const offsets = words.map((_, w) => words.slice(0, w).join('').length);
  // const initials = profile.name.split(' ').map((w) => w[0]).join('');

  return (
    <section className="hero" id="home">
      {videoOk && (
      <video
  className="hero-video"
  src='/public/13506132_1920_1080_30fps.mp4'
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-hidden="true"
  onError={(e) => {
    console.log("Video Error:", e.target.error) // ← شوف الـ error إيه
    setVideoOk(false)
  }}
>
</video>
        
      )}
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-role fade-in" style={{ '--d': '100ms' }}>{profile.title}</p>
          <h1 className="hero-name" aria-label={profile.name}>
            {words.map((word, w) => (
              <span key={w} className="word" aria-hidden="true">
                {word.split('').map((ch, i) => (
                  <span key={i} className="letter" style={{ '--i': offsets[w] + i }}>{ch}</span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-summary fade-in" style={{ '--d': '900ms' }}>{profile.summary}</p>
          <div className="hero-actions fade-in" style={{ '--d': '1100ms' }}>
            <a className="btn btn-solid" href="#projects">See my projects</a>
            <a className="btn btn-outline" href="#contact">Contact me</a>
          </div>
        </div>

        <div className="hero-photo fade-in" style={{ '--d': '400ms' }}>
          {imgOk ? (
            <img src={profile.photo} alt={profile.name} onError={() => setImgOk(false)} />
          ) : (
            <div className="photo-fallback"><img src="/photo_2026-09-29_04-16-47.jpg" alt="" /></div>
          )}
        </div>
      </div>
    </section>
  );
}
