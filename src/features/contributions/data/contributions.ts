export type ContribType =
    | "Bug Fix"
    | "Feature"
    | "Refactoring"
    | "Documentation"
    | "Performance"
    | "Accessibility";

export type PRStatus = "Merged" | "Open" | "Closed";

export interface Contribution {
    id: string;
    repo: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    type: ContribType;
    tech: string[];
    status: PRStatus;
    date: string;
    prUrl: string;
    featured: boolean;
}

export const contributions: Contribution[] = [
    {
        id: "rhf-seterror-cancel-nested-delay-error",
        repo: "react-hook-form/react-hook-form",
        title: "Cancel pending nested delayError timers when setError is called on a parent",
        titleAr:
            "إلغاء مؤقّتات delayError المعلّقة للحقول المتداخلة عند استدعاء setError على الحقل الأب",
        description:
            "Fixed setError so it cancels pending delayError timers for nested fields, not just the exact path. Previously a stale child error could land after setError('parent') and merge into the server error. Aligned it with clearErrors, unregister and resetField, and added a fake-timer regression test.",
        descriptionAr:
            "أصلحت setError بحيث يلغي مؤقّتات delayError المعلّقة للحقول المتداخلة بدلاً من مؤقّت المسار نفسه فقط، فلا يظهر خطأ قديم للحقل الفرعي بعد تعيين خطأ على الحقل الأب ويندمج مع خطأ الخادم. جعلت السلوك متسقاً مع clearErrors وunregister وresetField، وأضفت اختبار انحدار بمؤقّتات وهمية.",
        type: "Bug Fix",
        tech: ["React", "TypeScript"],
        status: "Merged",
        date: "2026-09",
        prUrl: "https://github.com/react-hook-form/react-hook-form/pull/13775",
        featured: true,
    },
    {
        id: "ratq-filter-panel-redesign",
        repo: "Itqan-community/RATQ",
        title: "Redesign the resource filter panel with multi-select Creative Commons license filtering",
        titleAr:
            "إعادة تصميم لوحة تصفية الموارد مع تصفية متعددة الاختيار لتراخيص Creative Commons",
        description:
            "Rebuilt the filter panel as a proper card with colorful resource-type tags, and converted the license filter into a multi-select Creative Commons checklist backed by a shared label-to-license mapping reused across the app's three data sources.",
        descriptionAr:
            "أعدت بناء لوحة التصفية كبطاقة منسّقة مع علامات ملوّنة لأنواع الموارد، وحوّلت تصفية الترخيص إلى قائمة اختيار متعدد لتراخيص Creative Commons مستندة إلى خريطة مشتركة بين التسمية والترخيص تُستخدم عبر مصادر البيانات الثلاثة في التطبيق.",
        type: "Feature",
        tech: ["React", "Next.js", "TypeScript"],
        status: "Merged",
        date: "2026-09",
        prUrl: "https://github.com/Itqan-community/RATQ/pull/306",
        featured: true,
    },
    {
        id: "ratq-license-filter-empty-param-fix",
        repo: "Itqan-community/RATQ",
        title: "Ignore unrecognized license values in the resource filter",
        titleAr: "تجاهل قيم الترخيص غير المعروفة في مرشّح الموارد",
        description:
            "Fixed the license filter so an empty or unrecognized license query value falls back to 'no filter' instead of hiding every tracked Creative Commons resource, and mixed valid/invalid selections now filter correctly on the valid value alone.",
        descriptionAr:
            "أصلحت مرشّح الترخيص بحيث تعود قيمة الترخيص الفارغة أو غير المعروفة في الرابط إلى وضع 'بلا تصفية' بدلاً من إخفاء كل موارد Creative Commons المتتبَّعة، كما أصبحت التحديدات المختلطة بين قيم صحيحة وأخرى غير صالحة تُصفّى بشكل صحيح بالاعتماد على القيمة الصحيحة فقط.",
        type: "Bug Fix",
        tech: ["React", "Next.js", "TypeScript"],
        status: "Merged",
        date: "2026-09",
        prUrl: "https://github.com/Itqan-community/RATQ/pull/308",
        featured: false,
    },
    {
        id: "cms-frontend-login-redirect",
        repo: "Itqan-community/cms-frontend",
        title: "Fix login redirect to preserve original destination after sign-in",
        titleAr:
            "إصلاح إعادة التوجيه بعد تسجيل الدخول للحفاظ على الوجهة الأصلية",
        description:
            "Fixed the login flow so a user signing in from a resource page returns to that page instead of the gallery, by preserving the current route as a redirect parameter with a fallback for the legacy return-URL parameter.",
        descriptionAr:
            "أصلحت تدفق تسجيل الدخول بحيث يعود المستخدم الذي يسجّل الدخول من صفحة مورد إلى تلك الصفحة بدلاً من المعرض، عبر الحفاظ على المسار الحالي كمعامل إعادة توجيه مع دعم المعامل القديم كخيار احتياطي.",
        type: "Bug Fix",
        tech: ["Angular", "TypeScript"],
        status: "Merged",
        date: "2026-09",
        prUrl: "https://github.com/Itqan-community/cms-frontend/pull/241",
        featured: true,
    },
    {
        id: "ratq-arabic-search-normalization",
        repo: "Itqan-community/RATQ",
        title: "Add Arabic text normalization for consistent search matching",
        titleAr: "إضافة تطبيع للنص العربي لمطابقة بحث متسقة",
        description:
            "Added a normalization utility applied across all three resource data sources so that alef variants, alef maksura, and tashkeel are treated as equivalent, fixing false 'no results' outcomes for legitimate Arabic searches.",
        descriptionAr:
            "أضفت أداة تطبيع للنصوص طُبّقت على مصادر البيانات الثلاثة، بحيث تُعامل صيغ الألف المختلفة والألف المقصورة والتشكيل كمتكافئة، ما يصلح ظهور نتائج بحث فارغة خاطئة لعمليات بحث عربية صحيحة.",
        type: "Feature",
        tech: ["React", "Next.js", "TypeScript"],
        status: "Merged",
        date: "2026-09",
        prUrl: "https://github.com/Itqan-community/RATQ/pull/288",
        featured: true,
    },
    {
        id: "ratq-register-redirect-guard",
        repo: "Itqan-community/RATQ",
        title: "Redirect authenticated users away from the registration page",
        titleAr: "إعادة توجيه المستخدمين المسجّلين بعيداً عن صفحة التسجيل",
        description:
            "Added the same authenticated-user redirect guard already used on the login page to the registration page, so a logged-in user is sent to the dashboard instead of being able to load and use the registration form.",
        descriptionAr:
            "أضفت إلى صفحة التسجيل حارس إعادة التوجيه نفسه المستخدم في صفحة تسجيل الدخول، بحيث يُعاد توجيه المستخدم المسجّل دخوله إلى لوحة التحكم بدلاً من تمكّنه من فتح نموذج التسجيل واستخدامه.",
        type: "Bug Fix",
        tech: ["React", "Next.js", "TypeScript"],
        status: "Merged",
        date: "2026-09",
        prUrl: "https://github.com/Itqan-community/RATQ/pull/290",
        featured: false,
    },
];
