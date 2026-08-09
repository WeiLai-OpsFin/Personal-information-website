import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "../../detail-page";
import {
  experienceDetails,
  getDetail,
  projectDetails,
  researchDetails,
  type DetailCategory,
  type Language,
} from "../../portfolio-content";
import { buildDetailMetadata } from "../../site-metadata";

type DetailRouteProps = {
  params: Promise<{ category: string; slug: string }>;
  searchParams: Promise<{ lang?: string | string[] }>;
};

const categoryPresentation: Record<
  DetailCategory,
  { anchor: string; label: Record<Language, string> }
> = {
  research: {
    anchor: "research",
    label: { zh: "科研", en: "Research" },
  },
  projects: {
    anchor: "competition",
    label: { zh: "竞赛与项目", en: "Projects" },
  },
  experience: {
    anchor: "experience",
    label: { zh: "实践经历", en: "Experience" },
  },
};

function getCategoryPresentation(category: string) {
  return categoryPresentation[category as DetailCategory];
}

async function requestedLanguage(
  searchParams: DetailRouteProps["searchParams"],
): Promise<Language> {
  const { lang } = await searchParams;
  return lang === "en" ? "en" : "zh";
}

export function generateStaticParams() {
  return [
    ...Object.keys(researchDetails).map((slug) => ({
      category: "research",
      slug,
    })),
    ...Object.keys(projectDetails).map((slug) => ({
      category: "projects",
      slug,
    })),
    ...Object.keys(experienceDetails).map((slug) => ({
      category: "experience",
      slug,
    })),
  ];
}

export async function generateMetadata({
  params,
  searchParams,
}: DetailRouteProps): Promise<Metadata> {
  const [{ category, slug }, language] = await Promise.all([
    params,
    requestedLanguage(searchParams),
  ]);
  const detail = getDetail(category, slug);

  if (!detail || !getCategoryPresentation(category)) notFound();

  return buildDetailMetadata(
    detail[language],
    `/${category}/${slug}`,
    language,
  );
}

export default async function PortfolioDetailPage({
  params,
  searchParams,
}: DetailRouteProps) {
  const [{ category, slug }, language] = await Promise.all([
    params,
    requestedLanguage(searchParams),
  ]);
  const detail = getDetail(category, slug);
  const presentation = getCategoryPresentation(category);

  if (!detail || !presentation) notFound();

  return (
    <DetailPage
      content={detail[language]}
      language={language}
      currentPath={`/${category}/${slug}`}
      categoryLabel={presentation.label[language]}
      backAnchor={presentation.anchor}
    />
  );
}
