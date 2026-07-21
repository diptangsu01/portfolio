type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-4 text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;