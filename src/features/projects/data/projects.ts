export type ProjectStatus = "Live" | "In Development" | "Archived";
export type FilterKey = "All" | "Frontend" | "Full Stack" | "React" | "Next.js";

import alFakahany from "@/assets/al-fakahany.png";
import brainTumorNet from "@/assets/brain-tumor-net.png";
import electronicStoreAdmin from "@/assets/electronic-store-admin.png";
import electronicStore from "@/assets/electronic-store.png";
import taskFlow from "@/assets/task-flow.png";

export interface Project {
    id: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    tech: string[];
    type: Exclude<FilterKey, "All">;
    status: ProjectStatus;
    year: string;
    github?: string;
    demo?: string;
    featured: boolean;
    gradient: string;
    accentColor: string;
    /** Optional project screenshot/thumbnail. Falls back to the gradient when absent. */
    image?: string;
    overview?: string;
    overviewAr?: string;
    problem?: string;
    problemAr?: string;
    solution?: string;
    solutionAr?: string;
    features?: string[];
    featuresAr?: string[];
    challenges?: string;
    challengesAr?: string;
    learned?: string;
    learnedAr?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "El Fakahany",
        titleAr: "الفكهاني",
        description:
            "A mobile-first Arabic e-commerce platform featuring customer shopping, checkout, payments, inventory management, promotions, notifications, and a full admin dashboard.",
        descriptionAr:
            "منصة تجارة إلكترونية عربية للجوال أولاً، تشمل تسوق العملاء والدفع وإدارة المخزون والعروض الترويجية والإشعارات ولوحة تحكم إدارية متكاملة.",
        tech: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "TanStack Query",
            "Zustand",
            "React Hook Form",
            "Zod",
        ],
        type: "Frontend",
        status: "Live",
        year: "2026",
        github: "https://github.com/Azal-Studio/el-fakahany",
        demo: "https://al-fakahany.azal.digital/",
        featured: true,
        image: alFakahany,
        gradient: "from-orange-950 via-amber-950 to-orange-900",
        accentColor: "#F59E0B",
        overview:
            "El Fakahany is a comprehensive Arabic-first e-commerce solution built for a produce market. The platform serves both end customers and internal administrators, handling the full lifecycle from product browsing to order fulfillment.",
        overviewAr:
            "الفكهاني هو حل تجارة إلكترونية عربي شامل مبني لسوق المنتجات. تخدم المنصة العملاء والمدراء الداخليين على حد سواء.",
        problem:
            "The client needed a scalable, Arabic-first shopping platform that could handle real-time inventory updates, complex promotion rules, and provide both a customer-facing storefront and an admin management system.",
        features: [
            "Mobile-first RTL Arabic storefront",
            "Real-time inventory tracking",
            "Promotion engine with stacking discount rules",
            "Multi-step checkout with payment integration",
            "Admin dashboard with order and product management",
            "Push notification system",
        ],
        challenges:
            "Managing complex state across the cart, promotions, and inventory required careful architecture. RTL layout consistency across all screen sizes was particularly nuanced.",
        learned:
            "Deep expertise in RTL web development, complex frontend state management patterns, and building production-grade e-commerce flows.",
    },
    {
        id: "2",
        title: "Taahud",
        titleAr: "تعاهُّد",
        description:
            "A Quran memorization management platform supporting multiple user roles and Arabic-first RTL experiences, used by teachers and students.",
        descriptionAr:
            "منصة لإدارة حفظ القرآن الكريم تدعم أدوار مستخدمين متعددة وتجربة عربية أولاً من اليمين لليسار، يستخدمها المعلمون والطلاب.",
        tech: [
            "React",
            "JavaScript",
            "React Hook Form",
            "Tailwind CSS",
            "TanStack Query",
            "i18next",
        ],
        type: "Frontend",
        status: "Live",
        year: "2026",
        github: "https://github.com/Azal-Studio/taahud",
        featured: true,
        gradient: "from-emerald-950 via-teal-950 to-emerald-900",
        accentColor: "#10B981",
        overview:
            "Taahud is a specialized educational platform designed to help Quran teachers track and manage student memorization progress. It features role-based access for admins, teachers, and students.",
        features: [
            "Multi-role access: Admin, Teacher, Student",
            "Arabic-first RTL interface",
            "Memorization progress tracking with visual indicators",
            "Teacher-to-student tracking system",
            "Internationalization with i18next (AR/EN)",
            "Form validation with React Hook Form",
        ],
        challenges:
            "Designing an intuitive interface for varied technical literacy levels while maintaining strict RTL layout accuracy across a complex, multi-role application.",
        learned:
            "Advanced i18n implementation, role-based UI rendering strategies, and designing accessible interfaces for non-technical end users.",
    },
    {
        id: "3",
        title: "BrainTumorNet",
        titleAr: "BrainTumorNet",
        description:
            "A medical imaging application that integrates MRI analysis with a machine-learning inference service and Grad-CAM visualization to assist neurological diagnosis.",
        descriptionAr:
            "تطبيق تصوير طبي يدمج تحليل الرنين المغناطيسي مع خدمة استدلال التعلم الآلي وتصور Grad-CAM لمساعدة التشخيص العصبي.",
        tech: ["React", "React Query", "Redux", "Node.js", "FastAPI"],
        type: "Full Stack",
        status: "Archived",
        year: "2026",
        github: "https://github.com/Abdalluh28/brain-tumor",
        demo: "https://drive.google.com/file/d/11TpUo2lFo1OmT-_2twQC8BVzW_2XgaEK/view?usp=drive_link",
        featured: true,
        image: brainTumorNet,
        gradient: "from-blue-950 via-indigo-950 to-violet-950",
        accentColor: "#6366F1",
        overview:
            "BrainTumorNet provides radiologists and medical researchers with a web interface to upload MRI scans and receive ML-powered tumor detection results with Grad-CAM heatmap overlays. A recorded walkthrough is available in place of a live demo, since the ML inference service isn't kept running continuously.",
        overviewAr:
            "يوفر BrainTumorNet لأطباء الأشعة والباحثين الطبيين واجهة ويب لرفع صور الرنين المغناطيسي والحصول على نتائج كشف الأورام بالتعلم الآلي مع طبقات Grad-CAM الحرارية. يتوفر عرض مسجل بالفيديو بدلاً من عرض حي، حيث إن خدمة الاستدلال لا تعمل بشكل دائم.",
        features: [
            "MRI image upload and pre-processing pipeline",
            "FastAPI ML inference service integration",
            "Grad-CAM heatmap visualization overlay",
            "Redux-managed patient session state",
            "Report generation and export",
            "Responsive interface optimized for clinical workflows",
        ],
        challenges:
            "Handling large medical image files efficiently in the browser, synchronizing async ML inference results with UI state, and rendering accurate Grad-CAM overlays.",
        learned:
            "Experience with medical data handling, complex async state management, canvas-based image overlay rendering, and integrating Python ML services with React frontends.",
    },
    {
        id: "4",
        title: "TaskFlow",
        titleAr: "تاسك فلو",
        description:
            "A React task manager with a Kanban-style board, drag-and-drop columns, local-first guest storage, and Supabase-backed authentication and sync.",
        descriptionAr:
            "تطبيق لإدارة المهام بواجهة كانبان وأعمدة قابلة للسحب والإفلات، يعمل بدون تسجيل دخول عبر التخزين المحلي، ويدعم المصادقة والمزامنة عبر Supabase.",
        tech: [
            "React",
            "Redux Toolkit",
            "Supabase",
            "Tailwind CSS",
            "React Hook Form",
        ],
        type: "Full Stack",
        status: "Live",
        year: "2025",
        github: "https://github.com/Abdalluh28/to_do_list",
        demo: "https://to-do-list-tau-lake-58.vercel.app/",
        featured: false,
        image: taskFlow,
        gradient: "from-rose-950 via-pink-950 to-rose-900",
        accentColor: "#F43F5E",
        overview:
            "TaskFlow is a Kanban-style task manager. Guests can create and organize tasks immediately with local storage, then register or log in to sync those tasks to a Supabase-backed account.",
        overviewAr:
            "تاسك فلو هو تطبيق لإدارة المهام بأسلوب كانبان. يمكن للزوار إنشاء المهام وتنظيمها فوراً عبر التخزين المحلي، ثم التسجيل أو تسجيل الدخول لمزامنة تلك المهام إلى حساب مدعوم بـ Supabase.",
        features: [
            "Kanban board with To Do / In Progress / Done columns",
            "Drag-and-drop task organization",
            "Guest mode with localStorage persistence",
            "Supabase authentication with local-to-account task sync",
            "Filtering, debounced search, and multiple sort orders",
            "Light and dark theme support",
        ],
        challenges:
            "Merging locally stored guest tasks into a signed-in user's Supabase tasks without creating duplicates or losing edits, while keeping drag-and-drop updates optimistic.",
        learned:
            "Structuring Redux Toolkit state around an async backend, designing a local-first-to-account data migration flow, and integrating Supabase auth and database access.",
    },
    {
        id: "5",
        title: "Electronic Store",
        titleAr: "متجر الإلكترونيات",
        description:
            "A MERN-stack electronics storefront with product browsing, cart, and checkout, paired with a companion admin panel for managing the catalog.",
        descriptionAr:
            "متجر إلكترونيات مبني بمكدس MERN يتيح تصفح المنتجات وسلة الشراء والدفع، مع لوحة تحكم إدارية منفصلة لإدارة الكتالوج.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        type: "Full Stack",
        status: "Live",
        year: "2023",
        github: "https://github.com/Abdalluh28/Electronic-Store",
        demo: "https://electronic-store-g5lb.vercel.app/",
        featured: false,
        image: electronicStore,
        gradient: "from-cyan-950 via-sky-950 to-blue-900",
        accentColor: "#0EA5E9",
        overview:
            "A full-stack MERN e-commerce app for browsing and buying electronics, backed by a Node/Express API and MongoDB, with a paired admin panel for catalog and order management.",
        overviewAr:
            "تطبيق تجارة إلكترونية متكامل بمكدس MERN لتصفح وشراء الإلكترونيات، مدعوم بواجهة برمجية Node/Express وقاعدة بيانات MongoDB، إلى جانب لوحة تحكم إدارية لإدارة الكتالوج والطلبات.",
        features: [
            "Product catalog with categories and image uploads",
            "Shopping cart and checkout flow",
            "REST API backed by Express and MongoDB",
            "Companion admin panel for catalog and order management",
        ],
        learned:
            "End-to-end MERN development, structuring a REST API and database schema, and deploying a split frontend/backend app to Vercel.",
    },
    {
        id: "6",
        title: "Electronic Store — Admin Panel",
        titleAr: "متجر الإلكترونيات — لوحة التحكم",
        description:
            "The admin panel for the Electronic Store platform, used to manage products, orders, and inventory for the MERN-stack storefront.",
        descriptionAr:
            "لوحة التحكم الإدارية لمتجر الإلكترونيات، تُستخدم لإدارة المنتجات والطلبات والمخزون لمتجر مبني بمكدس MERN.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        type: "Full Stack",
        status: "Live",
        year: "2023",
        github: "https://github.com/Abdalluh28/Electronic-Store-admin-panel",
        demo: "https://store-admin-panel-rbmq.vercel.app/",
        featured: false,
        image: electronicStoreAdmin,
        gradient: "from-purple-950 via-fuchsia-950 to-purple-900",
        accentColor: "#A855F7",
        overview:
            "A dedicated admin dashboard for the Electronic Store, sharing the same MongoDB-backed API to manage products, stock, and orders.",
        overviewAr:
            "لوحة تحكم إدارية مخصصة لمتجر الإلكترونيات، تشارك نفس واجهة API المدعومة بـ MongoDB لإدارة المنتجات والمخزون والطلبات.",
        features: [
            "Product create/edit/delete with image uploads",
            "Order management and status updates",
            "Inventory overview",
        ],
    },
    // {
    //     id: "7",
    //     title: "AnimeTriks",
    //     titleAr: "أنمي تريكس",
    //     description:
    //         "An anime discovery app for browsing and searching titles, built on top of a public anime API with a Redux-managed state layer.",
    //     descriptionAr:
    //         "تطبيق لاستكشاف الأنمي يتيح تصفح العناوين والبحث عنها، مبني على واجهة برمجية عامة للأنمي مع طبقة حالة مُدارة عبر Redux.",
    //     tech: ["React", "Redux", "React Bootstrap", "Axios", "REST APIs"],
    //     type: "Frontend",
    //     status: "Live",
    //     year: "2022",
    //     github: "https://github.com/Abdalluh28/AnimeTriks",
    //     demo: "https://animetriks.netlify.app/",
    //     featured: false,
    //     gradient: "from-violet-950 via-purple-950 to-violet-900",
    //     accentColor: "#8B5CF6",
    //     overview:
    //         "AnimeTriks lets users browse and search anime titles pulled from a public anime API, with Redux managing app state and React Bootstrap for the UI.",
    //     overviewAr:
    //         "يتيح تطبيق أنمي تريكس للمستخدمين تصفح عناوين الأنمي والبحث عنها عبر واجهة برمجية عامة، مع إدارة حالة التطبيق عبر Redux وواجهة مستخدم مبنية بـ React Bootstrap.",
    //     features: [
    //         "Browse and search anime titles via a public anime API",
    //         "Redux-managed application state",
    //         "Carousel-based featured sections with Swiper",
    //         "Responsive UI built with React Bootstrap",
    //     ],
    //     learned:
    //         "Working with a third-party REST API, structuring Redux for a data-fetching app, and building a responsive UI with a component library.",
    // },
];
