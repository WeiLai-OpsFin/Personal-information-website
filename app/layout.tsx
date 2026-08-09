import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { PRODUCTION_ORIGIN } from "./site-metadata";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2342",
  colorScheme: "light",
};

const LOCAL_HOST = /^(?:localhost|127(?:\.\d{1,3}){3}|\[::1\])(?::\d{1,5})?$/i;
const languageBootstrap =
  'try{const p=location.pathname,q=new URLSearchParams(location.search).get("lang");document.documentElement.lang=q==="en"||p==="/en"||p.startsWith("/en/")?"en":"zh-CN"}catch{}';

function firstHeaderValue(value: string | null): string | null {
  const firstValue = value?.split(",", 1)[0]?.trim();
  return firstValue || null;
}

function resolveRequestOrigin(incomingHeaders: { get(name: string): string | null }): string {
  const host =
    firstHeaderValue(incomingHeaders.get("host")) ??
    firstHeaderValue(incomingHeaders.get("x-forwarded-host"));

  if (!host || !LOCAL_HOST.test(host)) {
    return PRODUCTION_ORIGIN;
  }

  const forwardedProtocol = firstHeaderValue(incomingHeaders.get("x-forwarded-proto"));
  const protocol = forwardedProtocol === "https" ? "https" : "http";

  try {
    return new URL(`${protocol}://${host}`).origin;
  } catch {
    return PRODUCTION_ORIGIN;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const siteUrl = resolveRequestOrigin(incomingHeaders);
  const socialImage = new URL("/og.png", siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title: "Lai Wei (魏来) | Applied Economics, Research & Finance",
    description:
      "魏来（Lai Wei）的中英双语个人网站：应用经济学、因果推断、金融风险与计算建模。Bilingual portfolio in applied economics, research, and finance.",
    applicationName: "Lai Wei / 魏来",
    authors: [{ name: "Lai Wei" }],
    creator: "Lai Wei",
    keywords: [
      "Lai Wei",
      "魏来",
      "Applied Economics",
      "Causal Inference",
      "Financial Risk",
      "Computational Modeling",
      "BNBU",
    ],
    icons: {
      icon: "/images/lai-wei-portrait-square.webp",
      apple: "/images/lai-wei-portrait-square.webp",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: new URL("/", siteUrl).toString(),
      languages: {
        "zh-CN": new URL("/", siteUrl).toString(),
        en: new URL("/en", siteUrl).toString(),
        "x-default": new URL("/", siteUrl).toString(),
      },
    },
    openGraph: {
      type: "profile",
      url: siteUrl,
      siteName: "Lai Wei / 魏来",
      title: "Lai Wei / 魏来 — Turning Data into Evidence",
      description:
        "应用经济学 · 科研 · 金融 | Applied Economics · Research · Finance. Causal inference, financial risk, and computational modeling.",
      locale: "zh_CN",
      alternateLocale: ["en_US"],
      images: [
        {
          url: socialImage,
          width: 1732,
          height: 908,
          alt: "Lai Wei / 魏来 — Turning Data into Evidence",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Lai Wei / 魏来 — Turning Data into Evidence",
      description:
        "应用经济学 · 科研 · 金融 | Applied Economics · Research · Finance. Causal inference, financial risk, and computational modeling.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

