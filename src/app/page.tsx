"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
  CountUp,
  ParallaxImage,
  PremiumCard,
} from "@/components/Animations";

/* ================================================================
   NAVBAR
   ================================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.92)] backdrop-blur-[24px] backdrop-saturate-[180%] border-b border-white/[0.08]"
          : "bg-[rgba(8,8,8,0.6)] backdrop-blur-[20px] border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between w-full h-16">
        <a href="#" className="flex items-center gap-[10px] group">
          <motion.svg 
            width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <path d="M20 4L4 36H11L20 18L29 36H36L20 4Z" fill="#c0c0c0"/>
            <path d="M20 12L13 26H27L20 12Z" fill="#c0c0c0"/>
          </motion.svg>
          <div className="flex flex-col justify-center">
            <span className="text-[13px] font-[300] tracking-[0.2em] text-[#ffffff] uppercase leading-none">AUREN</span>
            <span className="text-[8px] font-normal tracking-[0.35em] text-[#666666] mt-[1px] leading-none block">— STUDIO —</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-9 text-[14px] text-[#aaaaaa] font-medium">
          {["Services", "Portfolio", "Pricing", "Results", "About"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-[#ffffff] transition-colors duration-200"
            >
              {l}
            </a>
          ))}
          <MagneticButton
            href="#contact"
            className="bg-[#ffffff] text-[#000000] font-bold px-6 py-2.5 rounded-full text-[13px] inline-block hover:bg-[#ff4d00] hover:text-[#ffffff] transition-colors"
          >
            Book a Call
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
}

/* ================================================================
   HERO — cinematic staggered load
   ================================================================ */
