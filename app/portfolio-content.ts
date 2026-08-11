export type Language = "zh" | "en";
export type DetailCategory = "research" | "projects" | "experience";

export type DetailLink = {
  label: string;
  href: string;
  note?: string;
};

export type DetailEvidence = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  privacyReviewed: boolean;
};

export type DetailSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type DetailContent = {
  eyebrow: string;
  title: string;
  summary: string;
  period?: string;
  role?: string;
  status?: string;
  highlights?: Array<{ value: string; label: string }>;
  sections: DetailSection[];
  methods?: string[];
  links?: DetailLink[];
  evidence?: DetailEvidence[];
  limitation?: string;
};

export type BilingualDetail = Record<Language, DetailContent>;

const github = "https://github.com/WeiLai-OpsFin";

export const aboutDetail: BilingualDetail = {
  zh: {
    eyebrow: "自我介绍 · PERSONAL STATEMENT",
    title: "从应用经济学出发，研究政策、金融与真实企业问题",
    summary:
      "我是魏来，一名应用经济学一等荣誉毕业生。我的研究与项目覆盖政策评估、信用风险、供应链金融和市场设计，常用 DID、面板回归、Python 与 Stata 将问题转化为可检验、可复现的分析流程。",
    highlights: [
      { value: "一等荣誉", label: "应用经济学 · GPA 3.44/4.00" },
      { value: "面板研究", label: "城市、企业与银行层面数据" },
      { value: "实证工具", label: "DID、事件研究、回归、Python、Stata" },
      { value: "金融实践", label: "审计、投资、公司金融、证券与风险管理" },
    ],
    sections: [
      {
        heading: "长期方向：让金融更好地服务实体经济",
        paragraphs: [
          "我的长期兴趣是研究金融如何更好地服务实体经济。我尤其关注供应链金融、贸易融资、供应链韧性与风险管理，希望理解金融工具如何进入真实产业链，帮助中小企业缓解融资困难、改善制造企业现金流，并增强供应链面对风险时的稳定性。",
          "对我来说，金融不只是数字、模型和交易，更应该解决真实企业在经营中遇到的问题。",
        ],
      },
      {
        heading: "从问题到结果：把研究做成完整流程",
        paragraphs: [
          "我通常从一个可回答的问题开始：先定义机制和变量，再完成数据清理、模型设定、稳健性检验与结果呈现。毕业研究、信用风险项目和竞赛后的模型重构都沿用了这套工作流程。",
          "这种工作方式让我能够把长期项目拆成可执行阶段，并持续交付代码、结果表、图表和汇报材料。",
        ],
      },
      {
        heading: "研究方式：识别、检验与解释",
        paragraphs: [
          "我关注的不只是结论本身，更关注假设、识别、数据质量和适用条件。面对不确定性，我会先定位缺少的证据，再补齐数据与方法。",
          "在公开项目中，我把基准结果、稳健性检验和适用范围分别呈现，并通过脚本、结果表和方法说明保留完整分析链条。",
        ],
      },
      {
        heading: "协作方式：倾听、梳理、推进",
        paragraphs: [
          "我偏好有内容的沟通，习惯先听清问题，再把讨论整理成明确的下一步行动。在团队研究和实习中，我承担过双语协调、数据处理、成果排版与正式汇报。",
          "面对新的合作环境，我会通过充分准备、及时反馈和稳定交付建立协作节奏。",
        ],
      },
      {
        heading: "责任与关系",
        paragraphs: [
          "我很重视家庭，也珍惜稳定、真诚的人际关系。家人给了我很强的安全感和支持，也让我形成了较强的责任意识。我希望未来取得的成绩，不只是个人能力的证明，也能够对家庭、团队和社会产生实际价值。",
        ],
      },
      {
        heading: "羽毛球、钢琴与长期练习",
        paragraphs: [
          "在学习之外，我长期练习羽毛球和钢琴。羽毛球让我理解动作、节奏、体能和重复训练的重要性；钢琴让我体会到，真正的进步往往来自长期、细致而安静的练习。",
          "这两项爱好与我的学习方式很相似：在一个方向上持续投入，通过一次次小的修正，逐渐接近更高的水平。",
        ],
      },
      {
        heading: "风险意识与新工具",
        paragraphs: [
          "面对不确定性，我习惯先识别风险、拆分假设，再通过情景分析和小步验证推进。人工智能和产业变化正在扩展研究与业务分析的工具边界，我希望主动使用新工具，同时继续加强业务理解、复杂系统分析和跨团队协作能力。",
        ],
      },
      {
        heading: "下一步方向",
        paragraphs: [
          "下一阶段，我计划继续深化供应链金融、贸易融资、供应链韧性与风险管理，把面板研究和计算建模进一步连接到企业融资、现金流与产业链风险场景。",
          "同时，我会继续加强研究表达、业务理解和跨团队协作，把学术训练转化为可落地的分析与决策支持。",
        ],
      },
    ],
    methods: [
      "政策评估",
      "面板数据",
      "金融风险",
      "供应链金融",
      "Python",
      "Stata",
      "研究表达",
      "商业分析",
      "情景分析",
    ],
    links: [
      { label: "查看 GitHub 项目", href: github, note: "公开代码与研究记录" },
    ],
  },
  en: {
    eyebrow: "PERSONAL STATEMENT · 关于我",
    title: "From applied economics to policy, finance, and real-sector problems",
    summary:
      "I am Lai Wei, a First Class Honours graduate in Applied Economics. My work spans policy evaluation, credit risk, supply-chain finance, and market design, using DID, panel regression, Python, and Stata to build testable and reproducible analytical workflows.",
    highlights: [
      { value: "First Class", label: "Applied Economics · GPA 3.44/4.00" },
      { value: "Panel research", label: "City-, firm-, and bank-level data" },
      { value: "Empirical tools", label: "DID, event studies, regression, Python, Stata" },
      { value: "Finance practice", label: "Audit, investment, corporate banking, securities, and risk" },
    ],
    sections: [
      {
        heading: "A long-term direction: finance in service of the real economy",
        paragraphs: [
          "My long-term interest is in how finance can serve the real economy more effectively. I am especially drawn to supply-chain finance, trade finance, supply-chain resilience, and risk management: how financial tools can be embedded in industrial supply chains, ease financing constraints for smaller firms, improve manufacturers’ cash flow, and make supply chains more resilient to shocks.",
          "To me, finance is not only about numbers, models, or transactions. It should help solve problems that real businesses face in day-to-day operations.",
        ],
      },
      {
        heading: "From question to output: building complete analytical workflows",
        paragraphs: [
          "I start with an answerable question: define the mechanism and variables, then move through data preparation, specification, robustness checks, and communication. My final-year study, credit-risk project, and post-competition model reconstruction all follow this workflow.",
          "This approach lets me break long projects into executable stages and deliver code, result tables, figures, and presentation materials throughout the process.",
        ],
      },
      {
        heading: "Research approach: identification, testing, and interpretation",
        paragraphs: [
          "I pay attention not only to conclusions, but also to assumptions, identification, data quality, and the conditions under which a result applies. When an answer is uncertain, I identify the missing evidence and strengthen the data or design.",
          "In public projects, I separate baseline results, robustness checks, and interpretation, while preserving the full analytical chain through scripts, tables, and method notes.",
        ],
      },
      {
        heading: "How I collaborate: listen, structure, and move the work forward",
        paragraphs: [
          "I prefer substantive communication: understand the problem first, then turn discussion into clear next steps. Across team research and internships, I have handled bilingual coordination, data work, document design, and formal presentations.",
          "In a new collaboration, I establish momentum through preparation, timely feedback, and dependable delivery.",
        ],
      },
      {
        heading: "Responsibility and relationships",
        paragraphs: [
          "I care deeply about family and value stable, sincere relationships. The security and support I have received from my family have also shaped a strong sense of responsibility. I hope that whatever I achieve will not only demonstrate personal ability, but also create practical value for my family, teams, and society.",
        ],
      },
      {
        heading: "Badminton, piano, and the discipline of practice",
        paragraphs: [
          "I have practised badminton and piano over the long term. Badminton teaches movement, rhythm, fitness, and repetition; piano shows me that genuine improvement often comes from long, detailed, quiet practice.",
          "Both resemble the way I learn: stay with one direction, make many small corrections, and gradually move toward a higher standard.",
        ],
      },
      {
        heading: "Risk discipline and new tools",
        paragraphs: [
          "I approach uncertainty by identifying risks, separating assumptions, and testing in small steps or structured scenarios. AI and industry change are expanding the analytical toolkit; I intend to use those tools while deepening business understanding, complex-systems analysis, and cross-functional collaboration.",
        ],
      },
      {
        heading: "What I am building next",
        paragraphs: [
          "My next step is to deepen work in supply-chain finance, trade finance, resilience, and risk management, connecting panel research and computational modelling more directly to corporate financing, cash flow, and supply-chain risk.",
          "I will continue strengthening research communication, business understanding, and cross-team execution so that academic training becomes practical analysis and decision support.",
        ],
      },
    ],
    methods: [
      "Policy evaluation",
      "Panel data",
      "Financial risk",
      "Supply-chain finance",
      "Python",
      "Stata",
      "Research communication",
      "Business analysis",
      "Scenario analysis",
    ],
    links: [
      { label: "Explore GitHub projects", href: github, note: "Public code and research records" },
    ],
  },
};

