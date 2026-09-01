/* ============================================================================
   CPF COLLEGE COMPLEX — WEBSITE CONTENT FILE
   ----------------------------------------------------------------------------
   THIS is the only file you need to edit to change the website's text,
   phone numbers, photos, gallery, etc. You do NOT need to touch index.html,
   style.css or main.js for normal updates.

   RULES:
   1. Only change the text between the quotes " " and keep the commas , , .
   2. To remove an item (e.g. a gallery photo) delete the whole { ... } block,
      including the braces, and keep the remaining commas balanced.
   3. To add an item, copy an existing { ... } block, paste it and edit it.
   4. Images live in the "assets" folder — reference them as "assets/photo.jpg".
   ========================================================================== */

window.SITE_DATA = {

  /* ---------- SCHOOL IDENTITY ---------- */
  school: {
    name: "CPF College Complex",
    initials: "CPF",
    motto: "We Compete with Excellence",
    tagline: "…and we believe that you can see better from the top.",
    crest: "assets/crest.png", // logo shown in the navbar, hero and footer
  },

  /* ---------- CONTACT DETAILS ---------- */
  contact: {
    whatsappNumber: "233540902942",   // international format, no "+" and no spaces (used for WhatsApp links)
    phoneDisplay: "054 090 2942",     // how the number appears on screen
    phoneAlt: "054 142 5924",         // second line — set to "" to hide
    email: "info@cpfcollegecomplex.com", // ⚠ replace with the school's real inbox if different
    facebook: "https://www.facebook.com/cpfcollegecomplex/",
    instagram: "",                    // paste link e.g. "https://instagram.com/…" or leave ""
    tiktok: "",                       // paste link or leave ""
  },

  /* ---------- CAMPUSES (shown in Contact + footer) ---------- */
  campuses: [
    {
      name: "Accra Campus (Main)",
      address: "New Achimota, Greater Accra, Ghana",
      hours: "Mon – Fri · 7:00 AM – 4:00 PM",
    },
    {
      name: "Koforidua Campus",
      address: "Koforidua, Eastern Region, Ghana",
      hours: "Mon – Fri · 7:00 AM – 4:00 PM",
    },
  ],

  /* Google Maps embed — change the q= part to the exact school location.
     Set mapEmbed: "" to hide the map completely. */
  mapEmbed: "https://maps.google.com/maps?q=New%20Achimota%2C%20Accra%2C%20Ghana&t=&z=14&ie=UTF8&iwloc=&output=embed",

  /* ---------- HERO (big front page banner) ---------- */
  hero: {
    badge: "Accra • Koforidua — Ghanaian & British Curricula",
    titleLine1: "Raising Confident",
    titleHighlight: "Future Leaders",
    titleLine2: "and Global Citizens",
    subtitle:
      "CPF College Complex trains and brings up children in a Godly and modern way — from Pre-School through Junior High School — on our campuses in Accra and Koforidua.",
    primaryBtn: { label: "Enroll Your Child", link: "#admissions" },
    secondaryBtn: { label: "Chat on WhatsApp", link: "" }, // link is auto-filled with your WhatsApp number
    backgroundImage: "assets/students.jpg",
  },

  /* ---------- STAT STRIP (keep them short) ---------- */
  stats: [
    { value: 2, suffix: "", label: "Campuses — Accra & Koforidua" },
    { value: 3, suffix: "", label: "Levels — Pre-School, Primary & JHS" },
    { value: 2, suffix: "", label: "Curricula — Ghanaian & British" },
    { value: 100, suffix: "%", label: "Commitment to Excellence" },
  ],

  /* ---------- ABOUT SECTION ---------- */
  about: {
    heading: "A Godly & Modern Education",
    paragraphs: [
      "At CPF College Complex, teaching and learning excellence merges with deeper values. We aim at the total development of every child — intellectual, spiritual, moral and social — creating a climate of success where pupils thrive.",
      "We offer a unique blend of the Ghanaian and British curricula, giving our learners a strong local foundation with a global outlook. Our pupils grow into confident future leaders and global citizens.",
      "School life at CPF is built on collaboration — an ongoing, positive and supportive relationship between students, management, teachers and parents. We are an extended yet focused and committed family.",
    ],
    checklist: [
      "Pre-School, Primary & JHS on one campus",
      "Blend of Ghanaian & British curricula",
      "Safe, secure & Godly learning environment",
      "School transport service available",
      "Experienced & caring teachers",
      "Modern classrooms & facilities",
    ],
    mainImage: "assets/school-bus.jpg",
    floatingImage: "assets/students.jpg",
    floatingBadge: "Pre-School → JHS",
  },

  /* ---------- ACADEMICS / PROGRAMMES ---------- */
  academics: {
    heading: "Our Academic Programmes",
    subtitle:
      "A complete basic education journey — nurturing children from their very first classroom experience to the BECE and beyond.",
    highlight: {
      title: "Ghanaian + British Curricula",
      text: "Our pupils enjoy the best of both worlds — the strength of the Ghanaian curriculum enriched by international best practice from the British curriculum.",
    },
    programs: [
      {
        icon: "blocks",
        title: "Pre-School",
        ages: "Creche · Nursery · Kindergarten",
        text: "Learning through play in a warm, safe and stimulating environment. Our youngest pupils build confidence, curiosity and strong early foundations.",
        points: ["Phonics & early numeracy", "Play-based learning", "Loving, trained caregivers"],
      },
      {
        icon: "book",
        title: "Primary School",
        ages: "Basic 1 – Basic 6",
        text: "A solid academic core — English, Mathematics, Science and more — delivered with modern teaching methods that make learning joyful and deep.",
        points: ["Ghanaian & British blend", "Reading & ICT culture", "Clubs & activities"],
      },
      {
        icon: "cap",
        title: "Junior High School",
        ages: "JHS 1 – JHS 3",
        text: "Focused preparation for the BECE and for life — disciplined, ambitious and supported every step of the way to see better from the top.",
        points: ["Excellent BECE preparation", "Career & spiritual guidance", "Leadership opportunities"],
      },
    ],
  },

  /* ---------- WHY CHOOSE CPF ---------- */
  features: {
    heading: "Why Parents Choose CPF",
    subtitle: "More than a school — a family committed to your child's success.",
    items: [
      { icon: "heart", title: "Godly Values", text: "Children are trained in a Godly and modern way, with strong moral and spiritual foundations." },
      { icon: "globe", title: "Global Outlook", text: "A unique blend of the Ghanaian and British curricula that prepares pupils as global citizens." },
      { icon: "star", title: "Academic Excellence", text: "We compete with excellence — high teaching standards and a proven culture of success." },
      { icon: "bus", title: "School Transport", text: "Our own school buses serve surrounding neighbourhoods for safe, convenient pick-up and drop-off." },
      { icon: "shield", title: "Safe Environment", text: "Secure, well-supervised campuses where children feel at home and parents have peace of mind." },
      { icon: "users", title: "Strong Family Bond", text: "A supportive relationship between students, management, teachers and parents — a committed family." },
    ],
  },

  /* ---------- PROPRIETOR'S MESSAGE ----------
     Replace "name" with the founder/proprietor's real name and title. */
  proprietor: {
    name: "Name of Proprietor",           // ⚠ EDIT: put the proprietor's name here
    title: "Founder & Proprietor",
    photo: "assets/proprietor-1.jpg",
    message:
      "\"We train and bring up children in a Godly and modern way, producing confident future leaders and global citizens. At CPF College Complex, every child matters, every child is capable — and together, we compete with excellence.\"",
  },

  /* ---------- GALLERY ----------
     Add more photos by copying a block: { "src": "assets/photo.jpg", "caption": "..." }
     Place the image file inside the "assets" folder first. */
  gallery: {
    heading: "Life at CPF",
    subtitle: "Moments from our campuses — learning, play and everything in between.",
    photos: [
      { "src": "assets/students.jpg", "caption": "Morning assembly on campus" },
      { "src": "assets/school-bus.jpg", "caption": "Our school bus service" },
      { "src": "assets/proprietor-2.jpg", "caption": "Our proprietor addressing a gathering" },
      { "src": "assets/proprietor-1.jpg", "caption": "The founder of CPF College Complex" },
      { "src": "assets/crest.png", "caption": "The CPF crest" },
    ],
  },

  /* ---------- ADMISSIONS ---------- */
  admissions: {
    heading: "Admissions Are Open",
    subtitle:
      "Give your child the CPF advantage. Admission forms are available at both campuses — or start the conversation with us on WhatsApp today.",
    steps: [
      { number: "1", title: "Get in Touch", text: "Call or WhatsApp us on 054 090 2942 to make an enquiry or book a campus tour." },
      { number: "2", title: "Visit & Tour", text: "Come and see our classrooms, meet our teachers and experience the CPF family for yourself." },
      { number: "3", title: "Register", text: "Submit the completed admission form with your child's details and secure their place." },
    ],
    ctaLabel: "Start Admission on WhatsApp",
  },

  /* ---------- REPORTS PORTAL ----------
     When your report-generation app is ready, put its link in "url"
     (e.g. "https://reports.cpfcollegecomplex.com") and it will appear
     on the site. Set "enabled": false to hide this section. */
  reportsPortal: {
    enabled: true,
    heading: "Pupils' Report Cards",
    text: "End-of-term reports for CPF pupils are generated securely through the CPF Reports system. Parents can request their child's report from the school office or through the portal.",
    buttonLabel: "Open Reports Portal",
    url: "#", // ⚠ EDIT: paste the link to the report-generation app when ready
  },

  /* ---------- FOOTER ---------- */
  footer: {
    blurb:
      "CPF College Complex — training and bringing up children in a Godly and modern way, producing confident future leaders and global citizens.",
    quickLinksLabel: "Quick Links",
    contactLabel: "Contact Us",
    copyright: "Copyright ©2026. CPF COLLEGE COMPLEX",
    developer: {
      label: "Developed by",
      name: "Prince Kudozia",
      contact: "054 076 0736", // appears as "Contact 054 076 0736" — set to "" to hide
    },
  },
};
