import Image from "next/image";
import type { DetailContent, Language } from "./portfolio-content";

type DetailPageProps = {
  content: DetailContent;
  language: Language;
  currentPath: string;
  categoryLabel: string;
  backAnchor?: string;
};

const labels = {
  zh: {
    skip: "跳到主要内容",
    home: "首页",
    back: "返回作品集",
    period: "时间",
    role: "角色",
    status: "状态",
    methods: "方法与工具",
    evidence: "成果与证据",
    privacy: "隐私审查通过",
    limitation: "证据边界",
    links: "继续查看",
    newWindow: "新窗口打开",
    footer: "以证据为起点，以清晰为标准。",
    top: "返回顶部",
  },
  en: {
    skip: "Skip to main content",
    home: "Home",
    back: "Back to portfolio",
    period: "Period",
    role: "Role",
    status: "Status",
    methods: "Methods & tools",
    evidence: "Outputs & evidence",
    privacy: "Privacy reviewed",
    limitation: "Evidence boundary",
    links: "Explore further",
    newWindow: "opens in a new window",
    footer: "Evidence first. Clarity always.",
    top: "Back to top",
  },
} as const;

export default function DetailPage({
  content,
  language,
  currentPath,
  categoryLabel,
  backAnchor = "top",
}: DetailPageProps) {
  const t = labels[language];
  const homeHref = language === "en" ? "/en" : "/";
  const backHref = `${homeHref}#${backAnchor}`;
  const zhHref = currentPath;
  const enHref = `/en${currentPath}`;

  return (
    <>
      <a className="skip-link" href="#detail-main">
        {t.skip}
      </a>

      <header className="detail-site-header">
        <a className="wordmark" href={homeHref} aria-label={t.home}>
          <span className="wordmark-name">LW</span>
          <span className="wordmark-copy">
            <strong>Lai Wei</strong>
            <small>Applied Economics · Research · Finance</small>
          </span>
        </a>

        <a className="detail-back-link" href={backHref}>
          <span aria-hidden="true">←</span> {t.back}
        </a>

        <div className="language-switch" role="group" aria-label={language === "zh" ? "切换网站语言" : "Switch website language"}>
          <a lang="zh-CN" className={language === "zh" ? "active" : ""} aria-current={language === "zh" ? "page" : undefined} href={zhHref}>
            中文
          </a>
          <span aria-hidden="true">/</span>
          <a lang="en" className={language === "en" ? "active" : ""} aria-current={language === "en" ? "page" : undefined} href={enHref}>
            EN
          </a>
        </div>
      </header>

      <main className="detail-main" id="detail-main" tabIndex={-1}>
        <nav className="breadcrumbs" aria-label={language === "zh" ? "面包屑导航" : "Breadcrumb"}>
          <a href={homeHref}>{t.home}</a>
          <span aria-hidden="true">/</span>
          <a href={backHref}>{categoryLabel}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{content.title}</span>
        </nav>

        <article className="detail-article">
          <header className="detail-hero">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="detail-summary">{content.summary}</p>

            {(content.period || content.role || content.status) && (
              <dl className="detail-meta">
                {content.period && (
                  <div>
                    <dt>{t.period}</dt>
                    <dd>{content.period}</dd>
                  </div>
                )}
                {content.role && (
                  <div>
                    <dt>{t.role}</dt>
                    <dd>{content.role}</dd>
                  </div>
                )}
                {content.status && (
                  <div>
                    <dt>{t.status}</dt>
                    <dd>{content.status}</dd>
                  </div>
                )}
              </dl>
            )}
          </header>

          {content.highlights && content.highlights.length > 0 && (
            <dl className="detail-highlights">
              {content.highlights.map((item) => (
                <div key={`${item.value}-${item.label}`}>
                  <dd>{item.value}</dd>
                  <dt>{item.label}</dt>
                </div>
              ))}
            </dl>
          )}

          <div className="detail-body">
            {content.sections.map((section, index) => (
              <section className="detail-section" key={section.heading} aria-labelledby={`detail-section-${index}`}>
                <p className="detail-section-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2 id={`detail-section-${index}`}>{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          {content.methods && content.methods.length > 0 && (
            <section className="detail-band" aria-labelledby="methods-title">
              <h2 id="methods-title">{t.methods}</h2>
              <ul className="detail-tags">
                {content.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </section>
          )}

          {content.evidence && content.evidence.length > 0 && (
            <section className="detail-band evidence-band" aria-labelledby="evidence-title">
              <div className="detail-band-heading">
                <h2 id="evidence-title">{t.evidence}</h2>
                <p>{language === "zh" ? "原始证明保留私有；只展示核验结果或脱敏副本。" : "Original records remain private; only verified facts or redacted copies are shown."}</p>
              </div>
              <div className="evidence-grid">
                {content.evidence.map((item) => (
                  <article className="evidence-card" key={item.title}>
                    {item.image && item.imageAlt && (
                      <div className="evidence-image">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          width={1400}
                          height={1100}
                          sizes="(max-width: 760px) 100vw, 52vw"
                          loading="lazy"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="evidence-copy">
                      <p className="privacy-badge">
                        <span aria-hidden="true">✓</span> {t.privacy}
                      </p>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {content.limitation && (
            <aside className="limitation-note" aria-labelledby="limitation-title">
              <p className="mini-label" id="limitation-title">{t.limitation}</p>
              <p>{content.limitation}</p>
            </aside>
          )}

          {content.links && content.links.length > 0 && (
            <section className="detail-links" aria-labelledby="links-title">
              <h2 id="links-title">{t.links}</h2>
              <div>
                {content.links.map((link) => (
                  <a
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${link.label}（${t.newWindow}）`}
                  >
                    <span>
                      <strong>{link.label}</strong>
                      <small>{link.note ?? t.newWindow}</small>
                    </span>
                    <i aria-hidden="true">↗</i>
                  </a>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <footer className="site-footer detail-footer">
        <p>© 2026 Lai Wei · {t.footer}</p>
        <a href="#detail-main">{t.top} ↑</a>
      </footer>
    </>
  );
}
