import { useEffect, useState } from "react";
import { Flower2, Menu, Phone, CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { business, nav } from "@/data/site-content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a
          href="#accueil"
          className="flex min-w-0 items-center gap-2.5"
          aria-label="Retour à l'accueil L'Équilibre"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Flower2 className="size-4.5" strokeWidth={1.8} />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-xl tracking-tight text-foreground">
              {business.name}
            </span>
            <span className="block truncate text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {business.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="hidden size-11 rounded-full border-border lg:inline-flex"
            aria-label={`Appeler l'institut au ${business.phone}`}
          >
            <a href={business.phoneHref}>
              <Phone className="size-4" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="hidden h-11 rounded-full bg-primary px-5 text-primary-foreground shadow-[0_10px_24px_-10px_rgba(183,94,51,0.6)] hover:bg-primary/90 sm:inline-flex"
          >
            <a href={business.bookingHref} target="_blank" rel="noreferrer">
              <CalendarHeart className="size-4" />
              Réserver en ligne
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-11 rounded-full border-border md:hidden"
                aria-label="Ouvrir le menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] gap-0 p-0">
              <SheetHeader className="border-b border-border p-5">
                <SheetTitle className="font-display text-xl tracking-tight">
                  {business.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4" aria-label="Navigation mobile">
                {nav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2.5 p-4">
                <Button asChild className="h-12 w-full rounded-full bg-primary text-base text-primary-foreground hover:bg-primary/90">
                  <a href={business.bookingHref} target="_blank" rel="noreferrer">
                    <CalendarHeart className="size-4" />
                    Réserver en ligne
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 w-full rounded-full border-border text-base">
                  <a href={business.phoneHref}>
                    <Phone className="size-4" />
                    Appeler {business.practitioner}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