export const academicsDetail: BilingualDetail = {
  zh: {
    eyebrow: "学历与成绩 · ACADEMICS",
    title: "北师香港浸会大学 · 应用经济学",
    summary:
      "于 2026 年完成工商管理学士（荣誉）应用经济学课程，最终 GPA 3.44/4.00，获一等荣誉学位；课程以英文授课，训练覆盖经济学、金融、计量方法与商业分析。",
    period: "2022.09 — 2026.06",
    status: "First Class Honours",
    highlights: [
      { value: "3.44", label: "最终 GPA / 4.00" },
      { value: "161", label: "完成学分" },
      { value: "一等", label: "荣誉学位等级" },
      { value: "7.0", label: "IELTS Overall" },
    ],
    sections: [
      {
        heading: "学位与培养",
        paragraphs: [
          "于 2026 年 6 月完成 Bachelor of Business Administration (Honours) in Applied Economics，全英文培养方案共修读 161 学分。",
          "训练将经济学直觉、金融知识、计量方法和数据工具结合起来，为后续政策评估、信用风险与供应链金融研究提供基础。",
        ],
      },
      {
        heading: "精选课程表现",
        bullets: [
          "时间序列数据分析 · A",
          "商业研究方法 · A",
          "产业组织 · A",
          "博弈与经济决策 · A",
          "经济与金融线性代数 · A",
          "截面与面板数据分析 · A−",
          "金融大数据分析 · A−",
          "毕业论文 I / II · A− / A−",
        ],
      },
      {
        heading: "学术荣誉与语言",
        bullets: [
          "多次入选 President’s Honour Roll，并入选 Dean’s List。",
          "2024—2025 学年二等荣誉奖学金。",
          "IELTS Overall 7.0：Reading 8.5、Listening 7.0、Writing 6.0、Speaking 6.0。",
        ],
      },
    ],
    methods: ["Panel data", "Time series", "Python", "Stata", "R", "Finance", "Business analytics"],
    evidence: [
      {
        title: "学位与成绩",
        description: "官方材料记录最终 GPA 3.44/4.00、一等荣誉学位、161 学分及所列课程成绩。",
        privacyReviewed: true,
      },
      {
        title: "IELTS 7.0",
        description: "Overall 7.0：Reading 8.5、Listening 7.0、Writing 6.0、Speaking 6.0。",
        privacyReviewed: true,
      },
    ],
  },
  en: {
    eyebrow: "ACADEMICS · 学历与成绩",
    title: "Beijing Normal–Hong Kong Baptist University · Applied Economics",
    summary:
      "Completed the B.B.A. (Honours) in Applied Economics in 2026 with a final GPA of 3.44/4.00 and First Class Honours. The English-medium curriculum combined economics, finance, econometrics, and business analytics.",
    period: "Sep 2022 — Jun 2026",
    status: "First Class Honours",
    highlights: [
      { value: "3.44", label: "Final GPA / 4.00" },
      { value: "161", label: "Units earned" },
      { value: "First", label: "Honours classification" },
      { value: "7.0", label: "IELTS Overall" },
    ],
    sections: [
      {
        heading: "Degree and training",
        paragraphs: [
          "Graduated in June 2026 with a Bachelor of Business Administration (Honours) in Applied Economics after completing 161 units in an English-medium programme.",
          "The curriculum connected economic reasoning, finance, econometrics, and data tools, forming the foundation for later work on policy evaluation, credit risk, and supply-chain finance.",
        ],
      },
      {
        heading: "Selected coursework",
        bullets: [
          "Time Series Data Analysis · A",
          "Business Research Methods · A",
          "Industrial Organisation · A",
          "Games and Economic Decisions · A",
          "Linear Algebra for Economics and Finance · A",
          "Cross Section and Panel Data Analysis · A−",
          "Financial Big Data Analytics · A−",
          "BBA Project I / II · A− / A−",
        ],
      },
      {
        heading: "Academic honours and English",
        bullets: [
          "Named to the President’s Honour Roll multiple times and to the Dean’s List.",
          "Second-class scholarship, 2024–2025.",
          "IELTS Overall 7.0: Reading 8.5, Listening 7.0, Writing 6.0, Speaking 6.0.",
        ],
      },
    ],
    methods: ["Panel data", "Time series", "Python", "Stata", "R", "Finance", "Business analytics"],
    evidence: [
      {
        title: "Degree and academic record",
        description: "Official records list a final GPA of 3.44/4.00, 161 units, First Class Honours, and the selected course results above.",
        privacyReviewed: true,
      },
      {
        title: "IELTS 7.0",
        description: "Overall 7.0: Reading 8.5, Listening 7.0, Writing 6.0, and Speaking 6.0.",
        privacyReviewed: true,
      },
    ],
  },
};

