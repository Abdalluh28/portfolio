import { useApp } from "@/context/AppContext";
import type { Contribution } from "../data/contributions";
import ContributionCard from "./ContributionCard";

const statusDotColors: Record<string, string> = {
    Merged: "border-violet-500 bg-violet-500/20",
    Open: "border-emerald-500 bg-emerald-500/20",
    Closed: "border-border bg-muted",
};

const statusInnerDot: Record<string, string> = {
    Merged: "bg-violet-500",
    Open: "bg-emerald-400",
    Closed: "bg-muted-fg",
};

interface ContributionsTimelineProps {
    contributions: Contribution[];
}

export default function ContributionsTimeline({
    contributions,
}: ContributionsTimelineProps) {
    const { lang } = useApp();

    if (contributions.length === 0) {
        return (
            <div className="py-20 text-center text-sm text-muted-fg">
                {lang === "ar"
                    ? "لا توجد مساهمات في هذه الفئة."
                    : "No contributions in this category."}
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-0 inset-s-5 top-0 w-px bg-border" />

            <div className="flex flex-col gap-0">
                {contributions.map((contrib, i) => (
                    <div
                        key={contrib.id}
                        className={`animate-fade-up delay-${Math.min(i + 1, 8)} relative pb-10 ps-14 last:pb-0`}
                    >
                        {/* Timeline dot */}
                        <div
                            className={`absolute inset-s-3 top-1.5 flex size-4 items-center justify-center rounded-full border-2 ${statusDotColors[contrib.status] ?? "border-border bg-muted"}`}
                        >
                            <span
                                className={`size-1.5 rounded-full ${statusInnerDot[contrib.status] ?? "bg-muted-fg"}`}
                            />
                        </div>

                        <ContributionCard
                            contribution={contrib}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}