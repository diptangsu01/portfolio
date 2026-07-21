type BadgeProps = {
  text: string;
};

function Badge({ text }: BadgeProps) {
  return (
    <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-300 transition-all duration-300
hover:-translate-y-1
hover:border-sky-500
hover:bg-sky-500/10">
      {text}
    </span>
  );
}

export default Badge;