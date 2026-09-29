
export default function Marquee() {
  const items = ['React', 'Redux', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Express', 'REST APIs', 'Git', 'Figma'];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}