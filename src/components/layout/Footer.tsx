import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { business, nav } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="bg-secondary py-14 text-secondary-foreground/75">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <img
                src="/angelique/logo.jpg"
                alt="Logo L'Équilibre"
                className="size-8 rounded-full border border-white/15 object-cover"
                width={32}
                height={32}
              />
              <span className="font-display text-lg tracking-tight text-white">
                {business.name}
              </span>
            </div>
            <p className="max-w-[38ch] text-sm">
              Institut de beauté à Cormeilles-en-Parisis. Soins du visage, massages, épilations et
              Reiki, par {business.practitioner}, {business.practitionerTitleLower}.
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/50">Contact</h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href={business.phoneHref} className="hover:text-primary">
                  {business.phone}
                </a>
              </li>
              <li>
                {business.address.street}, {business.address.postalCode} {business.address.city}
              </li>
              <li>
                <a
                  href={business.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary"
                >
                  <InstagramIcon className="size-3.5" />
                  {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/50">Navigation</h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {business.name} — Institut de beauté. Tous droits réservés.
          </span>
          <span>Cormeilles-en-Parisis, Val d'Oise.</span>
        </div>
      </div>
    </footer>
  );
}
