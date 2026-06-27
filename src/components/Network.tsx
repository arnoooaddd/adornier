import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Tampa", country: "United States" },
  { city: "Lausanne", country: "Switzerland" },
  { city: "Annecy", country: "France" },
  { city: "Balkans", country: "Region" },
  { city: "Middle East", country: "Region" },
];

const Network = () => {
  return (
    <section id="network" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Global Reach
          </p>
          <h2 className="section-title mb-6">Our Network</h2>
          <p className="section-subtitle mx-auto">
            Well-established connections across continents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <MapPin className="text-secondary" size={20} />
            </div>
            <h3 className="font-display text-xl font-semibold">Presence</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-navy-medium/50 border border-border hover:border-secondary/30 transition-colors"
              >
                <p className="font-semibold text-foreground">{location.city}</p>
                <p className="text-sm text-muted-foreground">{location.country}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Network;
