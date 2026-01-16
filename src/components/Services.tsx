import { motion } from "framer-motion";
import { TrendingUp, Users, Handshake } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Fundraising Consulting",
    description: "Strategic guidance for startups from seed to Series A. We leverage our extensive investor network to connect you with the right capital partners.",
  },
  {
    icon: Users,
    title: "Business Development",
    description: "Client acquisition and growth strategies powered by targeted marketing. We help you scale your customer base and revenue streams.",
  },
  {
    icon: Handshake,
    title: "Strategic Introductions",
    description: "Connecting the right people at the right time. From investors seeking founders to companies needing marketing partners—we bridge the gap.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="section-title mb-6">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We provide end-to-end support for ambitious companies ready to scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-elevated p-8 group hover:border-secondary/40 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <service.icon className="text-secondary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Elfsight Website Translator Widget - Mobile Only */}
        <div className="md:hidden flex justify-center mt-12">
          <div className="elfsight-app-6dd310c4-c5ea-42d4-9c2d-aa2455a13e4a" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
