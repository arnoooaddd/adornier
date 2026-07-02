import { motion } from "framer-motion";
import { ArrowDown, Languages, ArrowUpRight, ExternalLink, Linkedin, MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import arnoPhoto from "@/assets/arno-profile.jpg";
import agendacLogo from "@/assets/agendac-logo.webp";
import Network from "@/components/Network";

const getAgendacUrl = () => {
  if (typeof window === "undefined") return "https://agendac.fr/?lang=en-US&utm_source=adornier.com";
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  if (lang === "fr") return "https://agendac.fr/?lang=fr&utm_source=adornier.com";
  return "https://agendac.fr/?lang=en-US&utm_source=adornier.com";
};

const socials = [
  { type: "linkedin" as const, href: "https://www.linkedin.com/in/arno-ador/", label: "LinkedIn", Icon: Linkedin },
  { type: "instagram" as const, href: "https://www.instagram.com/arno.adornier/", label: "Instagram", Icon: Instagram },
  { type: "whatsapp" as const, href: "https://wa.me/33628545978", label: "WhatsApp", Icon: MessageCircle },
];

const ArnoHeader = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#founder", label: "Founder" },
    { href: "#venture", label: "Agendac" },
    { href: "#network", label: "Network" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-semibold tracking-wide">Arno Adornier</a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <div className="elfsight-app-6dd310c4-c5ea-42d4-9c2d-aa2455a13e4a" data-elfsight-app-lazy></div>
          </nav>
          <div className="md:hidden flex items-center gap-3">
            <div className="elfsight-app-6dd310c4-c5ea-42d4-9c2d-aa2455a13e4a" data-elfsight-app-lazy></div>
            <button className="text-foreground p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-6">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="nav-link text-lg" onClick={() => setOpen(false)}>
                    {l.label}
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

const Arno = () => {
  const agendacUrl = getAgendacUrl();
  return (
    <div className="min-h-screen">
      <ArnoHeader />
      <main>
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-navy pt-24 pb-16">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, hsl(42 70% 55% / 0.1) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, hsl(42 70% 55% / 0.05) 0%, transparent 50%)`,
              }}
            />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-6"
            >
              Welcome
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8"
            >
              Arno Adornier
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Founder of <span className="text-foreground font-medium">Agendac</span> — business development for home construction companies across Europe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
              className="mb-12 flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2 text-secondary">
                <Languages size={20} />
                <span className="text-sm font-medium tracking-[0.2em] uppercase">
                  Choose your language / Choisissez votre langue
                </span>
              </div>
              <div className="card-elevated px-6 py-4 scale-110 md:scale-125">
                <div className="elfsight-app-6dd310c4-c5ea-42d4-9c2d-aa2455a13e4a" data-elfsight-app-lazy></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#venture" className="btn-primary">Discover Agendac</a>
              <a href="#founder" className="btn-outline">About Arno</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown className="text-muted-foreground" size={24} />
            </motion.div>
          </motion.div>
        </section>

        {/* Founder */}
        <section id="founder" className="py-24 md:py-32 bg-navy-medium">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }} className="text-center mb-16"
            >
              <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">Founder</p>
              <h2 className="section-title mb-6">About Arno</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }} className="card-elevated p-8 md:p-12 text-center max-w-2xl mx-auto"
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-secondary/20" />
                <img
                  src={arnoPhoto}
                  alt="Arno Adornier"
                  className="w-full h-full rounded-full object-cover relative z-10 border-2 border-secondary/30"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-1">Arno Adornier</h3>
              <p className="text-xs text-muted-foreground/70 italic mb-2">Arnaud E. L. Utille Adornier</p>
              <p className="text-secondary font-medium mb-2">Founder</p>
              <p className="text-muted-foreground text-sm mb-4">
                Bachelor BA in Physics (USA) &amp; University Diploma in Applied Physics (France)
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a background in applied physics and international experience, Arno combines technical insight with strategic business development across diverse industries.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {socials.map((s) => (
                  <a
                    key={s.type}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary hover:text-gold-light transition-colors"
                  >
                    <s.Icon size={18} />
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Venture: Agendac only */}
        <section id="venture" className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }} className="text-center mb-16"
            >
              <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">The Business</p>
              <h2 className="section-title mb-6">Agendac</h2>
              <p className="section-subtitle mx-auto">
                Visit Agendac directly to learn more and get in touch.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-elevated p-6 md:p-12 group hover:border-secondary/40 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className="flex items-center gap-4 md:block">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={agendacLogo} alt="Agendac logo" className="w-full h-full object-cover" />
                      </div>
                      <a href={agendacUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group/link md:hidden">
                        <h3 className="font-display text-xl font-semibold group-hover/link:text-secondary transition-colors">
                          Agendac 🇫🇷
                        </h3>
                        <ArrowUpRight className="text-secondary" size={18} />
                      </a>
                    </div>
                    <div className="flex-1">
                      <a href={agendacUrl} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 mb-3 group/link">
                        <h3 className="font-display text-2xl md:text-3xl font-semibold group-hover/link:text-secondary transition-colors">
                          Agendac 🇫🇷
                        </h3>
                        <ArrowUpRight className="text-secondary" size={20} />
                      </a>
                      <p className="text-secondary font-medium mb-3 md:mb-4 text-sm md:text-base">
                        Business Development for Home Construction Companies
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                        Agendac is a specialized business development firm, established in France and operating across Europe. We help home construction companies grow their client base and streamline their commercial operations across France, Switzerland, Belgium, and Luxembourg.
                      </p>
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                        {["France", "Switzerland", "Belgium", "Luxembourg"].map((location) => (
                          <span key={location} className="px-2 md:px-3 py-1 text-xs md:text-sm bg-navy-light rounded-full text-muted-foreground">
                            {location}
                          </span>
                        ))}
                      </div>
                      <a href={agendacUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                        <span>Visit agendac.fr</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Network />

        {/* Contact */}
        <section id="contact" className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }} className="text-center mb-16"
            >
              <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">Get in Touch</p>
              <h2 className="section-title mb-6">Let's Connect</h2>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }} className="card-elevated p-8 md:p-12"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:contact@adornier.net" className="text-muted-foreground hover:text-secondary transition-colors">
                        contact@adornier.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">WhatsApp</p>
                      <a href="https://wa.me/33628545978" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                        +33 6 28 54 59 78
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Locations</p>
                      <p className="text-muted-foreground">Annecy, FR · Lausanne, CH · Tampa, FL</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Connect</p>
                      <div className="flex flex-col gap-1">
                        <a href="https://www.linkedin.com/in/arno-ador/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                          LinkedIn
                        </a>
                        <a href="https://www.instagram.com/arno.adornier/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-display text-xl font-semibold">Arno Adornier</div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Adornier. All rights reserved.
            </p>
            <a
              href="https://www.linkedin.com/in/arno-ador/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Arno;
