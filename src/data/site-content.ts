// Données vérifiées le 05/08/2026 via la fiche Planity de l'institut
// (planity.com/lequilibre-95240-cormeilles-en-parisis) et la fiche Google
// "Équilibre Soins Reiki – Soins, Massage & Épilations" (Google Maps).
// Recoupées avec audit.md. Aucune information non confirmée par ces
// sources n'est utilisée (pas d'ancienneté ni de certification inventée).

export const business = {
  name: "L'Équilibre",
  tagline: "Institut de beauté & Reiki",
  practitioner: "Angélique",
  practitionerTitle: "Esthéticienne & praticienne Reiki",
  practitionerTitleLower: "esthéticienne et praticienne Reiki",
  phone: "06 50 77 63 47",
  phoneHref: "tel:+33650776347",
  instagramHandle: "@equilibre_soins_reiki",
  instagramHref: "https://www.instagram.com/equilibre_soins_reiki",
  bookingHref: "https://www.planity.com/lequilibre-95240-cormeilles-en-parisis",
  address: {
    street: "17 Rue Gabriel Péri",
    postalCode: "95240",
    city: "Cormeilles-en-Parisis",
  },
  areaServed: ["Cormeilles-en-Parisis", "Herblay", "Pierrelaye"],
} as const;

// Horaires réels publiés par l'institut sur Planity (système de réservation
// utilisé par l'établissement) — un seul planning, pas de contradiction à
// résoudre ici.
export const hours = [
  { days: "Lundi – Samedi", hours: "9h00 – 21h00" },
  { days: "Dimanche", hours: "9h00 – 19h00" },
] as const;

export const heroStats = [
  { value: "5,0", label: "Note moyenne sur 27 avis (Planity)" },
  { value: "7j/7", label: "Ouvert tous les jours, sur rendez-vous" },
  { value: "2", label: "Savoir-faire : esthétique & Reiki" },
] as const;

// Photos : 4 proviennent de la propre galerie Planity de l'institut (CDN
// Cloudinary public de Planity, photos publiées par l'établissement lui-même
// pour sa fiche professionnelle) — cadrées sur les mains/gestes pour ne
// montrer aucun visage de cliente identifiable. Les 2 restantes (épilation,
// regard) viennent de Pexels, faute d'équivalent dans sa galerie, vérifiées
// HTTP 200 et cohérentes avec la prestation réelle.
export const services = [
  {
    title: "Soins du visage",
    description:
      "Nettoyage de peau, rituels hydratants et liftants pour révéler l'éclat naturel du visage.",
    priceFrom: "55 €",
    featured: false,
    image: {
      src: "https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Soin du visage appliqué avec douceur",
    },
  },
  {
    title: "Massage & Énergie Reiki",
    description:
      "Massages relaxants et séances de Reiki, un soin énergétique par apposition des mains pour harmoniser le corps et l'esprit.",
    priceFrom: "30 €",
    featured: true,
    image: {
      src: "https://res.cloudinary.com/planity/image/upload/f_auto,q_auto,w_1200/xmti01zaawicfeykkcfv",
      alt: "Séance de Reiki, soin énergétique par apposition des mains",
    },
  },
  {
    title: "Épilations",
    description:
      "Épilations femme et homme, à l'unité ou en forfaits combinés, dans le respect des peaux sensibles.",
    priceFrom: "10 €",
    featured: false,
    image: {
      src: "https://images.pexels.com/photos/35103884/pexels-photo-35103884.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Épilation réalisée avec soin en institut de beauté",
    },
  },
  {
    title: "Beauté des mains & pieds",
    description:
      "Manucure, beauté des pieds et pose de vernis semi-permanent pour des mains et des pieds soignés.",
    priceFrom: "15 €",
    featured: false,
    image: {
      src: "https://res.cloudinary.com/planity/image/upload/f_auto,q_auto,w_1200/xhdapgv6enugzzktdjyv",
      alt: "Massage des pieds réalisé avec douceur",
    },
  },
  {
    title: "Beauté du regard",
    description:
      "Teinture cils et sourcils, rehaussement de cils, pour un regard mis en valeur avec douceur.",
    priceFrom: "15 €",
    featured: false,
    image: {
      src: "https://images.pexels.com/photos/7446904/pexels-photo-7446904.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Teinture des sourcils appliquée au pinceau",
    },
  },
  {
    title: "Minceur",
    description:
      "Palper rouler manuel et radiofréquence pour accompagner vos objectifs silhouette.",
    priceFrom: "35 €",
    featured: false,
    image: {
      src: "https://res.cloudinary.com/planity/image/upload/f_auto,q_auto,w_1200/kdsztrej3ejgum28gj5j",
      alt: "Soin palper-rouler manuel réalisé sur la jambe",
    },
  },
] as const;

// Photo issue de la galerie Planity de l'institut (public ID Cloudinary
// o69tcidjiyjwdlquf8bx) — la seule des 6 montrant clairement Angélique en
// situation de soin plutôt que ses seules mains. Bio reformulée à partir de
// sa présentation publiée sur Planity, pas recopiée verbatim.
export const about = {
  photo: {
    src: "https://res.cloudinary.com/planity/image/upload/f_auto,q_auto,w_1200/o69tcidjiyjwdlquf8bx",
    alt: "Angélique réalisant un massage des jambes dans son institut",
  },
  bio: [
    "Esthéticienne et praticienne Reiki, j'accompagne chaque personne, homme ou femme, à travers des soins où beauté, énergie et conscience se rencontrent.",
    "Chaque soin est personnalisé pour offrir un moment de lâcher-prise, dans un espace calme et bienveillant.",
  ],
} as const;

