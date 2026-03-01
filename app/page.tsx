"use client";

import { useState } from "react";
import Image from "next/image";

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=600&q=80`;

const projects = [
  {
    number: "001",
    title: "AI agents",
    description: "AI agents empower new competencies for employers",
    category: "SaaS · AI · Enterprise",
    color: "#1a1a2e",
    image: img("1541701494587-cb58502866ab"),
  },
  {
    number: "002",
    title: "Pinzout checkout",
    description: "A modular checkout experience similar to Apple Pay",
    category: "Fintech · Mobile",
    color: "#0f1923",
    image: img("1564424555153-04228f0aa7ee"),
  },
  {
    number: "003",
    title: "Unlocking enterprise",
    description: "Enterprise tooling that shines for enterprise customers",
    category: "SaaS · Reporting",
    color: "#111827",
    image: img("1460925895917-afdab827c52f"),
  },
  {
    number: "004",
    title: "Reducing spend by 40%",
    description: "Reducing card spending and mitigating card fraud",
    category: "Fintech · Security",
    color: "#0d1117",
    image: img("1563013544-824ae1b704d3"),
  },
  {
    number: "005",
    title: "Solace",
    description: "An event stream management productivity platform",
    category: "SaaS · Enterprise",
    color: "#161b22",
    image: img("1498050108023-c5249f4df085"),
  },
  {
    number: "006",
    title: "Increasing transfers",
    description: "Reducing friction in transferring earned wages",
    category: "Fintech · Mobile",
    color: "#0f172a",
    image: img("1488509082528-cefbba5ad692"),
  },
  {
    number: "007",
    title: "Admin compare and sync",
    description: "Streamlined admin tools for data synchronization",
    category: "SaaS · Operations",
    color: "#1e1b4b",
    image: img("1551288049-bebda4e38f71"),
  },
  {
    number: "008",
    title: "MSO camera sky social",
    description: "Connecting creators to fans and brands in new ways",
    category: "Social · Mobile",
    color: "#0c0a09",
    image: img("1423784346385-c1d4dac9893a"),
  },
  {
    number: "009",
    title: "Qualcomm",
    description: "Enterprise device management solution",
    category: "Enterprise · IoT",
    color: "#1c1917",
    image: img("1518770660439-4636190af475"),
  },
];

const categories = ["All", "SaaS", "Fintech", "Security", "Mobile", "Social"];

type View = "home" | "about" | "contact";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [view, setView] = useState<View>("home");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background h-[82px] flex items-center justify-between px-[var(--page-padding)]">
        <button
          onClick={() => setView("home")}
          className="text-sm font-medium tracking-tight hover:opacity-60 transition-opacity duration-150"
        >
          Trevor Schulte
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => setView("home")}
            className={`text-sm font-medium transition-colors duration-75 ${
              view === "home" ? "text-foreground" : "text-text-secondary hover:text-foreground"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setView("about")}
            className={`text-sm font-medium transition-colors duration-75 ${
              view === "about" ? "text-foreground" : "text-text-secondary hover:text-foreground"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setView("contact")}
            className={`text-sm font-medium transition-colors duration-75 ${
              view === "contact" ? "text-foreground" : "text-text-secondary hover:text-foreground"
            }`}
          >
            Contact
          </button>
        </nav>

        <a
          href="mailto:hello@trevorschulte.com"
          className="text-[13px] font-medium bg-button-primary text-background rounded-full px-[18px] py-[10px] hover:bg-button-hover transition-colors duration-75"
        >
          Email me
        </a>
      </header>

      {view === "home" && (
        <main className="px-[var(--page-padding)] pb-16">
          {/* Hero */}
          <section className="pt-8 pb-12 md:pt-14 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="text-[clamp(36px,5vw,60px)] font-light leading-[1.1] tracking-tight mb-5 animate-fade-in-up">
                Product designer
                <br />
                based in SF.
              </h1>
              <p className="text-lg text-text-secondary font-normal leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                I simplify complex problems into thoughtful
                <br className="hidden sm:block" />
                experiences people love. 🖤
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end justify-end gap-8 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <span className="text-[12px] font-medium bg-surface text-text-secondary rounded-full px-3 py-1.5">
                Available for work
              </span>
              <div className="flex gap-10">
                <div className="text-right">
                  <p className="text-[32px] font-light leading-none tracking-tight mb-1">8+</p>
                  <p className="text-[11px] text-text-tertiary uppercase tracking-widest">Years</p>
                </div>
                <div className="text-right">
                  <p className="text-[32px] font-light leading-none tracking-tight mb-1">20+</p>
                  <p className="text-[11px] text-text-tertiary uppercase tracking-widest">Projects</p>
                </div>
                <div className="text-right">
                  <p className="text-[32px] font-light leading-none tracking-tight mb-1">12+</p>
                  <p className="text-[11px] text-text-tertiary uppercase tracking-widest">Brands</p>
                </div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <div className="flex gap-3 mb-10 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 text-[13px] font-medium rounded-full px-4 py-2 transition-colors duration-75 ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-surface text-text-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-[30px]">
            {filtered.map((project, index) => (
              <button
                key={project.number}
                className="group text-left animate-fade-in-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div
                  className="aspect-[4/3] rounded-[22px] sm:rounded-[27px] mb-4 relative overflow-hidden transition-transform duration-300 group-hover:scale-[0.98]"
                  style={{ backgroundColor: project.color }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="text-[80px] font-light leading-none text-white/20 absolute bottom-4 right-5 z-10">
                    {project.number}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[10px] font-medium tracking-widest uppercase text-text-tertiary/60">{project.number}</span>
                  <h3 className="text-[15px] font-medium group-hover:text-text-secondary transition-colors duration-75">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[13px] text-text-tertiary leading-snug">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.category.split(" · ").map((tag) => (
                    <span key={tag} className="text-xs text-text-tertiary border border-text-tertiary/40 rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </main>
      )}

      {view === "about" && <AboutView />}
      {view === "contact" && <ContactView />}

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border-custom z-50">
        <div className="flex items-center justify-around h-14">
          {(["home", "about", "contact"] as View[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`text-[13px] font-medium capitalize transition-colors duration-75 ${
                view === v ? "text-foreground" : "text-text-tertiary"
              }`}
            >
              {v === "home" ? "Work" : v}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

function AboutView() {
  return (
    <main className="px-[var(--page-padding)] pb-24 max-w-4xl">
      <section className="pt-12 md:pt-20 mb-16 animate-fade-in-up">
        <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider mb-4">About</p>
        <h2 className="text-[clamp(30px,4vw,48px)] font-light leading-[1.15] tracking-tight mb-6">
          Designing products
          <br />
          people remember.
        </h2>
        <p className="text-base text-text-secondary leading-relaxed max-w-xl">
          I'm a product designer with a focus on fintech, SaaS, and enterprise
          platforms. I care deeply about the intersection of usability and aesthetics.
          My process starts with understanding the problem at a systems level, then
          reducing it to its simplest possible form.
        </p>
      </section>

      <section className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider mb-6">Experience</p>
        <div className="space-y-0">
          {[
            { role: "Senior Product Designer", period: "2023 — Present" },
            { role: "Product Designer", period: "2021 — 2023" },
            { role: "UX Designer", period: "2019 — 2021" },
          ].map((exp) => (
            <div
              key={exp.role}
              className="flex items-baseline justify-between py-5 border-b border-border-custom"
            >
              <span className="text-[15px] font-normal">{exp.role}</span>
              <span className="text-[13px] text-text-tertiary">{exp.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider mb-6">Capabilities</p>
        <div className="flex flex-wrap gap-2.5">
          {["Product Design", "Design Systems", "Prototyping", "User Research", "Front-End Dev"].map(
            (skill) => (
              <span
                key={skill}
                className="text-[13px] font-medium bg-surface text-text-secondary rounded-full px-4 py-2"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>
    </main>
  );
}

function ContactView() {
  return (
    <main className="px-[var(--page-padding)] pb-24 flex items-center min-h-[calc(100vh-82px)]">
      <div className="max-w-lg animate-fade-in-up">
        <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider mb-4">Contact</p>
        <h2 className="text-[clamp(30px,4vw,48px)] font-light leading-[1.15] tracking-tight mb-4">
          Let's build something
          <br />
          together.
        </h2>
        <p className="text-base text-text-secondary leading-relaxed mb-10">
          Open to new opportunities and collaborations.
        </p>
        <a
          href="mailto:hello@trevorschulte.com"
          className="inline-block text-[13px] font-medium bg-button-primary text-background rounded-full px-[18px] py-[14px] hover:bg-button-hover transition-colors duration-75 mb-10"
        >
          hello@trevorschulte.com
        </a>
        <div className="flex gap-6">
          {[
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Dribbble", href: "https://dribbble.com" },
            { label: "Twitter", href: "https://twitter.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-text-tertiary hover:text-foreground transition-colors duration-75"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
