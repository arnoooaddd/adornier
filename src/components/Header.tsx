import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#founders", label: "Founders" },
    { href: "#network", label: "Network" },
    { href: "#ventures", label: "Ventures" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-semibold tracking-wide">
            Adornier
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            {/* Elfsight Website Translator Widget */}
            <div className="elfsight-app-6dd310c4-c5ea-42d4-9c2d-aa2455a13e4a" data-elfsight-app-lazy></div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            {/* Elfsight Website Translator Widget - Mobile */}
            <div className="elfsight-app-6dd310c4-c5ea-42d4-9c2d-aa2455a13e4a" data-elfsight-app-lazy></div>
            <button
              className="text-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
