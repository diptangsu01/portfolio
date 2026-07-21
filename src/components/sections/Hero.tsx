import Button from "../common/Button";
import Badge from "../common/Badge";
import TypingText from "../common/TypingText";

import { profile } from "../../data/profile";
import { skills } from "../../data/skills";

function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div className="flex flex-col justify-center">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Open to Salesforce Opportunities
        </div>
          <p className="flex items-center gap-2 text-lg font-medium tracking-wide text-sky-400">
              👋 {profile.greeting}
          </p>

          <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl lg:text-[5.8rem]">
            {profile.name}
          </h1>

          <div className="mt-7 h-12">
            <TypingText />
          </div>

          {/* <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            {profile.description}
          </p> */}
          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-400">
            {profile.description}
          </p>

          {/* Quick Highlights */}

          <div className="mt-8 flex flex-wrap gap-3 ">

            <Badge text="7+ Years Experience" />
            <Badge text="9 Salesforce Certifications" />
            <Badge text="Enterprise CRM" />
            <Badge text="Agile Delivery" />

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Button text="View Projects" />

            <Button
              text="Download Resume"
              variant="secondary"
            />

          </div>
          <div className="mt-8 flex items-center gap-6">

              <a href="https://linkedin.com/in/diptangsu-sasmal" className="text-slate-400 hover:text-sky-400 transition">
                  LinkedIn
              </a>

              <a href="https://github.com/diptangsu01" className="text-slate-400 hover:text-sky-400 transition">
                  GitHub
              </a>

              <a href="#" className="text-slate-400 hover:text-sky-400 transition">
                  Trailhead
              </a>

          </div>

        </div>
        

        {/* RIGHT */}
        {/* <div className="flex items-start pt-10"> */}
        <div className="flex min-h-screen items-center py-12 lg:py-20">

          {/* <div className="w-full rounded-[32px] border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-sky-950/20"> */}
          <div className="w-full rounded-[32px] border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-sky-950/20 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-500/5 blur-3xl"></div>
            <h2 className="text-4xl font-bold tracking-tight">
              Core Expertise
            </h2>

            <p className="mt-3 text-slate-400">
              Helping organizations build scalable Salesforce solutions through custom development, platform automation, integrations, and modern Lightning experiences.
            </p>

            <div className="mt-8 space-y-8">

              {skills.map((skill) => (

                <div key={skill.category}>

                  <h3 className="mb-3 text-lg font-semibold text-slate-200">
                    {skill.category}
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {skill.items.map((item) => (

                      <Badge
                        key={item}
                        text={item}
                      />

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
      
    </section>
    
  );
}

export default Hero;