"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Language = "zh" | "en";

const copy = {
  zh: {
    skip: "跳到主要内容",
    brandSubtitle: "应用经济学 · 研究 · 金融",
    nav: [
      { id: "about", label: "关于" },
      { id: "education", label: "学历成绩" },
      { id: "research", label: "科研" },
      { id: "competition", label: "竞赛" },
      { id: "experience", label: "经历" },
      { id: "life", label: "生活" },
      { id: "contact", label: "联系" },
    ],
    languageLabel: "切换网站语言",
    heroEyebrow: "应用经济学 · 因果推断 · 金融风险",
    heroName: "魏来",
    heroEnglishName: "Lai Wei",
    heroTitle: "用数据理解政策、金融与商业决策",
    heroIntro:
      "应用经济学一等荣誉毕业生，关注政策评估、金融风险与数据驱动决策。我把复杂问题拆解为可检验的假设与可观测变量，再用实证方法与计算模型形成清晰、可复现、可用于决策的证据。",
    heroPrimary: "查看研究",
    heroSecondary: "访问 GitHub",
    heroPortraitAlt: "魏来身着深蓝西装的正式肖像",
    heroPortraitCaption: "Lai Wei / 魏来",
    heroStatus: "研究 · 金融 · 数据",
    signalLabel: "当前关注",
    signals: ["政策评估", "金融风险", "计算建模"],
    sectionLabels: {
      about: "01 / 关于我",
      education: "02 / 学历与成绩",
      research: "03 / 科研",
      competition: "04 / 竞赛与项目",
      experience: "05 / 实践经历",
      life: "06 / 简历之外",
      contact: "07 / 联系",
    },
    aboutTitle: "把模糊的问题，转化为可检验的研究设计与可信证据。",
    aboutBody:
      "我是一名应用经济学一等荣誉毕业生。最初，我把经济学理解为模型与公式；在政策研究、消费者行为和金融实践中，我逐渐认识到，它更是一套理解现实、检验判断并改善决策的方法。我的经历横跨学术研究、银行、证券、投资与审计。",
    aboutQuote: "好的分析不止给出一个数字，也要说明它从哪里来、意味着什么，以及下一步该做什么。",
    capabilities: [
      {
        number: "01",
        title: "因果推断",
        text: "DID、事件研究、安慰剂检验、异质性分析与 PSM-DID。",
      },
      {
        number: "02",
        title: "统计与计算建模",
        text: "Python、PLS-SEM、CFA、Bootstrap、Monte Carlo 与网络流。",
      },
      {
        number: "03",
        title: "金融与商业分析",
        text: "风险识别、估值、情景分析，以及把模型结果转化为决策材料。",
      },
    ],
    educationTitle: "北师香港浸会大学（BNBU）",
    educationDegree: "工商管理学士（荣誉），应用经济学",
    educationMeta: "2022.09 — 2026.06 · 全英文授课",
    educationNote:
      "Bachelor of Business Administration (Honours) in Applied Economics",
    metrics: [
      { value: "3.44", suffix: "/ 4.00", label: "最终 GPA" },
      { value: "一等", suffix: "荣誉", label: "学位等级" },
      { value: "5×", suffix: "", label: "President’s Honour Roll" },
      { value: "1×", suffix: "", label: "Dean’s List" },
    ],
    coursesLabel: "精选课程",
    courses: [
      "时间序列数据分析 · A",
      "商业研究方法 · A",
      "产业组织 · A",
      "博弈与经济决策 · A",
      "经济与金融线性代数 · A",
      "截面与面板数据分析 · A−",
      "金融大数据分析 · A−",
    ],
    researchTitle: "围绕真实问题组织方法，而不是围绕方法寻找问题。",
    researchIntro:
      "研究横跨公共政策、消费者行为、组织行为与市场设计。每个项目都从清晰的问题出发，说明方法、角色与当前成果状态。",
    researchRole: "角色",
    researchMethod: "方法",
    researchProjects: [
      {
        index: "R.01",
        title: "长期护理保险对就业的影响",
        period: "2025.09 — 2026.05",
        role: "共同作者",
        status: "本科毕业论文",
        text: "使用 2011—2019 年城市面板数据评估中国长期护理保险试点的就业与服务供给效应。结果对照护相关就业的正向影响提供了更一致的证据，而医生供给与医疗机构数量的估计较弱或对模型设定较敏感。",
        methods: ["DID", "事件研究", "安慰剂检验", "PSM-DID"],
      },
      {
        index: "R.02",
        title: "网络虚假评论与酒店预订决策",
        period: "2026.02 — 2026.06",
        role: "第三作者",
        status: "论文收录于 RARCS 2026 会议论文集",
        text: "构建基于 Python 的 PLS-SEM 分析流程，覆盖问卷清理、操纵检验、测量与结构模型、Bootstrap 中介分析及 IPMA。研究表明，评论真实性主要通过消费者信任影响预订意向。",
        methods: ["Python", "PLS-SEM", "Bootstrap", "IPMA"],
      },
      {
        index: "R.03",
        title: "领导者幽默与员工安静离职",
        period: "2025.09 — 2025.12",
        role: "第三作者",
        status: "获 EURAM 2026 口头报告录用",
        text: "考察组织基础自尊的中介作用，以及权力距离导向与人力资源管理实践的调节作用；参与问卷设计、数据清理、验证性因子分析、回归与 Bootstrap 分析。",
        methods: ["CFA", "回归", "Bootstrap", "调节效应"],
      },
      {
        index: "R.04",
        title: "医院预约匹配机制",
        period: "2025.06 — 2025.07",
        role: "团队项目成员",
        status: "Path Academics 市场设计研讨",
        text: "在 Aytek Erdil 教授（剑桥大学）授课的线上研究研讨中，设计兼顾偏好、优先级与容量约束的预约匹配机制，并通过 Python 仿真比较不同机制的表现。",
        methods: ["Gale–Shapley", "优先级队列", "网络流", "Python"],
      },
    ],
    competitionKicker: "COMAP ICM 2026 · Problem D",
    competitionTitle: "职业体育团队经营与估值模型",
    competitionAward: "Finalist",
    competitionRole: "Python 建模成员",
    competitionText:
      "整合赛程、票务、薪资、场馆与利率等多源数据，形成 5,065 条 WNBA 比赛级样本；构建连接 Elo 胜率、上座率、动态票价、EBITDA/DCF 估值与杠杆优化的量化框架，并通过 Monte Carlo 与敏感性分析识别关键风险驱动因素。",
    competitionStats: [
      { value: "5,065", label: "比赛级样本" },
      { value: "Elo → DCF", label: "端到端框架" },
      { value: "2026", label: "Finalist" },
    ],
    experienceTitle: "把研究能力带到真实的金融与商业场景。",
    experienceIntro:
      "从审计、投资和公司金融到证券与风险管理，我在不同机构中练习同一件事：快速理解问题、核对证据，并把分析转化为可靠判断。",
    experiences: [
      {
        date: "2026.06 — 至今",
        company: "中国建设银行 · 内蒙古分行",
        role: "风险管理实习",
        tag: "银行风险",
      },
      {
        date: "2026.01 — 2026.02",
        company: "中信证券 · 内蒙古分公司",
        role: "市场拓展实习",
        tag: "证券",
      },
      {
        date: "2025.07 — 2025.08",
        company: "中国工商银行 · 内蒙古分行",
        role: "公司业务实习",
        tag: "公司金融",
      },
      {
        date: "2025.06 — 2025.07",
        company: "工银金融资产投资有限公司 · 南京",
        role: "投资实习",
        tag: "投资",
      },
      {
        date: "2024.07 — 2024.08",
        company: "毕马威 · 广州",
        role: "审计实习",
        tag: "审计",
      },
    ],
    lifeTitle: "简历之外，我喜欢保持好奇，也喜欢认真生活。",
    lifeBody:
      "羽毛球让我保持速度与专注，钢琴让我练习耐心与节奏。旅行中的风、海与城市夜色，则提醒我在模型和数据之外，始终留意真实的人与生活。",
    factsTitle: "个人速写",
    facts: [
      ["姓名", "魏来（Lai Wei）"],
      ["生日", "2004 年 11 月 4 日"],
      ["身高", "181 cm"],
      ["体重", "60 kg"],
      ["MBTI", "INFJ"],
      ["星座", "天蝎座"],
      ["爱好", "羽毛球、钢琴"],
      ["手机", "182 4712 9040"],
    ],
    gallery: [
      {
        src: "/images/lai-wei-zhuhai.jpg",
        alt: "魏来站在珠海夜景标牌旁",
        caption: "珠海 · 城市夜色",
      },
      {
        src: "/images/lai-wei-seaside.jpg",
        alt: "魏来在海边举手",
        caption: "海边 · 风与自由",
      },
      {
        src: "/images/lai-wei-erhai.jpg",
        alt: "魏来坐在湖边木船上",
        caption: "洱海 · 安静片刻",
      },
    ],
    contactEyebrow: "一起把问题想清楚",
    contactTitle: "研究、升学、金融与数据项目，都欢迎交流。",
    contactBody:
      "如果你正在寻找一位重视证据、善于建模，也愿意把复杂分析讲清楚的合作伙伴，欢迎联系我。",
    phoneLabel: "电话",
    githubLabel: "GitHub",
    footer: "以证据为起点，以清晰为标准。",
    backToTop: "返回顶部",
  },
  en: {
    skip: "Skip to main content",
    brandSubtitle: "Applied Economics · Research · Finance",
    nav: [
      { id: "about", label: "About" },
      { id: "education", label: "Academics" },
      { id: "research", label: "Research" },
      { id: "competition", label: "Competition" },
      { id: "experience", label: "Experience" },
      { id: "life", label: "Beyond" },
      { id: "contact", label: "Contact" },
    ],
    languageLabel: "Switch website language",
    heroEyebrow: "APPLIED ECONOMICS · CAUSAL INFERENCE · FINANCIAL RISK",
    heroName: "Lai Wei",
    heroEnglishName: "魏来",
    heroTitle: "Turning data into evidence for policy, finance, and business decisions.",
    heroIntro:
      "A First Class Honours graduate in Applied Economics, interested in policy evaluation, financial risk, and data-driven decision-making. I translate complex questions into testable hypotheses and measurable variables, then use empirical methods and computational models to produce clear, reproducible, decision-ready evidence.",
    heroPrimary: "Explore research",
    heroSecondary: "Visit GitHub",
    heroPortraitAlt: "Formal portrait of Lai Wei in a navy suit",
    heroPortraitCaption: "Lai Wei / 魏来",
    heroStatus: "Research · Finance · Data",
    signalLabel: "Current focus",
    signals: ["Policy evaluation", "Financial risk", "Computational modeling"],
    sectionLabels: {
      about: "01 / ABOUT",
      education: "02 / EDUCATION & ACADEMICS",
      research: "03 / RESEARCH",
      competition: "04 / COMPETITION & PROJECTS",
      experience: "05 / EXPERIENCE",
      life: "06 / BEYOND THE CV",
      contact: "07 / CONTACT",
    },
    aboutTitle: "Turning ambiguous questions into testable research designs and credible evidence.",
    aboutBody:
      "I am a First Class Honours graduate in Applied Economics. I once saw economics mainly as models and formulas; through policy research, consumer behavior, and financial practice, I came to see it as a way to understand reality, test judgment, and improve decisions. My experience spans academic research, banking, securities, investment, and audit.",
    aboutQuote:
      "Good analysis does more than produce a number. It explains where the number came from, what it means, and what to do next.",
    capabilities: [
      {
        number: "01",
        title: "Causal inference",
        text: "DID, event studies, placebo tests, heterogeneity analysis, and PSM-DID.",
      },
      {
        number: "02",
        title: "Statistical & computational modeling",
        text: "Python, PLS-SEM, CFA, Bootstrap, Monte Carlo, and network flow.",
      },
      {
        number: "03",
        title: "Financial & business analysis",
        text: "Risk identification, valuation, scenario analysis, and decision-ready communication.",
      },
    ],
    educationTitle: "Beijing Normal-Hong Kong Baptist University (BNBU)",
    educationDegree: "B.B.A. (Honours) in Applied Economics",
    educationMeta: "Sep 2022 — Jun 2026 · English-medium programme",
    educationNote: "Bachelor of Business Administration (Honours) (Applied Economics)",
    metrics: [
      { value: "3.44", suffix: "/ 4.00", label: "Final GPA" },
      { value: "First", suffix: " Class", label: "Honours classification" },
      { value: "5×", suffix: "", label: "President’s Honour Roll" },
      { value: "1×", suffix: "", label: "Dean’s List" },
    ],
    coursesLabel: "Selected coursework",
    courses: [
      "Time Series Data Analysis · A",
      "Business Research Methods · A",
      "Industrial Organisation · A",
      "Games and Economic Decisions · A",
      "Linear Algebra for Economics & Finance · A",
      "Cross Section & Panel Data Analysis · A−",
      "Financial Big Data Analytics · A−",
    ],
    researchTitle: "Methods follow the question—not the other way around.",
    researchIntro:
      "My work spans public policy, consumer behavior, organizational behavior, and market design. Each project begins with a concrete question and makes the method, role, and current outcome explicit.",
    researchRole: "Role",
    researchMethod: "Methods",
    researchProjects: [
      {
        index: "R.01",
        title: "The Employment Effects of Long-Term Care Insurance",
        period: "Sep 2025 — May 2026",
        role: "Co-author",
        status: "Undergraduate thesis",
        text: "Evaluated China’s long-term care insurance pilot using 2011–2019 city-level panel data. The evidence is more consistent for positive effects on care-related employment, while estimates for physician supply and medical-institution counts are weaker or sensitive to specification.",
        methods: ["DID", "Event study", "Placebo tests", "PSM-DID"],
      },
      {
        index: "R.02",
        title: "Fake Online Reviews and Hotel Booking Decisions",
        period: "Feb 2026 — Jun 2026",
        role: "Third Author",
        status: "Included in the RARCS 2026 conference proceedings",
        text: "Built a Python-based PLS-SEM workflow covering survey preparation, manipulation checks, measurement and structural models, Bootstrap mediation, and IPMA. The findings suggest that review authenticity affects booking intention primarily through consumer trust.",
        methods: ["Python", "PLS-SEM", "Bootstrap", "IPMA"],
      },
      {
        index: "R.03",
        title: "Leader Humor and Follower Quiet Quitting",
        period: "Sep 2025 — Dec 2025",
        role: "Third Author",
        status: "Accepted for oral presentation at EURAM 2026",
        text: "Examined organization-based self-esteem as a mediator and power-distance orientation and HRM practices as moderators. Contributed to survey design, data preparation, CFA, regression, and Bootstrap analyses.",
        methods: ["CFA", "Regression", "Bootstrap", "Moderation"],
      },
      {
        index: "R.04",
        title: "Hospital Appointment Matching Mechanism",
        period: "Jun 2025 — Jul 2025",
        role: "Project contributor",
        status: "Path Academics seminar in market design",
        text: "In an online research seminar taught by Prof. Aytek Erdil of the University of Cambridge, designed an appointment mechanism balancing preferences, priorities, and capacity constraints, then evaluated alternative mechanisms through Python simulations.",
        methods: ["Gale–Shapley", "Priority queues", "Network flow", "Python"],
      },
    ],
    competitionKicker: "COMAP ICM 2026 · PROBLEM D",
    competitionTitle: "Sports-Team Operations and Valuation",
    competitionAward: "Finalist",
    competitionRole: "Python Modeler",
    competitionText:
      "Integrated schedules, ticketing, salaries, venues, and interest rates into 5,065 WNBA game-level observations. Built an end-to-end quantitative framework linking Elo forecasts, attendance, dynamic pricing, EBITDA/DCF valuation, and leverage optimization, then used Monte Carlo simulation and sensitivity analysis to identify the key risk drivers.",
    competitionStats: [
      { value: "5,065", label: "Game-level observations" },
      { value: "Elo → DCF", label: "End-to-end framework" },
      { value: "2026", label: "Finalist" },
    ],
    experienceTitle: "Taking research discipline into real financial and business settings.",
    experienceIntro:
      "Across audit, investment, corporate banking, securities, and risk management, I practice the same fundamentals: understand the problem quickly, verify the evidence, and translate analysis into reliable judgment.",
    experiences: [
      {
        date: "Jun 2026 — Present",
        company: "China Construction Bank · Inner Mongolia Branch",
        role: "Risk Management Intern",
        tag: "Banking risk",
      },
      {
        date: "Jan 2026 — Feb 2026",
        company: "CITIC Securities · Inner Mongolia Branch",
        role: "Market Expansion Intern",
        tag: "Securities",
      },
      {
        date: "Jul 2025 — Aug 2025",
        company: "ICBC · Inner Mongolia Branch",
        role: "Corporate Banking Intern",
        tag: "Corporate finance",
      },
      {
        date: "Jun 2025 — Jul 2025",
        company: "ICBC Investment · Nanjing",
        role: "Investment Intern",
        tag: "Investment",
      },
      {
        date: "Jul 2024 — Aug 2024",
        company: "KPMG · Guangzhou",
        role: "Audit Intern",
        tag: "Audit",
      },
    ],
    lifeTitle: "Beyond the CV, I stay curious—and make room for a full life.",
    lifeBody:
      "Badminton keeps me quick and focused; piano teaches patience and rhythm. The wind, sea, and city lights I meet while traveling remind me to keep noticing real people and lived experience beyond models and data.",
    factsTitle: "A quick portrait",
    facts: [
      ["Name", "Lai Wei (魏来)"],
      ["Born", "4 November 2004"],
      ["Height", "181 cm"],
      ["Weight", "60 kg"],
      ["MBTI", "INFJ"],
      ["Zodiac", "Scorpio"],
      ["Interests", "Badminton, piano"],
      ["Phone", "+86 182 4712 9040"],
    ],
    gallery: [
      {
        src: "/images/lai-wei-zhuhai.jpg",
        alt: "Lai Wei beside a night-time sign in Zhuhai",
        caption: "Zhuhai · City lights",
      },
      {
        src: "/images/lai-wei-seaside.jpg",
        alt: "Lai Wei raising a hand by the sea",
        caption: "By the sea · Wind and freedom",
      },
      {
        src: "/images/lai-wei-erhai.jpg",
        alt: "Lai Wei sitting on a wooden boat by Erhai Lake",
        caption: "Erhai · A quiet moment",
      },
    ],
    contactEyebrow: "LET’S THINK IT THROUGH",
    contactTitle: "Open to conversations across research, graduate study, finance, and data.",
    contactBody:
      "If you are looking for someone who values evidence, enjoys modeling, and can explain complex analysis clearly, I would be glad to connect.",
    phoneLabel: "Phone",
    githubLabel: "GitHub",
    footer: "Evidence first. Clarity always.",
    backToTop: "Back to top",
  },
} as const;

