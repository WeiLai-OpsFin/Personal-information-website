import Home from "../page";
import { buildHomeMetadata } from "../site-metadata";

export const metadata = buildHomeMetadata("en");

export default function EnglishHomePage() {
  return <Home initialLanguage="en" />;
}
