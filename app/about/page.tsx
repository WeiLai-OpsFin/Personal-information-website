import type { Metadata } from "next";
import DetailPage from "../detail-page";
import { aboutDetail, type Language } from "../portfolio-content";
import { buildDetailMetadata } from "../site-metadata";

type AboutPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

async function requestedLanguage(
  searchParams: AboutPageProps["searchParams"],
): Promise<Language> {
  const { lang } = await searchParams;
  return lang === "en" ? "en" : "zh";
}

export async function generateMetadata({
  searchParams,
}: AboutPageProps): Promise<Metadata> {
  const language = await requestedLanguage(searchParams);
  return buildDetailMetadata(aboutDetail[language], "/about", language);
}

export default async function AboutPage({ searchParams }: AboutPageProps) {
  const language = await requestedLanguage(searchParams);

  return (
    <DetailPage
      content={aboutDetail[language]}
      language={language}
      currentPath="/about"
      categoryLabel={language === "en" ? "About" : "自我介绍"}
      backAnchor="about"
    />
  );
}