const heroLine = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const techs = [
  "Next.js","React","Tailwind CSS","TypeScript","Meta Ads","Instagram","SEO",
  "Google Ads","Figma","Vercel","Supabase","Analytics",
];

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Orange glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,77,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full text-center relative z-10 py-32">

        {/* Badge — FIX 3: restored with animated pulse dot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
            </span>
            📍 Based in Madurai · Serving South Tamil Nadu
          </div>
        </motion.div>

        {/* Headline — FIX 1: Tailwind responsive classes, no clamp/vw */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-center">
            <motion.span className="block text-white" custom={0} initial="hidden" animate="visible" variants={heroLine}>
              Madurai businesses get more
            </motion.span>
            <motion.span className="block text-[#ff4d00]" custom={1} initial="hidden" animate="visible" variants={heroLine}>
              customers through Instagram.
            </motion.span>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          className="text-[#999999] text-base md:text-lg leading-[1.7] max-w-xl mx-auto mt-6 mb-11"
        >
          We handle the ads, the posts, the website — and the results. No contracts. No fluff. Just growth. Starting ₹8,000/month.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <MagneticButton
            href="#contact"
            className="bg-white text-black font-bold px-10 py-4 rounded-full text-[15px] inline-flex items-center gap-2 hover:bg-[#ff4d00] hover:text-white transition-colors duration-300"
          >
            Get a Free Strategy Call →
          </MagneticButton>
          <MagneticButton
            href="#results"
            className="text-white font-semibold px-10 py-4 rounded-full text-[15px] border border-white/20 hover:border-white/40 transition-colors duration-300 inline-block"
          >
            See Our Results ↓
          </MagneticButton>
        </motion.div>
      </div>

      {/* Tech ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-0 right-0 overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="ticker-track">
          {[...techs, ...techs].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-7 whitespace-nowrap text-[#666666] text-sm font-semibold hover:text-white transition-colors cursor-default"
            >
              <span className="w-1 h-1 bg-[#444444] rounded-full" />
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ================================================================
   SERVICES
   ================================================================ */
const services = [
  { icon: <Globe className="w-6 h-6" />, title: "Web Development", desc: "Custom websites built with Next.js — fast, responsive & designed to convert visitors into customers.", tags: ["Next.js","React","Tailwind"] },
  { icon: <Users className="w-6 h-6" />, title: "Social Media Management", desc: "We handle your entire Instagram — posts, stories, reels, DMs & engagement so you can focus on your business.", tags: ["Content","Strategy","Growth"] },
  { icon: <Zap className="w-6 h-6" />, title: "Instagram Ad Campaigns", desc: "Targeted ad campaigns that bring real enquiries & bookings — not just likes. Every rupee optimised for ROI.", tags: ["Meta Ads","Targeting","WhatsApp CTA"] },
  { icon: <Search className="w-6 h-6" />, title: "SEO Optimisation", desc: "Rank on Google when customers search for your services. On-page SEO, local SEO & content strategy included.", tags: ["Google","Local SEO","Keywords"] },
];

function Services() {
  return (
    <section id="services" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Services</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Four ways we <span className="gradient-text">grow your business.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.12}>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <PremiumCard className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-10 relative overflow-hidden group cursor-default">
                <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-b from-[rgba(255,77,0,0.04)] to-transparent group-hover:h-32 transition-all duration-500 pointer-events-none" />
                <div className="w-[52px] h-[52px] bg-[rgba(255,77,0,0.06)] rounded-2xl flex items-center justify-center mb-6 text-[#ff4d00] relative">
                  {s.icon}
                </div>
                <h3 className="font-display text-[22px] font-[600] text-[#ffffff] tracking-[-0.5px] mb-2">{s.title}</h3>
                <p className="text-[#888888] text-[15px] leading-[1.7] mb-5">{s.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] text-[#aaaaaa] bg-[rgba(255,255,255,0.06)] px-[10px] py-[3px] rounded-[6px]">{t}</span>
                  ))}
                </div>
              </PremiumCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ================================================================
   INDUSTRIES
   ================================================================ */
const industries = [
  { icon: "💍", label: "Bridal Studios" },
  { icon: "💇", label: "Salons & Spas" },
  { icon: "🏋️", label: "Gyms & Fitness" },
  { icon: "🍽️", label: "Restaurants & Cafes" },
  { icon: "👗", label: "Boutiques & Fashion" },
  { icon: "🎓", label: "Coaching Centres" },
  { icon: "🏥", label: "Clinics & Doctors" },
  { icon: "🏠", label: "Real Estate" },
];

function Industries() {
  return (
    <section id="industries" className="w-full py-28 bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 uppercase tracking-[0.15em]">Industries</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-4 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            We know your industry.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-[#888888] text-[17px] text-center max-w-[500px] mx-auto mb-16">
            We&apos;ve built growth strategies for businesses across Madurai and South Tamil Nadu.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" stagger={0.07}>
          {industries.map((ind) => (
            <StaggerItem key={ind.label}>
              <div
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-[16px] px-6 py-8 text-center transition-all duration-300 hover:scale-[1.04] hover:border-[rgba(255,77,0,0.4)] hover:shadow-[0_8px_32px_rgba(255,77,0,0.08)] cursor-default"
                style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
              >
                <div className="text-[32px] mb-3">{ind.icon}</div>
                <div className="text-[13px] font-medium text-[#e0e0e0] mt-[12px] tracking-[0.05em]">
                  {ind.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ================================================================
   PORTFOLIO with parallax images
   ================================================================ */
const projects = [
  { title: "IronForge Gym", cat: "Web Development", desc: "Premium fitness studio website — programs, trainers, schedule & booking system.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", link: "/demos/gym/index.html" },
  { title: "Aura Interiors", cat: "Web Dev + Branding", desc: "Luxury interior design studio — portfolio gallery, services & client testimonials.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", link: "/demos/interior/index.html" },
  { title: "Bridal Studio", cat: "Web Dev + SMM + Ads", desc: "Premium bridal MUA portfolio — gallery, booking calendar & WhatsApp integration.", img: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80", link: "https://dinesssh.github.io/bridal-demo/" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Portfolio</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Work we&apos;re <span className="gradient-text">proud of.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <a href={p.link} target={p.link.startsWith("#") ? "_self" : "_blank"} rel="noopener noreferrer">
                <PremiumCard className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-3xl overflow-hidden cursor-pointer group">
                  <div className="h-[220px] relative">
                    <ParallaxImage src={p.img} alt={p.title} className="h-full" speed={0.08} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                      <span className="bg-white text-[#111] font-bold text-sm px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 shadow-lg">
                        <ExternalLink className="w-4 h-4" /> View Live Demo
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <span className="text-[11px] text-[#ff4d00] font-bold tracking-[1px] uppercase">{p.cat}</span>
                    <h3 className="font-display text-xl font-bold tracking-[-0.3px] mt-1.5 mb-1.5 text-[#ffffff]">{p.title}</h3>
                    <p className="text-[#888888] text-sm leading-[1.6]">{p.desc}</p>
                  </div>
                </PremiumCard>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}

/* ================================================================
   TESTIMONIALS
   ================================================================ */
const testimonials = [
  {
    quote: "Dinessh got us 12 WhatsApp enquiries in the first week. Our bookings increased immediately. Best investment we made.",
    name: "Priya Lakshmi",
    biz: "Bridal MUA, Madurai",
  },
  {
    quote: "Our Instagram went from 400 to 800 followers in one month. The reels he creates look completely professional.",
    name: "Kavitha R.",
    biz: "Salon Owner, Madurai",
  },
  {
    quote: "Finally a website that actually looks premium. My clients always compliment it and it loads super fast.",
    name: "Arjun S.",
    biz: "Gym Owner, Madurai",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Testimonials</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Don&apos;t just <span className="gradient-text">take our word.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] px-8 py-10 h-full flex flex-col">
                <div className="text-[#ff4d00] text-[16px] mb-4 tracking-[2px]">★★★★★</div>
                <div className="text-[48px] text-[rgba(255,77,0,0.3)] font-serif leading-none mb-[-10px] mt-[-10px]">“</div>
                <p className="text-[15px] leading-[1.7] text-[#d0d0d0] italic flex-1">{t.quote}</p>
                <div className="mt-5">
                  <div className="font-semibold text-white text-[14px]">{t.name}</div>
                  <div className="text-[12px] text-[#666666] mt-1">{t.biz}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <Reveal delay={0.2}>
          <p className="text-center text-[#666666] text-[11px] mt-12">
            * Results shown are from real campaign data. Names used with permission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   PRICING
   ================================================================ */
const plans = [
  { name: "Starter", price: "₹8,000", per: "/mo", desc: "Perfect for small businesses starting their digital journey.", pop: false, bestValue: false, feats: ["Single-page website","Social media management","3–4 posts per week","Instagram ad campaign setup","Monthly performance report","WhatsApp & email support"] },
  { name: "Premium", price: "₹15,000", per: "/mo", desc: "For businesses serious about growth & online dominance.", pop: true, bestValue: false, feats: ["Multi-page website + SEO","Social media management","5–6 posts per week + daily stories","Advanced ad campaigns","Weekly performance reports","Competitor analysis","Google My Business setup","Priority support"] },
  { name: "Website Only", price: "₹8,000", per: "", desc: "One-time website development. Clean, fast & mobile-ready.", pop: false, bestValue: true, feats: ["Custom designed website","Mobile responsive","Contact form + WhatsApp button","Basic SEO setup","Google Maps integration","1 month free support"] },
];

function Pricing() {
  return (
    <section id="pricing" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Pricing</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-4 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Transparent <span className="gradient-text">pricing.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}><p className="text-[#888888] text-[17px] text-center max-w-[500px] mx-auto mb-16">No hidden fees. No surprises. Pick what works for you.</p></Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch" stagger={0.12}>
          {plans.map((p) => (
            <StaggerItem key={p.name}>
              <PremiumCard
                className={`border rounded-[20px] p-10 flex flex-col relative ${
                  p.pop
                    ? "bg-[rgba(255,77,0,0.05)] border-[rgba(255,77,0,0.25)]"
                    : "bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)]"
                }`}
              >
                {p.pop && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff4d00] text-white text-[11px] font-extrabold px-5 py-1 rounded-full">
                    Popular
                  </span>
                )}
                {p.bestValue && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[11px] font-extrabold px-5 py-1 rounded-full whitespace-nowrap">
                    Best Value
                  </span>
                )}
                <h3 className="font-display text-xl font-[700] mb-1 text-[#ffffff]">{p.name}</h3>
                <p className="text-[#888888] text-sm mb-7">{p.desc}</p>
                <div className="font-display text-[52px] font-[700] tracking-[-3px] mb-1 text-[#ffffff]">{p.price}</div>
                <p className="text-[#666666] text-sm mb-8">{p.per ? "per month" : "one-time payment"}</p>
                <div className="flex flex-col gap-3.5 mb-9 flex-1">
                  {p.feats.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-[#aaaaaa] font-medium">
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#ff4d00] flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <MagneticButton
                  href="#contact"
                  className={`block text-center font-bold text-[15px] py-4 rounded-full transition-all duration-300 ${
                    p.pop
                      ? "bg-[#ff4d00] text-[#ffffff] hover:bg-[#e64500]"
                      : "bg-[rgba(255,255,255,0.06)] text-[#ffffff] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)]"
                  }`}
                >
                  Get Started
                </MagneticButton>
              </PremiumCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ================================================================
   RESULTS — animated count-up numbers
   ================================================================ */
const stats = [
  { num: 100, suffix: "%", prefix: "", label: "Client Satisfaction" },
  { num: 3, suffix: "x", prefix: "", label: "Avg. Engagement Growth" },
  { num: 1, suffix: "+", prefix: "", label: "Campaigns Managed" },
  { num: 1, suffix: "h", prefix: "<", label: "Response Time" },
];

const feats = [
  { icon: <Smartphone className="w-[18px] h-[18px]" />, title: "100% Responsive", desc: "Perfect on every device" },
  { icon: <Zap className="w-[18px] h-[18px]" />, title: "Lightning Fast", desc: "PageSpeed 95+" },
  { icon: <Search className="w-[18px] h-[18px]" />, title: "SEO Ready", desc: "Built to rank on Google" },
  { icon: <TrendingUp className="w-[18px] h-[18px]" />, title: "ROI Focused", desc: "Every rupee optimised" },
  { icon: <BarChart3 className="w-[18px] h-[18px]" />, title: "Analytics", desc: "Track everything" },
  { icon: <Rocket className="w-[18px] h-[18px]" />, title: "Full Service", desc: "A to Z managed for you" },
];

function Results() {
  return (
    <section id="results" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Results</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Numbers that <span className="gradient-text">speak for themselves.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center" stagger={0.1}>
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 text-center">
                <div className="font-display font-[700] tracking-[-2px] text-[#ffffff] mb-1" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  <CountUp target={s.num} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="text-[#666666] text-[13px] font-medium">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" stagger={0.08}>
          {feats.map((f) => (
            <StaggerItem key={f.title}>
              <PremiumCard className="flex items-start gap-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6">
                <div className="w-10 h-10 bg-[rgba(255,77,0,0.06)] rounded-xl flex items-center justify-center text-[#ff4d00] flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-[15px] font-[700] mb-0.5 text-[#ffffff]">{f.title}</h4>
                  <p className="text-[13px] text-[#888888]">{f.desc}</p>
                </div>
              </PremiumCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ================================================================
   FAQ
   ================================================================ */
const faqs = [
  { q: "What services do you offer?", a: "We offer web development (Next.js), social media management, Instagram/Facebook ad campaigns, SEO optimisation, and complete digital marketing packages." },
  { q: "How long does a website take?", a: "A single-page website takes 3–5 days. A multi-page website takes 1–2 weeks depending on complexity." },
  { q: "Do you manage Instagram accounts?", a: "Yes! We handle everything — posting, stories, reels, hashtags, DM replies, comment management, and monthly reports." },
  { q: "How do Instagram ads work?", a: "We create targeted ad campaigns shown to your ideal audience. You pay the ad budget directly to Meta — we handle the strategy, creatives, and optimisation." },
  { q: "Can I see results before committing?", a: "Absolutely. We offer monthly plans with no lock-in contracts. You'll see performance reports and can decide each month." },
  { q: "Why not use Wix or Squarespace?", a: "Page builders are limited. Our custom-coded websites are faster, rank better on Google, and give you unlimited customisation — no templates." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="w-full py-28 bg-[#080808]">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 uppercase tracking-[0.15em]">FAQ</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Got <span className="gradient-text">questions?</span>
          </h2>
        </Reveal>

        <StaggerContainer className="flex flex-col gap-3" stagger={0.06}>
          {faqs.map((f, i) => (
            <StaggerItem key={i}>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.15)] transition-colors">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-[600] text-[15px] pr-4 text-[#ffffff]">{f.q}</span>
                  <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-[18px] h-[18px] text-[#888888] flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[#888888] text-sm leading-[1.7] border-t border-[rgba(255,255,255,0.08)] pt-4 mx-6 mb-0">
                    {f.a}
                  </p>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ================================================================
   ABOUT
   ================================================================ */
function About() {
  return (
    <section id="about" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">About</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            The team behind <span className="gradient-text">AurenStudio.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="max-w-[600px] mx-auto text-center">
            <div className="w-[72px] h-[72px] rounded-full mx-auto mb-6 flex items-center justify-center relative shadow-[0_0_20px_rgba(192,192,192,0.1)]" style={{ background: "linear-gradient(135deg, #1a1a1a, #2a2a2a)", border: "1px solid rgba(192,192,192,0.2)" }}>
              <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 36H11L20 18L29 36H36L20 4Z" fill="#c0c0c0"/>
                <path d="M20 12L13 26H27L20 12Z" fill="#c0c0c0"/>
              </svg>
            </div>
            <p className="text-[12px] text-[#ff4d00] font-[500] tracking-[1px] uppercase mb-2">Digital Marketing & Web Development</p>
            <h3 className="font-display text-[30px] font-[600] tracking-[-0.5px] mb-1 text-[#ffffff]">AurenStudio Team</h3>
            <p className="text-[#888888] text-sm mb-6">Madurai, Tamil Nadu 🇮🇳</p>
            <p className="text-[#888888] text-[15px] leading-[1.8] mb-7">
              We&apos;re a digital marketing and web development team based in Madurai. AurenStudio was built to help local businesses — bridal studios, salons, gyms, restaurants — compete online without overpaying big agencies. We handle every campaign, every post, every website — end to end. When you work with us, you get a dedicated team that treats your business like our own. No fluff, just results.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {["Web Development","Social Media","Ad Campaigns","SEO"].map((s) => (
                <span
                  key={s}
                  className="text-[13px] text-[#aaaaaa] bg-[rgba(255,255,255,0.06)] px-5 py-2 rounded-[6px] font-medium hover:text-[#ff4d00] transition-all duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   CONTACT FORM
   ================================================================ */
function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const res = await fetch("https://formspree.io/f/xpwzabcd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("idle");
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setStatus("idle");
      alert("Oops! There was a problem submitting your form");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10 text-center flex flex-col items-center justify-center mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] h-[400px]">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-16 h-16 bg-[#ff4d00] rounded-full flex items-center justify-center text-white mb-6"
        >
          <CheckCircle2 className="w-8 h-8" />
        </motion.div>
        <h3 className="font-display text-[24px] font-[700] mb-2 text-[#ffffff]">Message received!</h3>
        <p className="text-[#888888] text-[15px] mb-8">
          We&apos;ll send your free strategy within 1 hour. Check WhatsApp or email.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-[#ff4d00] font-semibold text-[14px] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 text-left mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative z-10">
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Full Name</label>
          <input suppressHydrationWarning={true} type="text" name="name" placeholder="Your name" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[15px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors" />
        </div>
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Phone Number</label>
          <input suppressHydrationWarning={true} type="tel" name="phone" placeholder="+91 98765 43210" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[15px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-5">
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Business Type</label>
          <select suppressHydrationWarning={true} name="businessType" defaultValue="" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[14px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors appearance-none">
            <option value="" disabled className="text-[#888888]">Select your business</option>
            <option>Bridal Studio</option>
            <option>Salon & Spa</option>
            <option>Gym & Fitness</option>
            <option>Restaurant & Cafe</option>
            <option>Boutique & Fashion</option>
            <option>Coaching Centre</option>
            <option>Clinic & Hospital</option>
            <option>Real Estate</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Service Needed</label>
          <select suppressHydrationWarning={true} name="service" defaultValue="" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[14px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors appearance-none">
            <option value="" disabled className="text-[#888888]">What do you need?</option>
            <option>Social Media Management</option>
            <option>Instagram Ad Campaign</option>
            <option>Website Development</option>
            <option>Complete Digital Package</option>
            <option>Not Sure — Advise Me</option>
          </select>
        </div>
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Monthly Budget</label>
          <select suppressHydrationWarning={true} name="budget" defaultValue="" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[14px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors appearance-none">
            <option value="" disabled className="text-[#888888]">Your budget range</option>
            <option>Below ₹5,000</option>
            <option>₹5,000–₹10,000</option>
            <option>₹10,000–₹25,000</option>
            <option>₹25,000+</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Message</label>
        <textarea suppressHydrationWarning={true} name="message" rows={3} placeholder="Tell us about your business (optional)" className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[15px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors resize-none"></textarea>
      </div>

      <button suppressHydrationWarning={true} disabled={status === "submitting"} type="submit" className="w-full bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold py-4 rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2">
        {status === "submitting" ? "Sending..." : "Send Enquiry — We'll Reply in 1 Hour →"}
      </button>
    </form>
  );
}

/* ================================================================
   CONTACT
   ================================================================ */
function Contact() {
  return (
    <section id="contact" className="w-full py-28 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-[800px] mx-auto bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[28px] p-8 md:p-16 text-center relative shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,77,0,0.04)_0%,transparent_70%)] pointer-events-none" />

            <div className="inline-flex items-center gap-2 bg-[rgba(255,77,0,0.06)] rounded-full px-5 py-2 text-[13px] text-[#ff4d00] font-bold mb-7 relative z-10">
              <MessageCircle className="w-3.5 h-3.5" /> Let&apos;s Talk
            </div>

            <h2 className="font-display font-[800] tracking-[-1.5px] mb-4 relative z-10 text-[#ffffff]" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
              Let&apos;s grow <span className="gradient-text">your business.</span>
            </h2>
            <p className="text-[#888888] text-[16px] max-w-[420px] mx-auto mb-10 relative z-10 leading-[1.6]">
              Tell us about your business and we&apos;ll send you a free growth strategy within 24 hours. No commitment needed.
            </p>

            <ContactForm />

            <div className="flex justify-center gap-4 flex-wrap mb-10 relative z-10">
              <MagneticButton
                href="https://wa.me/917305757075?text=Hi%2C%20I%20found%20AurenStudio%20online%20and%20I%27m%20interested%20in%20your%20services."
                className="bg-[#25D366] text-white font-bold px-9 py-4 rounded-full text-[15px] inline-flex items-center gap-2 hover:bg-[#20bd5a] hover:shadow-[0_8px_24px_rgba(37,211,102,0.2)] transition-all duration-300"
              >
                <MessageCircle className="w-[18px] h-[18px]" /> WhatsApp Us
              </MagneticButton>
              <MagneticButton
                href="mailto:hello@aurenstudio.com?subject=Project%20Enquiry%20%E2%80%94%20AurenStudio"
                className="bg-[rgba(255,255,255,0.06)] text-[#ffffff] font-bold px-9 py-4 rounded-full text-[15px] inline-flex items-center gap-2 border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
              >
                <Mail className="w-[18px] h-[18px]" /> Send Email
              </MagneticButton>
            </div>

            <div className="flex justify-center gap-7 flex-wrap text-[#888888] text-[13px] relative z-10">
              <div className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-[#ff4d00]" /> +91 73057 57075</div>
              <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#ff4d00]" /> Madurai, India</div>
              <div className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#ff4d00]" /> hello@aurenstudio.com</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   STICKY FLOATING BUTTONS
   ================================================================ */
function StickyButtons() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-7 right-7 z-40 flex flex-col gap-3"
    >
      <MagneticButton
        href="#"
        className="w-[52px] h-[52px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.1)] text-white"
        strength={0.4}
      >
        <MessageCircle className="w-6 h-6" />
      </MagneticButton>
      <MagneticButton
        href="#"
        className="w-[52px] h-[52px] bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.1)] text-white"
        strength={0.4}
      >
        <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
      </MagneticButton>
    </motion.div>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */
function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] py-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-row flex-wrap items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-[10px] group">
          <motion.svg 
            width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <path d="M20 4L4 36H11L20 18L29 36H36L20 4Z" fill="#c0c0c0"/>
            <path d="M20 12L13 26H27L20 12Z" fill="#c0c0c0"/>
          </motion.svg>
          <div className="flex flex-col justify-center">
            <span className="text-[13px] font-[300] tracking-[0.2em] text-[#ffffff] uppercase leading-none">AUREN</span>
            <span className="text-[8px] font-normal tracking-[0.35em] text-[#666666] mt-[1px] leading-none block">— STUDIO —</span>
          </div>
        </a>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/aurenstudio" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#ffffff] transition-colors">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="https://linkedin.com/company/aurenstudio" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#ffffff] transition-colors">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/dinesssh" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#ffffff] transition-colors">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-[#555555]">
        <p className="text-[#444444]">© {new Date().getFullYear()} AurenStudio · Madurai, Tamil Nadu 🇮🇳</p>
      </div>
    </footer>
  );
}

/* ================================================================
   PAGE
   ================================================================ */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Results />
      <FAQ />
      <About />
      <Contact />
      <StickyButtons />
      <Footer />
    </>
  );
}