export const researchDetails: Record<string, BilingualDetail> = {
  "ltci-employment": {
    zh: {
      eyebrow: "本科毕业研究 · 政策评估",
      title: "长期护理保险与照护相关就业",
      summary:
        "与 Hanyang Qin 共同完成毕业研究，把 2016 年长期护理保险试点作为政策冲击，使用城市面板、双向固定效应 DID 与事件研究评估正式照护服务和相关就业的调整。",
      period: "2025.09 — 2026.05",
      role: "共同作者",
      status: "BNBU Applied Economics Final Year Project",
      highlights: [
        { value: "2,603", label: "城市—年份观测" },
        { value: "296", label: "样本城市" },
        { value: "2011–19", label: "面板年份" },
      ],
      sections: [
        {
          heading: "研究问题",
          paragraphs: [
            "中国长期护理保险试点是否促进了正式照护服务和相关就业的扩张？不同供给侧结果是否以相同速度调整？",
          ],
        },
        {
          heading: "数据与识别",
          bullets: [
            "2011—2019 年城市面板；完整样本包含 296 个城市、2,603 个城市—年份观测。",
            "双向固定效应 DID 与事件研究，标准误在城市层面聚类。",
            "补充控制变量、虚拟政策时间、剔除直辖市、异质性分析与 PSM-DID。",
          ],
        },
        {
          heading: "结果与解释",
          paragraphs: [
            "综合基准 DID、事件研究与稳健性结果，正式照护相关就业和服务能力的扩张更为稳定；医生供给与医疗机构数量的估计对模型设定更敏感。核心结论因此聚焦照护相关就业与服务能力。",
          ],
        },
      ],
      methods: ["TWFE DID", "Event study", "Placebo timing", "Heterogeneity", "PSM-DID", "Stata"],
      links: [
        { label: "查看项目仓库", href: `${github}/the-impact-of-long-term-care-insurance-on-employment` },
        { label: "查看主要分析脚本", href: `${github}/the-impact-of-long-term-care-insurance-on-employment/blob/main/code/01_main_did_analysis.do` },
      ],
      evidence: [
        {
          title: "报告、代码与清洗面板",
          description: "仓库包含最终报告、答辩材料、Stata 脚本、清洗面板、结果表与精选图。",
          privacyReviewed: true,
        },
      ],
    },
    en: {
      eyebrow: "FINAL-YEAR RESEARCH · POLICY EVALUATION",
      title: "Long-Term Care Insurance and Care-Related Employment",
      summary:
        "Co-authored a final-year study with Hanyang Qin, treating China’s 2016 Long-Term Care Insurance pilot as a policy shock and using a city panel, two-way fixed-effects DID, and event studies to assess adjustment in formal care services and related employment.",
      period: "Sep 2025 — May 2026",
      role: "Co-author",
      status: "BNBU Applied Economics Final Year Project",
      highlights: [
        { value: "2,603", label: "City-year observations" },
        { value: "296", label: "Cities" },
        { value: "2011–19", label: "Panel period" },
      ],
      sections: [
        {
          heading: "Research question",
          paragraphs: [
            "Did China’s LTCI pilot expand formal care services and related employment, and did different supply-side outcomes adjust at the same speed?",
          ],
        },
        {
          heading: "Data and design",
          bullets: [
            "A 2011–2019 city panel with 296 cities and 2,603 complete city-year observations.",
            "Two-way fixed-effects DID and event-study specifications with city-clustered standard errors.",
            "Additional controls, placebo policy timing, municipality exclusions, heterogeneity analysis, and PSM-DID.",
          ],
        },
        {
          heading: "Finding and interpretation",
          paragraphs: [
            "Across the baseline DID, event study, and robustness checks, formal care-related employment and service capacity show the more stable expansion. Estimates for physician supply and institution counts are more specification-sensitive, so the main conclusion centres on care employment and service capacity.",
          ],
        },
      ],
      methods: ["TWFE DID", "Event study", "Placebo timing", "Heterogeneity", "PSM-DID", "Stata"],
      links: [
        { label: "View repository", href: `${github}/the-impact-of-long-term-care-insurance-on-employment` },
        { label: "View main analysis script", href: `${github}/the-impact-of-long-term-care-insurance-on-employment/blob/main/code/01_main_did_analysis.do` },
      ],
      evidence: [
        {
          title: "Report, code, and cleaned panel",
          description: "The repository contains the final report, defence deck, Stata scripts, cleaned panel, result tables, and selected figures.",
          privacyReviewed: true,
        },
      ],
    },
  },
  "fake-review-booking": {
    zh: {
      eyebrow: "消费者行为 · 商业分析",
      title: "虚假评论、消费者信任与酒店预订",
      summary:
        "作为第三作者，主要参与问卷数据清理、条件比较、DID 式分析与 PLS-SEM 式结构路径建模，研究评论真实性如何通过信任影响预订意向。",
      period: "2026.02 — 2026.06",
      role: "第三作者 · 数据分析",
      status: "RARCS 2026 报告录用",
      highlights: [
        { value: "68", label: "有效问卷" },
        { value: ".667", label: "预订意向 R²" },
        { value: ".166", label: "经真实性与信任的序列间接效应" },
      ],
      sections: [
        {
          heading: "个人贡献",
          bullets: [
            "合并真实与虚假评论条件的问卷数据，完成变量命名、编码、反向题处理与有效样本筛选。",
            "进行条件比较、DID 式估计和 PLS-SEM 式测量/结构路径分析。",
            "整理可靠性、效度、中介效应、IPMA 与结果解释材料。",
          ],
        },
        {
          heading: "关键结果",
          bullets: [
            "真实评论组的感知真实性高 0.746（p < .001，Cohen’s d = 1.08）。",
            "真实评论组的信任得分高 0.497（p = .0021）。",
            "评论类型经由真实性与信任影响预订意向的间接效应为 0.166（p = .0037）。",
            "预订意向 DID 式估计为 −0.130（p = .412），未识别出显著直接变化；该结果与路径模型分别报告。",
          ],
        },
        {
          heading: "会议成果",
          paragraphs: [
            "研究获 RARCS 2026 报告录用，主题聚焦评论真实性、消费者信任与酒店预订意向之间的作用机制。公开仓库提供数据处理流程和主要实证结果。",
          ],
        },
      ],
      methods: ["Python", "Survey cleaning", "DID-style comparison", "PLS-SEM-style paths", "Bootstrap", "IPMA"],
      links: [
        { label: "查看项目仓库", href: `${github}/fake-review-data-analysis` },
        { label: "查看关键发现", href: `${github}/fake-review-data-analysis/blob/main/results/key_findings.md` },
      ],
      evidence: [
        {
          title: "RARCS 2026 报告录用",
          description: "会议接收材料确认该研究获得报告录用。",
          privacyReviewed: true,
        },
      ],
      limitation:
        "研究基于 68 份有效问卷，主要用于探索真实性、信任与预订意向的路径机制；DID 式比较与路径分析采用不同解释口径。",
    },
    en: {
      eyebrow: "CONSUMER BEHAVIOUR · BUSINESS ANALYTICS",
      title: "Fake reviews, consumer trust, and hotel booking",
      summary:
        "As third author, contributed primarily to questionnaire data cleaning, condition comparisons, DID-style analysis, and PLS-SEM-informed structural-path modelling to study how review authenticity shapes booking intention through trust.",
      period: "Feb 2026 — Jun 2026",
      role: "Third author · Data analysis",
      status: "Accepted for presentation at RARCS 2026",
      highlights: [
        { value: "68", label: "Valid responses" },
        { value: ".667", label: "Booking-intention R²" },
        { value: ".166", label: "Serial indirect effect via authenticity & trust" },
      ],
      sections: [
        {
          heading: "My contribution",
          bullets: [
            "Merged the real- and fake-review questionnaire conditions and handled naming, coding, reverse-scored items, and valid-sample screening.",
            "Ran condition comparisons, DID-style estimates, and PLS-SEM-informed measurement and structural-path analyses.",
            "Prepared reliability, validity, mediation, IPMA, and result-interpretation materials.",
          ],
        },
        {
          heading: "Key results",
          bullets: [
            "Perceived authenticity was 0.746 higher in the real-review condition (p < .001; Cohen’s d = 1.08).",
            "Trust was 0.497 higher in the real-review condition (p = .0021).",
            "The indirect path from review type through authenticity and trust to booking intention was 0.166 (p = .0037).",
            "The DID-style booking-intention estimate was −0.130 (p = .412), with no significant direct change identified; it is reported separately from the path model.",
          ],
        },
        {
          heading: "Conference outcome",
          paragraphs: [
            "The study was accepted for presentation at RARCS 2026. It focuses on the mechanism linking review authenticity, consumer trust, and hotel-booking intention, while the public repository provides the data workflow and main empirical results.",
          ],
        },
      ],
      methods: ["Python", "Survey cleaning", "DID-style comparison", "PLS-SEM-informed paths", "Bootstrap", "IPMA"],
      links: [
        { label: "View repository", href: `${github}/fake-review-data-analysis` },
        { label: "View key findings", href: `${github}/fake-review-data-analysis/blob/main/results/key_findings.md` },
      ],
      evidence: [
        {
          title: "RARCS 2026 conference acceptance",
          description: "The conference record confirms that the study was accepted for presentation.",
          privacyReviewed: true,
        },
      ],
      limitation:
        "The study uses 68 valid responses to explore the pathway from authenticity to trust and booking intention; the DID-style comparison and path model have distinct interpretations.",
    },
  },
  "leader-humor-quiet-quitting": {
    zh: {
      eyebrow: "组织行为 · 会议接收",
      title: "领导者幽默与员工安静离职",
      summary:
        "研究组织基础自尊的中介作用，以及权力距离导向与人力资源管理实践的调节作用；作为第三作者参与问卷、数据与实证分析。",
      period: "2025.09 — 2025.12",
      role: "第三作者",
      status: "EURAM 2026 口头报告录用",
      sections: [
        {
          heading: "研究框架",
          paragraphs: [
            "项目考察领导者幽默如何影响员工的安静离职倾向，并把组织基础自尊作为潜在中介，同时检验权力距离导向与人力资源管理实践的调节作用。",
          ],
        },
        {
          heading: "个人贡献",
          bullets: [
            "参与问卷结构和量表项目的设计与优化。",
            "使用 Python 进行数据清理、变量编码、量表汇总、描述统计与相关分析。",
            "参与 CFA、回归、Bootstrap 中介、调节效应和简单斜率分析。",
          ],
        },
        {
          heading: "会议成果",
          paragraphs: [
            "论文获 EURAM 2026 现场会议口头报告录用，研究主题覆盖领导者幽默、组织基础自尊与安静离职机制。",
          ],
        },
      ],
      methods: ["Python", "CFA", "Regression", "Bootstrap mediation", "Moderation", "Simple slopes"],
      evidence: [
        {
          title: "EURAM 2026 口头报告录用",
          description: "会议通知确认论文类型为 Oral Presentation。",
          privacyReviewed: true,
        },
      ],
    },
    en: {
      eyebrow: "ORGANISATIONAL BEHAVIOUR · CONFERENCE ACCEPTANCE",
      title: "Leader humor and follower quiet quitting",
      summary:
        "Examined organization-based self-esteem as a mediator and power-distance orientation and HRM practices as moderators. As third author, contributed to the survey, data preparation, and empirical analysis.",
      period: "Sep 2025 — Dec 2025",
      role: "Third author",
      status: "Accepted for oral presentation at EURAM 2026",
      sections: [
        {
          heading: "Research framework",
          paragraphs: [
            "The project examined how leader humor relates to follower quiet quitting, with organization-based self-esteem as a potential mediator and power-distance orientation and HRM practices as moderators.",
          ],
        },
        {
          heading: "My contribution",
          bullets: [
            "Contributed to the questionnaire structure and refinement of scale items.",
            "Used Python for data cleaning, coding, scale aggregation, descriptive statistics, and correlations.",
            "Contributed to CFA, regression, Bootstrap mediation, moderation, and simple-slope analyses.",
          ],
        },
        {
          heading: "Conference outcome",
          paragraphs: [
            "The paper was accepted for oral presentation at EURAM 2026, with a research focus on leader humour, organisation-based self-esteem, and quiet-quitting mechanisms.",
          ],
        },
      ],
      methods: ["Python", "CFA", "Regression", "Bootstrap mediation", "Moderation", "Simple slopes"],
      evidence: [
        {
          title: "EURAM 2026 oral-presentation acceptance",
          description: "The conference notification confirms the paper’s selection for oral presentation.",
          privacyReviewed: true,
        },
      ],
    },
  },
  "hospital-appointment-matching": {
    zh: {
      eyebrow: "市场设计 · 团队研究项目",
      title: "医院预约匹配机制",
      summary:
        "在 Path Academics 市场设计研究研讨中，团队比较患者—医生预约匹配机制，并用 Python 仿真考察偏好、病情优先级、等待时间与容量约束之间的权衡。",
      period: "2025.06 — 2025.07",
      role: "团队项目成员",
      status: "市场设计研讨 · 总评 A",
      highlights: [
        { value: "A", label: "Participation" },
        { value: "A", label: "Assignment" },
        { value: "A", label: "Final project" },
      ],
      sections: [
        {
          heading: "项目问题",
          paragraphs: [
            "如何在患者偏好、病情紧急度、等待时间和医生容量之间建立更透明的预约分配机制，并比较稳定性、公平性和效率？",
          ],
        },
        {
          heading: "方法与成果",
          bullets: [
            "基于 Gale–Shapley 延迟接受框架，引入病情与等待时间等优先信息。",
            "使用多优先级队列、网络流与 Python 仿真比较不同机制。",
            "完成英文研究报告与团队展示；课程 Participation、Assignment、Final Project 与总评均为 A。",
          ],
        },
        {
          heading: "个人贡献",
          bullets: [
            "研究患者—医生匹配文献与机制方案，并参与形成英文研究报告。",
            "负责教师与团队成员之间的双语沟通，整理反馈并推动方案修改。",
            "重构演示模板与版式，完成最终展示材料。",
          ],
        },
      ],
      methods: ["Gale–Shapley", "Priority queues", "Network flow", "Python simulation", "Research communication"],
      evidence: [
        {
          title: "Path Academics · Market Design",
          description: "Participation、Assignment、Final Project 与课程总评均为 A。",
          image: "/evidence/path-academics-grade.webp",
          imageAlt: "魏来市场设计线上研究研讨成绩单，参与、作业、最终项目与总评均为 A",
          privacyReviewed: true,
        },
      ],
      limitation:
        "项目通过 Python 仿真比较课程设定下的匹配机制；引入地区就诊与运营数据将是进一步评估真实场景表现的下一步。",
    },
    en: {
      eyebrow: "MARKET DESIGN · TEAM RESEARCH PROJECT",
      title: "Hospital appointment matching mechanism",
      summary:
        "In a Path Academics market-design research seminar, the team compared patient–doctor appointment mechanisms and used Python simulations to study trade-offs among preferences, clinical priority, waiting time, and capacity constraints.",
      period: "Jun 2025 — Jul 2025",
      role: "Team project contributor",
      status: "Market-design seminar · Overall grade A",
      highlights: [
        { value: "A", label: "Participation" },
        { value: "A", label: "Assignment" },
        { value: "A", label: "Final project" },
      ],
      sections: [
        {
          heading: "Project question",
          paragraphs: [
            "How can an appointment-allocation mechanism balance patient preferences, clinical urgency, waiting time, and doctor capacity while making stability, fairness, and efficiency transparent?",
          ],
        },
        {
          heading: "Methods and deliverables",
          bullets: [
            "Extended a Gale–Shapley deferred-acceptance framework with clinical and waiting-time priorities.",
            "Compared mechanisms with priority queues, network-flow reasoning, and Python simulation.",
            "Completed an English report and team presentation; participation, assignment, final project, and overall grade were all A.",
          ],
        },
        {
          heading: "My contribution",
          bullets: [
            "Reviewed patient–doctor matching research and mechanism designs, contributing to the English research report.",
            "Coordinated bilingual communication between the instructor and teammates, translating feedback into revisions.",
            "Redesigned the presentation template and typography and prepared the final delivery materials.",
          ],
        },
      ],
      methods: ["Gale–Shapley", "Priority queues", "Network flow", "Python simulation", "Research communication"],
      evidence: [
        {
          title: "Path Academics · Market Design",
          description: "Participation, assignment, final project, and overall grade were all A.",
          image: "/evidence/path-academics-grade.webp",
          imageAlt: "Lai Wei's market-design online research seminar transcript showing A grades for participation, assignment, final project, and total grade",
          privacyReviewed: true,
        },
      ],
      limitation:
        "The team compared mechanisms through Python simulation under course-defined scenarios; region-specific patient and operational data would be the next step towards field evaluation.",
    },
  },
};

