import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  FlaskConical,
  Award,
  Sparkles,
  ShoppingBag,
  Menu,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { CountUp } from "@/components/count-up";

import bannerVideo from "@/assets/banner-lifestyle.mp4.asset.json";
import magnesiumVideo from "@/assets/magnesium.mp4.asset.json";
import hydrationVideo from "@/assets/hydration.mp4.asset.json";
import creatineVideo from "@/assets/creatine.mp4.asset.json";
import tabletVideo from "@/assets/tablet.mp4.asset.json";
import mountainImg from "@/assets/mountain.jpg.asset.json";
import capsulesImg from "@/assets/capsules.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foundry — Precision Nutrition for High-Performers" },
      {
        name: "description",
        content:
          "Data-driven nutrition matched to your biology. Every compound sourced, tested, and verified.",
      },
      { property: "og:title", content: "Foundry — Precision Nutrition" },
      {
        property: "og:description",
        content: "Clinically dosed, third-party verified, engineered for performance.",
      },
    ],
  }),
  component: Index,
});

const products = [
  {
    tag: "FDR-02",
    name: "Magnesium Glycinate",
    desc: "Down-regulation & deep recovery.",
    price: "$38",
    video: magnesiumVideo.url,
  },
  {
    tag: "FDR-03",
    name: "Hydration Matrix",
    desc: "Cellular volumization & electrolytes.",
    price: "$44",
    video: hydrationVideo.url,
  },
  {
    tag: "FDR-01",
    name: "Creatine Monohydrate",
    desc: "ATP regeneration. Explosive output.",
    price: "$42",
    video: creatineVideo.url,
  },
];

const standards = [
  { icon: ShieldCheck, label: "cGMP Certified" },
  { icon: Award, label: "NSF Certified" },
  { icon: FlaskConical, label: "Lab Verified" },
  { icon: Sparkles, label: "Bioavailable" },
];

const stats = [
  { v: 1284, l: "Biomarkers tracked" },
  { v: 6.2, l: "Avg potency vs market", suffix: "×", decimals: 1 },
  { v: 0, l: "Proprietary blends" },
  { v: 27, l: "Lab partners worldwide" },
];

