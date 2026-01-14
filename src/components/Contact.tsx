import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="section-title mb-6">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            Ready to explore opportunities? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:contact@adornier.com" 
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      contact@adornier.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Locations</p>
                    <p className="text-muted-foreground">
                      Tampa, FL · Lausanne, CH · Annecy, FR
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Connect With Us</p>
                    <div className="flex flex-col gap-1">
                      <a 
                        href="https://www.linkedin.com/in/kerim-jakupovic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        Kerim Jakupovic
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/arno-ador/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        Arno Adornier
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center items-center text-center p-8 rounded-xl bg-navy-medium/50 border border-border">
                <h3 className="font-display text-xl font-semibold mb-3">
                  Ready to Start?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're raising capital, seeking growth, or looking for strategic connections—we're here to help.
                </p>
                <a 
                  href="mailto:contact@adornier.com" 
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Us an Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
