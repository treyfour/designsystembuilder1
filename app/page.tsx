"use client";

import { useState } from "react";

const projects = [
  {
    number: "001",
    title: "AI agents",
    description: "AI agents empower new competencies for employers",
    category: "SaaS · AI · Enterprise",
    color: "#D4D0CC",
  },
  {
    number: "002",
    title: "Pinzout checkout",
    description: "A modular checkout experience similar to Apple Pay",
    category: "Fintech · Mobile",
    color: "#C8C4BF",
  },
  {
    number: "003",
    title: "Unlocking enterprise",
    description: "Enterprise tooling that shines for enterprise customers",
    category: "SaaS · Reporting",
    color: "#BEB9B4",
  },
  {
    number: "004",
    title: "Reducing spend by 40%",
    description: "Reducing card spending and mitigating card fraud",
    category: "Fintech · Security",
    color: "#D1CEC9",
  },
  {
    number: "005",
    title: "Solace",
    description: "An event stream management productivity platform",
    category: "SaaS · Enterprise",
    color: "#C5C1BC",
  },
  {
    number: "006",
    title: "Increasing transfers",
    description: "Reducing friction in transferring earned wages",
    category: "Fintech · Mobile",
    color: "#CBC7C2",
  },
  {
    number: "007",
    title: "Admin compare and sync",
    description: "Streamlined admin tools for data synchronization",
    category: "SaaS · Operations",
    color: "#D7D3CE",
  },
  {
    number: "008",
    title: "MSO camera sky social",
    description: "Connecting creators to fans and brands in new ways",
    category: "Social · Mobile",
    color: "#C2BEBA",
  },
  {
    number: "009",
    title: "Qualcomm",
    description: "Enterprise device management solution",
    category: "Enterprise · IoT",
    color: "#CCC8C3",
  },
];

const categories = ["All", "SaaS", "Fintech", "Enterprise", "Mobile", "Social"];

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
          Get in touch
        </a>
      </header>

      {view === "home" && (
        <main className="px-[var(--page-padding)] pb-16">
          {/* Hero */}
          <section className="pt-12 pb-16 md:pt-20 md:pb-24 max-w-3xl">
            <h1 className="text-[clamp(36px,5vw,60px)] font-light leading-[1.1] tracking-tight mb-5 animate-fade-in-up">
              Product designer
              <br />
              based in SF.
            </h1>
            <p className="text-lg text-text-secondary font-normal leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              I simplify complex problems into thoughtful
              <br className="hidden sm:block" />
              experiences people love.
            </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[30px]">
            {filtered.map((project, index) => (
              <button
                key={project.number}
                className="group text-left animate-fade-in-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div
                  className="aspect-[4/3] rounded-[22px] sm:rounded-[27px] mb-4 flex items-end p-5 relative overflow-hidden transition-transform duration-300 group-hover:scale-[0.98]"
                  style={{ backgroundColor: project.color }}
                >
                  <span className="text-[80px] font-light leading-none text-white/20 absolute bottom-4 right-5">
                    {project.number}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs text-text-tertiary">{project.number}</span>
                  <h3 className="text-[15px] font-medium group-hover:text-text-secondary transition-colors duration-75">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[13px] text-text-tertiary leading-snug">
                  {project.description}
                </p>
                <p className="text-xs text-text-tertiary mt-1.5">{project.category}</p>
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
