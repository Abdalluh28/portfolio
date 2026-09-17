export interface SkillGroup {
    category: string;
    categoryAr: string;
    skills: string[];
}

export const skillGroups: SkillGroup[] = [
    {
        category: "Frontend",
        categoryAr: "الواجهة الأمامية",
        skills: [
            "React",
            "TypeScript",
            "Next.js",
            "JavaScript",
            "HTML5",
            "CSS3",
        ],
    },
    {
        category: "Styling",
        categoryAr: "التصميم",
        skills: ["Tailwind CSS", "Bootstrap", "shadcn/ui"],
    },
    {
        category: "State & Data",
        categoryAr: "الحالة والبيانات",
        skills: ["TanStack Query", "Zustand", "Redux"],
    },
    {
        category: "Forms & Validation",
        categoryAr: "النماذج والتحقق",
        skills: ["React Hook Form", "Zod"],
    },
    {
        category: "Backend & APIs",
        categoryAr: "الخلفية وواجهات API",
        skills: ["Node.js", "Express", "MongoDB", "REST APIs", "WebSockets"],
    },
    {
        category: "Tooling",
        categoryAr: "الأدوات",
        skills: ["Git", "GitHub", "Vite", "Docker"],
    },
];

export const timeline = [
    {
        year: "2021",
        titleEn: "Education",
        titleAr: "التعليم",
        descEn: "Studied Computer Science, building foundations in algorithms, data structures, and software engineering.",
        descAr: "درست علوم الحاسوب، مع بناء أسس في الخوارزميات وهياكل البيانات وهندسة البرمجيات.",
    },
    {
        year: "2022",
        titleEn: "First Frontend Steps",
        titleAr: "الخطوات الأولى في الواجهة الأمامية",
        descEn: "Dove into React and modern JavaScript. Built the first real-world projects and fell in love with UI engineering.",
        descAr: "انغمست في React وجافاسكريبت الحديث. بنيت أول مشاريع حقيقية وانبهرت بهندسة واجهة المستخدم.",
    },
    {
        year: "2023",
        titleEn: "Real-World Projects",
        titleAr: "مشاريع حقيقية",
        descEn: "Shipped BrainTumorNet and Taahud — applications solving real problems for real users.",
        descAr: "أطلقت BrainTumorNet وتعهُّد — تطبيقات تحل مشكلات حقيقية لمستخدمين حقيقيين.",
    },
    {
        year: "2024",
        titleEn: "Open Source & Scale",
        titleAr: "المصدر المفتوح والنطاق",
        descEn: "Contributed to open-source projects, shipped El Fakahany, and deepened expertise in TypeScript architecture.",
        descAr: "ساهمت في مشاريع مفتوحة المصدر وأطلقت الفكهاني وعمّقت خبرتي في معمارية TypeScript.",
    },
    {
        year: "Now",
        titleEn: "Current Focus",
        titleAr: "التركيز الحالي",
        descEn: "Building with Next.js and TypeScript at scale. Exploring performance optimization and design systems.",
        descAr: "البناء باستخدام Next.js وTypeScript على نطاق واسع. استكشاف تحسين الأداء وأنظمة التصميم.",
    },
];
