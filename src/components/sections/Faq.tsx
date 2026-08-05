import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/site-content";
import { fadeInUp, reveal } from "@/lib/motion";

export function Faq() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="faq" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <motion.div
          variants={fadeInUp}
          {...reveal(reducedMotion)}
          className="mx-auto mb-12 max-w-xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <span className="h-0.5 w-7 bg-primary" />
            Questions fréquentes
            <span className="h-0.5 w-7 bg-primary" />
          </span>
          <h2 className="text-4xl text-foreground sm:text-5xl">Avant de réserver</h2>
        </motion.div>

        <motion.div variants={fadeInUp} {...reveal(reducedMotion)}>
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6">
            {faq.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
