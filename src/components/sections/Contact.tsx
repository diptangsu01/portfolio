import SectionTitle from "../common/SectionTitle";
import ContactCard from "../common/ContactCard";
import { socials } from "../../data/socials";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">

      <SectionTitle
        title="Let's Connect"
        subtitle="Open to opportunities and collaborations"
      />

      <div className="grid gap-6 md:grid-cols-3">

        {socials.map((item) => (

          <ContactCard
                key={item.title}
                title={item.title}
                value={item.value}
                url={item.url}
            />

        ))}

      </div>

    </section>
  );
}

export default Contact;