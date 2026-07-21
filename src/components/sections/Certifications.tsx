// import SectionTitle from "../common/SectionTitle";
// import CertificationCard from "../common/CertificationCard";
// import { certifications } from "../../data/certifications";

// function Certifications() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-20">

//       <SectionTitle
//         title="Certifications"
//         subtitle="Salesforce Certifications"
//       />

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//         {certifications.map((cert) => (

//           <CertificationCard
//             key={cert}
//             title={cert}
//           />

//         ))}

//       </div>

//     </section>
//   );
// }

// export default Certifications;

//improved css
import CertificationCard from "../common/CertificationCard";
import { certifications } from "../../data/certifications";

// const certifications = [
//   "Platform Developer II",
//   "JavaScript Developer I",
//   "OmniStudio Developer",
//   "Industries CPQ Developer",
//   "Industries CPQ",
//   "Platform Developer I",
//   "Agentforce Specialist",
//   "AI Associate",
//   "Data Cloud Consultant",
//   "Certified Associate",
// ];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Credentials
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Salesforce Certifications
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Salesforce certifications demonstrating expertise across
            development, architecture, Industries, AI, and platform solutions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard
                key={cert.title}
                title={cert.title}
                color={cert.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}