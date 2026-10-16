import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Mohamed Abd Elmoniem | Junior Data Analyst",
  description:
    "Junior Data Analyst specializing in business intelligence, SQL data pipelines, and Python analytics. Transforming raw numbers into strategic decisions.",
  openGraph: {
    title: "Mohamed Abd Elmoniem | Junior Data Analyst",
    description:
      "Business Intelligence Dashboards, SQL Modeling, and Exploratory Data Analysis.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%2335d0b0'/><path d='M8 22V16M16 22V10M24 22V14' stroke='%230B0D10' stroke-width='3' stroke-linecap='round'/></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D10" },
  ],
};

const themeScript = `try{if(localStorage.theme==='dark'||(!localStorage.theme&&matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}`;

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-700 antialiased dark:bg-canvas dark:text-slate-300">
        {children}
      </body>
    </html>
  );
}
