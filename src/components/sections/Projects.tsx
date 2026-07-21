import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <SectionTitle
        title="Enterprise Solutions"
        subtitle="Some of the Salesforce solutions I've delivered"
      />

      <div className="grid gap-6 lg:grid-cols-2">

        {projects.map((project) => (

          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />

        ))}

      </div>

    </section>
  );
}

export default Projects;