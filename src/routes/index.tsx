import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone, MapPin, Mail, Clock, Heart, Sparkles, Users, Wheat,
  Cake, Cookie, Croissant, Star, ChefHat, Award, Send, Facebook, Instagram,
} from "lucide-react";
import { useState } from "react";
import hero from "@/assets/variety.jpg";
import bread from "@/assets/crossant.jpg";
import cake from "@/assets/cakes.jpg";
import pastries from "@/assets/layered.jpg";
import cookies from "@/assets/cookie.jpg";
import mexican from "@/assets/concha.jpg";
import seasonal from "@/assets/flan.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pasteleria Y Panaderia La Ideal 2 — Freshly Baked Every Day" },
      { name: "description", content: "Authentic bakery in your neighborhood: fresh breads, pastries, cakes, cookies, and traditional Mexican baked goods made daily with love." },
      { property: "og:title", content: "Pasteleria Y Panaderia La Ideal 2" },
      { property: "og:description", content: "Freshly baked breads, pastries, and cakes made daily with quality ingredients and generations of tradition." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const products = [
  { img: bread, name: "Fresh Bread", desc: "Crusty artisan loaves baked through the night for that perfect morning slice." },
  { img: cake, name: "Cakes & Custom Cakes", desc: "Celebration cakes hand-decorated for birthdays, weddings, and everyday joy." },
  { img: pastries, name: "Sweet Pastries", desc: "Buttery, flaky, golden — danishes, tarts, and croissants straight from the oven." },
  { img: cookies, name: "Cookies", desc: "Chewy, crisp, generously studded — the kind of cookie you remember." },
  { img: mexican, name: "Traditional Mexican Bread", desc: "Conchas, orejas, and pan dulce made the way abuela taught us." },
  { img: seasonal, name: "Seasonal Specials", desc: "Rosca de Reyes, pan de muerto, holiday loaves — a taste for every season." },
];

const reasons = [
  { icon: Sparkles, title: "Fresh Daily", text: "Every item is baked fresh to ensure the best flavor and quality." },
  { icon: ChefHat, title: "Authentic Recipes", text: "Traditional recipes passed down through generations." },
  { icon: Heart, title: "Friendly Service", text: "Welcoming staff committed to making every visit special." },
  { icon: Wheat, title: "Quality Ingredients", text: "Only carefully selected ingredients go into every recipe." },
  { icon: Users, title: "Community Favorite", text: "Proudly serving local families and celebrations." },
  { icon: Award, title: "Made With Love", text: "Every loaf, pastry, and cake receives personal attention." },
];

const menuItems = [
  { name: "Breakfast Pastries", price: "from $1.50" },
  { name: "Fresh Bread", price: "from $3.00" },
  { name: "Cookies", price: "from $0.75" },
  { name: "Cakes", price: "from $24.00" },
  { name: "Traditional Mexican Pastries", price: "from $1.25" },
  { name: "Holiday Specials", price: "seasonal" },
];

const testimonials = [
  { quote: "The pastries are always fresh and absolutely delicious. My family comes here every week.", name: "Maria G." },
  { quote: "Beautiful cakes, friendly service, and amazing bread. Highly recommended.", name: "Jonathan R." },
  { quote: "This bakery reminds me of home. Everything tastes authentic and freshly made.", name: "Elena S." },
];

function Index() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative isolate min-h-[100svh] w-full overflow-hidden">
        <img src={hero} alt="Fresh pastries, breads and cakes on display" width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-start justify-end px-6 pb-20 pt-32 sm:pb-28">
          <motion.div {...fadeUp} className="flex flex-wrap gap-2">
            <Badge>🥐 Fresh Daily</Badge>
            <Badge>👨‍🍳 Family-Owned</Badge>
            <Badge>⭐ Customer Favorite</Badge>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] text-white sm:text-7xl">
            Freshly Baked <span className="font-script text-[var(--rose)]">Every Day</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">
            Discover delicious breads, pastries, cakes, cookies, and traditional baked goods made fresh daily with quality ingredients and generations of baking tradition.
          </motion.p>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 hover:bg-primary/90 sm:text-base">
              <MapPin className="h-4 w-4" /> Visit Our Bakery
            </a>
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:text-base">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </motion.div>
        </div>

        {/* floating decor */}
        <FloatingBlob className="left-[-6rem] top-24 h-72 w-72 bg-[var(--rose)]/30" />
        <FloatingBlob className="right-[-4rem] bottom-10 h-64 w-64 bg-[var(--caramel)]/30" />
      </section>

      {/* PRODUCTS */}
      <section id="products" className="relative py-24 sm:py-32">
        <SectionHeader kicker="Our Menu" title="Our Freshly Baked Favorites"
          sub="A handpicked selection of what comes out of our oven, warm and ready, every morning." />
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article key={p.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={600}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                  Learn more <span aria-hidden>→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="relative bg-gradient-warm py-24 sm:py-32">
        <SectionHeader kicker="Why Us" title="Why Choose La Ideal?"
          sub="Six small reasons that add up to one warm loaf at a time." />
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div key={r.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="rounded-3xl border border-border/60 bg-card/80 p-7 shadow-soft backdrop-blur-sm transition hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--rose)]/40 text-primary">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <motion.div {...fadeUp} className="relative">
            <img src={about} alt="Our bakery interior" loading="lazy" width={1200} height={1200}
              className="aspect-square w-full rounded-3xl object-cover shadow-lift" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card px-6 py-4 shadow-lift sm:block">
              <p className="font-script text-3xl text-primary">Since day one</p>
              <p className="text-xs text-muted-foreground">Baking from the heart</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            <p className="font-script text-2xl text-[var(--caramel)]">Our Story</p>
            <h2 className="mt-2 text-4xl sm:text-5xl">A neighborhood bakery, made with love.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Pasteleria Y Panaderia La Ideal 2 is dedicated to bringing fresh baked goods, traditional flavors, and exceptional customer service to the community. From morning pastries to celebration cakes, every product is crafted with care, passion, and a commitment to quality.
            </p>
            <blockquote className="mt-8 border-l-4 border-[var(--rose)] bg-secondary/40 p-6 italic text-foreground/80 rounded-r-2xl">
              "To create memorable moments through fresh, delicious baked goods that bring people together."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/30 py-24 sm:py-32">
        <SectionHeader kicker="Kind Words" title="What Our Customers Are Saying" />
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure key={t.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="flex flex-col rounded-3xl bg-card p-8 shadow-soft">
              <div className="flex gap-0.5 text-[var(--caramel)]">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/80">"{t.quote}"</blockquote>
              <figcaption className="mt-6 font-semibold">— {t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section id="menu" className="py-24 sm:py-32">
        <SectionHeader kicker="On the Counter" title="Something For Everyone"
          sub="A peek at what fills our cases — pricing starts here, but the smell is free." />
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 px-6 sm:gap-4 md:grid-cols-3">
          {menuItems.map((m, i) => (
            <motion.div key={m.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-3xl bg-card shadow-soft">
              <img src={products[i].img} alt={m.name} loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-lg sm:text-xl">{m.name}</h3>
                <p className="text-xs text-white/80">{m.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-gradient-warm py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader kicker="Local & Loved" title="Proudly Serving Our Community" />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <iframe title="Bakery location" className="h-full w-full" loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-99.20%2C19.40%2C-99.10%2C19.45&layer=mapnik" />
            </div>
            <div className="grid gap-4 self-center">
              {[
                { icon: MapPin, title: "Local Area Coverage", text: "Serving families across the neighborhood and surrounding districts." },
                { icon: Croissant, title: "In-Store Pickup", text: "Walk in, smell the bread, leave with a warm bag." },
                { icon: Cake, title: "Custom Orders", text: "Birthdays, weddings, quinceañeras — call us 48 hours ahead." },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 rounded-2xl bg-card/80 p-5 shadow-soft backdrop-blur-sm">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--rose)]/40 text-primary">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 sm:py-32">
        <SectionHeader kicker="Say Hello" title="Visit Us Today"
          sub="Drop in for warm bread, or send a note — we love hearing from neighbors." />
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Address", text: "123 Main Street, Your City, ST 00000" },
              { icon: Phone, title: "Phone", text: "(555) 123-4567" },
              { icon: Mail, title: "Email", text: "hello@laideal2.com" },
              { icon: Clock, title: "Hours", text: "Monday – Sunday · 6:00 AM – 9:00 PM" },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--rose)]/40 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
                  <p className="mt-1 text-base font-medium">{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 shadow-lift">
            <div className="grid gap-4">
              {[
                { k: "name", label: "Name", type: "text" },
                { k: "email", label: "Email", type: "email" },
                { k: "phone", label: "Phone", type: "tel" },
              ].map((f) => (
                <label key={f.k} className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.label}</span>
                  <input required type={f.type} value={(form as any)[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </label>
              ))}
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</span>
                <textarea required rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
              <button type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/90">
                {sent ? "Thanks! We'll be in touch." : (<><Send className="h-4 w-4" /> Send Message</>)}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#products", label: "Menu" },
    { href: "#why", label: "Why Us" },
    { href: "#about", label: "Our Story" },
    { href: "#contact", label: "Visit" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/70 px-5 py-3 shadow-soft backdrop-blur-xl sm:mx-6 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Cookie className="h-4 w-4" />
          </span>
          <span className="truncate font-display text-lg font-semibold sm:text-xl">La Ideal 2</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-foreground/70 transition hover:text-primary">{l.label}</a>
          ))}
        </nav>
        <a href="tel:+10000000000"
          className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:inline-flex">
          <Phone className="h-4 w-4" /> Call
        </a>
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden">
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="mx-6 mt-2 rounded-2xl border border-border bg-background/95 p-4 shadow-lift backdrop-blur md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary/95 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--rose)]/30">
              <Cookie className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold">La Ideal 2</span>
          </div>
          <p className="mt-4 text-sm opacity-80">Freshly baked, every day. Made with love for our community.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><a href="#products" className="hover:opacity-100">Menu</a></li>
            <li><a href="#why" className="hover:opacity-100">Why Us</a></li>
            <li><a href="#about" className="hover:opacity-100">Our Story</a></li>
            <li><a href="#contact" className="hover:opacity-100">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>123 Main Street</li>
            <li>(555) 123-4567</li>
            <li>hello@laideal2.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Follow</h4>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs opacity-70 sm:flex-row">
          <p>© {new Date().getFullYear()} Pasteleria Y Panaderia La Ideal 2. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:opacity-100">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl px-6 text-center">
      <motion.p {...fadeUp} className="font-script text-2xl text-[var(--caramel)]">{kicker}</motion.p>
      <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}
        className="mt-2 text-4xl sm:text-5xl">{title}</motion.h2>
      {sub && <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}
        className="mt-4 text-base text-muted-foreground">{sub}</motion.p>}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
      {children}
    </span>
  );
}

function FloatingBlob({ className }: { className: string }) {
  return (
    <motion.div aria-hidden
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute -z-0 rounded-full blur-3xl ${className}`} />
  );
}
