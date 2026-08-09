import type { Metadata } from "next";
import type { DetailContent, Language } from "./portfolio-content";

export const PRODUCTION_ORIGIN =
  "https://lai-wei-evidence.futureavicii.chatgpt.site";

const SITE_NAME = "Lai Wei / 魏来";
const SOCIAL_IMAGE_PATH = "/og.png";
const COMMON_KEYWORDS = [
  "Lai Wei",
  "魏来",
  "Applied Economics",
  "Research",
  "Finance",
  "BNBU",
];

function absoluteUrl(pathname: string): string {
  return new URL(pathname, PRODUCTION_ORIGIN).toString();
}

function normalizePath(pathname: string): string {
  const withLeadingSlash = pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;

  if (withLeadingSlash === "/") return withLeadingSlash;
  return withLeadingSlash.replace(/\/+$/, "");
}

function localizedPaths(currentPath: string) {
  const zhPath = normalizePath(currentPath);
  const enPath = zhPath === "/" ? "/en" : `/en${zhPath}`;

  return { zhPath, enPath };
}

function trimDescription(description: string): string {
  const normalized = description.replace(/\s+/g, " ").trim();
  return normalized.length <= 180
    ? normalized
    : `${normalized.slice(0, 177).trimEnd()}…`;
}

function languageAlternates(currentPath: string, language: Language) {
  const { zhPath, enPath } = localizedPaths(currentPath);
  const canonicalPath = language === "en" ? enPath : zhPath;

  return {
    canonical: absoluteUrl(canonicalPath),
    languages: {
      "zh-CN": absoluteUrl(zhPath),
      en: absoluteUrl(enPath),
      "x-default": absoluteUrl(zhPath),
    },
  };
}

export function buildDetailMetadata(
  content: DetailContent,
  currentPath: string,
  language: Language,
): Metadata {
  const description = trimDescription(content.summary);
  const title =
    language === "en"
      ? `${content.title} | Lai Wei`
      : `${content.title} | 魏来（Lai Wei）`;
  const alternates = languageAlternates(currentPath, language);
  const socialImage = absoluteUrl(SOCIAL_IMAGE_PATH);

  return {
    metadataBase: new URL(PRODUCTION_ORIGIN),
    title,
    description,
    authors: [{ name: "Lai Wei" }],
    creator: "Lai Wei",
    keywords: [
      ...COMMON_KEYWORDS,
      content.eyebrow,
      ...(content.methods ?? []).slice(0, 8),
    ],
    alternates,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      url: alternates.canonical,
      siteName: SITE_NAME,
      title,
      description,
      locale: language === "en" ? "en_US" : "zh_CN",
      alternateLocale: [language === "en" ? "zh_CN" : "en_US"],
      images: [
        {
          url: socialImage,
          width: 1732,
          height: 908,
          alt: `${content.title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export function buildHomeMetadata(language: Language): Metadata {
  const isEnglish = language === "en";
  const title = isEnglish
    ? "Lai Wei | Applied Economics, Research & Finance"
    : "魏来（Lai Wei）| 应用经济学、科研与金融";
  const description = isEnglish
    ? "Lai Wei’s bilingual portfolio in applied economics, causal inference, financial risk, and computational modelling."
    : "魏来（Lai Wei）的中英双语个人网站：应用经济学、因果推断、金融风险与计算建模。";
  const alternates = languageAlternates("/", language);
  const socialImage = absoluteUrl(SOCIAL_IMAGE_PATH);

  return {
    metadataBase: new URL(PRODUCTION_ORIGIN),
    title,
    description,
    applicationName: SITE_NAME,
    authors: [{ name: "Lai Wei" }],
    creator: "Lai Wei",
    keywords: [
      ...COMMON_KEYWORDS,
      "Causal Inference",
      "Financial Risk",
      "Computational Modeling",
    ],
    icons: {
      icon: "/images/lai-wei-portrait-square.webp",
      apple: "/images/lai-wei-portrait-square.webp",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates,
    openGraph: {
      type: "profile",
      url: alternates.canonical,
      siteName: SITE_NAME,
      title,
      description,
      locale: isEnglish ? "en_US" : "zh_CN",
      alternateLocale: [isEnglish ? "zh_CN" : "en_US"],
      images: [
        {
          url: socialImage,
          width: 1732,
          height: 908,
          alt: `${SITE_NAME} — Turning Data into Evidence`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
