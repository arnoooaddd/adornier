import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-navy"
      aria-labelledby="hero-heading"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(42 70% 55% / 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, hsl(42 70% 55% / 0.05) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Strategic Advisory
          </p>
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8"
        >
          Adornier
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Connecting visionary founders with capital, markets, and opportunities across the United States, Europe, and the Middle East.
        </motion.p>

        {/* Hidden SEO content */}
        <p className="sr-only">
          Adornier is a strategic advisory firm founded by Arno Adornier (also known as Arnaud Utille, 
          Arnaud Emmanuel Lucien Utille Adornier) and Kerim Jakupovic. We specialize in fundraising 
          consulting from seed to Series A, business development, client acquisition, and strategic 
          introductions. Our network spans the United States, Switzerland, France, the Balkans, and 
          the Middle East, with expertise in finance, patents, innovation, marketing, and construction.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="btn-primary">
            Start a Conversation
          </a>
          <a href="#services" className="btn-outline">
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
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