import useReveal from '../hooks/useReveal.js';

// Wrap anything to animate it in on scroll. dir: 'up' | 'left' | 'right' | 'zoom'
export default function Reveal({ children, dir = 'up', delay = 0, className = '' }) {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${dir} ${shown ? 'in' : ''} ${className}`}
      style={{ '--d': `${delay}ms` }}
    >
      {children}
    </div>
  );
}
