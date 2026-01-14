import { motion } from "framer-motion";
import { Building2, ArrowUpRight } from "lucide-react";

const Ventures = () => {
  return (
    <section id="ventures" className="py-24 md:py-32 bg-navy-medium">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Ventures
          </p>
          <h2 className="section-title mb-6">Our Ventures</h2>
          <p className="section-subtitle mx-auto">
            Alongside our consulting work, we're actively building businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-elevated p-8 md:p-12 group hover:border-secondary/40 transition-all duration-500">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors duration-300">
                <Building2 className="text-secondary" size={32} />
              </div>
              <div className="flex-1">
                <a 
                  href="https://agendac.fr?utm_source=adornier.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mb-3 group/link"
                >
                  <h3 className="font-display text-2xl md:text-3xl font-semibold group-hover/link:text-secondary transition-colors">Agendac</h3>
                  <ArrowUpRight className="text-secondary" size={20} />
                </a>
                <p className="text-secondary font-medium mb-4">
                  Business Development for Home Construction
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Agendac is our specialized business development firm dedicated to home construction companies 
                  in francophone European countries. We help builders grow their client base and streamline 
                  their commercial operations across France, Switzerland, Belgium, and Luxembourg.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 text-sm bg-navy-light rounded-full text-muted-foreground">
                    France
                  </span>
                  <span className="px-3 py-1 text-sm bg-navy-light rounded-full text-muted-foreground">
                    Switzerland
                  </span>
                  <span className="px-3 py-1 text-sm bg-navy-light rounded-full text-muted-foreground">
                    Belgium
                  </span>
                  <span className="px-3 py-1 text-sm bg-navy-light rounded-full text-muted-foreground">
                    Luxembourg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ventures;
