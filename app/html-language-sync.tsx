"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/** Keep the document language accurate after client-side route changes. */
export function HtmlLanguageSync() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryLanguage = searchParams.get("lang");

  useEffect(() => {
    const isEnglish =
      queryLanguage === "en" || pathname === "/en" || pathname.startsWith("/en/");

    document.documentElement.lang = isEnglish ? "en" : "zh-CN";
  }, [pathname, queryLanguage]);

  return null;
}
