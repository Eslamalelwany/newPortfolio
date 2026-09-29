export default function ProjectCard({ title, description, tags, live, repo }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tags">
        {tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <div className="project-actions">
        <a
          className={`btn btn-solid ${live ? '' : 'disabled'}`}
          href={live || undefined}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!live}
        >
          Live demo
        </a>
        <a
          className={`btn btn-outline ${repo ? '' : 'disabled'}`}
          href={repo || undefined}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!repo}
        >
          Repository
        </a>
      </div>
    </article>
  );
}
