import SectionTitle from "../common/SectionTitle";
import ExperienceCard from "../common/ExperienceCard";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        title="Career Journey"
        subtitle="My professional journey"
      />

      <div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company}
            company={experience.company}
            role={experience.role}
            duration={experience.duration}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;