import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Navbar } from "./instructions";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navbar = Navbar();

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu after clicking
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-3 bg-white/70 backdrop-blur-md shadow-md">
        {/* Logo */}
        <h1 className="font-bold text-xl text-black tracking-widest cursor-pointer">
          <span className="text-blue-400">LUCKY</span>PICK
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navbar.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full text-slate-700 hover:scale-110 transition cursor-pointer"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Animated Mobile Menu */}
        {menuOpen && (
          <div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            id="mobile-menu"
            className="absolute top-full left-0 w-full bg-slate-200 border-t border-white flex flex-col items-left py-6 space-y-5 md:hidden pl-5"
          >
            {navbar.map((item, index) => (
              <div
                key={index}
                onClick={handleLinkClick} //  closes menu after click
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </nav>
    </section>
  );
}
