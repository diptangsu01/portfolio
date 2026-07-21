import Badge from "./Badge";

type SkillCategoryProps = {
  category: string;
  items: string[];
};

function SkillCategory({
  category,
  items,
}: SkillCategoryProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-6 text-2xl font-bold">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;