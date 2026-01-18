import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import taohLogo from "@/assets/taoh-logo.webp";
import agendacLogo from "@/assets/agendac-logo.webp";

const ventures = [
  {
    name: "The Alpha Omega Hub",
    url: "https://thealphaomegahub.com/?utm_source=adornier.com",
    tagline: "Growth Accelerator for Home-Services Businesses",
    description: "The Alpha Omega Hub is a growth accelerator dedicated to home-services businesses in the United States. We help contractors in industries such as HVAC, solar, roofing, and home improvement strengthen their digital presence, generate qualified leads, and build scalable marketing and communication systems that support long-term growth.",
    locations: ["United States"],
    logo: taohLogo,
  },
  {
    name: "Agendac",
    url: "https://agendac.fr?utm_source=adornier.com",
    tagline: "Business Development for Home Construction Businesses",
    description: "Agendac is our specialized business development firm dedicated to home construction companies in francophone European countries. We help builders grow their client base and streamline their commercial operations across France, Switzerland, Belgium, and Luxembourg.",
    locations: ["France", "Switzerland", "Belgium", "Luxembourg"],
    logo: agendacLogo,
  },
];

const Ventures = () => {
  return (
    <section id="ventures" className="py-24 md:py-32 bg-navy-medium" aria-label="Our Ventures">
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

        <div className="max-w-3xl mx-auto space-y-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="card-elevated p-6 md:p-12 group hover:border-secondary/40 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex items-center gap-4 md:block">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={venture.logo} alt={`${venture.name} logo`} className="w-full h-full object-cover" />
                    </div>
                    <a 
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group/link md:hidden"
                    >
                      <h3 className="font-display text-xl font-semibold group-hover/link:text-secondary transition-colors">{venture.name}</h3>
                      <ArrowUpRight className="text-secondary" size={18} />
                    </a>
                  </div>
                  <div className="flex-1">
                    <a 
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:flex items-center gap-2 mb-3 group/link"
                    >
                      <h3 className="font-display text-2xl md:text-3xl font-semibold group-hover/link:text-secondary transition-colors">{venture.name}</h3>
                      <ArrowUpRight className="text-secondary" size={20} />
                    </a>
                    <p className="text-secondary font-medium mb-3 md:mb-4 text-sm md:text-base">
                      {venture.tagline}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {venture.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {venture.locations.map((location) => (
                        <span key={location} className="px-2 md:px-3 py-1 text-xs md:text-sm bg-navy-light rounded-full text-muted-foreground">
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