function Index() {
  const statRef = useReveal();
  const productsRef = useReveal();
  const standardsRef = useReveal();
  const scienceRef = useReveal();
  const reportRef = useReveal();
  const processRef = useReveal();
  const ctaRef = useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ============ NAV ============ */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-6">
          <div className="font-display text-2xl font-black tracking-tight text-white">
            Foundry<span className="text-[color:var(--rust)]">.</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.25em] uppercase text-white/80">
            <a href="#shop" className="link-underline hover:text-white transition">Shop</a>
            <a href="#science" className="link-underline hover:text-white transition">Science</a>
            <a href="#standards" className="link-underline hover:text-white transition">Standards</a>
            <a href="#protocol" className="link-underline hover:text-white transition">Protocol</a>
          </nav>
          <div className="flex items-center gap-4 text-white">
            <button
              aria-label="Cart"
              className="relative hover:text-[color:var(--rust)] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 text-[10px] bg-[color:var(--rust)] text-white rounded-full w-4 h-4 grid place-items-center">2</span>
            </button>
            <button className="md:hidden" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ============ HERO BANNER VIDEO ============ */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden grain">
        <video
          src={bannerVideo.url}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
          <div
            className="max-w-3xl text-white"
            style={{ animation: "fade-up 1s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <div className="text-[11px] tracking-[0.35em] font-medium mb-5 text-[color:var(--rust)] uppercase">
              — Precision Nutrition · Est. 2021
            </div>
            <h1 className="font-display font-black leading-[0.92] tracking-tight text-[clamp(2.75rem,8vw,7.5rem)]">
              Forge your
              <br />
              <span className="italic font-medium text-[color:var(--rust)]">foundation.</span>
            </h1>
            <p className="mt-6 max-w-md text-white/80 text-base md:text-lg leading-relaxed">
              Data-driven nutrition for the modern high-performer. Every formula matched to your
              biometrics — no proprietary blends, no filler.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="btn-shine inline-flex items-center gap-2 bg-[color:var(--rust)] text-white px-7 py-4 text-[11px] font-bold tracking-[0.25em] uppercase"
              >
                Shop the Range <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#science"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-colors duration-300"
              >
                The Science
              </a>
            </div>
          </div>

          {/* corner detail */}
          <div className="hidden md:flex absolute bottom-10 right-10 items-center gap-3 text-white/70 text-[10px] tracking-[0.35em] uppercase">
            <div className="w-12 h-px bg-white/40" />
            Scroll
          </div>
        </div>
      </section>

      {/* ============ MARQUEE STRIP ============ */}
      <div className="bg-[color:var(--rust)] text-white py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap text-[11px] font-medium tracking-[0.35em] uppercase marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              <span>✦ NSF Certified</span>
              <span>✦ Third-Party Verified</span>
              <span>✦ Clinically Dosed</span>
              <span>✦ No Proprietary Blends</span>
              <span>✦ Bioavailable Forms</span>
              <span>✦ Made in USA</span>
              <span>✦ Free Shipping Over $100</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ STAT BAND ============ */}
      <section className="border-b border-black/10">
        <div
          ref={statRef}
          className="reveal max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-y-10"
        >
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`px-2 md:px-8 ${i !== 0 ? "md:border-l md:border-black/10" : ""}`}
            >
              <div className="stat-pop font-display text-4xl md:text-6xl font-black text-[color:var(--rust)] leading-none">
                <CountUp value={s.v} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-black/60 mt-3">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PRODUCTS — 360° on hover ============ */}
      <section id="shop" className="border-b border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div
            ref={productsRef}
            className="reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <div className="text-[color:var(--rust)] text-[11px] tracking-[0.35em] font-bold mb-4 uppercase">
                — The Range
              </div>
              <h2 className="font-display font-black text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] tracking-tight max-w-3xl">
                Three formulas.<br />
                <span className="italic font-medium text-[color:var(--rust)]">Zero compromise.</span>
              </h2>
            </div>
            <a
              href="#protocol"
              className="link-underline text-[11px] tracking-[0.25em] uppercase text-black/70 hover:text-[color:var(--rust)] inline-flex items-center gap-2 self-start md:self-auto"
            >
              Prefer a personalized stack? <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {products.map((p) => (
              <article
                key={p.name}
                className="product-card group relative bg-[color:var(--cream)] overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <ProductVideo src={p.video} />
                  <div className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.3em] uppercase text-black/60 bg-white/80 backdrop-blur px-2.5 py-1">
                    {p.tag}
                  </div>
                  <button
                    aria-label={`Add ${p.name}`}
                    className="absolute top-4 right-4 w-10 h-10 grid place-items-center bg-black text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-[color:var(--rust)]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6 md:p-7 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-xs text-black/60 mt-1.5">{p.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-2xl font-black text-[color:var(--rust)]">
                      {p.price}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-black/50">/mo</div>
                  </div>
                </div>
                <div className="px-6 md:px-7 pb-6">
                  <button className="w-full flex items-center justify-between text-[11px] tracking-[0.25em] uppercase font-bold border-t border-black/10 pt-5 hover:text-[color:var(--rust)] transition-colors">
                    Add to Stack <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STANDARDS ============ */}
      <section id="standards" className="bg-black text-white border-b border-black/10">
        <div
          ref={standardsRef}
          className="reveal max-w-[1400px] mx-auto px-6 md:px-10 py-20 flex flex-col lg:flex-row items-start lg:items-center gap-10 justify-between"
        >
          <div className="max-w-md">
            <div className="text-[color:var(--rust)] text-[11px] tracking-[0.35em] font-bold mb-4 uppercase">
              — Tested at the Source
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black leading-[1.05] tracking-tight">
              Uncompromising standards.{" "}
              <span className="italic font-medium text-white/60">Every batch.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 max-w-2xl">
            {standards.map((s) => (
              <div
                key={s.label}
                className="group flex flex-col gap-3 cursor-default transition-transform duration-300 hover:-translate-y-1"
              >
                <s.icon className="w-7 h-7 text-[color:var(--rust)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                <div className="text-xs font-bold tracking-[0.2em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCT VIDEO (tablet) ============ */}
      <section id="science" className="border-b border-black/10 overflow-hidden">
        <div
          ref={scienceRef}
          className="reveal max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="text-[color:var(--rust)] text-[11px] tracking-[0.35em] font-bold mb-4 uppercase">
              — Proven at the Source
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">
              Most pre-workouts under-dose.{" "}
              <span className="italic font-medium text-[color:var(--rust)]">FDR-01® doesn't.</span>
            </h2>
            <p className="text-black/70 mt-6 text-base max-w-md leading-relaxed">
              Independent third-party assays confirm full-spectrum potency at clinical thresholds —
              verified batch-by-batch, never proprietary.
            </p>

            <div className="grid grid-cols-2 gap-5 max-w-md mt-10">
              <div className="border-l-2 border-[color:var(--rust)] pl-5">
                <div className="font-display text-4xl font-black text-[color:var(--rust)]">
                  <CountUp value={6.2} decimals={1} suffix="×" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-black/60 mt-2">
                  Potency vs category
                </div>
              </div>
              <div className="border-l-2 border-black pl-5">
                <div className="font-display text-4xl font-black">
                  <CountUp value={3.4} decimals={1} suffix="g" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-black/60 mt-2">
                  Beta-alanine / scoop
                </div>
              </div>
            </div>

            <a
              href="#shop"
              className="mt-10 inline-flex items-center gap-2 border border-black px-7 py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-colors duration-300"
            >
              View Certificate of Analysis <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-[420px] h-[420px] bg-[color:var(--rust)]/20 rounded-full blur-3xl glow-pulse pointer-events-none" />
            <div className="relative aspect-[5/4] bg-[color:var(--cream)] overflow-hidden">
              <video
                src={tabletVideo.url}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="text-[10px] tracking-[0.35em] uppercase mb-1 opacity-80">
                    Live Batch — 2026.06
                  </div>
                  <div className="font-display text-2xl font-black">
                    Tablet 01 · 30 ct
                  </div>
                </div>
                <div className="font-display text-3xl font-black bg-[color:var(--rust)] px-4 py-2">
                  $52
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FIELD REPORT ============ */}
      <section className="bg-[color:var(--cream)] border-b border-black/10">
        <div
          ref={reportRef}
          className="reveal max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-36 grid lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-3 text-[color:var(--rust)] text-[11px] tracking-[0.35em] font-bold uppercase">
            Field Report
            <br />
            <span className="text-black/60 font-medium">04 / 2026</span>
          </div>
          <div className="lg:col-span-9">
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="text-[color:var(--rust)]">"</span>Third cycle on the Endurance stack.
              Recovery feels{" "}
              <span className="italic font-medium text-[color:var(--rust)]">measurably different</span>{" "}
              — and my labs agree.<span className="text-[color:var(--rust)]">"</span>
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[color:var(--rust)] text-white grid place-items-center text-xs font-bold">
                MR
              </div>
              <div>
                <div className="text-sm font-bold">M.R.</div>
                <div className="text-[10px] text-black/60 uppercase tracking-[0.25em]">
                  Crossfit L2 Coach · Verified Order
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROTOCOL ============ */}
      <section id="protocol" className="border-b border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="text-[color:var(--rust)] text-[11px] tracking-[0.35em] font-bold mb-4 uppercase">
            — The Protocol
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-16 max-w-2xl leading-[0.95] tracking-tight">
            Four steps from biology{" "}
            <span className="italic font-medium text-[color:var(--rust)]">to bottle.</span>
          </h2>
          <div ref={processRef} className="reveal grid md:grid-cols-4 gap-10 md:gap-6 relative">
            <div className="absolute top-7 left-0 right-0 h-px bg-black/15 hidden md:block" />
            {[
              { n: "01", t: "Assess", d: "Complete the 4-minute biometric questionnaire." },
              { n: "02", t: "Match", d: "Algorithm pairs you with a clinical-dose protocol." },
              { n: "03", t: "Verify", d: "Every batch lab-tested. CoA published." },
              { n: "04", t: "Cycle", d: "Re-assess every 90 days. Adjust as biology shifts." },
            ].map((s) => (
              <div key={s.n} className="group relative">
                <div className="w-14 h-14 rounded-full bg-[color:var(--rust)] text-white grid place-items-center font-display font-black mb-5 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {s.n}
                </div>
                <div className="font-display text-2xl font-black mb-2">{s.t}</div>
                <p className="text-sm text-black/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MOUNTAIN CTA ============ */}
      <section className="relative border-b border-black/10">
        <img
          src={mountainImg.url}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div
          ref={ctaRef}
          className="reveal relative max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-40 grid lg:grid-cols-2"
        >
          <div>
            <div className="text-[color:var(--rust)] text-[11px] tracking-[0.35em] font-bold mb-4 uppercase">
              — Forge Your Foundation
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              Built for the<br />
              <span className="italic font-medium text-[color:var(--rust)]">uphill cycle.</span>
            </h2>
            <p className="text-black/70 max-w-md mb-8 text-base leading-relaxed">
              Take the 4-minute biometric assessment. Get a stack matched to your training,
              recovery, and goals — shipped in 48 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-shine inline-flex items-center gap-2 bg-[color:var(--rust)] text-white px-7 py-4 text-[11px] font-bold tracking-[0.25em] uppercase">
                Start Assessment <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button className="inline-flex items-center gap-2 border border-black bg-white/60 backdrop-blur px-7 py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-colors duration-300">
                Browse Range
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 grid md:grid-cols-4 gap-10">
          <div>
            <div className="font-display text-3xl font-black tracking-tight mb-4">
              Foundry<span className="text-[color:var(--rust)]">.</span>
            </div>
            <p className="text-xs text-black/60 max-w-xs leading-relaxed">
              Pioneering precision performance nutrition{" "}
              <span className="text-[color:var(--rust)]">[since 2021]</span>. Engineered for the
              modern high-performer.
            </p>
          </div>
          {[
            { h: "Product", items: ["Stacks", "Daily Essentials", "Assessment", "Subscriptions"] },
            { h: "Company", items: ["Science", "Standards", "Contact", "Press"] },
            { h: "Legal", items: ["Privacy", "Terms", "Accessibility"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-[10px] tracking-[0.35em] uppercase text-[color:var(--rust)] font-bold mb-5">
                {col.h}
              </div>
              <ul className="space-y-3 text-sm">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="link-underline inline-block cursor-pointer hover:text-[color:var(--rust)] transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-black/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 text-xs text-black/60 flex flex-wrap justify-between gap-3">
            <div>© 2026 Foundry. All rights reserved.</div>
            <div>Engineered in the United States.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Product video that rotates 360° (plays through full clip)
 * only while the user hovers / focuses the card.
 */
function ProductVideo({ src }: { src: string }) {
  return (
    <video
      src={src}
      className="product-video absolute inset-0 w-full h-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
      onMouseEnter={(e) => {
        const v = e.currentTarget;
        v.currentTime = 0;
        void v.play();
      }}
      onMouseLeave={(e) => {
        const v = e.currentTarget;
        v.pause();
        v.currentTime = 0;
      }}
      onFocus={(e) => void e.currentTarget.play()}
      onBlur={(e) => e.currentTarget.pause()}
    />
  );
}
