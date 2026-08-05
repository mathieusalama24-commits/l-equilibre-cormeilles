import { motion, useReducedMotion } from "framer-motion";
import { Phone, CalendarHeart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, gallery, googleRating } from "@/data/site-content";
import { fadeInUp, staggerContainer, revealOnMount } from "@/lib/motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="accueil" className="relative overflow-hidden pt-10 pb-24 md:pt-16 md:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(680px_420px_at_10%_-6%,rgba(183,94,51,0.14),transparent_60%),radial-gradient(560px_360px_at_96%_92%,rgba(75,90,64,0.12),transparent_60%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[0.92fr_1.08fr] md:gap-12">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative order-2 md:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_60px_-20px_rgba(56,44,33,0.28)]">
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              className="size-full object-cover"
              width={1200}
              height={1500}
            />
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -right-4 -bottom-6 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-[0_20px_44px_-14px_rgba(56,44,33,0.3)] backdrop-blur sm:-right-8"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-tint text-primary">
              <Star className="size-5 fill-primary text-primary" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-xl tracking-tight text-foreground">
                {googleRating.score.toString().replace(".", ",")}/5
              </div>
              <div className="text-xs text-muted-foreground">{googleRating.count} avis · {googleRating.source}</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          {...revealOnMount(reducedMotion)}
          className="order-1 md:order-2"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-tint-border bg-tint px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary"
          >
            Institut de beauté à Cormeilles-en-Parisis
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-[2.9rem] leading-[1.02] text-foreground sm:text-[3.6rem] md:text-[4.1rem]"
          >
            La beauté se vit en{" "}
            <em className="text-primary">douceur</em>.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-[46ch] text-lg text-muted-foreground"
          >
            {business.practitioner}, {business.practitionerTitleLower}, vous accueille à
            Cormeilles-en-Parisis pour des soins pensés avec écoute et professionnalisme.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap gap-3.5">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_16px_32px_-10px_rgba(183,94,51,0.55)] hover:bg-primary/90"
            >
              <a href={business.bookingHref} target="_blank" rel="noreferrer">
                <CalendarHeart className="size-5" />
                Réserver en ligne
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-border bg-background px-7 text-base font-semibold hover:bg-muted"
            >
              <a href={business.phoneHref}>
                <Phone className="size-5" />
                Appeler l'institut
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
