import { motion, useReducedMotion } from "framer-motion";
import { gallery } from "@/data/site-content";
import { fadeInUp, staggerContainer, reveal } from "@/lib/motion";

export function Gallery() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          variants={fadeInUp}
          {...reveal(reducedMotion)}
          className="mx-auto mb-12 max-w-xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <span className="h-0.5 w-7 bg-primary" />
            L'institut en images
            <span className="h-0.5 w-7 bg-primary" />
          </span>
          <h2 className="text-4xl text-foreground sm:text-5xl">Un cadre pensé pour la détente</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          {...reveal(reducedMotion)}
          className="grid gap-5 sm:grid-cols-2"
        >
          {gallery.map((photo) => (
            <motion.div
              key={photo.src}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border border-border"
            >
              <div className="aspect-[4/3]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10">
                <span className="font-display text-lg tracking-tight text-white">{photo.caption}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
