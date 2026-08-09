import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "../../../detail-page";
import {
  experienceDetails,
  getDetail,
  projectDetails,
  researchDetails,
  type DetailCategory,
} from "../../../portfolio-content";
import { buildDetailMetadata } from "../../../site-metadata";

type EnglishDetailRouteProps = {
  params: Promise<{ category: string; slug: string }>;
};

const categoryPresentation: Record<
  DetailCategory,
  { anchor: string; label: string }
> = {
  research: { anchor: "research", label: "Research" },
  projects: { anchor: "competition", label: "Projects" },
  experience: { anchor: "experience", label: "Experience" },
};

function getCategoryPresentation(category: string) {
  return categoryPresentation[category as DetailCategory];
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
}: EnglishDetailRouteProps): Promise<Metadata> {
  const { category, slug } = await params;
  const detail = getDetail(category, slug);

  if (!detail || !getCategoryPresentation(category)) notFound();

  return buildDetailMetadata(
    detail.en,
    `/${category}/${slug}`,
    "en",
  );
}

export default async function EnglishPortfolioDetailPage({
  params,
}: EnglishDetailRouteProps) {
  const { category, slug } = await params;
  const detail = getDetail(category, slug);
  const presentation = getCategoryPresentation(category);

  if (!detail || !presentation) notFound();

  return (
    <DetailPage
      content={detail.en}
      language="en"
      currentPath={`/${category}/${slug}`}
      categoryLabel={presentation.label}
      backAnchor={presentation.anchor}
    />
  );
}
