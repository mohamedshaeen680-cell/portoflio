const isProd = process.env.NODE_ENV === "production";

// Auto-detect repository base path in GitHub Actions, or use manual override
let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
if (!basePath && isProd && process.env.GITHUB_REPOSITORY) {
  const parts = process.env.GITHUB_REPOSITORY.split("/");
  const repo = parts[1];
  if (repo && !repo.toLowerCase().endsWith(".github.io")) {
    basePath = `/${repo}`;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
