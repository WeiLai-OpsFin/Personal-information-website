import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const productionOrigin = "https://lai-wei-evidence.futureavicii.chatgpt.site";

const detailPaths = [
  "/about",
  "/academics",
  "/research/ltci-employment",
  "/research/fake-review-booking",
  "/research/leader-humor-quiet-quitting",
  "/research/hospital-appointment-matching",
  "/projects/icm-2026-wnba",
  "/projects/credit-risk-ridge-regression",
  "/projects/financial-time-series-analysis",
  "/projects/digital-scf-greenwashing",
  "/experience/ccb-risk-management",
  "/experience/citic-market-expansion",
  "/experience/icbc-corporate-banking",
  "/experience/icbc-investment",
  "/experience/kpmg-audit",
];

let workerPromise;

async function getWorker() {
  if (!workerPromise) {
    const workerUrl = new URL("../dist/server/index.js", import.meta.url);
    workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
    workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);
  }

  return workerPromise;
}

async function render(pathname = "/", requestHeaders = {}) {
  const url = new URL(pathname, "https://lai-wei.example");
  const worker = await getWorker();

  return worker.fetch(
    new Request(url, {
      headers: { accept: "text/html", host: url.host, ...requestHeaders },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function singleHeading(html, pathname) {
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  assert.equal(headings.length, 1, `${pathname} must render exactly one h1`);

  return headings[0][1]
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

test("server-renders the Chinese home page, real detail links, and social metadata", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");

  const html = await response.text();
  assert.match(html, /<title>[^<]*Lai Wei[^<]*Applied Economics[^<]*<\/title>/i);
  assert.match(html, /用数据理解政策、金融与商业决策/);
  assert.match(html, /我是魏来，一名应用经济学一等荣誉毕业生/);
  assert.match(html, /3\.44/);
  assert.match(html, /COMAP/);
  assert.match(html, /182 4712 9040/);
  assert.match(html, /href="\/en"/);
  assert.match(html, /src="\/images\/lai-wei-portrait-square\.webp"/);
  assert.match(
    html,
    new RegExp(`${escapeRegExp(productionOrigin)}\\/og\\.png`),
  );

  for (const pathname of detailPaths) {
    assert.match(
      html,
      new RegExp(`href="${escapeRegExp(pathname)}"`),
      `Chinese home page must expose a real link to ${pathname}`,
    );
  }

  assert.doesNotMatch(html, /5\s*[×x]\s*President[’']s Honour Roll|President[’']s Honour Roll\s*5\s*[×x]/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps original records private and publishes only the reviewed WebP derivatives", async () => {
  const [
    page,
    layout,
    htmlLanguageSync,
    detailPage,
    portfolioContent,
    siteMetadata,
    css,
    packageJson,
    readme,
    publicFiles,
    socialCard,
    portrait,
    icmPreview,
    pathPreview,
  ] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/html-language-sync.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/detail-page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/portfolio-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/site-metadata.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
    readdir(new URL("../public/", import.meta.url), { recursive: true }),
    readFile(new URL("../public/og.png", import.meta.url)),
    readFile(new URL("../public/images/lai-wei-portrait-square.webp", import.meta.url)),
    readFile(new URL("../public/evidence/icm-finalist-redacted.webp", import.meta.url)),
    readFile(new URL("../public/evidence/path-academics-grade.webp", import.meta.url)),
  ]);

  const appCopy = `${page}\n${detailPage}\n${portfolioContent}`;
  assert.match(page, /src="\/images\/lai-wei-portrait-square\.webp"/);
  assert.match(page, /href=\{`\$\{pathPrefix\}\/about`\}/);
  assert.match(page, /href=\{`\$\{pathPrefix\}\/academics`\}/);
  assert.match(detailPage, /原始证明保留私有；只展示核验结果或脱敏副本。/);
  assert.match(detailPage, /Original records remain private; only verified facts or redacted copies are shown\./);
  assert.match(layout, /p==="\/en"\|\|p\.startsWith\("\/en\/"\)/);
  assert.match(layout, /<HtmlLanguageSync\s*\/>/);
  assert.match(htmlLanguageSync, /usePathname\(\)/);
  assert.match(htmlLanguageSync, /useSearchParams\(\)/);
  assert.match(htmlLanguageSync, /document\.documentElement\.lang\s*=\s*isEnglish\s*\?\s*"en"\s*:\s*"zh-CN"/);
  assert.match(layout, /\/images\/lai-wei-portrait-square\.webp/);
  assert.match(siteMetadata, /"x-default"/);
  assert.match(siteMetadata, /width:\s*1732/);
  assert.match(siteMetadata, /height:\s*908/);
  assert.doesNotMatch(appCopy, /5\s*[×x]\s*President[’']s Honour Roll|President[’']s Honour Roll\s*5\s*[×x]/i);
  assert.doesNotMatch(css, /writing-mode:\s*vertical-rl/i);
  assert.doesNotMatch(css, /rotate\s*\(\s*180deg\s*\)/i);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  const publicPaths = publicFiles.map((file) => String(file).replaceAll("\\", "/"));
  const publicFilesOnly = publicPaths.filter((file) => /\.[^/]+$/.test(file));
  const prohibitedRecord = /\.(?:pdf|docx?|txt|rtf|odt|xlsx?|pptx?)$/i;
  assert.deepEqual(
    publicFilesOnly.filter((file) => prohibitedRecord.test(file)),
    [],
    "raw documents and office files must never be shipped from public/",
  );
  assert.deepEqual(
    publicFilesOnly.filter((file) => file.startsWith("evidence/")).sort(),
    [
      "evidence/icm-finalist-redacted.webp",
      "evidence/path-academics-grade.webp",
    ],
  );
  assert.ok(publicFilesOnly.includes("images/lai-wei-portrait-square.webp"));
  assert.equal(
    publicFilesOnly.filter((file) => file === "images/lai-wei-portrait-square.webp").length,
    1,
  );
  assert.deepEqual(
    publicFilesOnly.filter((file) => /(?:transcript|certificate|credential|passport|id[-_ ]?card|student[-_ ]?card|ielts|trf|resume|cv)/i.test(file)),
    [],
    "public asset names must not reveal an original identity or credential file",
  );

  for (const [name, asset] of [
    ["square portrait", portrait],
    ["redacted ICM preview", icmPreview],
    ["Path Academics preview", pathPreview],
  ]) {
    assert.equal(asset.subarray(0, 4).toString("ascii"), "RIFF", `${name} must be a WebP file`);
    assert.equal(asset.subarray(8, 12).toString("ascii"), "WEBP", `${name} must be a WebP file`);
    assert.ok(asset.length > 10_000, `${name} must not be an empty placeholder`);
  }

  assert.match(readme, /Original source records remain private/i);
  assert.match(readme, /privacy-reviewed derivative images/i);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  assert.equal(socialCard.readUInt32BE(16), 1732);
  assert.equal(socialCard.readUInt32BE(20), 908);
  await assert.doesNotReject(access(projectRoot));
});

test("ships responsive and accessible home-page interaction contracts", async () => {
  const [response, page, css] = await Promise.all([
    render("/"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  const html = await response.text();

  singleHeading(html, "/");
  assert.equal((html.match(/<main\b/g) ?? []).length, 1);
  assert.equal((html.match(/<nav\b/g) ?? []).length, 1);
  assert.ok((html.match(/<img\b/g) ?? []).length >= 4);
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(match[0], /\balt="[^"]+"/);
    assert.doesNotMatch(match[0], /_vinext\/image|_next\/image/);
  }

  assert.match(html, /<html[^>]+lang="zh-CN"/);
  assert.match(html, /class="skip-link"[^>]+href="#main-content"/);
  assert.match(html, /role="group"[^>]+aria-label="切换网站语言"/);
  assert.match(html, /<a(?=[^>]*href="\/")(?=[^>]*lang="zh-CN")(?=[^>]*aria-current="page")[^>]*>/);
  assert.match(html, /<a(?=[^>]*href="\/en")(?=[^>]*lang="en")[^>]*>/);
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1"/);
  assert.match(html, /target="_blank" rel="noreferrer"/);

  assert.match(page, /initialLanguage\?: Language/);
  assert.match(page, /const pathPrefix = language === "en" \? "\/en" : ""/);
  assert.match(page, /tabIndex=\{-1\}/);
  assert.match(page, /\{ id: "contact", label: "Contact" \}/);
  assert.match(page, /2004 年 11 月 4 日/);
  assert.match(page, /4 November 2004/);
  assert.match(page, /181 cm/);
  assert.match(page, /60 kg/);
  assert.match(page, /INFJ/);
  assert.match(page, /天蝎座/);
  assert.match(page, /Scorpio/);
  assert.match(page, /羽毛球、钢琴/);
  assert.match(page, /Badminton, piano/);

  assert.match(css, /:focus-visible\s*\{/);
  assert.match(css, /@media \(max-width: 1180px\)/);
  assert.match(css, /@media \(max-width: 900px\)/);
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /\.desktop-nav[\s\S]*overflow-x:\s*auto/);
  assert.match(css, /min-width:\s*44px/);
  assert.match(css, /\.portrait-media\s*\{[\s\S]*aspect-ratio:\s*1/i);
  assert.match(css, /--muted:\s*#5f6978/);
  assert.match(css, /--amber-ink:\s*#9b5b0a/);
  assert.match(css, /--blue-ink:\s*#1e6ea6/);
});

test("renders every known Chinese and English detail route with one h1, breadcrumbs, and reciprocal language links", async () => {
  const routePairs = detailPaths.flatMap((pathname) => [
    { pathname, language: "zh" },
    { pathname: `/en${pathname}`, language: "en", basePath: pathname },
  ]);
  const responses = await Promise.all(
    routePairs.map(async (route) => ({
      ...route,
      response: await render(route.pathname),
    })),
  );
  const headings = { zh: [], en: [] };

  for (const { pathname, language, basePath = pathname, response } of responses) {
    assert.equal(response.status, 200, `${pathname} must return HTTP 200`);
    assert.match(
      response.headers.get("content-type") ?? "",
      /^text\/html\b/i,
      `${pathname} must return HTML`,
    );

    const html = await response.text();
    headings[language].push(singleHeading(html, pathname));
    assert.match(html, /<nav class="breadcrumbs"[^>]+aria-label="(?:面包屑导航|Breadcrumb)"/);
    assert.match(html, /aria-current="page"/);
    assert.match(html, new RegExp(`href="${escapeRegExp(basePath)}"`));
    assert.match(html, new RegExp(`href="${escapeRegExp(`/en${basePath}`)}"`));
    assert.match(html, /class="language-switch"[^>]+role="group"/);
    assert.doesNotMatch(html, /href="[^"]+\.(?:pdf|docx?|txt)(?:[?#][^"]*)?"/i);

    const canonicalUrl = `${productionOrigin}${pathname}`;
    const chineseUrl = `${productionOrigin}${basePath}`;
    const englishUrl = `${productionOrigin}/en${basePath}`;
    assert.match(
      html,
      new RegExp(`rel="canonical" href="${escapeRegExp(canonicalUrl)}"`),
      `${pathname} must canonicalize to its own language route`,
    );
    assert.match(
      html,
      new RegExp(`rel="alternate" hrefLang="zh-CN" href="${escapeRegExp(chineseUrl)}"`),
    );
    assert.match(
      html,
      new RegExp(`rel="alternate" hrefLang="en" href="${escapeRegExp(englishUrl)}"`),
    );
    assert.match(
      html,
      new RegExp(`property="og:url" content="${escapeRegExp(canonicalUrl)}"`),
    );

    if (language === "en") {
      assert.match(html, /lang="en"[^>]+aria-current="page"/);
    } else {
      assert.match(html, /lang="zh-CN"[^>]+aria-current="page"/);
    }
  }

  assert.equal(new Set(headings.zh).size, detailPaths.length, "Chinese detail-page h1 text must be unique");
  assert.equal(new Set(headings.en).size, detailPaths.length, "English detail-page h1 text must be unique");

  const [chineseEvidence, englishEvidence] = await Promise.all([
    render("/projects/icm-2026-wnba").then((response) => response.text()),
    render("/en/projects/icm-2026-wnba").then((response) => response.text()),
  ]);
  assert.match(chineseEvidence, /原始证明保留私有；只展示核验结果或脱敏副本。/);
  assert.match(englishEvidence, /Original records remain private; only verified facts or redacted copies are shown\./);
});

test("serves /en as the canonical English home and rejects forwarded metadata injection", async () => {
  const [englishResponse, hostileHeaderResponse] = await Promise.all([
    render("/en"),
    render("/", {
      host: "personal.example",
      "x-forwarded-host": "evil.example",
      "x-forwarded-proto": "javascript",
    }),
  ]);

  assert.equal(englishResponse.status, 200);
  const englishHtml = await englishResponse.text();
  assert.match(englishHtml, /Turning data into evidence for policy, finance, and business decisions/);
  assert.match(englishHtml, /<title>Lai Wei \| Applied Economics, Research &amp; Finance<\/title>/i);
  assert.match(
    englishHtml,
    /rel="canonical" href="https:\/\/lai-wei-evidence\.futureavicii\.chatgpt\.site\/en"/i,
  );
  assert.match(
    englishHtml,
    /rel="alternate" hrefLang="en" href="https:\/\/lai-wei-evidence\.futureavicii\.chatgpt\.site\/en"/i,
  );
  assert.match(
    englishHtml,
    /<a(?=[^>]*href="\/en")(?=[^>]*lang="en")(?=[^>]*aria-current="page")[^>]*>/,
  );

  for (const pathname of detailPaths) {
    assert.match(
      englishHtml,
      new RegExp(`href="${escapeRegExp(`/en${pathname}`)}"`),
      `English home page must expose a real link to /en${pathname}`,
    );
  }

  const hostileHeaderHtml = await hostileHeaderResponse.text();
  assert.match(hostileHeaderHtml, /https:\/\/lai-wei-evidence\.futureavicii\.chatgpt\.site\/og\.png/);
  assert.doesNotMatch(hostileHeaderHtml, /evil\.example|personal\.example|javascript:\/\//);
});

