import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-slate-700 px-4 py-2 text-sm"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;