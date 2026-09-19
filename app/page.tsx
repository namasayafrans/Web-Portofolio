"use client";

import { useEffect, useState } from "react";

type IconProps = { size?: number; className?: string };

const Icon = {
  ArrowUpRight: ({ size = 18, className = "" }: IconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
  ),
  Github: ({ size = 20, className = "" }: IconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"/></svg>
  ),
  Instagram: ({ size = 20, className = "" }: IconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></svg>
  ),
  Facebook: ({ size = 20, className = "" }: IconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.51-1.46h1.62V3.96c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.06V10H7.8v3h2.63v8h3.17Z"/></svg>
  ),
  Mail: ({ size = 20, className = "" }: IconProps) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  ),
  Menu: ({ size = 22, className = "" }: IconProps) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  X: ({ size = 22, className = "" }: IconProps) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>,
  Server: ({ size = 22, className = "" }: IconProps) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="7" rx="2"/><rect x="4" y="14" width="16" height="7" rx="2"/><path d="M8 7h.01M8 18h.01M12 7h4M12 18h4"/></svg>,
  Network: ({ size = 22, className = "" }: IconProps) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M12 12 5 17M12 12l7 5"/></svg>,
  Shield: ({ size = 22, className = "" }: IconProps) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 20 6v5c0 5.2-3.5 8.6-8 10-4.5-1.4-8-4.8-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>,
  Graduation: ({ size = 22, className = "" }: IconProps) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v4c3 2 7 2 10 0v-4M21 10v6"/></svg>,
};

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];

const skills = [
  { name: "Mikrotik", level: "Network", icon: "network" },
  { name: "LAN / WAN", level: "Networking", icon: "network" },
  { name: "Client–Server", level: "Infrastructure", icon: "server" },
  { name: "System Support", level: "Operations", icon: "shield" },
  { name: "IT Infrastructure", level: "Core", icon: "server" },
  { name: "Problem Solving", level: "Approach", icon: "shield" },
];

const experiences = [
  {
    period: "Magang",
    company: "PT Batara Sura Mulia",
    role: "Sistem Informasi & Dukungan Infrastruktur",
    description:
      "Terlibat dalam pembuatan Sistem Informasi Pengendalian sekaligus memahami kebutuhan operasional dan dukungan infrastruktur di lingkungan kerja.",
    tags: ["Sistem Informasi", "Operational Support", "IT Infrastructure"],
  },
  {
    period: "PKL • SMK TKJ",
    company: "PT Suzuki Otomotif",
    role: "Praktik Kerja Lapangan",
    description:
      "Mendapat pengalaman langsung terkait perangkat keras komputer dan lingkungan kerja industri otomotif, membangun fondasi troubleshooting dan disiplin kerja teknis.",
    tags: ["Hardware", "Troubleshooting", "Industrial Environment"],
  },
];

