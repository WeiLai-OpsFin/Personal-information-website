import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const productionOrigin = "https://lai-wei-evidence.futureavicii.chatgpt.site";

async function render(url = "https://lai-wei.example/", requestHeaders = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(url, {
      headers: { accept: "text/html", host: new URL(url).host, ...requestHeaders },
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

test("server-renders the bilingual personal site and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");

  const html = await response.text();
  assert.match(html, /<title>Lai Wei \(魏来\) \| Applied Economics, Research &amp; Finance<\/title>/i);
  assert.match(html, /用数据理解政策、金融与商业决策/);
  assert.match(html, /3\.44/);
  assert.match(html, /COMAP/);
  assert.match(html, /182 4712 9040/);
  assert.match(html, /中文/);
  assert.match(html, />EN</);
  assert.match(html, new RegExp(`${productionOrigin.replaceAll(".", "\\.")}\\/og\\.png`));
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps private source documents out of the public site", async () => {
  const [page, layout, packageJson, publicFiles, socialCard] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readdir(new URL("../public/", import.meta.url), { recursive: true }),
    readFile(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.match(page, /type Language = "zh" \| "en"/);
  assert.match(page, /useSearchParams/);
  assert.match(page, /searchParams\.get\("lang"\)/);
  assert.match(page, /window\.history\.replaceState/);
  assert.match(page, /President’s Honour Roll/);
  assert.match(page, /Accepted for oral presentation at EURAM 2026/);
  assert.match(page, /Included in the RARCS 2026 conference proceedings/);
  assert.match(page, /COMAP ICM 2026/);
  assert.doesNotMatch(page, /MCM\s*\/\s*ICM|stress-tested|压力测试/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /const PRODUCTION_ORIGIN = "https:\/\/lai-wei-evidence\.futureavicii\.chatgpt\.site"/);
  assert.match(layout, /alternates:/);
  assert.match(layout, /"x-default"/);
  assert.match(layout, /languageBootstrap/);
  assert.match(layout, /width:\s*1732/);
  assert.match(layout, /height:\s*908/);
  assert.doesNotMatch(layout, /18247129040|2004/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  const publicPaths = publicFiles.map((file) => String(file).replaceAll("\\", "/"));
  assert.equal(publicPaths.filter((file) => /\.pdf$/i.test(file)).length, 0);
  assert.deepEqual(
    publicPaths.filter((file) => /\.jpg$/i.test(file)).sort(),
    [
      "images/lai-wei-erhai.jpg",
      "images/lai-wei-portrait.jpg",
      "images/lai-wei-seaside.jpg",
      "images/lai-wei-zhuhai.jpg",
    ],
  );

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await assert.doesNotReject(access(new URL("../public/og.png", import.meta.url)));
  assert.equal(socialCard.readUInt32BE(16), 1732);
  assert.equal(socialCard.readUInt32BE(20), 908);
  await assert.doesNotReject(access(projectRoot));
});

test("ships responsive and accessible interaction contracts", async () => {
  const [response, page, css] = await Promise.all([
    render(),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  const html = await response.text();

  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.equal((html.match(/<main\b/g) ?? []).length, 1);
  assert.equal((html.match(/<nav\b/g) ?? []).length, 1);
  assert.equal((html.match(/<img\b/g) ?? []).length, 4);
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(match[0], /\balt="[^"]+"/);
    assert.doesNotMatch(match[0], /_vinext\/image|_next\/image/);
  }

  assert.match(html, /<html[^>]+lang="zh-CN"/);
  assert.match(html, /class="skip-link"[^>]+href="#main-content"/);
  assert.match(html, /role="group"[^>]+aria-label="切换网站语言"/);
  assert.equal((html.match(/aria-pressed="(?:true|false)"/g) ?? []).length, 2);
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1"/);
  assert.match(html, /target="_blank" rel="noreferrer"/);

  assert.match(page, /document\.documentElement\.lang = nextLanguage/);
  assert.match(page, /setLanguage\(nextLanguage\)/);
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
  assert.match(css, /--muted:\s*#5f6978/);
  assert.match(css, /--amber-ink:\s*#9b5b0a/);
  assert.match(css, /--blue-ink:\s*#1e6ea6/);
});

test("supports a shareable English URL and rejects forwarded metadata injection", async () => {
  const [englishResponse, hostileHeaderResponse] = await Promise.all([
    render("https://lai-wei.example/?lang=en"),
    render("https://personal.example/", {
      "x-forwarded-host": "evil.example",
      "x-forwarded-proto": "javascript",
    }),
  ]);

  const englishHtml = await englishResponse.text();
  assert.match(englishHtml, /Turning data into evidence for policy, finance, and business decisions/);
  assert.match(englishHtml, /hrefLang="en" href="https:\/\/lai-wei-evidence\.futureavicii\.chatgpt\.site\/\?lang=en"/);
  assert.match(englishHtml, /URLSearchParams\(location\.search\)/);

  const hostileHeaderHtml = await hostileHeaderResponse.text();
  assert.match(hostileHeaderHtml, /https:\/\/lai-wei-evidence\.futureavicii\.chatgpt\.site\/og\.png/);
  assert.doesNotMatch(hostileHeaderHtml, /evil\.example|personal\.example|javascript:\/\//);
});

