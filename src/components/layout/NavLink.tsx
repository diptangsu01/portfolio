import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function NavLink({
  href,
  children,
  active = false,
  onClick,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
    //   className={`relative transition-colors duration-300 hover:text-sky-400 ${
    //     active
    //       ? "text-sky-400"
    //       : "text-slate-300"
    //   }`}
    className="
        block
        text-slate-300
        transition-all
        duration-300
        hover:text-sky-400
    "
    >
      {children}

      {active && (
        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-sky-400" />
      )}
    </a>
  );
}

export default NavLink;