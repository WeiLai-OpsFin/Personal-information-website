import DetailPage from "../../detail-page";
import { aboutDetail } from "../../portfolio-content";
import { buildDetailMetadata } from "../../site-metadata";

export const metadata = buildDetailMetadata(aboutDetail.en, "/about", "en");

export default function EnglishAboutPage() {
  return (
    <DetailPage
      content={aboutDetail.en}
      language="en"
      currentPath="/about"
      categoryLabel="About"
      backAnchor="about"
    />
  );
}
