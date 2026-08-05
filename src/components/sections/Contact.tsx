import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { business, hours } from "@/data/site-content";
import { fadeInUp, reveal } from "@/lib/motion";

const schema = z.object({
  nom: z.string().min(2, "Indiquez votre nom"),
  telephone: z.string().min(6, "Indiquez un numéro de téléphone"),
  message: z.string().optional(),
  consentement: z
    .boolean()
    .refine((val) => val === true, "Le consentement est requis pour vous recontacter"),
});

type FormValues = z.infer<typeof schema>;

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function Contact() {
  const reducedMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          nom: values.nom,
          telephone: values.telephone,
          message: values.message ?? "",
          consentement: "oui",
        }),
      });
      setStatus("sent");
      reset();
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div variants={fadeInUp} {...reveal(reducedMotion)} className="mb-12 max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <span className="h-0.5 w-7 bg-primary" />
            Contact
          </span>
          <h2 className="text-4xl text-foreground sm:text-5xl">
            Réservez votre moment de détente
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={fadeInUp}
            {...reveal(reducedMotion)}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl bg-secondary p-7 text-secondary-foreground">
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                Téléphone
              </span>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 font-display text-3xl tracking-tight text-white"
              >
                <Phone className="size-6 text-primary" />
                {business.phone}
              </a>
              <p className="mt-3 text-sm text-white/65">
                Par téléphone ou via le formulaire, {business.practitioner} vous répond pour
                convenir d'un rendez-vous.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 flex items-center gap-2.5 text-primary">
                <MapPin className="size-5" strokeWidth={1.8} />
                <span className="text-sm font-semibold text-foreground">Adresse</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {business.address.street}, {business.address.postalCode} {business.address.city}
              </p>
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

            <a
              href={business.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-2xl border border-border bg-card p-6 text-primary transition-colors hover:border-primary/30"
            >
              <InstagramIcon className="size-5" />
              <span className="text-sm font-semibold text-foreground">{business.instagramHandle}</span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            {...reveal(reducedMotion)}
            className="rounded-2xl border border-border bg-card p-7 shadow-[0_20px_44px_-24px_rgba(56,44,33,0.2)] sm:p-9"
          >
            {status === "sent" ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 text-center">
                <CheckCircle2 className="size-12 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Demande envoyée</h3>
                <p className="max-w-[36ch] text-sm text-muted-foreground">
                  {business.practitioner} vous recontacte dans les meilleurs délais. Pour une
                  demande urgente, appelez directement le {business.phone}.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Ne pas remplir : <input name="bot-field" />
                  </label>
                </p>

                <h3 className="text-xl font-semibold text-foreground">Une question, un devis ?</h3>
                <p className="-mt-3 text-sm text-muted-foreground">
                  Laissez vos coordonnées, l'institut vous recontacte rapidement.
                </p>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" autoComplete="name" className="h-11" {...register("nom")} />
                  {errors.nom && <p className="text-xs text-destructive">{errors.nom.message}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input
                    id="telephone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="06 XX XX XX XX"
                    className="h-11"
                    {...register("telephone")}
                  />
                  {errors.telephone && (
                    <p className="text-xs text-destructive">{errors.telephone.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Votre demande (soin souhaité, disponibilités...)"
                    {...register("message")}
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <input
                    type="checkbox"
                    className="mt-0.5 size-4 shrink-0 accent-primary"
                    {...register("consentement")}
                  />
                  J'accepte d'être recontacté(e) au sujet de ma demande.
                </label>
                {errors.consentement && (
                  <p className="-mt-3 text-xs text-destructive">{errors.consentement.message}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="h-12 rounded-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  {status === "submitting" ? "Envoi..." : "Envoyer ma demande"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
