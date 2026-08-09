import type { Metadata } from "next";
import DetailPage from "../detail-page";
import { academicsDetail, type Language } from "../portfolio-content";
import { buildDetailMetadata } from "../site-metadata";

type AcademicsPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

async function requestedLanguage(
  searchParams: AcademicsPageProps["searchParams"],
): Promise<Language> {
  const { lang } = await searchParams;
  return lang === "en" ? "en" : "zh";
}

export async function generateMetadata({
  searchParams,
}: AcademicsPageProps): Promise<Metadata> {
  const language = await requestedLanguage(searchParams);
  return buildDetailMetadata(academicsDetail[language], "/academics", language);
}

export default async function AcademicsPage({
  searchParams,
}: AcademicsPageProps) {
  const language = await requestedLanguage(searchParams);

  return (
    <DetailPage
      content={academicsDetail[language]}
      language={language}
      currentPath="/academics"
      categoryLabel={language === "en" ? "Academics" : "学历与成绩"}
      backAnchor="education"
    />
  );
}
