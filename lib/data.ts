import projectsJson from "@/data/projects.json";
import skillsJson from "@/data/skills.json";
import experienceJson from "@/data/experience.json";
import educationJson from "@/data/education.json";
import certificationsJson from "@/data/certifications.json";
import settingsJson from "@/data/settings.json";

export type ProjectRecord = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  image?: string;
  category: string;
  tools: string[];
  date: Date;
  featured: boolean;
  published: boolean;
  github?: string;
  demo?: string;
  dashboard?: string;
  dataset?: string;
  problem?: string;
  datasetInfo?: string;
  cleaning?: string;
  analysis?: string;
  sqlAnalysis?: string;
  insights?: string;
  recommendations?: string;
  createdAt?: Date;
};

export type SettingsRecord = {
  id?: number;
  cvUrl?: string;
  profileImage?: string;
  linkedin?: string;
  github?: string;
  email?: string;
  twitter?: string;
  website?: string;
};

export type SkillRecord = {
  id: string;
  name: string;
  category: string;
  level?: number;
  order?: number;
};

export type ExperienceRecord = {
  id: string;
  role: string;
  company: string;
  start: string;
  end?: string;
  description: string;
  order?: number;
};

export type EducationRecord = {
  id: string;
  school: string;
  degree: string;
  start?: string;
  end?: string;
  order?: number;
};

export type CertificationRecord = {
  id: string;
  name: string;
  org: string;
  date: string;
  url?: string;
  image?: string;
};

export function withBasePath(path?: string | null): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export async function getProjects(): Promise<ProjectRecord[]> {
  return (projectsJson as any[]).map((project) => ({
    ...project,
    date: project.date ? new Date(project.date) : new Date(),
    createdAt: project.createdAt ? new Date(project.createdAt) : new Date(),
  }));
}

export async function getFeaturedProjects(): Promise<ProjectRecord[]> {
  const all = await getProjects();
  return all
    .filter((p) => p.published && p.featured)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getProjectBySlug(slug: string): Promise<ProjectRecord | null> {
  const all = await getProjects();
  const found = all.find((p) => p.slug === slug && p.published);
  return found ?? null;
}

export async function getSkills(): Promise<SkillRecord[]> {
  return (skillsJson as SkillRecord[]).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getExperience(): Promise<ExperienceRecord[]> {
  return (experienceJson as ExperienceRecord[]).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getEducation(): Promise<EducationRecord[]> {
  return (educationJson as EducationRecord[]).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getCertifications(): Promise<CertificationRecord[]> {
  return certificationsJson as CertificationRecord[];
}

export async function getSettings(): Promise<SettingsRecord> {
  return settingsJson as SettingsRecord;
}
