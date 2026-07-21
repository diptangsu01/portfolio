import ThemeToggle from "../common/ThemeToggle";
function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          Diptangsu
        </h1>

        <nav>
          <ul className="flex gap-8 text-slate-300">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">Experience</li>
            <li className="cursor-pointer hover:text-white">Projects</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;