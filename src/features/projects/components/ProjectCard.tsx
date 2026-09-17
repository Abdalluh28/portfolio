import TechBadge from "@/components/TechBadge";
import { GithubIcon } from "@/components/icons";
import { useApp } from "@/context/AppContext";
import type { Project } from "@/features/projects/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    project: Project;
    index: number;
    onViewDetails: () => void;
}

export default function ProjectCard({
    project,
    index,
    onViewDetails,
}: ProjectCardProps) {
    const { lang, tr } = useApp();
    const title = lang === "ar" ? project.titleAr : project.title;
    const description =
        lang === "ar" ? project.descriptionAr : project.description;

    return (
        <article
            className={`animate-fade-up delay-${Math.min(index + 1, 8)} group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10`}
        >
            <div
                className={`relative h-52 cursor-pointer overflow-hidden ${
                    project.image
                        ? "bg-card"
                        : `bg-linear-to-br ${project.gradient}`
                }`}
                onClick={onViewDetails}
            >
                {project.image ? (
                    <img
                        src={project.image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className={`absolute inset-0 bg-linear-to-br ${project.gradient}`}
                    >
                        <div
                            className="absolute inset-0 opacity-[0.06]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%), linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%)",
                                backgroundSize: "20px 20px",
                                backgroundPosition: "0 0, 10px 10px",
                            }}
                        />
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/60 via-black/10 to-transparent p-5">
                    <div className="flex items-center justify-between">
                        <span
                            className={`rounded-full border font-mono text-[10px] font-medium px-2 py-0.5 ${
                                project.status === "Live"
                                    ? "border-emerald-500/30 bg-emerald-500/20 text-emerald-300"
                                    : project.status === "In Development"
                                      ? "border-amber-500/30 bg-amber-500/20 text-amber-300"
                                      : "border-white/20 bg-white/10 text-white/50"
                            }`}
                        >
                            {project.status}
                        </span>

                        <span className="font-mono text-[11px] text-white/70">
                            {project.year}
                        </span>
                    </div>

                    <div>
                        <span
                            className="mb-1 block font-display text-2xl font-light tracking-tight text-white"
                            style={{
                                textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                            }}
                        >
                            {title}
                        </span>

                        <span className="font-mono text-[11px] text-white/60">
                            {project.type}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="text-sm leading-relaxed text-muted-fg">
                    {description}
                </p>

                {/* Full tech stack */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                    ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center gap-2 border-t border-border pt-3">
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
                        className="ms-auto inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                        {tr.projects.details}
                        <ArrowRight
                            size={13}
                            className="transition-transform group-hover:translate-x-0.5"
                        />
                    </button>
                </div>
            </div>
        </article>
    );
}
