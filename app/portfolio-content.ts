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
    title: "一个重视长期积累、独立思考和真实价值的人",
    summary:
      "我是魏来，一名应用经济学一等荣誉毕业生。相比追逐短期热度，我更愿意选择一个真正重要的方向，持续学习、反复练习，并把它做深、做扎实。",
    highlights: [
      { value: "长期主义", label: "用稳定、可重复的进步替代短期冲动" },
      { value: "实体经济", label: "关注金融工具如何解决真实企业问题" },
      { value: "证据意识", label: "追问结论的条件、限制与现实含义" },
      { value: "持续成长", label: "诚实面对不足，并把方向拆成行动" },
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
        heading: "如何推进目标：先明确方向，再拆解执行",
        paragraphs: [
          "我是一个目标感较强、重视长期规划的人。我习惯先明确方向，再把大目标拆成可以执行的小任务。我重视学习成绩、科研训练、实习经历和专业能力的积累，也愿意为有价值的目标投入较长时间。",
          "我不太相信“突然成功”，更相信稳定、持续和可重复的进步。",
        ],
      },
      {
        heading: "如何研究：追问结论为什么成立",
        paragraphs: [
          "在学习和研究中，我喜欢独立思考，也喜欢把问题追问到底。我不满足于只记住一个结论，而是希望弄清楚它为什么成立、适用于什么情况、存在哪些限制，以及它能否解决现实问题。",
          "我对逻辑、数据和证据比较敏感，做决定时通常较为谨慎。我愿意承认自己不知道，也愿意花时间补足基础，而不是用模糊的话掩盖问题。",
        ],
      },
      {
        heading: "如何与人相处：安静，但认真回应",
        paragraphs: [
          "我的性格偏安静、内向。我不热衷于频繁而喧闹的社交，更喜欢一对一、真诚、有内容的交流。刚进入陌生环境时，我可能不会成为最活跃的人；在建立信任之后，我愿意认真倾听、坦诚表达，并与他人深入讨论。",
          "我的优势不是制造热闹，而是专注、可靠和认真回应。",
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
        heading: "健康、风险与人工智能时代",
        paragraphs: [
          "我重视健康、节制和清晰的生活方式，也对风险保持敬畏。我不会因为短期利益轻易冒险，更认同通过专业知识、稳定工作、持续学习和长期积累创造价值。",
          "这种谨慎并不意味着拒绝变化。面对人工智能和产业快速变化，我希望主动学习新工具，同时培养更难被替代的能力：提出好问题、理解真实业务、分析复杂系统、进行可靠判断，并与不同背景的人合作。",
        ],
      },
      {
        heading: "仍在成长",
        paragraphs: [
          "我并不认为自己已经成熟或完善。我仍在提升表达能力、研究能力、实践经验和团队协作能力，也在学习如何更主动地进入新的环境、建立更广泛的专业联系。",
          "但我的方向比较清楚：成为一个诚实、可靠、专业、能够长期坚持的人；在金融、供应链和实体产业的交叉领域持续深耕；用严谨的研究和实际行动，解决有现实意义的问题。",
        ],
      },
    ],
    methods: [
      "长期主义",
      "专注",
      "自律",
      "谨慎",
      "真诚",
      "独立思考",
      "重视证据",
      "尊重风险",
      "关注实体经济",
    ],
    links: [
      { label: "查看 GitHub 项目", href: github, note: "公开代码与研究记录" },
    ],
  },
  en: {
    eyebrow: "PERSONAL STATEMENT · 关于我",
    title: "Someone who values compounding, independent thought, and real-world value",
    summary:
      "I am Lai Wei, a First Class Honours graduate in Applied Economics. Rather than chase short-lived trends, I prefer to choose a meaningful direction, keep learning and practising, and build depth over time.",
    highlights: [
      { value: "Long-termism", label: "Stable, repeatable progress over short-term impulse" },
      { value: "Real economy", label: "Finance should solve problems faced by real firms" },
      { value: "Evidence", label: "Ask when a conclusion holds and where it stops" },
      { value: "Growth", label: "Acknowledge gaps and translate direction into action" },
    ],
    sections: [
      {
        heading: "A long-term direction: finance in service of the real economy",
        paragraphs: [
          "My long-term interest is in how finance can serve the real economy more effectively. I am especially drawn to supply-chain finance, trade finance, supply-chain resilience, and risk management: how financial tools can enter real industrial chains, ease financing constraints for smaller firms, improve manufacturers’ cash flow, and make supply chains more resilient to shocks.",
          "To me, finance is not only about numbers, models, or transactions. It should help solve problems that real businesses face in day-to-day operations.",
        ],
      },
      {
        heading: "How I pursue goals: direction first, then executable steps",
        paragraphs: [
          "I am strongly goal-oriented and take long-term planning seriously. I start by clarifying a direction, then break a large objective into concrete tasks. I care about the cumulative value of academic work, research training, internships, and professional skills, and I am willing to invest sustained effort in something worthwhile.",
          "I do not place much faith in sudden success. I believe more in progress that is steady, repeatable, and earned over time.",
        ],
      },
      {
        heading: "How I study and research: keep asking why",
        paragraphs: [
          "I enjoy thinking independently and following a question until its logic is clear. Remembering a result is not enough: I want to know why it holds, when it applies, what its limitations are, and whether it can address a real problem.",
          "I am sensitive to logic, data, and evidence, and usually cautious when making judgments. I am comfortable admitting what I do not know and taking the time to strengthen the foundations instead of hiding uncertainty behind vague language.",
        ],
      },
      {
        heading: "How I relate to people: quiet, but fully present",
        paragraphs: [
          "I am naturally quiet and introverted. I prefer sincere, substantive one-to-one conversations to frequent, noisy socialising. I may not be the most visible person in a new environment, but once trust is established I listen carefully, communicate honestly, and engage deeply.",
          "My strength is not creating noise; it is being focused, dependable, and thoughtful in how I respond.",
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
        heading: "Health, risk, and an AI-shaped future",
        paragraphs: [
          "I value health, moderation, and a clear way of living, and I treat risk with respect. I do not take large risks for short-term gain; I would rather create value through professional knowledge, steady work, continued learning, and long-term accumulation.",
          "Caution does not mean resisting change. As AI and industry evolve quickly, I want to learn new tools while building capabilities that remain difficult to replace: asking good questions, understanding real operations, analysing complex systems, making reliable judgments, and working across different backgrounds.",
        ],
      },
      {
        heading: "Still growing",
        paragraphs: [
          "I do not consider myself complete or fully mature. I am still strengthening my communication, research, practical experience, and teamwork, and learning to enter new environments more proactively and build wider professional relationships.",
          "But my direction is clear: to become honest, dependable, professional, and capable of sustained effort; to work at the intersection of finance, supply chains, and real industry; and to use rigorous research and practical action to solve meaningful problems.",
        ],
      },
    ],
    methods: [
      "Long-termism",
      "Focus",
      "Discipline",
      "Caution",
      "Sincerity",
      "Independent thought",
      "Evidence",
      "Respect for risk",
      "Real-economy focus",
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
          "完成 Bachelor of Business Administration (Honours) in Applied Economics。官方毕业材料确认已满足毕业要求，课程采用英文教学。",
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
          "2024—2025 学年二等荣誉奖学金（简历记录；未在网站公开原始证明）。",
          "IELTS Overall 7.0：Reading 8.5、Listening 7.0、Writing 6.0、Speaking 6.0。",
        ],
      },
    ],
    methods: ["Panel data", "Time series", "Python", "Stata", "R", "Finance", "Business analytics"],
    evidence: [
      {
        title: "官方成绩与毕业材料已核验",
        description:
          "网站只展示经过核对的 GPA、学位等级与课程成绩。原成绩单、身份证号、学号、证书号和二维码保持私有。",
        privacyReviewed: true,
      },
      {
        title: "IELTS 7.0",
        description:
          "分项成绩来自 IELTS Test Report Form；原始 TRF 含候选人编号等身份字段，因此仅发布文字成绩。",
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
      { value: "161", label: "Units completed" },
      { value: "First", label: "Honours classification" },
      { value: "7.0", label: "IELTS Overall" },
    ],
    sections: [
      {
        heading: "Degree and training",
        paragraphs: [
          "Completed the Bachelor of Business Administration (Honours) in Applied Economics. Official graduation records confirm that all requirements were met, and the programme used English as its medium of instruction.",
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
          "Second-class scholarship for 2024–2025 (recorded in the CV; the original proof is not published on the site).",
          "IELTS Overall 7.0: Reading 8.5, Listening 7.0, Writing 6.0, Speaking 6.0.",
        ],
      },
    ],
    methods: ["Panel data", "Time series", "Python", "Stata", "R", "Finance", "Business analytics"],
    evidence: [
      {
        title: "Academic records verified",
        description:
          "Only verified GPA, degree classification, and selected course results are shown. The original transcript, national ID, student number, certificate number, and QR code remain private.",
        privacyReviewed: true,
      },
      {
        title: "IELTS 7.0",
        description:
          "Scores were checked against the IELTS Test Report Form. Because the original contains candidate identifiers, the site publishes text scores only.",
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
            "现有证据更一致地支持正式照护相关就业和服务能力先扩张；医生供给的调整相对缓慢，部分结果对模型设定更敏感。",
            "因此网站不把所有医疗供给指标概括为同一个确定效应，也不把协同完成的项目包装成个人独立研究。",
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
          title: "公开研究包",
          description: "仓库包含最终报告、答辩材料、Stata 脚本、清洗面板、结果表与精选图。",
          privacyReviewed: true,
        },
      ],
      limitation:
        "GitHub 能确认共同作者身份，但没有公开拆分两位作者的具体工作，因此本页仅使用“共同作者”这一可核实角色。",
    },
    en: {
      eyebrow: "FINAL-YEAR RESEARCH · POLICY EVALUATION",
      title: "Long-Term Care Insurance and care-related employment",
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
            "The evidence is more consistent with earlier expansion in formal care-related employment and service capacity, while physician supply adjusts more slowly and some estimates remain specification-sensitive.",
            "The page therefore avoids collapsing all medical supply outcomes into one certain effect or presenting a co-authored project as individual work.",
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
          title: "Public research package",
          description: "The repository contains the final report, defence deck, Stata scripts, cleaned panel, result tables, and selected figures.",
          privacyReviewed: true,
        },
      ],
      limitation:
        "GitHub verifies co-authorship but does not divide the two authors’ individual tasks, so this page uses only the verifiable role of co-author.",
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
      status: "RARCS 2026 相关会议论文；获报告录用资格",
      highlights: [
        { value: "68", label: "有效问卷" },
        { value: ".667", label: "预订意向 R²" },
        { value: ".166", label: "真实性→信任间接效应" },
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
          heading: "关键证据",
          bullets: [
            "真实评论组的感知真实性高 0.746（p < .001，Cohen’s d = 1.08）。",
            "真实评论组的信任得分高 0.497（p = .0021）。",
            "评论类型经由真实性与信任影响预订意向的间接效应为 0.166（p = .0037）。",
            "预订意向 DID 式估计为 −0.130（p = .412），不显著，仅作探索性证据。",
          ],
        },
        {
          heading: "成果状态",
          paragraphs: [
            "本地接收函能够确认 RARCS 2026 报告录用资格；网站不声称本人已经到场报告。接收函的工作题名与公开论文题名并不完全一致，因此本页只陈述经仓库和接收材料共同支持的研究主题与状态。",
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
          title: "RARCS 2026 接收状态已核验",
          description: "接收函只作为内部核验依据；原邮件、地址、联系人和签名未上传网站。",
          privacyReviewed: true,
        },
      ],
      limitation:
        "样本较小，DID 式预订意向估计不显著；页面明确区分探索性比较与结构路径证据，也不把 NLP 部分误写为个人已确认贡献。",
    },
    en: {
      eyebrow: "CONSUMER BEHAVIOUR · BUSINESS ANALYTICS",
      title: "Fake reviews, consumer trust, and hotel booking",
      summary:
        "As third author, contributed primarily to questionnaire-data cleaning, condition comparisons, DID-style analysis, and PLS-SEM-style structural-path modeling to study how review authenticity shapes booking intention through trust.",
      period: "Feb 2026 — Jun 2026",
      role: "Third author · Data analysis",
      status: "RARCS 2026-associated conference paper; accepted for presentation",
      highlights: [
        { value: "68", label: "Valid responses" },
        { value: ".667", label: "Booking-intention R²" },
        { value: ".166", label: "Authenticity→trust indirect effect" },
      ],
      sections: [
        {
          heading: "My contribution",
          bullets: [
            "Merged the real- and fake-review questionnaire conditions and handled naming, coding, reverse-scored items, and valid-sample screening.",
            "Ran condition comparisons, DID-style estimates, and PLS-SEM-style measurement and structural-path analyses.",
            "Prepared reliability, validity, mediation, IPMA, and result-interpretation materials.",
          ],
        },
        {
          heading: "Key evidence",
          bullets: [
            "Perceived authenticity was 0.746 higher in the real-review condition (p < .001; Cohen’s d = 1.08).",
            "Trust was 0.497 higher in the real-review condition (p = .0021).",
            "The indirect path from review type through authenticity and trust to booking intention was 0.166 (p = .0037).",
            "The DID-style booking-intention estimate was −0.130 (p = .412), not significant, and is reported only as exploratory evidence.",
          ],
        },
        {
          heading: "Outcome and status",
          paragraphs: [
            "A local acceptance letter verifies acceptance for presentation at RARCS 2026; the site does not claim that Lai Wei attended or presented in person. The working title in the letter differs from the public-paper title, so the page states only the theme and status supported jointly by the repository and acceptance material.",
          ],
        },
      ],
      methods: ["Python", "Survey cleaning", "DID-style comparison", "PLS-SEM-style paths", "Bootstrap", "IPMA"],
      links: [
        { label: "View repository", href: `${github}/fake-review-data-analysis` },
        { label: "View key findings", href: `${github}/fake-review-data-analysis/blob/main/results/key_findings.md` },
      ],
      evidence: [
        {
          title: "RARCS 2026 acceptance status verified",
          description: "The letter was used for internal verification only; the original email, address, contacts, and signature are not published.",
          privacyReviewed: true,
        },
      ],
      limitation:
        "The sample is small and the DID-style booking-intention estimate is not significant. This page separates exploratory comparisons from structural-path evidence and does not claim the NLP work as a verified individual contribution.",
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
      status: "获 EURAM 2026 口头报告录用资格",
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
          heading: "成果状态",
          paragraphs: [
            "EURAM 2026 接收邮件确认论文获现场会议口头报告录用资格。本页严格使用“获录用资格”，不延伸为“已经报告”或“已经参会”。",
          ],
        },
      ],
      methods: ["Python", "CFA", "Regression", "Bootstrap mediation", "Moderation", "Simple slopes"],
      evidence: [
        {
          title: "EURAM 2026 录用状态已核验",
          description: "原接收邮件含账户与注册链接，因此网站只发布文字状态，不上传截图。",
          privacyReviewed: true,
        },
      ],
      limitation: "这是共同研究；页面仅陈述简历和接收材料支持的个人参与，不把整项研究归为个人独立成果。",
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
          heading: "Outcome and status",
          paragraphs: [
            "The EURAM 2026 notification confirms acceptance for oral presentation at the onsite conference. This page says “accepted” and does not extend that evidence into a claim that Lai Wei attended or presented.",
          ],
        },
      ],
      methods: ["Python", "CFA", "Regression", "Bootstrap mediation", "Moderation", "Simple slopes"],
      evidence: [
        {
          title: "EURAM 2026 acceptance verified",
          description: "Because the original notification contains account and registration details, the site publishes the status in text rather than uploading the email.",
          privacyReviewed: true,
        },
      ],
      limitation: "This was collaborative research. The page states only the individual participation supported by the CV and acceptance material, not ownership of the entire project.",
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
      status: "课程总评 A · 推荐信已核验",
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
          heading: "经推荐信确认的个人贡献",
          bullets: [
            "开展研究并吸收教师反馈。",
            "在教师与团队成员之间进行双语沟通与协调。",
            "改进演示模板、排版与最终成果呈现。",
          ],
        },
      ],
      methods: ["Gale–Shapley", "Priority queues", "Network flow", "Python simulation", "Research communication"],
      evidence: [
        {
          title: "Path Academics 成绩单（隐私审查副本）",
          description: "只展示姓名、课程、日期和成绩；推荐信全文与第三方签名不公开。",
          image: "/evidence/path-academics-grade.webp",
          imageAlt: "魏来市场设计线上研究研讨成绩单，参与、作业、最终项目与总评均为 A",
          privacyReviewed: true,
        },
      ],
      limitation:
        "推荐信明确称其为团队项目，并指出更多地区特定数据可增强政策建议；本页不声称项目独立完成、真实部署或已被医院采用。",
    },
    en: {
      eyebrow: "MARKET DESIGN · TEAM RESEARCH PROJECT",
      title: "Hospital appointment matching mechanism",
      summary:
        "In a Path Academics market-design research seminar, the team compared patient–doctor appointment mechanisms and used Python simulations to study trade-offs among preferences, clinical priority, waiting time, and capacity constraints.",
      period: "Jun 2025 — Jul 2025",
      role: "Team project contributor",
      status: "Overall grade A · Reference verified",
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
            "Completed an English report and team presentation; participation, assignment, final project, and total grade were all A.",
          ],
        },
        {
          heading: "Individual contribution verified by the reference",
          bullets: [
            "Conducted research and helped implement instructor feedback.",
            "Acted as a bilingual communication bridge between the instructor and teammates.",
            "Improved the presentation template, typography, formatting, and final delivery.",
          ],
        },
      ],
      methods: ["Gale–Shapley", "Priority queues", "Network flow", "Python simulation", "Research communication"],
      evidence: [
        {
          title: "Path Academics grade transcript (privacy-reviewed copy)",
          description: "Only the name, programme, dates, and grades are shown. The full reference and third-party signatures remain private.",
          image: "/evidence/path-academics-grade.webp",
          imageAlt: "Lai Wei's market-design online research seminar transcript showing A grades for participation, assignment, final project, and total grade",
          privacyReviewed: true,
        },
      ],
      limitation:
        "The reference explicitly describes a team project and notes that more region-specific data would strengthen the policy recommendations. This page does not claim sole authorship, real deployment, or adoption by a hospital.",
    },
  },
};

