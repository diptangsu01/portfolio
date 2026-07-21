import { TypeAnimation } from "react-type-animation";

function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Salesforce Developer",
        2000,
        "Salesforce Consultant",
        2000,
        "Technical Lead",
        2000,
        "Future Solution Architect",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-2xl font-semibold text-slate-300"
    />
  );
}

export default TypingText;