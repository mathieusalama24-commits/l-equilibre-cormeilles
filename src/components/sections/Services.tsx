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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card
                  className={`h-full gap-0 overflow-hidden rounded-2xl border-border p-0 shadow-none transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(56,44,33,0.22)] ${
                    service.featured ? "border-accent/40" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image.src}
                      alt={service.image.alt}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                    <span className="absolute top-4 left-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-primary backdrop-blur">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </span>
                    {service.featured && (
                      <span className="absolute top-4 right-4 rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.1em] text-accent-foreground uppercase">
                        Spécialité
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="text-sm font-semibold text-primary">
                      Dès {service.priceFrom}
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
