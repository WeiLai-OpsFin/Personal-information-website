import DetailPage from "../../detail-page";
import { academicsDetail } from "../../portfolio-content";
import { buildDetailMetadata } from "../../site-metadata";

export const metadata = buildDetailMetadata(
  academicsDetail.en,
  "/academics",
  "en",
);

export default function EnglishAcademicsPage() {
  return (
    <DetailPage
      content={academicsDetail.en}
      language="en"
      currentPath="/academics"
      categoryLabel="Academics"
      backAnchor="education"
    />
  );
}
