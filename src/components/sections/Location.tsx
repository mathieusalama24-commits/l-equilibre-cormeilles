import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, hours } from "@/data/site-content";
import { fadeInUp, reveal } from "@/lib/motion";

const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}`;
const mapQuery = encodeURIComponent(fullAddress);
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

export function Location() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="acces" className="border-y border-border bg-muted/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div variants={fadeInUp} {...reveal(reducedMotion)} className="mb-12 max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <span className="h-0.5 w-7 bg-primary" />
            Où nous trouver
          </span>
          <h2 className="text-4xl text-foreground sm:text-5xl">
            L'institut vous accueille à Cormeilles-en-Parisis
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          {...reveal(reducedMotion)}
          className="grid gap-6 md:grid-cols-[1fr_1.3fr]"
        >
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 flex items-center gap-2.5 text-primary">
                <MapPin className="size-5" strokeWidth={1.8} />
                <span className="text-sm font-semibold text-foreground">Adresse</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{fullAddress}</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 flex items-center gap-2.5 text-primary">
                <Clock className="size-5" strokeWidth={1.8} />
                <span className="text-sm font-semibold text-foreground">Horaires</span>
              </div>
              <dl className="flex flex-col gap-1.5">
                {hours.map((row) => (
                  <div key={row.days} className="flex items-baseline justify-between gap-4 text-sm">
                    <dt className="text-muted-foreground">{row.days}</dt>
                    <dd className="font-medium text-foreground">{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Button
              asChild
              size="lg"
              className="h-14 w-full rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-[0_16px_32px_-10px_rgba(183,94,51,0.55)] hover:bg-primary/90"
            >
              <a href={directionsHref} target="_blank" rel="noreferrer">
                <Navigation className="size-5" />
                Itinéraire vers l'institut
              </a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_20px_44px_-20px_rgba(56,44,33,0.2)]">
            <iframe
              title={`Localisation ${business.name} — ${fullAddress}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[320px] w-full md:h-full md:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
