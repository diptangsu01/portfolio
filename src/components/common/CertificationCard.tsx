// type CertificationCardProps = {
//   title: string;
// };

// function CertificationCard({
//   title,
// }: CertificationCardProps) {
//   return (
//     <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center transition hover:border-sky-500">

//       <h3 className="font-semibold">
//         {title}
//       </h3>

//     </div>
//   );
// }

// export default CertificationCard;

//improved below with CSS and looks
import { Award, BadgeCheck } from "lucide-react";

interface CertificationCardProps {
    title: string;
    color: string;
}

export default function CertificationCard({
  title,
  color,
}: CertificationCardProps) {
  const colorStyles = {
    cyan: {
        iconBg: "bg-cyan-500/10",
        iconBorder: "border-cyan-400/30",
        iconText: "text-cyan-400",
        cardGlow: "hover:border-cyan-400/70 hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)]",
    },

    yellow: {
        iconBg: "bg-yellow-500/10",
        iconBorder: "border-yellow-400/30",
        iconText: "text-yellow-400",
        cardGlow: "hover:border-yellow-400/70 hover:shadow-[0_15px_40px_rgba(234,179,8,0.25)]",
    },

    purple: {
        iconBg: "bg-purple-500/10",
        iconBorder: "border-purple-400/30",
        iconText: "text-purple-400",
        cardGlow: "hover:border-purple-400/70 hover:shadow-[0_15px_40px_rgba(168,85,247,0.25)]",
    },

    orange: {
        iconBg: "bg-orange-500/10",
        iconBorder: "border-orange-400/30",
        iconText: "text-orange-400",
        cardGlow: "hover:border-orange-400/70 hover:shadow-[0_15px_40px_rgba(249,115,22,0.25)]",
    },

    emerald: {
        iconBg: "bg-emerald-500/10",
        iconBorder: "border-emerald-400/30",
        iconText: "text-emerald-400",
        cardGlow: "hover:border-emerald-400/70 hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)]",
    },

    blue: {
        iconBg: "bg-blue-500/10",
        iconBorder: "border-blue-400/30",
        iconText: "text-blue-400",
        cardGlow: "hover:border-blue-400/70 hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]",
    },
};

const styles = colorStyles[color as keyof typeof colorStyles] || colorStyles.cyan;
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-700/60
        bg-slate-900/70
        backdrop-blur
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:rotate-[1.5deg]
        ${styles.cardGlow}
      `}
    >
      {/* Shine Effect */}
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />

      <div className="relative z-10 flex items-center gap-4">
        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-cyan-500/10
            border
            border-cyan-400/30
            text-cyan-400
            transition
            group-hover:scale-110
            group-hover:rotate-12
            ${styles.iconBg}
            ${styles.iconBorder}
            ${styles.iconText}
          `}
        >
          <Award size={28} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white leading-snug">
            {title}
          </h3>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 border border-emerald-400/30">
            <BadgeCheck size={15} className="text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300">
              Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}