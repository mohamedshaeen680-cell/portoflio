import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectVisual from "@/components/ProjectVisual";
import { getProjectBySlug, getProjects, withBasePath } from "@/lib/data";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = await getProjectBySlug(params.slug);
  return p
    ? {
        title: `${p.title} | Case Study | Mohamed Abd Elmoniem`,
        description: p.summary,
      }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = await getProjectBySlug(params.slug);
  if (!p) notFound();

  const externalLinks = [
    { label: "GitHub Repository", url: p.github },
    { label: "Interactive Demo", url: p.demo },
    { label: "BI Dashboard", url: p.dashboard },
    { label: "Dataset Source", url: p.dataset },
  ].filter((link) => Boolean(link.url));

  return (
    <>
      <Navbar />
      <main className="relative mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Back Link Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-teal transition hover:underline"
          >
            <span>&larr;</span>
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="border-b border-slate-200 pb-8 dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="rounded-md border border-teal/20 bg-teal/10 px-2.5 py-0.5 font-semibold text-teal">
              {p.category}
            </span>
            <span>&bull;</span>
            <span>{p.date.getFullYear()}</span>
            <span>&bull;</span>
            <span>Empirical Case Study</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {p.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            {p.summary}
          </p>

          {/* Quick Info & Tech Strip */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              TECHNOLOGIES:
            </span>
            {p.tools.map((t) => (
              <span key={t} className="chip font-mono text-xs">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Visual Graphic Banner */}
        <div className="my-10 overflow-hidden rounded-2xl border border-slate-200/90 shadow-md dark:border-white/[0.08] dark:shadow-2xl">
          {p.image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={withBasePath(p.image)}
              alt={`${p.title} preview`}
              className="aspect-video w-full object-cover"
            />
          ) : (
            <ProjectVisual slug={p.slug} category={p.category} />
          )}
        </div>

        {/* Main Case Study Article Body */}
        <article className="space-y-12 text-slate-700 dark:text-slate-300">
          {/* 1. The Business Problem */}
          {p.problem && (
            <section className="rounded-2xl border border-amber/25 bg-amber/[0.03] p-6 sm:p-8 dark:border-amber/20 dark:bg-amber/[0.02]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber">
                <span className="h-2 w-2 rounded-full bg-amber" />
                <span>01. The Business Challenge</span>
              </div>
              <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                Problem Statement & Objective
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                {p.problem}
              </p>
            </section>
          )}

          {/* 2. Dataset & Scope */}
          {p.datasetInfo && (
            <section>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                02. Data Architecture
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                Dataset Overview & Scope
              </h2>
              <div className="mt-3 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 dark:border-white/[0.08] dark:bg-surface-elevated/80">
                <p className="text-base leading-relaxed whitespace-pre-line">
                  {p.datasetInfo}
                </p>
              </div>
            </section>
          )}

          {/* 3. Data Cleaning */}
          {p.cleaning && (
            <section>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                03. Data Engineering
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                Data Cleaning & Normalization
              </h2>
              <div className="mt-3 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 dark:border-white/[0.08] dark:bg-surface-elevated/80">
                <p className="text-base leading-relaxed whitespace-pre-line">
                  {p.cleaning}
                </p>
              </div>
            </section>
          )}

          {/* 4. Data Analysis */}
          {p.analysis && (
            <section>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                04. Quantitative Investigation
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                Analysis & Methodology
              </h2>
              <div className="mt-3 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 dark:border-white/[0.08] dark:bg-surface-elevated/80">
                <p className="text-base leading-relaxed whitespace-pre-line">
                  {p.analysis}
                </p>
              </div>
            </section>
          )}

          {/* 5. SQL Analysis / Engineering */}
          {p.sqlAnalysis && (
            <section>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                05. Relational Querying
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                SQL Aggregations & Pipelines
              </h2>
              <div className="mt-3 overflow-hidden rounded-2xl border border-slate-300/80 bg-slate-900 p-6 text-slate-200 shadow-lg dark:border-white/[0.08] dark:bg-[#080A0D]">
                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-teal">
                    <span className="h-2 w-2 rounded-full bg-teal" />
                    SQL Pipeline & CTE Logic
                  </span>
                  <span>PostgreSQL / MySQL</span>
                </div>
                <p className="font-mono text-sm leading-relaxed text-teal/90 whitespace-pre-line">
                  {p.sqlAnalysis}
                </p>
              </div>
            </section>
          )}

          {/* 6. Key Insights */}
          {p.insights && (
            <section className="rounded-2xl border border-teal/30 bg-teal/[0.04] p-6 sm:p-8 dark:border-teal/25 dark:bg-teal/[0.03]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-teal">
                <span className="h-2 w-2 rounded-full bg-teal" />
                <span>06. Empirical Findings</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                Key Insights Revealed
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
                {p.insights}
              </p>
            </section>
          )}

          {/* 7. Strategic Recommendations */}
          {p.recommendations && (
            <section className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-white/[0.08] dark:bg-surface-elevated">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-amber">
                07. Executive Action Plan
              </div>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                Business Recommendations
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                {p.recommendations}
              </p>
            </section>
          )}
        </article>

        {/* External Resources Strip */}
        {externalLinks.length > 0 && (
          <div className="mt-14 border-t border-slate-200 pt-8 dark:border-white/[0.08]">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Project Artifacts & Source Links
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">&nearr;</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8 dark:border-white/[0.08]">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline"
          >
            <span>&larr;</span>
            <span>Back to all case studies</span>
          </Link>
          <a
            href="#top"
            className="text-xs font-mono text-slate-500 hover:text-teal dark:text-slate-400"
          >
            Top of report &uarr;
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 py-8 backdrop-blur dark:border-white/[0.08] dark:bg-canvas/50">
        <div className="mx-auto max-w-4xl px-5 text-center text-xs text-slate-500 sm:px-8 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Mohamed Abd Elmoniem &bull; Analytical Case Study
        </div>
      </footer>
    </>
  );
}