export const projectDetails: Record<string, BilingualDetail> = {
  "icm-2026-wnba": {
    zh: {
      eyebrow: "COMAP ICM 2026 · PROBLEM D",
      title: "从胜场到价值：WNBA 球队经营与估值",
      summary:
        "团队在 2026 COMAP ICM Problem D 中获得 Finalist；我将建模思路重建为端到端 Python 流程，连接 Elo、上座率与票价、财务估值、策略比较和风险模拟。",
      period: "2026.01 — 至今",
      role: "Finalist 团队成员 · Python 公开实现作者",
      status: "Finalist",
      highlights: [
        { value: "5,065", label: "公开实现比赛记录" },
        { value: "3", label: "经营策略" },
        { value: "10.03", label: "当前最高决策得分" },
      ],
      sections: [
        {
          heading: "端到端模型",
          bullets: [
            "比赛级数据清理与分层、滚动 Elo 胜率预测。",
            "上座率、容量约束与动态票价模型。",
            "收入、利润、估值与杠杆模块。",
            "策略比较、情景分析、Monte Carlo 和敏感性分析。",
          ],
        },
        {
          heading: "策略比较",
          bullets: [
            "公开结果表中的净利润与估值以 M（百万）为单位。",
            "NO_MOVE：决策得分 10.03，净利润 6.04M，球队估值 292.75M。",
            "SIGN_STAR：决策得分 6.49，净利润 1.83M，球队估值 337.10M。",
            "TRADE_SUPERSTAR：决策得分 4.48，净利润 −0.44M，球队估值 355.04M。",
            "当前结果快照中，NO_MOVE 没有给出最高估值，却在净利润、成本压力和目标杠杆之间形成了更优平衡。",
          ],
        },
        {
          heading: "我的工作",
          paragraphs: [
            "我负责把完整分析链路实现为可运行的 Python 项目，覆盖数据整理、Elo 预测、票务与财务模型、策略比较、结果表和商业图表。",
          ],
        },
      ],
      methods: ["Python", "Elo", "Attendance modelling", "Dynamic pricing", "EBITDA / DCF", "Monte Carlo", "Sensitivity"],
      links: [
        { label: "查看代码与完整结果", href: `${github}/comap-icm-2026-d-finalist-wnba-team-valuation-model` },
        { label: "查看策略比较表", href: `${github}/comap-icm-2026-d-finalist-wnba-team-valuation-model/blob/main/results/02_business_outputs/decision_comparison_table.csv` },
      ],
      evidence: [
        {
          title: "ICM 2026 Finalist 证书",
          description: "官方证书记录魏来所在 BNBU 团队获得 2026 COMAP ICM Problem D Finalist。",
          image: "/evidence/icm-finalist-redacted.webp",
          imageAlt: "2026 COMAP Interdisciplinary Contest in Modeling Finalist 证书公开展示版",
          privacyReviewed: true,
        },
      ],
      limitation:
        "Finalist 对应 2026 年团队竞赛成绩；本页策略数值来自我完成的 Python 公开实现。",
    },
    en: {
      eyebrow: "COMAP ICM 2026 · PROBLEM D",
      title: "From wins to worth: WNBA operations and valuation",
      summary:
        "The team was named a Finalist in the 2026 COMAP ICM Problem D; I rebuilt the modelling ideas as an end-to-end Python workflow linking Elo, attendance and pricing, finance and valuation, strategy comparison, and risk simulation.",
      period: "Jan 2026 — Present",
      role: "Finalist team member · Author of the public Python implementation",
      status: "Finalist",
      highlights: [
        { value: "5,065", label: "Games in the public implementation" },
        { value: "3", label: "Operating strategies" },
        { value: "10.03", label: "Top decision score in the snapshot" },
      ],
      sections: [
        {
          heading: "End-to-end model",
          bullets: [
            "Game-level cleaning and staging with rolling Elo forecasts.",
            "Attendance, capacity constraints, and dynamic ticket pricing.",
            "Revenue, profit, franchise valuation, and leverage modules.",
            "Decision comparison, scenarios, Monte Carlo, and sensitivity analysis.",
          ],
        },
        {
          heading: "Strategy comparison",
          bullets: [
            "Net profit and valuation are reported in millions (M) in the public result table.",
            "NO_MOVE: decision score 10.03, net profit 6.04M, and franchise value 292.75M.",
            "SIGN_STAR: decision score 6.49, net profit 1.83M, and franchise value 337.10M.",
            "TRADE_SUPERSTAR: decision score 4.48, net profit −0.44M, and franchise value 355.04M.",
            "In the current result snapshot, NO_MOVE does not maximise valuation; it ranks first by balancing profit, cost pressure, and target leverage.",
          ],
        },
        {
          heading: "My work",
          paragraphs: [
            "I implemented the complete analytical chain as a runnable Python project covering data preparation, Elo forecasting, ticketing and financial models, strategy comparison, result tables, and business visualisations.",
          ],
        },
      ],
      methods: ["Python", "Elo", "Attendance modelling", "Dynamic pricing", "EBITDA / DCF", "Monte Carlo", "Sensitivity"],
      links: [
        { label: "View code and full results", href: `${github}/comap-icm-2026-d-finalist-wnba-team-valuation-model` },
        { label: "View the strategy comparison table", href: `${github}/comap-icm-2026-d-finalist-wnba-team-valuation-model/blob/main/results/02_business_outputs/decision_comparison_table.csv` },
      ],
      evidence: [
        {
          title: "ICM 2026 Finalist certificate",
          description: "The official certificate records the BNBU team’s Finalist result in 2026 COMAP ICM Problem D.",
          image: "/evidence/icm-finalist-redacted.webp",
          imageAlt: "Public display copy of a 2026 COMAP Interdisciplinary Contest in Modeling Finalist certificate",
          privacyReviewed: true,
        },
      ],
      limitation:
        "The Finalist distinction belongs to the 2026 team entry; the strategy figures come from my public Python implementation.",
    },
  },
  "credit-risk-ridge-regression": {
    zh: {
      eyebrow: "独立公开实证项目 · 银行风险",
      title: "商业银行信用风险与贷款行业暴露",
      summary:
        "独立搭建银行—年份信用风险实证框架，将贷款行业结构扩展至十类行业，并以 OLS、岭回归、固定效应诊断与 Winsor 稳健性分析比较不良贷款率的关联因素。",
      period: "2026",
      role: "作者 · 独立实证项目",
      status: "公开代码、清洗面板与结果",
      highlights: [
        { value: "1,251", label: "基础 bank-years" },
        { value: "160", label: "基础样本银行" },
        { value: "10", label: "行业暴露组" },
        { value: "5", label: "模型规格" },
      ],
      sections: [
        {
          heading: "研究设计",
          bullets: [
            "以不良贷款率为信用风险代理变量，构造滞后银行控制项。",
            "将贷款暴露细分至房地产与建筑、制造、批发零售、交通运输、商务服务、基础设施等十类行业。",
            "比较五组 OLS 与 Ridge 规格，并加入固定效应诊断、VIF、相关矩阵和 Winsor 稳健性。",
          ],
        },
        {
          heading: "主要结果",
          paragraphs: [
            "在 434 个具有完整行业结构的银行—年份观测中，加入滞后不良贷款率后，OLS R² 从 0.604 提升至 0.733；Ridge 交叉验证 RMSE 从 0.254 降至 0.221。结果显示，银行自身风险惯性对解释与预测表现具有重要增量。",
          ],
        },
        {
          heading: "公开研究包",
          paragraphs: [
            "仓库提供清洗面板、模型指标、系数、稳健性结果和可复现脚本；完整原始数据流程在授权数据环境中运行。",
          ],
        },
      ],
      methods: ["Python", "Bank-year panel", "OLS", "Ridge", "Fixed-effects diagnostics", "Winsorization", "VIF"],
      links: [
        { label: "查看项目仓库", href: `${github}/credit-risk-ridge-regression` },
        { label: "查看模型指标", href: `${github}/credit-risk-ridge-regression/blob/main/results/model_metrics.csv` },
      ],
      limitation: "模型用于比较信用风险变量的关联结构与预测表现，行业贷款暴露系数不作因果解释。",
    },
    en: {
      eyebrow: "INDEPENDENT EMPIRICAL PROJECT · BANK RISK",
      title: "Commercial-bank credit risk and loan-industry exposure",
      summary:
        "Built a bank-year credit-risk framework, expanded loan exposure into ten industry groups, and compared OLS and ridge specifications with fixed-effects diagnostics and winsorized robustness checks.",
      period: "2026",
      role: "Author · Independent empirical project",
      status: "Public code, cleaned panels, and results",
      highlights: [
        { value: "1,251", label: "Baseline bank-years" },
        { value: "160", label: "Baseline banks" },
        { value: "10", label: "Industry groups" },
        { value: "5", label: "Model specifications" },
      ],
      sections: [
        {
          heading: "Empirical design",
          bullets: [
            "Used the non-performing loan ratio as the credit-risk proxy and constructed lagged bank controls.",
            "Expanded exposure into ten groups spanning real estate and construction, manufacturing, wholesale and retail, transport, business services, infrastructure, and other sectors.",
            "Compared five OLS and ridge specifications with fixed-effects diagnostics, VIF, correlation matrices, and winsorized robustness checks.",
          ],
        },
        {
          heading: "Key results",
          paragraphs: [
            "Across 434 bank-year observations with complete industry-exposure data, adding lagged non-performing loans raised OLS R² from 0.604 to 0.733 and reduced ridge cross-validated RMSE from 0.254 to 0.221. The bank’s own risk persistence adds substantial explanatory and predictive value.",
          ],
        },
        {
          heading: "Reproducible research package",
          paragraphs: [
            "The repository provides cleaned panels, metrics, coefficients, robustness results, and reproducible scripts; the full raw-data workflow runs in an authorised data environment.",
          ],
        },
      ],
      methods: ["Python", "Bank-year panel", "OLS", "Ridge", "Fixed-effects diagnostics", "Winsorization", "VIF"],
      links: [
        { label: "View repository", href: `${github}/credit-risk-ridge-regression` },
        { label: "View model metrics", href: `${github}/credit-risk-ridge-regression/blob/main/results/model_metrics.csv` },
      ],
      limitation: "The models compare associational structure and predictive performance; loan-exposure coefficients are not given a causal interpretation.",
    },
  },
  "financial-time-series-analysis": {
    zh: {
      eyebrow: "个人计量项目 · STATA",
      title: "金融时间序列：从共同趋势到长期均衡",
      summary:
        "独立完成金融时间序列计量项目，用 Stata 从单位根和协整检验推进到误差修正与结构突变分析，区分共同趋势、长期均衡关系与短期调整。",
      period: "2026",
      role: "作者 · 个人项目",
      status: "Stata 代码、方法摘要与分析报告公开",
      highlights: [
        { value: "5", label: "Stata 分析脚本" },
        { value: "ADF → ECM", label: "计量分析链路" },
        { value: "Break", label: "结构突变检验" },
      ],
      sections: [
        {
          heading: "核心问题",
          paragraphs: [
            "当宏观金融变量在几十年中共同上升或下降时，观察到的关系究竟是有经济含义的长期均衡，还是趋势、持久性和危机噪声造成的伪回归？",
          ],
        },
        {
          heading: "分析路径",
          bullets: [
            "ADF 单位根检验与时间序列变换。",
            "协整回归与残差检验。",
            "误差修正模型连接长期均衡与短期调整。",
            "结构突变检验考察模型稳定性。",
            "围绕通胀、货币供应、实际产出、购买力平价与汇率动态展开经济解释。",
          ],
        },
        {
          heading: "交付成果",
          paragraphs: [
            "仓库发布 5 个 Stata 分析脚本、方法摘要和分析报告，覆盖数据变换、模型估计、诊断与经济解释。",
          ],
        },
      ],
      methods: ["Stata", "ADF", "Cointegration", "ECM", "Structural break", "Macro-finance"],
      links: [
        { label: "查看项目仓库", href: `${github}/financial-time-series-analysis` },
        { label: "查看方法摘要", href: `${github}/financial-time-series-analysis/blob/main/docs/methods_summary.md` },
      ],
    },
    en: {
      eyebrow: "INDIVIDUAL ECONOMETRICS PROJECT · STATA",
      title: "Financial time series: from shared trends to long-run equilibrium",
      summary:
        "Completed an individual financial time-series econometrics project in Stata, moving from unit-root and cointegration tests to error-correction and structural-break analysis to distinguish shared trends, long-run equilibrium, and short-run adjustment.",
      period: "2026",
      role: "Author · Individual project",
      status: "Public Stata code, methods summary, and analysis write-up",
      highlights: [
        { value: "5", label: "Stata analysis scripts" },
        { value: "ADF → ECM", label: "Econometric sequence" },
        { value: "Break", label: "Structural-break testing" },
      ],
      sections: [
        {
          heading: "Core question",
          paragraphs: [
            "When macro-financial variables move together over decades, does the apparent relationship reflect an economically meaningful long-run equilibrium—or merely common trends, persistence, and crisis noise?",
          ],
        },
        {
          heading: "Analytical path",
          bullets: [
            "ADF unit-root testing and time-series transformation.",
            "Cointegration regressions and residual-based checks.",
            "Error-correction models linking long-run equilibrium to short-run adjustment.",
            "Structural-break tests for model stability.",
            "Economic interpretation around inflation, money, real output, purchasing power parity, and exchange-rate dynamics.",
          ],
        },
        {
          heading: "Deliverables",
          paragraphs: [
            "The repository publishes five Stata analysis scripts, a methods summary, and an analysis write-up covering transformation, estimation, diagnostics, and economic interpretation.",
          ],
        },
      ],
      methods: ["Stata", "ADF", "Cointegration", "ECM", "Structural break", "Macro-finance"],
      links: [
        { label: "View repository", href: `${github}/financial-time-series-analysis` },
        { label: "View methods summary", href: `${github}/financial-time-series-analysis/blob/main/docs/methods_summary.md` },
      ],
    },
  },
  "digital-scf-greenwashing": {
    zh: {
      eyebrow: "持续研究方向 · 供应链金融",
      title: "数字供应链金融、绿色表达与企业漂绿",
      summary:
        "构建并整理 2016—2024 年中国上市公司面板，使用 5,457 家企业、36,405 个公司—年份观测分析数字供应链金融、企业绿色表达与绿色行动之间的固定效应关系。",
      period: "2016—2024 数据 · 持续完善",
      role: "数据整理 · 实证流程 · 公开仓库维护",
      status: "2016—2024 上市公司面板研究",
      highlights: [
        { value: "36,405", label: "公司—年份面板" },
        { value: "5,457", label: "上市公司" },
        { value: "27,800", label: "主回归观测" },
      ],
      sections: [
        {
          heading: "研究问题",
          paragraphs: [
            "数字供应链金融是否伴随企业更真实的绿色行动，还是主要增加绿色披露和绿色表述？",
          ],
        },
        {
          heading: "数据与流程",
          bullets: [
            "2016—2024 年中国上市公司面板；基础面板 36,405 个公司—年份观测、5,457 家公司。",
            "Python 数据清洗、面板构造、固定效应、替代指标、硬绿色行动与 DML 扩展。",
            "公开仓库提供清洗面板、变量说明、质量报告与结果表；源数据在授权环境中处理。",
          ],
        },
        {
          heading: "主要发现",
          paragraphs: [
            "在 27,800 个公司—年份观测的企业与年份固定效应模型中，数字供应链金融与漂绿指标呈正相关（β = 0.081，p < .001）；关联集中在绿色表达（β = 0.069，p < .001），绿色行动对应系数不显著（β = −0.052，p = .648）。",
            "Lead-placebo 检验提示前置处理项仍有显著性，因此当前估计解释为企业内部的固定效应关联。",
          ],
        },
      ],
      methods: ["Python", "Firm-year panel", "Fixed effects", "Robustness", "Hard green action", "DML extension"],
      links: [
        { label: "查看项目仓库", href: `${github}/digital-supply-chain-finance-greenwashing` },
        { label: "查看面板质量报告", href: `${github}/digital-supply-chain-finance-greenwashing/blob/main/docs/final_panel_quality_report.md` },
      ],
    },
    en: {
      eyebrow: "ONGOING RESEARCH DIRECTION · SUPPLY-CHAIN FINANCE",
      title: "Digital supply-chain finance, green communication, and greenwashing",
      summary:
        "Built and curated a 2016–2024 panel of 5,457 Chinese listed firms and 36,405 firm-year observations to estimate fixed-effects relationships between digital supply-chain finance, corporate green communication, and observable green action.",
      period: "2016–2024 data · Ongoing refinement",
      role: "Data curation · Empirical workflow · Repository maintenance",
      status: "2016–2024 listed-firm panel study",
      highlights: [
        { value: "36,405", label: "Firm-years" },
        { value: "5,457", label: "Listed firms" },
        { value: "27,800", label: "Main-regression observations" },
      ],
      sections: [
        {
          heading: "Research question",
          paragraphs: [
            "Is digital supply-chain finance associated with more observable green action—or mainly with more green disclosure and promotion?",
          ],
        },
        {
          heading: "Data and workflow",
          bullets: [
            "A 2016–2024 Chinese listed-firm panel with 36,405 firm-years across 5,457 firms.",
            "Python data cleaning, panel construction, fixed effects, alternative measures, hard-green-action outcomes, and DML extensions.",
            "The public repository includes cleaned panels, dictionaries, quality reports, and result tables; licensed source data is processed in its authorised environment.",
          ],
        },
        {
          heading: "Main findings",
          paragraphs: [
            "In the firm- and year-fixed-effects model with 27,800 firm-year observations, digital supply-chain finance is positively associated with the greenwashing measure (β = 0.081, p < .001). The association is concentrated in green communication (β = 0.069, p < .001), while the coefficient for observable green action is not statistically significant (β = −0.052, p = .648).",
            "Lead-placebo tests retain significant pre-treatment terms, so the estimates are interpreted as within-firm fixed-effects associations.",
          ],
        },
      ],
      methods: ["Python", "Firm-year panel", "Fixed effects", "Robustness", "Hard green action", "DML extension"],
      links: [
        { label: "View repository", href: `${github}/digital-supply-chain-finance-greenwashing` },
        { label: "View panel-quality report", href: `${github}/digital-supply-chain-finance-greenwashing/blob/main/docs/final_panel_quality_report.md` },
      ],
    },
  },
};

