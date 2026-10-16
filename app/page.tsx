import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import HeroVisual from "@/components/HeroVisual";
import ProjectVisual from "@/components/ProjectVisual";
import {
  getCertifications,
  getEducation,
  getExperience,
  getFeaturedProjects,
  getProjects,
  getSettings,
  getSkills,
  withBasePath,
} from "@/lib/data";

export default async function Home() {
  const [featured, allProjects, skills, exp, edu, certs, cfg] = await Promise.all([
    getFeaturedProjects(),
    getProjects(),
    getSkills(),
    getExperience(),
    getEducation(),
    getCertifications(),
    getSettings(),
  ]);

  const displayProjects =
    featured.length > 0 ? featured : allProjects.filter((p) => p.published);
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  const socials = [
    { label: "LinkedIn", url: cfg?.linkedin },
    { label: "GitHub", url: cfg?.github },
    { label: "X / Twitter", url: cfg?.twitter },
    { label: "Website", url: cfg?.website },
    { label: "Email", url: cfg?.email ? `mailto:${cfg.email}` : "" },
  ].filter((s) => Boolean(s.url));

  return (
    <>
      <Navbar />
      <main id="top" className="relative overflow-hidden">
        {/* Subtle Background Glow Elements */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-teal/[0.04] blur-[120px] dark:bg-teal/[0.03]"
          aria-hidden="true"
        />

        {/* -------------------- HERO SECTION -------------------- */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            {/* Left Column: Headline & Positioning */}
            <div className="rise flex flex-col items-start">
              {/* Status Pill */}
              <div className="eyebrow mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                </span>
                <span>Available for Junior Roles & Projects</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Turning Complex Data Into{" "}
                <span className="bg-gradient-to-r from-teal via-teal to-amber bg-clip-text text-transparent">
                  Strategic Decisions
                </span>
              </h1>

              {/* Identity & Subtitle */}
              <p className="mt-4 font-display text-lg font-semibold text-teal sm:text-xl">
                Mohamed Abd Elmoniem &bull; Junior Data Analyst
              </p>

              {/* Supporting Bio */}
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                Data Analysis student at the Faculty of Artificial Intelligence, Egyptian Russian
                University. Specializing in SQL data modeling, exploratory Python analytics, and
                executive Business Intelligence dashboards.
              </p>

              {/* Calls To Action */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a href="#projects" className="btn btn-primary !px-5 !py-3 text-sm font-semibold">
                  <span>Explore Case Studies</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a href="#contact" className="btn !px-5 !py-3 text-sm font-semibold">
                  <span>Get In Touch</span>
                </a>
                {cfg?.cvUrl && (
                  <a
                    href={withBasePath(cfg.cvUrl)}
                    download
                    className="btn btn-outline !px-4 !py-3 text-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download CV</span>
                  </a>
                )}
              </div>

              {/* Trust & Key Stats Strip */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200/80 pt-6 text-xs font-mono text-slate-500 sm:gap-8 dark:border-white/[0.08] dark:text-slate-400">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">FOCUS:</span> BI &
                  Analytics
                </div>
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">CORE:</span> SQL,
                  Python, Power BI
                </div>
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">DEGREE:</span> 2027
                  Expected
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Graphic */}
            <div className="flex justify-center lg:justify-end">
              {cfg?.profileImage ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={withBasePath(cfg.profileImage)}
                  alt="Mohamed Abd Elmoniem"
                  className="h-64 w-64 rounded-3xl border-2 border-teal/40 object-cover shadow-2xl sm:h-80 sm:w-80"
                />
              ) : (
                <HeroVisual />
              )}
            </div>
          </div>
        </section>

        {/* -------------------- ABOUT SECTION -------------------- */}
        <section
          id="about"
          className="mx-auto max-w-6xl border-t border-slate-200/70 px-5 py-20 sm:px-8 sm:py-24 dark:border-white/[0.06]"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            {/* Section Header */}
            <div>
              <span className="section-label">// 01. BACKGROUND</span>
              <h2 className="section-title">Driven by Curiosity, Grounded in Numbers</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                A methodical approach to solving real-world business challenges using quantitative
                evidence.
              </p>
            </div>

            {/* Editorial Blocks */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="card">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-teal/10 font-mono text-xs font-bold text-teal">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Academic Foundation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Data Analysis student at the Egyptian Russian University, Faculty of Artificial
                  Intelligence (Class of 2027), mastering statistical modeling and computer science
                  fundamentals.
                </p>
              </div>

              <div className="card">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-teal/10 font-mono text-xs font-bold text-teal">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Technical Execution
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Proficient in ingesting unstructured data, authoring multi-stage SQL CTE queries,
                  exploratory analysis in Python Pandas, and building executive dashboards in Power
                  BI and Tableau.
                </p>
              </div>

              <div className="card">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-teal/10 font-mono text-xs font-bold text-teal">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Analytical Philosophy
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Start with the core business question. Rigorously validate data integrity before
                  drawing conclusions, and design visualizations that guide high-impact decisions.
                </p>
              </div>

              <div className="card">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-teal/10 font-mono text-xs font-bold text-teal">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Career Objective
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Seeking a junior data analyst role or internship where empirical inquiry and
                  actionable intelligence contribute directly to organizational growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------- PROJECTS SECTION -------------------- */}
        <section
          id="projects"
          className="mx-auto max-w-6xl border-t border-slate-200/70 px-5 py-20 sm:px-8 sm:py-24 dark:border-white/[0.06]"
        >
          {/* Section Heading */}
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-label">// 02. PORTFOLIO CASE STUDIES</span>
              <h2 className="section-title">Featured Analytical Projects</h2>
              <p className="section-subtitle">
                End-to-end data analysis: from raw data cleaning and SQL transformation to
                interactive dashboards and strategic recommendations.
              </p>
            </div>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
              {displayProjects.length} Case Studies Published
            </span>
          </div>

          {/* Project Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {displayProjects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className="card-interactive group flex flex-col overflow-hidden !p-0"
              >
                {/* Visual Preview */}
                {p.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={withBasePath(p.image)}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="aspect-video w-full rounded-t-2xl object-cover"
                  />
                ) : (
                  <ProjectVisual slug={p.slug} category={p.category} />
                )}

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="rounded-md border border-teal/20 bg-teal/10 px-2 py-0.5 font-semibold text-teal">
                      {p.category}
                    </span>
                    <span>{p.date.getFullYear()}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 flex items-center justify-between text-xl font-bold text-slate-900 transition-colors group-hover:text-teal dark:text-white">
                    <span>{p.title}</span>
                    <span className="text-base text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal">
                      &nearr;
                    </span>
                  </h3>

                  {/* Summary */}
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {p.summary}
                  </p>

                  {/* Tool Chips */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tools.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="mt-5 border-t border-slate-200/80 pt-4 dark:border-white/[0.06]">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal group-hover:underline">
                      <span>View Case Study Report</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {!displayProjects.length && (
            <div className="card text-center py-12 text-slate-500">
              No projects published yet. Check back soon.
            </div>
          )}
        </section>

        {/* -------------------- SKILLS SECTION -------------------- */}
        <section
          id="skills"
          className="mx-auto max-w-6xl border-t border-slate-200/70 px-5 py-20 sm:px-8 sm:py-24 dark:border-white/[0.06]"
        >
          <div className="mb-12">
            <span className="section-label">// 03. TOOLING & EXPERTISE</span>
            <h2 className="section-title">Technical Competencies</h2>
            <p className="section-subtitle">
              Applied tools, database query engines, and analytics frameworks utilized across daily
              problem solving.
            </p>
          </div>

          {/* Grouped Skills Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c} className="card flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {c}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills
                      .filter((s) => s.category === c)
                      .map((s) => (
                        <span key={s.id} className="chip font-mono text-xs">
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------- EXPERIENCE & EDUCATION -------------------- */}
        <section
          id="experience"
          className="mx-auto max-w-6xl border-t border-slate-200/70 px-5 py-20 sm:px-8 sm:py-24 dark:border-white/[0.06]"
        >
          <div className="mb-12">
            <span className="section-label">// 04. EXPERIENCE & EDUCATION</span>
            <h2 className="section-title">Professional Path & Education</h2>
            <p className="section-subtitle">
              Practical portfolio development, freelance analytics, and academic training.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Experience Column */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                <span className="h-2 w-2 rounded-full bg-teal" />
                <span>Work Experience</span>
              </h3>

              {exp.length ? (
                <ol className="relative ml-3 border-l-2 border-teal/30 pl-6 space-y-8">
                  {exp.map((e) => (
                    <li key={e.id} className="relative">
                      <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-teal shadow dark:border-canvas" />
                      <div className="card">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-bold text-slate-900 dark:text-white">{e.role}</h4>
                          <span className="rounded-md border border-slate-200 bg-slate-100/80 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400">
                            {e.start} &ndash; {e.end || "Present"}
                          </span>
                        </div>
                        <p className="mt-1 font-medium text-xs text-teal">{e.company}</p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {e.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="card text-slate-500">Experience entries will appear here.</p>
              )}
            </div>

            {/* Education Column */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                <span className="h-2 w-2 rounded-full bg-amber" />
                <span>Formal Education</span>
              </h3>

              <div className="space-y-4">
                {edu.map((e) => (
                  <div key={e.id} className="card">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-slate-900 dark:text-white">{e.school}</h4>
                      <span className="rounded-md border border-slate-200 bg-slate-100/80 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400">
                        {e.start ? `${e.start} &ndash; ` : ""}
                        {e.end}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-teal">{e.degree}</p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      Core focus: Data structures, statistical inference, algorithms, database
                      management, and applied machine learning architectures.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -------------------- CERTIFICATIONS -------------------- */}
        <section className="mx-auto max-w-6xl border-t border-slate-200/70 px-5 py-20 sm:px-8 sm:py-24 dark:border-white/[0.06]">
          <div className="mb-8">
            <span className="section-label">// 05. ACCREDITATIONS</span>
            <h2 className="section-title">Certifications & Continuous Learning</h2>
          </div>

          {certs.length ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {certs.map((c) => (
                <div key={c.id} className="card flex items-start gap-4">
                  {c.image && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={withBasePath(c.image)}
                      alt=""
                      loading="lazy"
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                  )}
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{c.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {c.org} &bull; {c.date}
                    </p>
                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal hover:underline"
                      >
                        <span>Verify Credential</span>
                        <span>&rarr;</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card flex flex-col sm:flex-row items-center justify-between gap-6 border-dashed">
              <div className="max-w-xl">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Active Professional Curriculum
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Currently completing advanced certifications in Business Intelligence and Applied
                  Machine Learning, alongside university coursework in relational databases, Python
                  analytics, and statistical inference.
                </p>
              </div>
              <span className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono text-xs font-semibold text-teal whitespace-nowrap">
                In Progress &bull; 2025
              </span>
            </div>
          )}
        </section>

        {/* -------------------- CONTACT SECTION -------------------- */}
        <section
          id="contact"
          className="mx-auto max-w-6xl border-t border-slate-200/70 px-5 py-20 sm:px-8 sm:py-24 dark:border-white/[0.06]"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* Left Column: Form */}
            <div>
              <span className="section-label">// 06. INITIATE CONTACT</span>
              <h2 className="section-title">Let’s Discuss Opportunities</h2>
              <p className="section-subtitle mb-8">
                I am actively seeking junior data analyst opportunities, internships, and freelance
                projects. Send me a message below.
              </p>
              <ContactForm recipientEmail={cfg?.email} />
            </div>

            {/* Right Column: Direct Info & Social Cards */}
            <div className="flex flex-col justify-between space-y-6 pt-2">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Direct Inquiries & Availability
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Prefer direct communication? Connect with me directly on LinkedIn or via email.
                </p>

                {/* Status Box */}
                <div className="card !p-4 border-teal/20 bg-teal/[0.04] dark:border-teal/20 dark:bg-teal/[0.04]">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                      Actively Reviewing Inquiries
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                    Typically responds within 24 hours. Open to remote or on-site roles in Cairo.
                  </p>
                </div>

                {/* Direct Links List */}
                <div className="space-y-2 pt-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target={s.label === "Email" ? "_self" : "_blank"}
                      rel={s.label === "Email" ? undefined : "noopener noreferrer"}
                      className="card-interactive flex items-center justify-between !p-3.5 text-sm font-medium"
                    >
                      <span className="text-slate-800 dark:text-slate-200">{s.label}</span>
                      <span className="text-xs text-teal font-mono">&rarr;</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location Tag */}
              <div className="border-t border-slate-200/80 pt-6 text-xs font-mono text-slate-500 dark:border-white/[0.06] dark:text-slate-400">
                <span>BASED IN:</span> Cairo, Egypt &bull; UTC+3
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* -------------------- FOOTER -------------------- */}
      <footer className="border-t border-slate-200 bg-white/50 py-8 backdrop-blur dark:border-white/[0.08] dark:bg-canvas/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Mohamed Abd Elmoniem. Designed & engineered for static
            performance.
          </p>
          <a
            href="#top"
            className="text-xs font-medium text-teal hover:underline"
            aria-label="Back to top"
          >
            Back to top &uarr;
          </a>
        </div>
      </footer>
    </>
  );
}