const certifications = [
  {
    title: "Surat Keterangan Lulus S1 Teknik Informatika",
    issuer: "Universitas Pelita Bangsa",
    year: "2026",
    image: "/certificates/surat-keterangan-lulus-2026.jpg",
    description: "Dokumen kelulusan setelah menyelesaikan seluruh mata kuliah dan dinyatakan lulus ujian skripsi.",
  },
  {
    title: "Sertifikat Keahlian Teknik Komputer dan Jaringan",
    issuer: "SMK 10 November Cibitung / PT Uninet Media Sakti",
    year: "2017",
    image: "/certificates/sertifikat-keahlian-tkj.jpg",
    description: "Certificate of Skill Passport untuk kompetensi keahlian Teknik Komputer dan Jaringan.",
  },
  {
    title: "Praktik Kerja Lapangan",
    issuer: "PT Suzuki Indomobil Motor — Plant Cikarang",
    year: "2018",
    image: "/certificates/pkl-suzuki-2018.jpg",
    description: "Surat keterangan telah melaksanakan PKL pada September–November 2018.",
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
        <span className="h-px w-8 bg-blue-500/60" /> {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const sections = ["home", ...navItems.map(([, id]) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.08 },
    );
    revealItems.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-white">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="orb absolute -left-28 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="orb orb-delay absolute -right-24 top-[32rem] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/20 sm:px-5">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-3" aria-label="Frans Putra Sinaga — Home">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-black text-white shadow-lg shadow-cyan-500/20">FP</span>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-slate-900">Frans Putra Sinaga</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">IT Infrastructure</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={`rounded-lg px-3 py-2 text-xs font-medium transition ${activeSection === id ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-blue-50 hover:text-slate-900"}`}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-100 md:block">Let&apos;s Connect</a>
          <button onClick={() => setMenuOpen((v) => !v)} className="rounded-xl border border-blue-100 p-2 text-slate-700 md:hidden" aria-label={menuOpen ? "Tutup menu" : "Buka menu"}>
            {menuOpen ? <Icon.X /> : <Icon.Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-slate-900">{label}</a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-36 lg:px-8">
        <div className="grid w-full gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" /> Available for IT Infrastructure opportunities
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Hello, I&apos;m</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-slate-900 sm:text-6xl lg:text-7xl">
              Frans Putra <span className="text-gradient">Sinaga.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              IT Infrastructure Professional yang berfokus pada <span className="text-blue-700">Network Engineering</span>, <span className="text-blue-700">System Administration</span>, dan <span className="text-blue-700">IT Support</span>.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">Fresh Graduate S1 Teknik Informatika • SMK Teknik Komputer Jaringan (TKJ) • Fondasi jaringan, sistem, dan troubleshooting.</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700">
                Hubungi Saya <Icon.ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="https://github.com/namasayafrans" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50">
                <Icon.Github size={18} /> GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Network & Infrastructure</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> System Support</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Fresh Graduate 2026</span>
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="gradient-border glass relative overflow-hidden rounded-3xl p-6 sm:p-7">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 font-mono text-[10px] text-slate-600">INFRA / 2026</span>
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["01", "Network", "Mikrotik • LAN/WAN"],
                    ["02", "Systems", "Client–Server"],
                    ["03", "Support", "Troubleshooting"],
                    ["04", "Mindset", "Problem Solving"],
                  ].map(([num, title, sub]) => (
                    <div key={num} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                      <div className="mb-6 text-[10px] font-mono text-blue-600">{num}</div>
                      <div className="text-sm font-semibold text-slate-900">{title}</div>
                      <div className="mt-1 text-[11px] leading-5 text-slate-500">{sub}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon.Server size={18} /></div><div><div className="text-xs font-semibold text-slate-900">Infrastructure-first</div><div className="text-[11px] text-slate-500">Build • Support • Improve</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="reveal">
          <SectionHeading eyebrow="01 / About me" title="Fondasi teknis yang dibangun dari dua dunia." description="Perjalanan dari SMK TKJ ke S1 Teknik Informatika membentuk cara kerja yang menggabungkan pemahaman perangkat, jaringan, sistem, dan kebutuhan operasional." />
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <article className="reveal glass glass-hover rounded-3xl p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600"><Icon.Network /></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Infrastructure meets systems</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">Saya memulai perjalanan teknis melalui <strong className="font-medium text-slate-700">SMK Teknik Komputer Jaringan</strong> dan lulus pada 2017. Fondasi tersebut membawa saya pada pengalaman praktik jaringan, perangkat keras, dan client-server.</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">Di jenjang <strong className="font-medium text-slate-700">S1 Teknik Informatika</strong>, saya memperluas perspektif terhadap aplikasi dan sistem informasi, lalu lulus pada 2026. Fokus saya tetap berada pada infrastruktur—namun saya memahami bagaimana infrastruktur menjadi bagian dari alur sistem yang lebih besar.</p>
              </div>
            </div>
          </article>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <article className="reveal glass glass-hover rounded-3xl p-6"><div className="flex items-center gap-3"><Icon.Graduation className="text-blue-600" /><span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Education</span></div><div className="mt-4 text-xl font-semibold text-slate-900">S1 Teknik Informatika</div><div className="mt-1 text-sm text-slate-500">Lulus 2026 • Fresh Graduate</div></article>
            <article className="reveal glass glass-hover rounded-3xl p-6"><div className="flex items-center gap-3"><Icon.Network className="text-blue-600" /><span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Foundation</span></div><div className="mt-4 text-xl font-semibold text-slate-900">SMK TKJ</div><div className="mt-1 text-sm text-slate-500">Lulus 2017 • Jaringan & Infrastruktur</div></article>
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="reveal"><SectionHeading eyebrow="02 / Experience" title="Pengalaman yang dekat dengan dunia operasional." description="Setiap pengalaman memperkuat kemampuan teknis sekaligus pemahaman terhadap kebutuhan pengguna dan lingkungan kerja." /></div>
        <div className="relative ml-3 md:ml-6">
          <div className="timeline-line absolute bottom-0 left-0 top-2 w-px" />
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <article key={item.company} className="reveal relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(34,211,238,.65)]" />
                <div className="glass glass-hover rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{item.period}</div><h3 className="mt-2 text-xl font-semibold text-slate-900">{item.company}</h3><p className="mt-1 text-sm text-slate-500">{item.role}</p></div>
                    <div className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-mono text-slate-500">0{index + 1}</div>
                  </div>
                  <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] text-slate-600">{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="reveal"><SectionHeading eyebrow="03 / Skills" title="Toolkit untuk menjaga sistem tetap berjalan." description="Keahlian utama yang menjadi fondasi saya dalam menangani jaringan, perangkat, sistem, dan kebutuhan dukungan IT." /></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.name} className="reveal skill-shine glass glass-hover rounded-2xl p-5">
              <div className="flex items-center justify-between"><div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">{skill.icon === "network" ? <Icon.Network size={19} /> : skill.icon === "server" ? <Icon.Server size={19} /> : <Icon.Shield size={19} />}</div><span className="text-[10px] uppercase tracking-[0.16em] text-slate-600">{skill.level}</span></div>
              <h3 className="mt-6 text-base font-semibold text-slate-900">{skill.name}</h3>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-blue-50"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-blue-700" /></div>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="reveal"><SectionHeading eyebrow="04 / Certifications & Documents" title="Bukti pendidikan, kompetensi, dan pengalaman." description="Beberapa dokumen pendukung yang relevan dengan perjalanan pendidikan dan fondasi teknis saya. Untuk keamanan publik, bagian data identitas sensitif pada preview telah disamarkan." /></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <article key={cert.title} className="reveal group overflow-hidden rounded-3xl border border-blue-100 bg-white/85 shadow-2xl shadow-blue-900/10 transition duration-300 hover:-translate-y-1 hover:border-blue-200">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <img src={cert.image} alt={cert.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-900/55 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-blue-200 bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700 backdrop-blur">DOC-0{index + 1}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-slate-900">{cert.title}</h3>
                    <p className="mt-2 text-xs font-medium text-blue-600">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-mono text-slate-500">{cert.year}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-500">{cert.description}</p>
                <a href={cert.image} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-blue-600 transition hover:text-blue-700">Lihat dokumen <Icon.ArrowUpRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 pb-24 pt-24 lg:px-8">
        <div className="reveal overflow-hidden rounded-[2rem] border border-blue-200 bg-gradient-to-br from-blue-100/80 via-white/90 to-blue-50/80 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">05 / Contact</div><h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Siap berdiskusi tentang jaringan, sistem, dan infrastruktur IT.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">Terbuka untuk peluang kerja, networking profesional, project support, dan diskusi seputar IT Infrastructure.</p></div>
            <a href="mailto:fransputra.sinaga@example.com" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"><Icon.Mail size={18} /> Email Me <Icon.ArrowUpRight size={16} /></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-blue-100 pt-6">
            <a href="https://github.com/namasayafrans" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-2.5 text-xs text-slate-600 transition hover:border-blue-200 hover:text-slate-900"><Icon.Github size={16} /> github.com/namasayafrans</a>
            <a href="https://www.instagram.com/fransp_sinaga?stkn=YWM0ZWt3NTdkenB5" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-2.5 text-xs text-slate-600 transition hover:border-blue-200 hover:text-slate-900"><Icon.Instagram size={16} /> @fransp_sinaga</a>
            <a href="https://www.facebook.com/profile.php?id=100004485286793" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-2.5 text-xs text-slate-600 transition hover:border-blue-200 hover:text-slate-900"><Icon.Facebook size={16} /> Frans Putra Sinaga</a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-blue-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Frans Putra Sinaga. Built for the infrastructure mindset.</span>
          <span className="font-mono">Network • Systems • Support</span>
        </div>
      </footer>

      {showTop && <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-xl border border-blue-100 bg-white/95 text-slate-700 shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600" aria-label="Kembali ke atas">↑</button>}
    </main>
  );
}
