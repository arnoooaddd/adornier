import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Users } from "lucide-react";
import kerimPhoto from "@/assets/kerim-profile.jpg";
import arnoPhoto from "@/assets/arno-profile.jpg";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";
import team5 from "@/assets/team-5.png";
import team6 from "@/assets/team-6.png";
import team7 from "@/assets/team-7.png";
import team8 from "@/assets/team-8.png";
import team9 from "@/assets/team-9.png";

const founders = [
  {
    name: "Arno Adornier",
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

const teamPhotos = [team1, team2, team3, team4, team5, team6, team7, team8, team9];

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
              <p className="text-secondary font-medium mb-2">{founder.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{founder.education}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{founder.description}</p>
              
              <div className="flex items-center justify-center gap-4">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-gold-light transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href={founder.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-gold-light transition-colors"
                >
                  <MessageCircle size={20} />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="text-secondary" size={22} />
            <p className="text-lg md:text-xl text-muted-foreground">
              …and our team of <span className="text-foreground font-semibold">15 people</span> across <span className="text-foreground font-semibold">4 continents</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
            {teamPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-secondary/20 hover:border-secondary/50 transition-colors duration-300"
              >
                <img
                  src={photo}
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center"
            >
              <span className="text-secondary font-semibold text-sm md:text-base">+6</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
