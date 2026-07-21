type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition";

  const primary =
    "bg-sky-500 hover:bg-sky-400 text-white hover:scale-[1.03]";

  const secondary =
    "border border-slate-700 hover:border-sky-500 hover:border-sky-500";

  return (
    <button
      className={`${base} ${
        variant === "primary"
          ? primary
          : secondary
      }`}
    >
      {text}
    </button>
  );
}

export default Button;