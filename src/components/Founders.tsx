import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Users, Instagram } from "lucide-react";
import kerimPhoto from "@/assets/kerim-profile.jpg";
import arnoPhoto from "@/assets/arno-profile.jpg";

type Social = {
  type: "linkedin" | "whatsapp" | "instagram";
  href: string;
  label: string;
};

type Founder = {
  name: string;
  legalName?: string;
  role: string;
  image: string;
  education: string;
  description: string;
  socials: Social[];
};

const founders: Founder[] = [
  {
    name: "Arno Adornier",
    legalName: "Arnaud E. L. Utille Adornier",
    role: "Co-Founder",
    image: arnoPhoto,
    education: "Bachelor BA in Physics (USA) & University Diploma in Applied Physics (France)",
    description:
      "With a background in applied physics and international experience, Arno combines technical insight with strategic business development across diverse industries.",
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/arno-ador/", label: "LinkedIn" },
      { type: "instagram", href: "https://www.instagram.com/arno.adornier/", label: "Instagram" },
      { type: "whatsapp", href: "https://wa.me/33628545978", label: "WhatsApp" },
    ],
  },
  {
    name: "Kerim Jakupovic",
    role: "Co-Founder",
    image: kerimPhoto,
    education: "MSc in Finance, HEC Lausanne",
    description:
      "Finance specialist with deep expertise in investment strategy and startup fundraising. Kerim brings rigorous analytical thinking and a vast network in the financial sector.",
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/kerim-jakupovic/", label: "LinkedIn" },
      { type: "whatsapp", href: "https://wa.me/41763424595", label: "WhatsApp" },
    ],
  },
];

const SocialIcon = ({ type }: { type: Social["type"] }) => {
  if (type === "linkedin") return <Linkedin size={18} />;
  if (type === "instagram") return <Instagram size={18} />;
  return <MessageCircle size={18} />;
};

const Founders = () => {
  return (
    <section id="founders" className="py-24 md:py-32 bg-navy-medium">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Leadership
          </p>
          <h2 className="section-title mb-6">The Founders</h2>
          <p className="section-subtitle mx-auto">
            A complementary partnership combining finance expertise and technical innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-elevated p-8 text-center group"
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors duration-500" />
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full rounded-full object-cover relative z-10 border-2 border-secondary/30"
                />
              </div>

              <h3 className="font-display text-2xl font-semibold mb-1">{founder.name}</h3>
              {founder.legalName && (
                <p className="text-xs text-muted-foreground/70 italic mb-2">{founder.legalName}</p>
              )}
              <p className="text-secondary font-medium mb-2">{founder.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{founder.education}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{founder.description}</p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                {founder.socials.map((s) => (
                  <a
                    key={s.type}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary hover:text-gold-light transition-colors"
                  >
                    <SocialIcon type={s.type} />
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <Users className="text-secondary" size={22} />
            <p className="text-lg md:text-xl text-muted-foreground">
              …and our team of <span className="text-foreground font-semibold">15 people</span>{" "}
              across <span className="text-foreground font-semibold">4 continents</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
