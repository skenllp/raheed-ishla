/* ============================================================
   WEDDING CONFIGURATION
   ------------------------------------------------------------
   This is the single source of truth for the entire website.
   To reuse this template for a different couple, change ONLY
   the values below — nothing else in the codebase needs to
   change. Every page element is rendered from this object.
   ============================================================ */

window.WEDDING_CONFIG = {

  /* ---------- Meta / SEO ---------- */
  meta: {
    pageTitle: "AL Raheed Arafath & Zubaida Sana Sherif | Wedding Invitation",
    description: "Wedding Invitation of AL Raheed Arafath & Zubaida Sana Sherif — 05 September 2026, Indiana Convention Centre, Jeppinamogaru, Mangalore.",
    ogImage: "assets/images/raheed-zubaida-og-image.jpg",
    siteUrl: "https://raheed-ishla.vercel.app"
  },

  /* ---------- Couple ---------- */
  couple: {
    brideFirstName: "Zubaida Sana Sherif",
    heroBrideName: "Zubaida Sana Sherif ( ISHLA )",
    groomFirstName: "AL Raheed Arafath",
    bride: {
      fullName: "Zubaida Sana Sherif",
      family: "",
      father: "",
      mother: "",
      house: "",
      po: ""
    },
    groom: {
      fullName: "AL Raheed Arafath",
      family: "",
      father: "",
      mother: "",
      house: "",
      po: ""
    }
  },

  /* ---------- Illustrations ----------
     Optional soft full-bleed hero backdrop photo/art. Lives directly under
     assets/images/ — set to "" to disable it. */
  illustrations: {
    heroBackground: "assets/images/hero-bg.jpg" // optional soft full-bleed hero backdrop; set to "" to disable
  },

  /* ---------- Wedding Details ---------- */
  wedding: {
    dateISO: "2026-09-05T11:00:00+05:30",
    dateDisplay: "05 September 2026",
    dayDisplay: "Saturday",
    hijriDate: "", // not supplied — the Hijri date line hides itself gracefully when empty
    timeDisplay: "11:00 AM – 2:00 PM",
    venueName: "Indiana Convention Centre",
    venueCity: "Jeppinamogaru",
    venueState: "Mangalore",
    fullAddress: "Indiana Convention Centre, Jeppinamogaru, Mangalore, India"
  },

  /* ---------- Venue / Map ---------- */
  venue: {
    lat: null,
    lng: null,
    mapsShareUrl: "https://www.google.com/maps/search/?api=1&query=Indiana+Convention+Centre%2C+Jeppinamogaru%2C+Mangalore",
    mapsEmbedUrl: "https://www.google.com/maps?q=Indiana+Convention+Centre,+Jeppinamogaru,+Mangalore&z=15&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Indiana+Convention+Centre%2C+Jeppinamogaru%2C+Mangalore"
  },

  /* ---------- Invitation Text ---------- */
  invitation: {
    bismillahArabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    bismillahLine1: "IN THE NAME OF ALLAH",
    bismillahLine2: "THE MOST GRACIOUS",
    bismillahLine3: "THE MOST MERCIFUL",
    message: "Together with their families, we joyfully invite you to celebrate the blessed union.",
    duaArabicTransliteration: "Allahumma barik lahuma wa barik 'alayhima wa ajma' baynahuma fi khayr.",
    duaTranslation: "O Allah, bless them, shower Your blessings upon them, and unite them in goodness."
  },

  /* ---------- Thank You ---------- */
  thankYou: {
    heading: "JazakAllahu Khair wa BarakAllahu Feek",
    message: "From the bottom of our hearts, thank you for being a part of our journey. Your presence, prayers and blessings mean the world to us as we begin this new chapter together.",
    blessing: "May Allah bless our union and grant us a home filled with love, mercy and peace."
  },

  /* ---------- Wishes / Sponsor ---------- */
  wishes: {
    kicker: "With Gratitude",
    heading: "Best Wishes From",
    sponsorName: "Bright Caterers & Arrangers",
    sponsorLogo: "assets/images/bright-caterers-logo.png"
  },

  /* ---------- Footer ---------- */
  footer: {
    line: "Made with ❤ for the celebration of love.",
    couplePlaceholder: "AL Raheed Arafath & Zubaida Sana Sherif · 05.09.2026"
  },

  /* ---------- Music ---------- */
  music: {
    src: "assets/music/music.mp3",
    title: "Wedding Theme"
  },

  /* ---------- RSVP ----------
     The actual submission endpoint lives in js/rsvp-config.js (RSVP_CONFIG.scriptURL)
     so it can be swapped per-deployment without touching this file. See README.md
     "Configuring Google Sheets RSVP" for the full setup guide. */
  rsvp: {
    closeDate: "29 August 2026" // shown in the RSVP section kicker; keep in sync with the copy in index.html
  }
};
