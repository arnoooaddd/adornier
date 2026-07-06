import { motion } from "framer-motion";
import { ArrowDown, Languages } from "lucide-react";

const Hero = () => {
  return (
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8"
        >
          Adornier
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
        >
          The gateway to our two businesses — founded and led by{" "}
          <span className="text-foreground font-medium">Arno Adornier</span>, with a team of 15 across 4 continents.

        </motion.p>

        {/* Big Language Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#ventures" className="btn-primary">
            Discover our businesses
          </a>
          <a href="#founders" className="btn-outline">
            Meet the founders
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
