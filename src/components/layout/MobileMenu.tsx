import { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import NavLink from "./NavLink";
import { navigation } from "../../data/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Side Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[80%] max-w-sm bg-slate-950 border-l border-slate-800 shadow-2xl
        transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 p-6">

          <span className="text-lg font-semibold text-white">
            Menu
          </span>

          <button
            onClick={onClose}
            aria-label="Close Menu"
          >
            <XMarkIcon className="h-7 w-7 text-slate-300 hover:text-white transition" />
          </button>

        </div>

        {/* Links */}

        <nav className="mt-8 flex flex-col">

          {navigation.map((item) => (

            <NavLink
              key={item.name}
              href={item.href}
              onClick={onClose}
            >
              <div className="border-b border-slate-800 px-6 py-5 text-lg">
                {item.name}
              </div>
            </NavLink>

          ))}

        </nav>

        {/* Resume */}

        <div className="absolute bottom-8 left-6 right-6">

          <button className="w-full rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-400">
            Download Resume
          </button>

        </div>

      </aside>
    </>
  );
}

export default MobileMenu;