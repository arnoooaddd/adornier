import { motion } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";
import kerimPhoto from "@/assets/kerim-profile.jpg";
import arnoPhoto from "@/assets/arno-profile.jpg";

const founders = [
  {
    name: "Arno Adornier",
    alternateName: "Also known as Arnaud Utille, Arnaud Emmanuel Lucien Utille Adornier",
    role: "Co-Founder",
    image: arnoPhoto,
    linkedin: "https://www.linkedin.com/in/arno-ador/",
    whatsapp: "https://wa.me/33628545978",
    education: "Bachelor BA in Physics (USA) & University Diploma in Applied Physics (France)",
    description: "With a background in applied physics and international experience, Arno combines technical insight with strategic business development across diverse industries.",
  },
  {
    name: "Kerim Jakupovic",
    role: "Co-Founder",
    image: kerimPhoto,
    linkedin: "https://www.linkedin.com/in/kerim-jakupovic/",
    whatsapp: "https://wa.me/41763424595",
    education: "MSc in Finance, HEC Lausanne",
    description: "Finance specialist with deep expertise in investment strategy and startup fundraising. Kerim brings rigorous analytical thinking and a vast network in the financial sector.",
  },
];

const Founders = () => {
  return (
    <section id="founders" className="py-24 md:py-32 bg-navy-medium" aria-labelledby="founders-heading">
      <div className="container mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Leadership
          </p>
          <h2 id="founders-heading" className="section-title mb-6">The Founders</h2>
          <p className="section-subtitle mx-auto">
            A complementary partnership combining finance expertise and technical innovation.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-elevated p-8 text-center group"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors duration-500" />
                <img
                  src={founder.image}
                  alt={`${founder.name} - Co-Founder of Adornier, strategic advisory and business development expert`}
                  className="w-full h-full rounded-full object-cover relative z-10 border-2 border-secondary/30"
                  itemProp="image"
                  loading="lazy"
                />
              </div>
              
              <h3 className="font-display text-2xl font-semibold mb-1" itemProp="name">{founder.name}</h3>
              {founder.alternateName && (
                <p className="sr-only" itemProp="alternateName">{founder.alternateName}</p>
              )}
              <p className="text-secondary font-medium mb-2" itemProp="jobTitle">{founder.role}</p>
              <p className="text-muted-foreground text-sm mb-4" itemProp="description">{founder.education}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{founder.description}</p>
              
              {/* Hidden SEO text for alternate names */}
              {founder.name === "Arno Adornier" && (
                <span className="sr-only">
                  Arno Adornier, also known as Arnaud Utille, Arnaud UTILLE, Arnaud Emmanuel Lucien Utille Adornier, 
                  is a co-founder of Adornier strategic advisory firm specializing in business development and 
                  strategic introductions across the United States, Europe, the Balkans, and the Middle East.
                </span>
              )}
              
              <div className="flex items-center justify-center gap-4">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-gold-light transition-colors"
                  aria-label={`Connect with ${founder.name} on LinkedIn`}
                  itemProp="sameAs"
                >
                  <Linkedin size={20} aria-hidden="true" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href={founder.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-gold-light transition-colors"
                  aria-label={`Contact ${founder.name} on WhatsApp`}
                  itemProp="telephone"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;