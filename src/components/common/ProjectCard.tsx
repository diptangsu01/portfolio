import Badge from "./Badge";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500">

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-400 leading-7">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            text={tech}
          />
        ))}
      </div>

    </div>
  );
}

export default ProjectCard;