export default function Home() {
  const searchParams = useSearchParams();
  const requestedLanguage: Language = searchParams.get("lang") === "en" ? "en" : "zh";
  const [language, setLanguage] = useState<Language>(requestedLanguage);
  const t = copy[language];

  const chooseLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";

    const nextUrl = new URL(window.location.href);
    if (nextLanguage === "en") {
      nextUrl.searchParams.set("lang", "en");
    } else {
      nextUrl.searchParams.delete("lang");
    }
    window.history.replaceState(null, "", `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={language === "zh" ? "返回首页" : "Home"}>
          <span className="wordmark-name">LW</span>
          <span className="wordmark-copy">
            <strong>Lai Wei</strong>
            <small>{t.brandSubtitle}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={language === "zh" ? "主要导航" : "Primary navigation"}>
          {t.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="language-switch" role="group" aria-label={t.languageLabel}>
          <button
            type="button"
            lang="zh-CN"
            className={language === "zh" ? "active" : ""}
            aria-pressed={language === "zh"}
            onClick={() => chooseLanguage("zh")}
          >
            中文
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            lang="en"
            className={language === "en" ? "active" : ""}
            aria-pressed={language === "en"}
            onClick={() => chooseLanguage("en")}
          >
            EN
          </button>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">{t.heroEyebrow}</p>
            <h1 id="hero-title">
              <span>{t.heroName}</span>
              <small>{t.heroEnglishName}</small>
            </h1>
            <p className="hero-title">{t.heroTitle}</p>
            <p className="hero-intro">{t.heroIntro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                {t.heroPrimary} <span aria-hidden="true">↘</span>
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/WeiLai-OpsFin"
                target="_blank"
                rel="noreferrer"
              >
                {t.heroSecondary} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <Image
                src="/images/lai-wei-portrait.jpg"
                alt={t.heroPortraitAlt}
                width={1239}
                height={1682}
                sizes="(max-width: 900px) 72vw, 30vw"
                loading="eager"
                fetchPriority="high"
                unoptimized
              />
              <div className="portrait-caption">
                <span>{t.heroPortraitCaption}</span>
                <span>{t.heroStatus}</span>
              </div>
            </div>
            <div className="focus-card">
              <p>{t.signalLabel}</p>
              <ol>
                {t.signals.map((signal, index) => (
                  <li key={signal}>
                    <span>0{index + 1}</span>
                    {signal}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>{language === "zh" ? "向下探索" : "Explore"}</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-rail">
            <p className="section-index">{t.sectionLabels.about}</p>
          </div>
          <div className="section-content">
            <div className="about-lead">
              <h2 id="about-title">{t.aboutTitle}</h2>
              <div className="about-copy">
                <p>{t.aboutBody}</p>
                <blockquote>{t.aboutQuote}</blockquote>
              </div>
            </div>
            <div className="capability-grid">
              {t.capabilities.map((capability) => (
                <article className="capability" key={capability.number}>
                  <span>{capability.number}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education" aria-labelledby="education-title">
          <div className="section-rail">
            <p className="section-index">{t.sectionLabels.education}</p>
          </div>
          <div className="section-content">
            <div className="education-heading">
              <div>
                <p className="mini-label">BNBU · 2022—2026</p>
                <h2 id="education-title">{t.educationTitle}</h2>
                <p className="degree">{t.educationDegree}</p>
                <p className="education-meta">{t.educationMeta}</p>
              </div>
              <p className="education-note">{t.educationNote}</p>
            </div>

            <div className="metric-grid">
              {t.metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <p>
                    {metric.value}
                    <small>{metric.suffix}</small>
                  </p>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="coursework">
              <p>{t.coursesLabel}</p>
              <ul>
                {t.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section research-section" id="research" aria-labelledby="research-title">
          <div className="section-rail">
            <p className="section-index">{t.sectionLabels.research}</p>
          </div>
          <div className="section-content">
            <div className="section-heading split-heading">
              <h2 id="research-title">{t.researchTitle}</h2>
              <p>{t.researchIntro}</p>
            </div>

            <div className="research-list">
              {t.researchProjects.map((project) => (
                <article className="research-card" key={project.index}>
                  <div className="research-card-topline">
                    <span>{project.index}</span>
                    <span>{project.period}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="research-status">{project.status}</p>
                  <p className="research-summary">{project.text}</p>
                  <div className="research-details">
                    <p>
                      <span>{t.researchRole}</span>
                      {project.role}
                    </p>
                    <div>
                      <span>{t.researchMethod}</span>
                      <ul>
                        {project.methods.map((method) => (
                          <li key={method}>{method}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section competition-section" id="competition" aria-labelledby="competition-title">
          <div className="section-rail">
            <p className="section-index">{t.sectionLabels.competition}</p>
          </div>
          <div className="section-content">
            <article className="competition-feature">
              <div className="competition-copy">
                <p className="mini-label">{t.competitionKicker}</p>
                <h2 id="competition-title">{t.competitionTitle}</h2>
                <p className="competition-role">{t.competitionRole}</p>
                <p>{t.competitionText}</p>
              </div>
              <div className="award-mark" aria-label={`COMAP ICM 2026 ${t.competitionAward}`}>
                <span>COMAP</span>
                <strong>{t.competitionAward}</strong>
                <small>ICM · 2026</small>
              </div>
              <div className="competition-stats">
                {t.competitionStats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-rail">
            <p className="section-index">{t.sectionLabels.experience}</p>
          </div>
          <div className="section-content">
            <div className="section-heading split-heading">
              <h2 id="experience-title">{t.experienceTitle}</h2>
              <p>{t.experienceIntro}</p>
            </div>
            <ol className="timeline">
              {t.experiences.map((experience, index) => (
                <li key={`${experience.company}-${experience.date}`}>
                  <div className="timeline-number">0{index + 1}</div>
                  <time>{experience.date}</time>
                  <div className="timeline-role">
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                  </div>
                  <span className="timeline-tag">{experience.tag}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section life-section" id="life" aria-labelledby="life-title">
          <div className="section-rail">
            <p className="section-index">{t.sectionLabels.life}</p>
          </div>
          <div className="section-content">
            <div className="life-intro">
              <h2 id="life-title">{t.lifeTitle}</h2>
              <p>{t.lifeBody}</p>
            </div>

            <div className="personal-facts">
              <p className="mini-label">{t.factsTitle}</p>
              <dl>
                {t.facts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>
                      {label === "手机" || label === "Phone" ? (
                        <a href="tel:+8618247129040">{value}</a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="photo-gallery">
              {t.gallery.map((photo, index) => (
                <figure className={`photo photo-${index + 1}`} key={photo.src}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={index === 1 ? 1279 : index === 0 ? 1706 : 1440}
                    height={index === 1 ? 1706 : index === 0 ? 1279 : 1080}
                    sizes={index === 1 ? "(max-width: 640px) 100vw, 34vw" : "(max-width: 640px) 100vw, 55vw"}
                    loading="lazy"
                    unoptimized
                  />
                  <figcaption>
                    <span>0{index + 1}</span>
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="section-index">{t.sectionLabels.contact}</p>
          <div className="contact-main">
            <p className="contact-eyebrow">{t.contactEyebrow}</p>
            <h2 id="contact-title">{t.contactTitle}</h2>
            <p>{t.contactBody}</p>
          </div>
          <div className="contact-links">
            <a href="tel:+8618247129040">
              <span>{t.phoneLabel}</span>
              <strong>+86 182 4712 9040</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a href="https://github.com/WeiLai-OpsFin" target="_blank" rel="noreferrer">
              <span>{t.githubLabel}</span>
              <strong>github.com/WeiLai-OpsFin</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Lai Wei · {t.footer}</p>
        <a href="#top">{t.backToTop} ↑</a>
      </footer>
    </>
  );
}
