import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

const baseLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = useMemo(
    () => [
      { to: "/roadmaps", label: "Roadmaps" },
      { to: "/marketplace", label: "Marketplace" },
      { to: "/auth/login", label: "Login" },
    ],
    []
  );

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-lg">
          NEXO
        </NavLink>

        <button className="md:hidden text-sm font-semibold" onClick={toggleMobile}>
          Menu
        </button>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={baseLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/auth/register"
            className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
          >
            Registrarse
          </NavLink>
        </nav>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t bg-white px-4 py-3 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={baseLinkClass} onClick={() => setMobileOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/auth/register"
            className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white text-center"
            onClick={() => setMobileOpen(false)}
          >
            Registrarse
          </NavLink>
        </nav>
      )}
    </header>
  );
}
