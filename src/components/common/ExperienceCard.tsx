type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

function ExperienceCard({
  company,
  role,
  duration,
  description,
}: ExperienceCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{company}</h3>

        <span className="text-slate-400">{duration}</span>
      </div>

      <h4 className="mt-2 text-sky-400 font-semibold">
        {role}
      </h4>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default ExperienceCard;