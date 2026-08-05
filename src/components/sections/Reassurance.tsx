import { motion, useReducedMotion } from "framer-motion";
import { Award, Star, Clock, HeartHandshake } from "lucide-react";
import { reassurance, hours, business } from "@/data/site-content";
import { fadeInUp, staggerContainer, reveal } from "@/lib/motion";

const icons = [Award, Star, Clock, HeartHandshake];

export function Reassurance() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="institut" className="border-y border-border bg-muted/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-16">
        <motion.div variants={staggerContainer} {...reveal(reducedMotion)}>
          <motion.span
            variants={fadeInUp}
            className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary"
          >
            <span className="h-0.5 w-7 bg-primary" />
            Pourquoi L'Équilibre
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mb-4 text-4xl text-foreground sm:text-5xl">
            Un institut tenu avec douceur et professionnalisme
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-10 max-w-[48ch] text-muted-foreground">
            {business.practitioner} réunit deux savoir-faire pour prendre soin de vous : la
            technicité des soins esthétiques et la douceur d'un accompagnement énergétique.
          </motion.p>

          <div className="grid gap-5 sm:grid-cols-2">
            {reassurance.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-tint text-primary">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          {...reveal(reducedMotion)}
          className="overflow-hidden rounded-2xl bg-secondary text-secondary-foreground"
        >
          <div className="border-b border-white/10 px-6 py-5 text-xs font-bold uppercase tracking-[0.14em] text-white/55">
            Horaires
          </div>
          <dl className="flex flex-col gap-1 p-6">
            {hours.map((row) => (
              <div
                key={row.days}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3 text-sm last:border-b-0"
              >
                <dt className="text-white/70">{row.days}</dt>
                <dd className="font-display text-lg tracking-tight text-white">{row.hours}</dd>
              </div>
            ))}
          </dl>
          <p className="px-6 pb-6 text-xs text-white/55">Sur rendez-vous, par téléphone.</p>
        </motion.div>
      </div>
    </section>
  );
}
