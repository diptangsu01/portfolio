import SectionTitle from "../common/SectionTitle";

function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        title="Why Salesforce?"
        subtitle="Who I am"
      />

      <div className="mx-auto max-w-3xl text-center text-lg leading-8 text-slate-400">
        <p>
          I'm a Salesforce Developer and Consultant with
          over 7 years of experience delivering enterprise
          CRM solutions using Apex, Lightning Web Components,
          OmniStudio, Experience Cloud and integrations.
        </p>
      </div>
    </section>
  );
}

export default About;