export const experienceDetails: Record<string, BilingualDetail> = {
  "ccb-risk-management": {
    zh: {
      eyebrow: "实习经历 · 银行风险",
      title: "中国建设银行内蒙古分行 · 风险管理",
      summary:
        "围绕商业银行信用风险搭建 Python 实证流程，清洗银行—年份面板，构造滞后变量，并比较 OLS 与岭回归规格。",
      period: "2026.06 — 至今",
      role: "风险管理实习",
      status: "银行风险分析 · Python 实证与自动化报告",
      sections: [
        {
          heading: "工作内容",
          bullets: [
            "整合银行财务、贷款结构、宏观与房地产指标，构造银行—年份分析面板。",
            "以不良贷款率为风险代理，建立滞后解释变量和多组模型规格。",
            "使用 pandas、NumPy、statsmodels 与 scikit-learn 运行 OLS、Ridge、交叉验证和稳健性检查。",
            "自动生成模型指标、系数、图表、相关热图与报告材料。",
          ],
        },
        {
          heading: "公开成果",
          paragraphs: [
            "配套仓库发布清洗后的分析样本、模型结果、可视化和可复现代码；受许可约束的源数据在授权环境中运行。",
          ],
        },
      ],
      methods: ["Python", "OLS", "Ridge", "Cross-validation", "Bank-year panel", "Automated reporting"],
      links: [{ label: "查看信用风险项目", href: `${github}/credit-risk-ridge-regression` }],
    },
    en: {
      eyebrow: "INTERNSHIP · BANK RISK",
      title: "China Construction Bank, Inner Mongolia Branch · Risk Management",
      summary:
        "Built a Python empirical workflow for commercial-bank credit risk, cleaned bank-year panels, constructed lagged variables, and compared OLS and ridge specifications.",
      period: "Jun 2026 — Present",
      role: "Risk Management Intern",
      status: "Bank-risk analysis · Python modelling and automated reporting",
      sections: [
        {
          heading: "Work performed",
          bullets: [
            "Integrated bank financials, loan structure, macroeconomic, and real-estate indicators into a bank-year panel.",
            "Used the non-performing loan ratio as a risk proxy and constructed lagged explanatory variables and multiple specifications.",
            "Ran OLS, ridge, cross-validation, and robustness checks with pandas, NumPy, statsmodels, and scikit-learn.",
            "Automated metrics, coefficients, figures, correlation heatmaps, and report materials.",
          ],
        },
        {
          heading: "Public output",
          paragraphs: [
            "The companion repository publishes cleaned analytical samples, model results, visualisations, and reproducible code; source data governed by licence terms runs in its authorised environment.",
          ],
        },
      ],
      methods: ["Python", "OLS", "Ridge", "Cross-validation", "Bank-year panel", "Automated reporting"],
      links: [{ label: "View credit-risk project", href: `${github}/credit-risk-ridge-regression` }],
    },
  },
  "citic-market-expansion": {
    zh: {
      eyebrow: "实习经历 · 证券",
      title: "中信证券内蒙古分公司 · 市场拓展",
      summary: "把研究报告、业务指标和机构客户流程整理成便于讨论与跟踪的材料。",
      period: "2026.01.12 — 2026.02.13",
      role: "市场拓展实习",
      status: "研究提炼 · KPI 整理 · 机构业务支持",
      sections: [
        {
          heading: "主要工作",
          bullets: [
            "拆解研究报告，提炼核心结论、关键数据和风险点，形成行业与产品讨论支持材料。",
            "汇总账户、资产、利润率与销售等业务/KPI 数据，合并多表并把图片表格结构化。",
            "完成合规、运营、财务、产品系统与机构业务培训，协助跟踪银行、企业与机构客户流程。",
          ],
        },
      ],
      methods: ["Research synthesis", "Excel", "KPI consolidation", "Compliance", "Process tracking"],
    },
    en: {
      eyebrow: "INTERNSHIP · SECURITIES",
      title: "CITIC Securities, Inner Mongolia · Market Expansion",
      summary: "Turned research reports, business indicators, and institutional-client processes into concise materials for discussion and follow-up.",
      period: "12 Jan 2026 — 13 Feb 2026",
      role: "Market Expansion Intern",
      status: "Research synthesis · KPI consolidation · Institutional support",
      sections: [
        {
          heading: "Main work",
          bullets: [
            "Synthesised research reports into core conclusions, key data, and risk points for industry and product discussions.",
            "Consolidated account, asset, margin, and sales KPIs across multiple sheets and converted image-based tables into structured data.",
            "Completed training in compliance, operations, finance, product systems, and institutional business, and helped track bank, corporate, and institutional-client processes.",
          ],
        },
      ],
      methods: ["Research synthesis", "Excel", "KPI consolidation", "Compliance", "Process tracking"],
    },
  },
  "icbc-corporate-banking": {
    zh: {
      eyebrow: "实习经历 · 公司金融",
      title: "中国工商银行内蒙古分行 · 公司业务",
      summary: "围绕低空经济完成政策、产业链与区域案例研究，并把分析转化为可视化报告、综合融资方案与正式汇报。",
      period: "2025.07.15 — 2025.08.15",
      role: "公司业务实习",
      status: "低空经济研究 · 综合融资方案 · 部门汇报",
      sections: [
        {
          heading: "主要成果",
          bullets: [
            "搭建低空经济研究框架，梳理政策、全球格局、产业链与区域案例。",
            "用 Python、Matplotlib 与 GeoPandas 展示市场规模、政策时间线与区域产业集群。",
            "设计“股—债—贷—租—险”综合融资思路，并提出增信与风险控制要点。",
            "作为部门实习生代表完成研究汇报与答辩。",
          ],
        },
      ],
      methods: ["Industry research", "Python", "Matplotlib", "GeoPandas", "Financing design", "Presentation"],
    },
    en: {
      eyebrow: "INTERNSHIP · CORPORATE BANKING",
      title: "ICBC Inner Mongolia · Corporate Banking",
      summary: "Researched the low-altitude economy across policy, value chains, and regional cases, then translated the analysis into visual reporting, an integrated financing framework, and a formal presentation.",
      period: "15 Jul 2025 — 15 Aug 2025",
      role: "Corporate Banking Intern",
      status: "Low-altitude-economy research · Integrated financing · Presentation",
      sections: [
        {
          heading: "Main outputs",
          bullets: [
            "Built a low-altitude-economy research framework spanning policy, global development, the industry chain, and regional cases.",
            "Used Python, Matplotlib, and GeoPandas to visualise market size, policy timelines, and regional industry clusters.",
            "Developed an equity–debt–loan–leasing–insurance financing concept with credit-enhancement and risk-control considerations.",
            "Presented and defended the work as the department’s intern representative.",
          ],
        },
      ],
      methods: ["Industry research", "Python", "Matplotlib", "GeoPandas", "Financing design", "Presentation"],
    },
  },
  "icbc-investment": {
    zh: {
      eyebrow: "实习经历 · 投资",
      title: "工银金融资产投资有限公司 · 投资业务",
      summary: "围绕市场化债转股、股权投资、项目退出、尽调与估值建立实践框架。",
      period: "2025.06.04 — 2025.07.04",
      role: "投资业务二部实习",
      status: "债转股 · 尽职调查 · 三类估值方法",
      sections: [
        {
          heading: "主要工作",
          bullets: [
            "研究债转股政策、投资逻辑、标的筛选与退出路径。",
            "跟进投资投放流程并协助风险控制与合规执行。",
            "梳理不同板块 IPO 上市标准，评估企业适配与债转股退出路径。",
            "开展模拟尽调和资产估值，练习成本法、收益法与市场法。",
          ],
        },
      ],
      methods: ["Debt-to-equity swaps", "Due diligence", "Valuation", "IPO standards", "Risk control"],
    },
    en: {
      eyebrow: "INTERNSHIP · INVESTMENT",
      title: "ICBC Financial Asset Investment · Investment Business",
      summary: "Built a practical framework around market-oriented debt-to-equity swaps, equity investment, exit design, due diligence, and valuation.",
      period: "4 Jun 2025 — 4 Jul 2025",
      role: "Investment Business Department II Intern",
      status: "Debt-to-equity swaps · Due diligence · Three valuation approaches",
      sections: [
        {
          heading: "Main work",
          bullets: [
            "Studied debt-to-equity-swap policy, investment logic, target screening, and exit design.",
            "Followed investment disbursement and supported risk-control and compliance execution.",
            "Compared IPO listing standards and considered company fit and exit paths for equity positions.",
            "Practised simulated due diligence and applied the cost, income, and market approaches to valuation.",
          ],
        },
      ],
      methods: ["Debt-to-equity swaps", "Due diligence", "Valuation", "IPO standards", "Risk control"],
    },
  },
  "kpmg-audit": {
    zh: {
      eyebrow: "实习经历 · 审计",
      title: "毕马威广州 · 审计",
      summary: "复核财务与银行调节材料、核对应收与预付款项回函，并跟踪函证流程中的异常与进度。",
      period: "2024.07.25 — 2024.08.23",
      role: "审计实习",
      status: "财务复核 · 函证 · 异常跟踪",
      sections: [
        {
          heading: "主要工作",
          bullets: [
            "复核财务报表、银行调节表等材料，识别并记录潜在差异与风险点。",
            "围绕应收与预付款项核对函证数据，并与财务报表口径勾稽。",
            "跟踪函证寄发与回收，协调第三方沟通并处理异常。",
          ],
        },
      ],
      methods: ["Audit evidence", "Reconciliation", "Confirmations", "Exception tracking", "Third-party coordination"],
    },
    en: {
      eyebrow: "INTERNSHIP · AUDIT",
      title: "KPMG Guangzhou · Audit",
      summary: "Reviewed financial and bank-reconciliation materials, reconciled confirmation data for receivables and prepayments, and tracked exceptions and progress across the confirmation process.",
      period: "25 Jul 2024 — 23 Aug 2024",
      role: "Audit Intern",
      status: "Financial review · Confirmations · Exception tracking",
      sections: [
        {
          heading: "Main work",
          bullets: [
            "Reviewed financial statements, bank reconciliations, and supporting materials to identify and document potential discrepancies and risks.",
            "Reconciled confirmation data for receivables and prepayments against financial-statement classifications.",
            "Tracked confirmation dispatch and returns, coordinated third-party follow-up, and handled exceptions.",
          ],
        },
      ],
      methods: ["Audit evidence", "Reconciliation", "Confirmations", "Exception tracking", "Third-party coordination"],
    },
  },
};

export function getDetail(
  category: string,
  slug: string,
): BilingualDetail | undefined {
  if (category === "research") return researchDetails[slug];
  if (category === "projects") return projectDetails[slug];
  if (category === "experience") return experienceDetails[slug];
  return undefined;
}

export function detailPath(
  category: DetailCategory,
  slug: string,
  language: Language,
): string {
  const prefix = language === "en" ? "/en" : "";
  return `${prefix}/${category}/${slug}`;
}
