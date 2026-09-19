import StatusBadge from "@/components/StatusBadge";
import TechBadge from "@/components/TechBadge";
import { GithubIcon } from "@/components/icons";
import { useApp } from "@/context/AppContext";
import type { Project } from "@/features/projects/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";

interface HomeProjectCardProps {
    project: Project;
    index: number;
    onViewDetails: () => void;
}

export default function HomeProjectCard({
    project,
    index,
    onViewDetails,
}: HomeProjectCardProps) {
    const { lang, tr } = useApp();
    const title = lang === "ar" ? project.titleAr : project.title;
    const description =
        lang === "ar" ? project.descriptionAr : project.description;

    return (
        <div
            className={`animate-fade-up delay-${Math.min(index + 1, 8)} group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10`}
        >
            {/* Thumbnail: project image if available, otherwise gradient */}
            <div className="relative h-44 overflow-hidden">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className={`h-full w-full bg-linear-to-br ${project.gradient}`}
                    >
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>
                )}
                {/* Title overlay */}
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-4">
                    <span
                        className="font-display text-lg font-light tracking-tight text-white/90"
                        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                    >
                        {title}
                    </span>
                </div>
                {/* Status badge */}
                <div className="absolute inset-e-3 top-3">
                    <StatusBadge status={project.status} />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="text-sm leading-relaxed text-muted-fg">
                    {description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} label={tech} />
                    ))}
                    {project.tech.length > 4 && (
                        <span className="self-center text-[11px] text-muted-fg">
                            +{project.tech.length - 4}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center gap-2 pt-2">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 text-xs text-muted-fg transition-colors hover:text-fg"
                    >
                        <GithubIcon size={13} />
                        {tr.projects.github}
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 text-xs text-muted-fg transition-colors hover:text-fg"
                        >
                            <ExternalLink size={13} />
                            {tr.projects.demo}
                        </a>
                    )}
                    <button
                        onClick={onViewDetails}
                        className="ms-auto flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                        {tr.projects.details}
                        <ArrowRight
                            size={13}
                            className="transition-transform group-hover:translate-x-0.5"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}