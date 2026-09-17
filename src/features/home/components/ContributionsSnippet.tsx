import StatusDot from "@/components/StatusDot";
import TechBadge from "@/components/TechBadge";
import TypeBadge from "@/components/TypeBadge";
import { useApp } from "@/context/AppContext";
import { contributions } from "@/features/contributions/data/contributions";
import { useReveal } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContributionsSnippet() {
    const { tr, lang } = useApp();
    const navigate = useNavigate();
    const revealRef = useReveal();
    const featured = contributions.filter((c) => c.featured);

    return (
        <section className="bg-muted py-24">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div
                    ref={revealRef}
                    className="mb-14 flex flex-wrap items-end justify-between gap-4"
                >
                    <div>
                        <div className="reveal mb-3 flex items-center gap-2">
                            <span className="h-px w-4 bg-accent" />
                            <span className="font-mono text-xs uppercase tracking-widest text-accent">
                                Open Source
                            </span>
                        </div>
                        <h2 className="reveal delay-1 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight text-fg">
                            {tr.sections.contributions}
                        </h2>
                        <p className="reveal delay-2 mt-2 text-sm text-muted-fg">
                            {tr.sections.contributionsSub}
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/contributions")}
                        className="reveal delay-3 text-sm font-medium text-accent hover:underline"
                    >
                        {tr.sections.viewAllContributions}
                    </button>
                </div>

                {/* Contribution list */}
                <div className="flex flex-col gap-4">
                    {featured.map((contrib, i) => (
                        <div
                            key={contrib.id}
                            className={`animate-fade-up delay-${Math.min(i + 1, 8)} group flex flex-col gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-accent/30 sm:flex-row sm:items-start`}
                        >
                            {/* Left: repo + type */}
                            <div className="w-44 shrink-0">
                                <span className="mb-2 block truncate font-mono text-[11px] text-muted-fg">
                                    {contrib.repo}
                                </span>
                                <TypeBadge type={contrib.type} />
                            </div>

                            {/* Center: title + desc */}
                            <div className="min-w-0 flex-1">
                                <p className="mb-1 text-sm font-medium text-fg">
                                    {lang === "ar"
                                        ? contrib.titleAr
                                        : contrib.title}
                                </p>
                                <p className="text-xs leading-relaxed text-muted-fg">
                                    {lang === "ar"
                                        ? contrib.descriptionAr
                                        : contrib.description}
                                </p>
                                <div className="mt-2.5 flex flex-wrap gap-1.5">
                                    {contrib.tech.map((tech) => (
                                        <TechBadge key={tech} label={tech} />
                                    ))}
                                </div>
                            </div>

                            {/* Right: status + link */}
                            <div className="flex shrink-0 flex-col items-end gap-2">
                                <div className="flex items-center gap-1.5">
                                    <StatusDot status={contrib.status} />
                                    <span className="font-mono text-[11px] text-muted-fg">
                                        {contrib.status}
                                    </span>
                                </div>
                                <span className="font-mono text-[11px] text-muted-fg">
                                    {contrib.date}
                                </span>
                                <a
                                    href={contrib.prUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 font-mono text-[11px] text-accent hover:underline"
                                >
                                    View PR{" "}
                                    <ArrowRight size={12} className="inline" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
