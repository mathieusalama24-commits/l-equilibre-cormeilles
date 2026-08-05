import { motion, useReducedMotion } from "framer-motion";
import { Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { about, business } from "@/data/site-content";
import { fadeInUp, reveal } from "@/lib/motion";

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="angelique" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_60px_-20px_rgba(56,44,33,0.28)]">
            <img
              src={about.photo.src}
              alt={about.photo.alt}
              className="size-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} {...reveal(reducedMotion)}>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <span className="h-0.5 w-7 bg-primary" />
            L'institut
          </span>
          <h2 className="mb-6 text-4xl text-foreground sm:text-5xl">
            {business.practitioner}, {business.practitionerTitleLower}
          </h2>

          <div className="flex flex-col gap-4">
            {about.bio.map((paragraph) => (
              <p key={paragraph} className="max-w-[52ch] text-[1.05rem] leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground">
              <Award className="size-4 text-primary" strokeWidth={1.8} />
              Esthéticienne &amp; praticienne Reiki
            </span>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-border px-5 hover:bg-muted"
            >
              <a href={business.phoneHref}>
                <Phone className="size-4" />
                {business.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
