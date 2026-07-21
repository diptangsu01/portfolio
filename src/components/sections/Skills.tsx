import SectionTitle from "../common/SectionTitle";
import SkillCategory from "../common/SkillCategory";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        title="Core Expertise"
        subtitle="Technologies I work with"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCategory
            key={skill.category}
            category={skill.category}
            items={skill.items}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;