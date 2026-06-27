import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import taohLogo from "@/assets/taoh-logo.webp";
import agendacLogo from "@/assets/agendac-logo.webp";

const getAgendacUrl = () => {
  if (typeof window === "undefined") return "https://agendac.fr/?lang=en-US&utm_source=adornier.com";
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  if (lang === "fr") {
    return "https://agendac.fr/?lang=fr&utm_source=adornier.com";
  }
  return "https://agendac.fr/?lang=en-US&utm_source=adornier.com";
};

const ventures = [
  {
    name: "The Alpha Omega Hub",
    domain: "thealphaomegahub.com",
    url: "https://thealphaomegahub.com/?utm_source=adornier.com",
    tagline: "Digital Marketing Agency in the United States",
    description:
      "The Alpha Omega Hub is a digital marketing agency based in the United States. We help businesses of all kinds strengthen their digital presence, generate qualified leads, and build scalable marketing and communication systems that support long-term growth.",
    locations: ["United States"],
    logo: taohLogo,
  },
  {
    name: "Agendac",
    domain: "agendac.fr",
    get url() {
      return getAgendacUrl();
    },
    tagline: "Business Development for Home Construction Companies",
    description:
      "Agendac is our specialized business development firm, established in France and operating across Europe. We help home construction companies grow their client base and streamline their commercial operations across France, Switzerland, Belgium, and Luxembourg.",
    locations: ["France", "Switzerland", "Belgium", "Luxembourg"],
    flag: "🇫🇷",
    logo: agendacLogo,
  },
];

const Ventures = () => {
  return (
    <section id="ventures" className="py-24 md:py-32 bg-navy-medium" aria-label="Our Businesses">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Businesses
          </p>
          <h2 className="section-title mb-6">Two Companies, One Vision</h2>
          <p className="section-subtitle mx-auto">
            Visit each business directly to learn more and get in touch.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div className="card-elevated p-6 md:p-12 group hover:border-secondary/40 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex items-center gap-4 md:block">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={venture.logo}
                        alt={`${venture.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group/link md:hidden"
                    >
                      <h3 className="font-display text-xl font-semibold group-hover/link:text-secondary transition-colors">
                        {venture.name} {venture.flag}
                      </h3>
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
                      <h3 className="font-display text-2xl md:text-3xl font-semibold group-hover/link:text-secondary transition-colors">
                        {venture.name} {venture.flag}
                      </h3>
                      <ArrowUpRight className="text-secondary" size={20} />
                    </a>
                    <p className="text-secondary font-medium mb-3 md:mb-4 text-sm md:text-base">
                      {venture.tagline}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {venture.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                      {venture.locations.map((location) => (
                        <span
                          key={location}
                          className="px-2 md:px-3 py-1 text-xs md:text-sm bg-navy-light rounded-full text-muted-foreground"
                        >
                          {location}
                        </span>
                      ))}
                    </div>

                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <span>Visit {venture.domain}</span>
                      <ExternalLink size={16} />
                    </a>
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
