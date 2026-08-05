import { motion, useReducedMotion } from "framer-motion";
import { Droplet, Sparkles, Feather, Hand, Eye, Waves } from "lucide-react";
import { Card } from "@/components/ui/card";
import { services } from "@/data/site-content";
import { fadeInUp, staggerContainer, reveal } from "@/lib/motion";

const icons = [Droplet, Sparkles, Feather, Hand, Eye, Waves];

export function Services() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="prestations" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          variants={fadeInUp}
          {...reveal(reducedMotion)}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <span className="h-0.5 w-7 bg-primary" />
            Nos prestations
            <span className="h-0.5 w-7 bg-primary" />
          </span>
          <h2 className="text-4xl text-foreground sm:text-5xl">
            Des soins pensés pour votre équilibre
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          {...reveal(reducedMotion)}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card
                  className={`relative h-full gap-4 rounded-2xl border-border p-7 shadow-none transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-18px_rgba(56,44,33,0.18)] ${
                    service.featured ? "border-accent/40 bg-gradient-to-br from-tint to-card" : ""
                  }`}
                >
                  {service.featured && (
                    <span className="absolute top-6 right-6 rounded-full bg-accent/12 px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.1em] text-accent uppercase">
                      Spécialité
                    </span>
                  )}
                  <div className="flex size-12 items-center justify-center rounded-xl bg-tint text-primary">
                    <Icon className="size-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-auto text-sm font-semibold text-primary">
                    Dès {service.priceFrom}
                  </span>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