export const projectDetails: Record<string, BilingualDetail> = {
  "icm-2026-wnba": {
    zh: {
      eyebrow: "COMAP ICM 2026 · PROBLEM D",
      title: "从胜场到价值：WNBA 球队经营与估值",
      summary:
        "作为 2026 COMAP ICM Problem D Finalist 团队成员，赛后将项目重构为端到端 Python 流程，连接 Elo、上座率与票价、财务估值、策略比较和风险模拟。",
      period: "2026.01 · 赛后公开重构持续完善",
      role: "Finalist 团队成员 · 公开 Python 重构",
      status: "Finalist",
      highlights: [
        { value: "Elo", label: "比赛表现" },
        { value: "DCF", label: "球队估值" },
        { value: "MC", label: "风险模拟" },
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
          heading: "个人可核实贡献",
          paragraphs: [
            "公开仓库明确说明：魏来的工作集中在赛后把完整分析流程从头重构为可运行的 Python 项目，包括数据、模型、结果表和商业图表。",
          ],
        },
        {
          heading: "为什么强调“赛后重构”",
          paragraphs: [
            "公开代码快照的策略选择和样本规模属于透明、可复现的后续实现，并不自动等同于原竞赛论文所使用的全部数据和正式结论。把两者区分开，能让成果既具体又诚实。",
          ],
        },
      ],
      methods: ["Python", "Elo", "Attendance modeling", "Dynamic pricing", "EBITDA / DCF", "Monte Carlo", "Sensitivity"],
      links: [
        { label: "查看公开重构仓库", href: `${github}/comap-icm-2026-d-finalist-wnba-team-valuation-model` },
        { label: "查看诚实重构说明", href: `${github}/comap-icm-2026-d-finalist-wnba-team-valuation-model/blob/main/docs/HONEST_REPRODUCTION_NOTE.md` },
      ],
      evidence: [
        {
          title: "ICM 2026 Finalist 证书（脱敏副本）",
          description: "保留魏来、学校、年份和 Finalist；队友、导师、团队号与第三方签名已遮挡。",
          image: "/evidence/icm-finalist-redacted.webp",
          imageAlt: "2026 COMAP Interdisciplinary Contest in Modeling Finalist 证书的脱敏预览",
          privacyReviewed: true,
        },
      ],
      limitation:
        "不把公开重构的 NO_MOVE 决策或具体样本数写成竞赛原论文结论，也不把团队奖项包装为个人独立获奖。",
    },
    en: {
      eyebrow: "COMAP ICM 2026 · PROBLEM D",
      title: "From wins to worth: WNBA operations and valuation",
      summary:
        "Member of a 2026 COMAP ICM Problem D Finalist team. After the competition, rebuilt the project as an end-to-end Python workflow linking Elo, attendance and pricing, finance and valuation, strategy comparison, and risk simulation.",
      period: "Jan 2026 · Public reconstruction refined after the contest",
      role: "Finalist team member · Public Python reconstruction",
      status: "Finalist",
      highlights: [
        { value: "Elo", label: "Performance" },
        { value: "DCF", label: "Valuation" },
        { value: "MC", label: "Risk simulation" },
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
          heading: "Verifiable individual contribution",
          paragraphs: [
            "The public repository explicitly states that Lai Wei’s work centred on rebuilding the full analytical pipeline after the competition as a runnable Python project spanning data, models, result tables, and business figures.",
          ],
        },
        {
          heading: "Why the page says “post-competition reconstruction”",
          paragraphs: [
            "The strategy result and sample details in the public snapshot belong to a transparent later implementation. They are not automatically identical to every dataset or formal conclusion in the original competition paper. Keeping that distinction makes the project both concrete and honest.",
          ],
        },
      ],
      methods: ["Python", "Elo", "Attendance modeling", "Dynamic pricing", "EBITDA / DCF", "Monte Carlo", "Sensitivity"],
      links: [
        { label: "View public reconstruction", href: `${github}/comap-icm-2026-d-finalist-wnba-team-valuation-model` },
        { label: "Read the honest-reproduction note", href: `${github}/comap-icm-2026-d-finalist-wnba-team-valuation-model/blob/main/docs/HONEST_REPRODUCTION_NOTE.md` },
      ],
      evidence: [
        {
          title: "ICM 2026 Finalist certificate (redacted copy)",
          description: "Lai Wei, the university, year, and Finalist result remain visible; teammate and adviser names, team number, and third-party signatures are redacted.",
          image: "/evidence/icm-finalist-redacted.webp",
          imageAlt: "Privacy-reviewed preview of a 2026 COMAP Interdisciplinary Contest in Modeling Finalist certificate",
          privacyReviewed: true,
        },
      ],
      limitation:
        "The site does not present the public reconstruction’s NO_MOVE decision or exact sample as the original paper’s result, and it does not turn a team award into an individual award.",
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
          heading: "公开与私有边界",
          paragraphs: [
            "公开仓库提供清洗面板、模型指标、系数、稳健性结果和可复现脚本。完整原始数据流程依赖本地授权数据，原始数据不会通过网站或仓库再分发。",
          ],
        },
        {
          heading: "如何解释结果",
          paragraphs: [
            "该项目用于比较信用风险变量之间的统计关联、预测与稳健性，不把行业贷款结构的系数解释为已经识别出的因果效应。",
          ],
        },
      ],
      methods: ["Python", "Bank-year panel", "OLS", "Ridge", "Fixed-effects diagnostics", "Winsorization", "VIF"],
      links: [
        { label: "查看项目仓库", href: `${github}/credit-risk-ridge-regression` },
        { label: "查看模型指标", href: `${github}/credit-risk-ridge-regression/blob/main/results/model_metrics.csv` },
      ],
      limitation: "这是独立公开实证项目，不是已发表论文；结果属于关联与预测框架，不声称完成因果识别。",
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
          heading: "Public/private boundary",
          paragraphs: [
            "The public repository provides cleaned panels, metrics, coefficients, robustness results, and reproducible scripts. The full raw-data workflow requires licensed local data, which is not redistributed through the site or repository.",
          ],
        },
        {
          heading: "How the results are interpreted",
          paragraphs: [
            "The project compares statistical associations, predictive structure, and robustness across credit-risk variables. It does not interpret loan-exposure coefficients as identified causal effects.",
          ],
        },
      ],
      methods: ["Python", "Bank-year panel", "OLS", "Ridge", "Fixed-effects diagnostics", "Winsorization", "VIF"],
      links: [
        { label: "View repository", href: `${github}/credit-risk-ridge-regression` },
        { label: "View model metrics", href: `${github}/credit-risk-ridge-regression/blob/main/results/model_metrics.csv` },
      ],
      limitation: "This is an independent public empirical project, not a published paper. It is an associational and predictive framework, not a completed causal design.",
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
      status: "脱敏代码与答案册公开",
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
          heading: "可审查性",
          paragraphs: [
            "仓库发布经过隐私清理的 Stata 脚本和答案册，并提供公开脚本与原始非注释代码一致性的 SHA-256 验证。",
          ],
        },
      ],
      methods: ["Stata", "ADF", "Cointegration", "ECM", "Structural break", "Macro-finance"],
      links: [
        { label: "查看项目仓库", href: `${github}/financial-time-series-analysis` },
        { label: "查看方法摘要", href: `${github}/financial-time-series-analysis/blob/main/docs/methods_summary.md` },
      ],
      limitation: "公开材料不足以支持具体显著性、预测精度或投资结论，因此本页只陈述分析流程与可核实的方法。",
    },
    en: {
      eyebrow: "INDIVIDUAL ECONOMETRICS PROJECT · STATA",
      title: "Financial time series: from shared trends to long-run equilibrium",
      summary:
        "Completed an individual financial time-series econometrics project in Stata, moving from unit-root and cointegration tests to error-correction and structural-break analysis to distinguish shared trends, long-run equilibrium, and short-run adjustment.",
      period: "2026",
      role: "Author · Individual project",
      status: "Sanitized code and answer booklet published",
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
          heading: "Reviewability",
          paragraphs: [
            "The repository publishes sanitized Stata scripts and an answer booklet, plus SHA-256 evidence that the public executable code matches the original non-comment code.",
          ],
        },
      ],
      methods: ["Stata", "ADF", "Cointegration", "ECM", "Structural break", "Macro-finance"],
      links: [
        { label: "View repository", href: `${github}/financial-time-series-analysis` },
        { label: "View methods summary", href: `${github}/financial-time-series-analysis/blob/main/docs/methods_summary.md` },
      ],
      limitation: "The public materials do not support claims about specific significance, forecast accuracy, or investment implications, so this page states only the verifiable analytical workflow and methods.",
    },
  },
  "digital-scf-greenwashing": {
    zh: {
      eyebrow: "持续研究方向 · 供应链金融",
      title: "数字供应链金融与企业绿色表达",
      summary:
        "构建并整理 2016—2024 年中国上市公司面板，探索数字供应链金融、企业绿色表达与绿色行动之间的固定效应关联；当前因果识别仍在完善。",
      period: "2016—2024 数据 · 持续完善",
      role: "公开仓库维护与实证整理；个人角色以自我陈述为准",
      status: "关联性研究，不作因果结论",
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
            "公开仓库提供清洗面板、变量说明、质量报告与结果表，原始授权数据不公开。",
          ],
        },
        {
          heading: "当前证据",
          paragraphs: [
            "基准固定效应结果显示数字供应链金融与漂绿指标正相关，关系更集中于绿色表达；绿色行动的主分解并未显示同样明确的提升。",
            "未来处理安慰剂和部分增强规格仍存在问题，因此当前结果只能作为关联性证据，不能解释为数字供应链金融“导致”或“促进”漂绿。",
          ],
        },
      ],
      methods: ["Python", "Firm-year panel", "Fixed effects", "Robustness", "Hard green action", "DML extension"],
      links: [
        { label: "查看项目仓库", href: `${github}/digital-supply-chain-finance-greenwashing` },
        { label: "查看面板质量报告", href: `${github}/digital-supply-chain-finance-greenwashing/blob/main/docs/final_panel_quality_report.md` },
      ],
      limitation:
        "仓库 README 未单独声明作者与个人分工；账户所有权不能替代贡献证据，因此本页不使用“独立完成”，并把因果识别未完成写在显著位置。",
    },
    en: {
      eyebrow: "ONGOING RESEARCH DIRECTION · SUPPLY-CHAIN FINANCE",
      title: "Digital supply-chain finance and corporate green talk",
      summary:
        "Built and curated a 2016–2024 Chinese listed-firm panel to examine fixed-effects associations between digital supply-chain finance, green talk, and green action. Causal identification remains incomplete.",
      period: "2016–2024 data · Ongoing refinement",
      role: "Public repository curation and empirical workflow; individual role stated conservatively",
      status: "Associational research, not a causal conclusion",
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
            "The public repository includes cleaned panels, dictionaries, quality reports, and result tables; licensed raw inputs remain private.",
          ],
        },
        {
          heading: "Current evidence",
          paragraphs: [
            "Baseline fixed-effects estimates show a positive association between digital supply-chain finance and the greenwashing measure, concentrated more clearly in green talk; the main green-action decomposition does not show a comparable improvement.",
            "Future-treatment placebo results and some enhanced specifications remain problematic, so the evidence is associational and cannot be read as digital supply-chain finance causing or promoting greenwashing.",
          ],
        },
      ],
      methods: ["Python", "Firm-year panel", "Fixed effects", "Robustness", "Hard green action", "DML extension"],
      links: [
        { label: "View repository", href: `${github}/digital-supply-chain-finance-greenwashing` },
        { label: "View panel-quality report", href: `${github}/digital-supply-chain-finance-greenwashing/blob/main/docs/final_panel_quality_report.md` },
      ],
      limitation:
        "The README does not independently document authorship or individual contribution. Repository ownership is not enough to establish sole authorship, so this page avoids that claim and foregrounds the incomplete causal design.",
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
      status: "简历与公开项目可核对；本地暂无实习证明附件",
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
            "项目以经过许可边界处理的公开仓库呈现：清洗样本和结果可复核，完整原始数据仍保留在本地授权环境。",
          ],
        },
      ],
      methods: ["Python", "OLS", "Ridge", "Cross-validation", "Bank-year panel", "Automated reporting"],
      links: [{ label: "查看信用风险项目", href: `${github}/credit-risk-ridge-regression` }],
      evidence: [
        {
          title: "证据状态",
          description: "本地简历和公开项目支持本页内容；当前素材库没有建设银行实习证明，因此不展示“证明已核验”标识。",
          privacyReviewed: true,
        },
      ],
    },
    en: {
      eyebrow: "INTERNSHIP · BANK RISK",
      title: "China Construction Bank, Inner Mongolia · Risk Management",
      summary:
        "Built a Python empirical workflow for commercial-bank credit risk, cleaned bank-year panels, constructed lagged variables, and compared OLS and ridge specifications.",
      period: "Jun 2026 — Present",
      role: "Risk Management Intern",
      status: "Supported by the CV and public project; no local internship certificate available",
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
            "A privacy- and licence-aware repository publishes cleaned samples and reviewable results; full raw inputs remain within the licensed local environment.",
          ],
        },
      ],
      methods: ["Python", "OLS", "Ridge", "Cross-validation", "Bank-year panel", "Automated reporting"],
      links: [{ label: "View credit-risk project", href: `${github}/credit-risk-ridge-regression` }],
      evidence: [
        {
          title: "Evidence status",
          description: "The CV and public project support this page. The local library does not contain a CCB internship certificate, so the site does not display a “credential verified” claim.",
          privacyReviewed: true,
        },
      ],
    },
  },
  "citic-market-expansion": {
    zh: {
      eyebrow: "实习经历 · 证券",
      title: "中信证券内蒙古分公司 · 市场拓展",
      summary: "把研究报告、业务指标和机构客户流程整理成便于讨论与跟踪的材料。",
      period: "2026.01.12 — 2026.02.13",
      role: "市场拓展实习",
      status: "实习证明已核验；原件私有",
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
      evidence: [
        {
          title: "实习日期与单位已核验",
          description: "原证明含身份字段，因此只发布单位、角色和日期，不上传扫描件。",
          privacyReviewed: true,
        },
      ],
      limitation: "页面不公开客户名单、业务数据、内部报告或其他机构保密材料。",
    },
    en: {
      eyebrow: "INTERNSHIP · SECURITIES",
      title: "CITIC Securities, Inner Mongolia · Market Expansion",
      summary: "Turned research reports, business indicators, and institutional-client processes into concise materials for discussion and follow-up.",
      period: "12 Jan 2026 — 13 Feb 2026",
      role: "Market Expansion Intern",
      status: "Internship credential verified; original kept private",
      sections: [
        {
          heading: "Main work",
          bullets: [
            "Decomposed research reports into core conclusions, key data, and risk points for industry and product discussions.",
            "Consolidated account, asset, margin, and sales KPIs across multiple sheets and converted image-based tables into structured data.",
            "Completed training in compliance, operations, finance, product systems, and institutional business, and helped track bank, corporate, and institutional-client processes.",
          ],
        },
      ],
      methods: ["Research synthesis", "Excel", "KPI consolidation", "Compliance", "Process tracking"],
      evidence: [
        {
          title: "Employer and dates verified",
          description: "The original credential contains identity fields, so the site publishes only the employer, role, and dates—not the scan.",
          privacyReviewed: true,
        },
      ],
      limitation: "No client names, business data, internal reports, or other confidential institutional material are published.",
    },
  },
  "icbc-corporate-banking": {
    zh: {
      eyebrow: "实习经历 · 公司金融",
      title: "中国工商银行内蒙古分行 · 公司业务",
      summary: "围绕低空经济完成政策、产业链与区域案例研究，并把分析转化为可视化报告、综合融资方案与正式汇报。",
      period: "2025.07.15 — 2025.08.15",
      role: "公司业务实习",
      status: "实习证明已核验；原件私有",
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
      evidence: [
        {
          title: "实习日期与单位已核验",
          description: "证明文件含个人身份信息，网站只发布事实摘要，不展示原件。",
          privacyReviewed: true,
        },
      ],
      limitation: "网站不公开银行内部数据、报告正文或任何客户资料。",
    },
    en: {
      eyebrow: "INTERNSHIP · CORPORATE BANKING",
      title: "ICBC Inner Mongolia · Corporate Banking",
      summary: "Researched the low-altitude economy across policy, value chains, and regional cases, then translated the analysis into visual reporting, an integrated financing framework, and a formal presentation.",
      period: "15 Jul 2025 — 15 Aug 2025",
      role: "Corporate Banking Intern",
      status: "Internship credential verified; original kept private",
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
      evidence: [
        {
          title: "Employer and dates verified",
          description: "The credential contains personal identifiers, so the site publishes a factual summary rather than the original scan.",
          privacyReviewed: true,
        },
      ],
      limitation: "No bank-internal data, report text, or client material is published.",
    },
  },
  "icbc-investment": {
    zh: {
      eyebrow: "实习经历 · 投资",
      title: "工银金融资产投资有限公司 · 投资业务",
      summary: "围绕市场化债转股、股权投资、项目退出、尽调与估值建立实践框架。",
      period: "2025.06.04 — 2025.07.04",
      role: "投资业务二部实习",
      status: "实习证明已核验；原件私有",
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
      evidence: [
        {
          title: "实习日期、单位与部门已核验",
          description: "原证明含身份证号和学号，网站不上传扫描件。",
          privacyReviewed: true,
        },
      ],
      limitation: "页面不披露交易标的、项目名称、内部流程文件或估值底稿。",
    },
    en: {
      eyebrow: "INTERNSHIP · INVESTMENT",
      title: "ICBC Financial Asset Investment · Investment Business",
      summary: "Built a practical framework around market-oriented debt-to-equity swaps, equity investment, exit design, due diligence, and valuation.",
      period: "4 Jun 2025 — 4 Jul 2025",
      role: "Investment Business Department II Intern",
      status: "Internship credential verified; original kept private",
      sections: [
        {
          heading: "Main work",
          bullets: [
            "Studied debt-to-equity-swap policy, investment logic, target screening, and exit design.",
            "Followed investment disbursement and supported risk-control and compliance execution.",
            "Compared IPO listing standards and considered company fit and exit paths for equity positions.",
            "Practised simulated due diligence and asset, income, and market valuation approaches.",
          ],
        },
      ],
      methods: ["Debt-to-equity swaps", "Due diligence", "Valuation", "IPO standards", "Risk control"],
      evidence: [
        {
          title: "Employer, department, and dates verified",
          description: "The original credential contains a national ID and student number, so the scan is not published.",
          privacyReviewed: true,
        },
      ],
      limitation: "No deal targets, project names, internal process documents, or valuation working papers are disclosed.",
    },
  },
  "kpmg-audit": {
    zh: {
      eyebrow: "实习经历 · 审计",
      title: "毕马威广州 · 审计",
      summary: "复核财务与银行调节材料、核对应收与预付款项回函，并跟踪函证流程中的异常与进度。",
      period: "2024.07.25 — 2024.08.23",
      role: "审计实习",
      status: "实习证明已核验；原件私有",
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
      evidence: [
        {
          title: "实习日期与单位已核验",
          description: "网站只发布经验摘要；证明扫描和客户相关材料保持私有。",
          privacyReviewed: true,
        },
      ],
      limitation: "不披露客户名称、底稿、财务数据或任何审计保密信息。",
    },
    en: {
      eyebrow: "INTERNSHIP · AUDIT",
      title: "KPMG Guangzhou · Audit",
      summary: "Reviewed financial and bank-reconciliation materials, reconciled confirmation data for receivables and prepayments, and tracked exceptions and progress across the confirmation process.",
      period: "25 Jul 2024 — 23 Aug 2024",
      role: "Audit Intern",
      status: "Internship credential verified; original kept private",
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
      evidence: [
        {
          title: "Employer and dates verified",
          description: "Only an experience summary is published; the credential scan and client-related material remain private.",
          privacyReviewed: true,
        },
      ],
      limitation: "No client names, working papers, financial data, or confidential audit information are disclosed.",
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
