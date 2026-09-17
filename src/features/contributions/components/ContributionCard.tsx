import TechBadge from "@/components/TechBadge";
import TypeBadge from "@/components/TypeBadge";
import { useApp } from "@/context/AppContext";
import type { Contribution } from "../data/contributions";
import { ArrowRight } from "lucide-react";

const statusColors: Record<string, string> = {
    Merged: "border-violet-500/25 bg-violet-500/10 text-violet-500",
    Open: "border-emerald-500/25 bg-emerald-500/10 text-emerald-500",
    Closed: "border-border bg-muted text-muted-fg",
};

interface ContributionCardProps {
    contribution: Contribution;
}

export default function ContributionCard({
    contribution: contrib,
}: ContributionCardProps) {
    const { lang } = useApp();

    return (
        <div className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/30">
            {/* Top row */}
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                    <span className="mb-1.5 block font-mono text-[11px] text-muted-fg">
                        {contrib.repo}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                        <TypeBadge type={contrib.type} />
                        <span
                            className={`inline-block rounded border font-mono text-[11px] font-medium px-2 py-0.5 ${statusColors[contrib.status] ?? ""}`}
                        >
                            {contrib.status}
                        </span>
                    </div>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-muted-fg">
                    {contrib.date}
                </span>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-sm font-medium leading-snug text-fg">
                {lang === "ar" ? contrib.titleAr : contrib.title}
            </h3>

            {/* Description */}
            <p className="mb-4 text-xs leading-relaxed text-muted-fg">
                {lang === "ar" ? contrib.descriptionAr : contrib.description}
            </p>

            {/* Tech stack */}
            <div className="mb-4 flex flex-wrap gap-1.5">
                {contrib.tech.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                ))}
            </div>

            {/* PR link */}
            <a
                href={contrib.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-accent hover:underline"
            >
                {lang === "ar" ? "عرض طلب السحب" : "View Pull Request"}
                <ArrowRight size={12} />
            </a>
        </div>
    );
}
