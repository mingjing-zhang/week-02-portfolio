type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  href,
}: ProjectCardProps) {
  const card = (
    <article
      className={
        href
          ? "h-full rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400"
          : "h-full rounded-2xl border border-zinc-200 p-6"
      }
    >
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {card}
      </a>
    );
  }

  return card;
}
