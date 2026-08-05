import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { googleRating, reviews } from "@/data/site-content";
import { fadeInUp, staggerContainer, reveal } from "@/lib/motion";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < count ? "fill-primary text-primary" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="avis" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          variants={fadeInUp}
          {...reveal(reducedMotion)}
          className="mb-12 flex flex-col items-center gap-5 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <span className="h-0.5 w-7 bg-primary" />
            Avis clients
            <span className="h-0.5 w-7 bg-primary" />
          </span>
          <h2 className="text-4xl text-foreground sm:text-5xl">Ce qu'en disent nos clientes</h2>

          <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4">
            <Stars count={5} />
            <div className="leading-tight">
              <div className="font-display text-xl tracking-tight text-foreground">
                {googleRating.score.toString().replace(".", ",")} / 5
              </div>
              <div className="text-xs text-muted-foreground">
                {googleRating.count} avis · {googleRating.source}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          {...reveal(reducedMotion)}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.div key={review.name} variants={fadeInUp}>
              <Card className="h-full gap-4 rounded-2xl border-border p-7 shadow-none">
                <Stars count={review.rating} />
                <p className="text-[0.95rem] leading-relaxed text-foreground">{review.text}</p>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
                  <div>
                    <span className="block font-semibold text-foreground">{review.name}</span>
                    <span className="text-xs text-muted-foreground">{review.meta}</span>
                  </div>
                  <span className="text-muted-foreground">{review.relativeDate}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
