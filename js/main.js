/* ============================================================================
   CPF COLLEGE COMPLEX — MAIN SCRIPT
   ----------------------------------------------------------------------------
   This file builds the page out of js/data.js and powers the interactions
   (menu, animations, gallery, WhatsApp form). You normally never need to
   edit this file — all content changes happen in js/data.js.
   ========================================================================== */

(function () {
  "use strict";

  const D = window.SITE_DATA;

  /* ---------- Tiny helpers ---------- */
  const $ = (sel) => document.querySelector(sel);
  const waLink = (text) =>
    `https://wa.me/${D.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

  const ICONS = {
    blocks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><rect x="8" y="3" width="8" height="8" rx="1.5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z"/></svg>',
    bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12"/><path d="M2 17h20"/><circle cx="7" cy="18.5" r="1.8"/><circle cx="17" cy="18.5" r="1.8"/><path d="M4 10h16"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8m8 4H8"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  };

  /* ---------- Brand logo (navbar + footer) ---------- */
  const brandHTML = (dark) => `
    <img src="${D.school.crest}" alt="${D.school.name} crest" />
    <span class="brand-name">${D.school.name}
      <small>${dark ? D.school.motto : "Accra • Koforidua"}</small>
    </span>`;
  $("#brandLogo").innerHTML = brandHTML(false);
  $("#footerLogo").innerHTML = brandHTML(true);

  /* ---------- Navigation ---------- */
  const SECTIONS = [
    ["#home", "Home"], ["#about", "About"], ["#academics", "Academics"],
    ["#gallery", "Gallery"], ["#admissions", "Admissions"], ["#contact", "Contact"],
  ];
  $("#navLinks").innerHTML = SECTIONS.map(
    ([href, label]) => `<a href="${href}">${label}</a>`
  ).join("");
  $("#mobileMenu").innerHTML = SECTIONS.map(
    ([href, label]) => `<a href="${href}">${label}</a>`
  ).join("") + `<a href="#admissions" class="btn btn-gold btn-sm" style="margin-top:.9rem;justify-content:center">Enroll Now</a>`;

  /* ---------- Hero ---------- */
  const hero = D.hero;
  document.querySelector(".hero").style.backgroundImage = `url('${hero.backgroundImage}')`;
  $("#heroBadge").textContent = hero.badge;
  $("#heroTitle").innerHTML =
    `${hero.titleLine1} <span class="highlight">${hero.titleHighlight}</span><br>${hero.titleLine2}`;
  $("#heroSub").textContent = hero.subtitle;
  const heroWa = waLink(`Hello ${D.school.name}, I would like to make an enquiry about admission.`);
  $("#heroBtns").innerHTML = `
    <a class="btn btn-gold btn-lg" href="${hero.primaryBtn.link}">${hero.primaryBtn.label}</a>
    <a class="btn btn-ghost btn-lg" target="_blank" rel="noopener"
       href="${hero.secondaryBtn.link || heroWa}">${hero.secondaryBtn.label}</a>`;

  /* ---------- Stats (animated counters) ---------- */
  $("#heroStats").innerHTML = D.stats.map(
    (s) => `<div class="stat">
              <div class="num" data-count="${s.value}" data-suffix="${s.suffix || ""}">0</div>
              <div class="lbl">${s.label}</div>
            </div>`
  ).join("");

  /* ---------- Ticker ---------- */
  const tickerItems = ["We Compete with Excellence", "Godly & Modern", "Ghanaian + British Curricula",
    "Pre-School • Primary • JHS", "Accra & Koforidua", "Confident Future Leaders"];
  const half = tickerItems.map((t) => `<span>${t}</span>`).join("");
  $("#tickerTrack").innerHTML = half + half; // duplicated for a seamless loop

  /* ---------- About ---------- */
  $("#aboutMainImg").src = D.about.mainImage;
  $("#aboutFloatImg").src = D.about.floatingImage;
  $("#aboutFloatBadge").textContent = D.about.floatingBadge;
  $("#aboutHeading").textContent = D.about.heading;
  $("#aboutParagraphs").innerHTML = D.about.paragraphs.map((p) => `<p>${p}</p>`).join("");
  $("#aboutChecklist").innerHTML = D.about.checklist.map((c) => `<li>${c}</li>`).join("");

  /* ---------- Academics ---------- */
  $("#academicsHeading").textContent = D.academics.heading;
  $("#academicsSub").textContent = D.academics.subtitle;
  $("#curriculumBanner").innerHTML = `
    <span class="icon-chip">${ICONS.globe}</span>
    <div><h3>${D.academics.highlight.title}</h3><p>${D.academics.highlight.text}</p></div>`;
  $("#programCards").innerHTML = D.academics.programs.map(
    (p) => `<article class="card reveal">
              <span class="icon-chip">${ICONS[p.icon] || ICONS.book}</span>
              <h3>${p.title}</h3>
              <span class="ages">${p.ages}</span>
              <p>${p.text}</p>
              <ul>${p.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
            </article>`
  ).join("");

  /* ---------- Why CPF ---------- */
  $("#whyHeading").textContent = D.features.heading;
  $("#whySub").textContent = D.features.subtitle;
  $("#featureCards").innerHTML = D.features.items.map(
    (f) => `<article class="card feature-card reveal">
              <span class="icon-chip">${ICONS[f.icon] || ICONS.star}</span>
              <h3>${f.title}</h3><p>${f.text}</p>
            </article>`
  ).join("");

  /* ---------- Proprietor ---------- */
  $("#proprietorImg").src = D.proprietor.photo;
  $("#proprietorMessage").textContent = D.proprietor.message;
  $("#proprietorName").textContent = D.proprietor.name;
  $("#proprietorTitle").textContent = D.proprietor.title;

  /* ---------- Gallery + Lightbox ---------- */
  $("#galleryHeading").textContent = D.gallery.heading;
  $("#gallerySub").textContent = D.gallery.subtitle;
  const photos = D.gallery.photos;
  $("#galleryGrid").innerHTML = photos.map(
    (p, i) => `<figure class="gallery-item reveal" data-index="${i}">
                 <img src="${p.src}" alt="${p.caption}" loading="lazy" />
                 <figcaption>${p.caption}</figcaption>
               </figure>`
  ).join("");

  const lightbox = $("#lightbox");
  let current = 0;
  const showPhoto = (i) => {
    current = (i + photos.length) % photos.length;
    $("#lightboxImg").src = photos[current].src;
    $("#lightboxImg").alt = photos[current].caption;
    $("#lightboxCaption").textContent = photos[current].caption;
  };
  document.querySelectorAll(".gallery-item").forEach((el) =>
    el.addEventListener("click", () => {
      showPhoto(+el.dataset.index);
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    })
  );
  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  };
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", () => showPhoto(current - 1));
  $("#lightboxNext").addEventListener("click", () => showPhoto(current + 1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPhoto(current - 1);
    if (e.key === "ArrowRight") showPhoto(current + 1);
  });

  /* ---------- Admissions ---------- */
  $("#admissionsHeading").textContent = D.admissions.heading;
  $("#admissionsSub").textContent = D.admissions.subtitle;
  $("#stepsGrid").innerHTML = D.admissions.steps.map(
    (s) => `<div class="step-card reveal">
              <div class="step-num">${s.number}</div>
              <h3>${s.title}</h3><p>${s.text}</p>
            </div>`
  ).join("");
  $("#admissionsCta").href = waLink(`Hello ${D.school.name}, I would like to start an admission for my child.`);
  $("#admissionsCtaLabel").textContent = D.admissions.ctaLabel;

  /* ---------- Reports portal ---------- */
  if (D.reportsPortal.enabled) {
    $("#reports").style.display = "";
    $("#reportsBand").innerHTML = `
      <div style="display:flex;align-items:center;gap:1.4rem">
        <span class="icon-chip">${ICONS.doc}</span>
        <div><h3>${D.reportsPortal.heading}</h3><p>${D.reportsPortal.text}</p></div>
      </div>
      <a class="btn btn-navy" href="${D.reportsPortal.url}">${D.reportsPortal.buttonLabel}</a>`;
  }

  /* ---------- Contact ---------- */
  const phoneVal = D.contact.phoneDisplay;
  const contactCards = [
    { icon: "phone", title: "Call / WhatsApp", body: `<a class="val" href="tel:+${D.contact.whatsappNumber}">${phoneVal}</a>` + (D.contact.phoneAlt ? `<a class="val" href="tel:${D.contact.phoneAlt.replace(/\s/g, "")}">${D.contact.phoneAlt}</a>` : "") },
    { icon: "mail", title: "Email", body: `<a class="val" href="mailto:${D.contact.email}">${D.contact.email}</a>` },
  ];
  D.campuses.forEach((c) =>
    contactCards.push({ icon: "pin", title: c.name, body: `${c.address}<span class="sub">${c.hours}</span>` })
  );
  $("#contactCards").innerHTML = contactCards.map(
    (c) => `<div class="contact-card reveal">
              <span class="icon-chip">${ICONS[c.icon]}</span>
              <div><h4>${c.title}</h4>${c.body}</div>
            </div>`
  ).join("");

  $("#whatsappForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#wfName").value.trim();
    const subject = $("#wfSubject").value.trim();
    const msg = $("#wfMessage").value.trim();
    window.open(waLink(`Hello ${D.school.name}!\n\nName: ${name}\nSubject: ${subject}\n\n${msg}`), "_blank");
  });

  if (D.mapEmbed) $("#mapWrap").innerHTML = `<iframe title="Map — ${D.school.name}" src="${D.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;

  /* ---------- Footer ---------- */
  $("#footerBlurb").textContent = D.footer.blurb;
  $("#footerLinksLabel").textContent = D.footer.quickLinksLabel;
  $("#footerContactLabel").textContent = D.footer.contactLabel;
  $("#footerLinks").innerHTML = SECTIONS.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("");
  $("#footerContact").innerHTML =
    `<li><strong>Phone / WhatsApp</strong><a href="tel:+${D.contact.whatsappNumber}">${phoneVal}</a></li>
     <li><strong>Email</strong><a href="mailto:${D.contact.email}">${D.contact.email}</a></li>` +
    D.campuses.map((c) => `<li><strong>${c.name}</strong>${c.address}</li>`).join("");
  const socials = [
    ["facebook", D.contact.facebook], ["instagram", D.contact.instagram], ["music", D.contact.tiktok],
  ].filter(([, url]) => url);
  $("#socials").innerHTML = socials.map(
    ([icon, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${icon}">${ICONS[icon]}</a>`
  ).join("");
  $("#footerCopy").textContent = D.footer.copyright;
  $("#footerDev").innerHTML = `${D.footer.developer.label} <strong class="dev-name">${D.footer.developer.name}</strong>`;
  $("#footerDevContact").innerHTML = D.footer.developer.contact
    ? `Contact <a href="tel:+${D.footer.developer.contact.replace(/\s/g, "").replace(/^0/, "233")}">${D.footer.developer.contact}</a>`
    : "";

  /* ---------- Floating WhatsApp ---------- */
  $("#whatsappFloat").href = waLink(`Hello ${D.school.name}!`);

  /* ---------- Navbar: scroll state + active link ---------- */
  const navbar = $("#navbar");
  const navAnchors = [...document.querySelectorAll("#navLinks a")];
  const sections = SECTIONS.map(([href]) => $(href));
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    const y = window.scrollY + 120;
    let active = 0;
    sections.forEach((sec, i) => { if (sec && sec.offsetTop <= y) active = i; });
    navAnchors.forEach((a, i) => a.classList.toggle("active", i === active));
  }, { passive: true });

  /* ---------- Mobile menu ---------- */
  const burger = $("#hamburger"), mobileMenu = $("#mobileMenu");
  burger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileMenu.classList.remove("open");
      burger.classList.remove("open");
    }
  });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- Stat counters ---------- */
  const counterIO = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      counterIO.unobserve(el);
      const target = +el.dataset.count, suffix = el.dataset.suffix || "";
      const t0 = performance.now(), dur = 1400;
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }),
    { threshold: 0.6 }
  );
  document.querySelectorAll("[data-count]").forEach((el) => counterIO.observe(el));
})();
