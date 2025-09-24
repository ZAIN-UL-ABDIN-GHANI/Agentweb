import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/agentslogo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Agents", path: "/agents" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex justify-center font-primary"
      style={{
        background:
          "linear-gradient(90deg, #0b0b0d 0%, rgba(23,18,12,0.85) 40%, rgba(20,18,15,0.95) 100%)",
      }}
    >
      <div className="w-[95%] max-w-7xl pt-4 ">
        <div className="rounded-full bg-[#1a1406] border border-gray-600/40 shadow-[0_0_20px_rgba(157,0,255,0.25)]">
          <div className="flex items-center justify-between px-6 py-2">
            {/* LEFT: Logo */}
            <div className="flex items-center">
              <img src={logo} alt="AgentAI" className="h-12 w-auto" />
            </div>

            {/* CENTER NAV (Desktop) */}
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-6  text-xs md:text-sm leading-[16px] md:leading-[18px] font-medium">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-white/90 hover:text-[#CE80FF] border-none transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT: Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/signup"
                className="text-xs md:text-sm leading-[16px] md:leading-[18px] font-semibold text-white hover:text-pur transition"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="px-5 py-2 text-xs md:text-sm leading-[16px] md:leading-[18px] font-semibold bg-white text-black rounded-full hover:bg-pur transition"
              >
                Login
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md text-white hover:bg-yellow-500/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        {isOpen && (
          <div className="mt-2 rounded-lg text-xs md:text-sm leading-[16px] md:leading-[18px] bg-[#1a1406] border border-pur shadow-lg p-4 md:hidden">
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 rounded-md text-white/90 hover:bg-yellow-500/10 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="text-center  text-xs md:text-sm leading-[16px] md:leading-[18px] font-semibold text-white hover:text-gray-400 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-center px-4 py-2 rounded-full bg-white text-black  text-xs md:text-sm leading-[16px] md:leading-[18px] font-semibold hover:bg-gray-400 transition"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