// Uniquement des faits confirmés par la fiche Planity de l'institut
// (réservation, paiement, horaires) et par sa présentation ("j'accompagne
// chaque personne homme ou femme") — rien n'est inventé (pas de politique
// d'annulation ni d'information non vérifiée).
export const faq = [
  {
    question: "Faut-il prendre rendez-vous ?",
    answer:
      "Oui, tous les soins se font sur rendez-vous. Vous pouvez réserver en ligne à tout moment sur Planity (confirmation immédiate) ou appeler directement l'institut au 06 50 77 63 47.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "Le paiement se fait sur place, à l'institut, à l'issue de votre soin.",
  },
  {
    question: "Qu'est-ce qu'une séance de Reiki concrètement ?",
    answer:
      "Un soin énergétique japonais réalisé par apposition des mains, pour harmoniser le corps et l'esprit — un moment de détente profonde, sans geste technique invasif.",
  },
  {
    question: "L'institut accueille-t-il aussi les hommes ?",
    answer:
      "Oui, Angélique accompagne chaque personne, homme ou femme — épilations, soins du visage, massages et Reiki sont proposés aux deux.",
  },
  {
    question: "Quels sont les horaires d'ouverture ?",
    answer: "Du lundi au samedi de 9h à 21h, et le dimanche de 9h à 19h, sur rendez-vous.",
  },
] as const;

// Paraphrase de la présentation publiée par Angélique elle-même sur sa
// fiche Planity — reformulée, pas recopiée verbatim.
export const reassurance = [
  {
    title: "Double expertise",
    description: "Esthéticienne diplômée et praticienne Reiki, pour une approche à la fois technique et énergétique.",
  },
  {
    title: "5,0/5 sur 27 avis",
    description: "Accueil, propreté, cadre et qualité de prestation notés 5,0/5 par les clientes sur Planity.",
  },
  {
    title: "Ouvert 7j/7",
    description: "Du lundi au samedi de 9h à 21h, et le dimanche de 9h à 19h, sur rendez-vous.",
  },
  {
    title: "Institut à taille humaine",
    description: "Un espace calme et bienveillant, où chaque soin est personnalisé et pensé pour vous.",
  },
] as const;

// Avis retranscrits tels qu'affichés sur la fiche Google "Équilibre Soins
// Reiki – Soins, Massage & Épilations" (consultée le 05/08/2026), y compris
// leur troncature d'origine ("… Plus") — aucun contenu n'est complété ou
// inventé au-delà de ce qui est lisible à l'écran. La note globale la plus
// complète (5,0/27 avis) provient de Planity, système de réservation utilisé
// par l'institut ; les 3 avis ci-dessous sont ceux publiés sur Google.
export const googleRating = {
  score: 5.0,
  count: 27,
  source: "Planity",
} as const;

export const reviews = [
  {
    name: "Rosalie Silva Dos Reis",
    meta: "Avis Google · Local Guide",
    rating: 5,
    relativeDate: "il y a 5 jours",
    text: "Je suis tellement contente d'être tombée sur Angélique ! C'est une personne d'une grande douceur, hyper professionnelle et vraiment perfectionniste dans ce qu'elle fait. En plus de ça, elle a toujours une super belle énergie et un accueil …",
  },
  {
    name: "Maiwenn Boursier",
    meta: "Avis Google",
    rating: 5,
    relativeDate: "il y a une semaine",
    text: "Rendez-vous pris pour une simple épilation auprès de cet institut. Un moment banal qui s'est transformé en un moment de détente et de partage grâce à une professionnelle bienveillante, souriante et très à l'écoute de sa …",
  },
  {
    name: "Sonia Marzouk",
    meta: "Avis Google",
    rating: 5,
    relativeDate: "il y a une semaine",
    text: "Expérience découverte pour un soin des pieds et des mains que j'ai beaucoup apprécié sans voir le temps passer ! (2h) Pur moment de déconnexion et de bien-être avec une professionnelle très accueillante et sympathique ! Merci Angélique.",
  },
] as const;

export const gallery = [
  {
    src: "https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Soin du visage appliqué avec douceur dans un institut de beauté",
    caption: "Soin du visage sur-mesure",
  },
  {
    src: "https://images.pexels.com/photos/5240734/pexels-photo-5240734.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Mains posées avec douceur lors d'une séance de massage énergétique Reiki",
    caption: "Séance de Reiki",
  },
  {
    src: "https://images.pexels.com/photos/6629548/pexels-photo-6629548.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Massage relaxant du bras réalisé avec attention",
    caption: "Massage relaxant",
  },
  {
    src: "https://images.pexels.com/photos/1123256/pexels-photo-1123256.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Bougies allumées dans une ambiance calme et feutrée",
    caption: "Un cocon de détente",
  },
] as const;

export const nav = [
  { href: "#prestations", label: "Prestations" },
  { href: "#angelique", label: "Angélique" },
  { href: "#avis", label: "Avis" },
  { href: "#acces", label: "Accès" },
  { href: "#contact", label: "Contact" },
] as const;
