import Footer from "@/components/Footer";
import StatusBadge from "@/components/StatusBadge";
import TechBadge from "@/components/TechBadge";
import { GithubIcon } from "@/components/icons";
import { useApp } from "@/context/AppContext";
import { useReveal } from "@/hooks/useInView";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectDetailSection from "./components/ProjectDetailSection";
import { projects } from "./data/projects";

export default function ProjectDetailPage() {
    const { lang, tr } = useApp();
    const revealRef = useReveal();
    const navigate = useNavigate();
    const { id: selectedProjectId } = useParams();

    const project =
        projects.find((p) => p.id === selectedProjectId) ?? projects[0];

    const title = lang === "ar" ? project.titleAr : project.title;
    const overview =
        lang === "ar"
            ? (project.overviewAr ?? project.overview)
            : project.overview;
    const problem =
        lang === "ar"
            ? (project.problemAr ?? project.problem)
            : project.problem;
    const features =
        lang === "ar"
            ? (project.featuresAr ?? project.features)
            : project.features;
    const challenges =
        lang === "ar"
            ? (project.challengesAr ?? project.challenges)
            : project.challenges;
    const learned =
        lang === "ar"
            ? (project.learnedAr ?? project.learned)
            : project.learned;

    return (
        <>
            <main className="min-h-screen bg-bg">
                {/* Hero banner */}
                <div
                    className={`relative h-80 overflow-hidden md:h-112 ${
                        project.image
                            ? "bg-card"
                            : `bg-linear-to-br ${project.gradient}`
                    }`}
                >
                    {/* Hero image / gradient fallback */}
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    ) : (
                        <div
                            className={`absolute inset-0 bg-linear-to-br ${project.gradient}`}
                        >
                            <div
                                className="absolute inset-0 opacity-[0.06]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                                    backgroundSize: "32px 32px",
                                }}
                            />
                        </div>
                    )}

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />

                    {/* Back button */}
                    <button
                        onClick={() => navigate("/projects")}
                        className="absolute inset-s-8 top-8 z-10 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                    >
                        <ArrowLeft size={16} />
                        {lang === "ar" ? "المشاريع" : "All Projects"}
                    </button>

                    {/* Hero content */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-16">
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <StatusBadge status={project.status} />

                                <span className="font-mono text-[11px] text-white/60">
                                    {project.year}
                                </span>

                                <span className="font-mono text-[11px] text-white/50">
                                    {project.type}
                                </span>
                            </div>

                            <h1
                                className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight text-white"
                                style={{
                                    textShadow: "0 2px 20px rgba(0,0,0,0.7)",
                                }}
                            >
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-4xl px-6 py-16">
                    {/* CTA links */}
                    <div className="mb-14 flex flex-wrap gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded border border-border px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent"
                            >
                                <GithubIcon size={16} />
                                {tr.projects.github}
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded bg-accent px-4 py-2 text-sm font-medium text-primary-fg transition-opacity hover:opacity-90"
                            >
                                <ExternalLink size={16} />
                                {tr.projects.demo}
                            </a>
                        )}
                    </div>

                    <div ref={revealRef} className="flex flex-col gap-12">
                        {overview && (
                            <div className="reveal">
                                <ProjectDetailSection
                                    label={
                                        lang === "ar" ? "نظرة عامة" : "Overview"
                                    }
                                >
                                    <p className="text-base leading-relaxed text-fg">
                                        {overview}
                                    </p>
                                </ProjectDetailSection>
                            </div>
                        )}

                        {problem && (
                            <div className="reveal delay-1">
                                <ProjectDetailSection
                                    label={
                                        lang === "ar"
                                            ? "المشكلة والهدف"
                                            : "Problem / Goal"
                                    }
                                >
                                    <p className="text-sm leading-relaxed text-muted-fg">
                                        {problem}
                                    </p>
                                </ProjectDetailSection>
                            </div>
                        )}

                        <div className="reveal delay-2">
                            <ProjectDetailSection
                                label={
                                    lang === "ar"
                                        ? "التقنيات المستخدمة"
                                        : "Tech Stack"
                                }
                            >
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <TechBadge key={tech} label={tech} />
                                    ))}
                                </div>
                            </ProjectDetailSection>
                        </div>

                        {features && features.length > 0 && (
                            <div className="reveal delay-2">
                                <ProjectDetailSection
                                    label={
                                        lang === "ar"
                                            ? "الميزات الرئيسية"
                                            : "Key Features"
                                    }
                                >
                                    <ul className="space-y-2">
                                        {features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-3 text-sm text-fg"
                                            >
                                                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </ProjectDetailSection>
                            </div>
                        )}

                        {challenges && (
                            <div className="reveal delay-3">
                                <ProjectDetailSection
                                    label={
                                        lang === "ar"
                                            ? "التحديات"
                                            : "Challenges"
                                    }
                                >
                                    <div className="rounded-lg border border-border bg-muted p-5">
                                        <p className="text-sm leading-relaxed text-muted-fg">
                                            {challenges}
                                        </p>
                                    </div>
                                </ProjectDetailSection>
                            </div>
                        )}

                        {learned && (
                            <div className="reveal delay-3">
                                <ProjectDetailSection
                                    label={
                                        lang === "ar"
                                            ? "ما تعلمته"
                                            : "What I Learned"
                                    }
                                >
                                    <p className="text-sm leading-relaxed text-muted-fg">
                                        {learned}
                                    </p>
                                </ProjectDetailSection>
                            </div>
                        )}
                    </div>

                    {/* Bottom navigation */}
                    <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
                        <button
                            onClick={() => navigate("/projects")}
                            className="inline-flex items-center gap-2 text-sm text-muted-fg transition-colors hover:text-fg"
                        >
                            <ArrowLeft size={16} />
                            {lang === "ar" ? "جميع المشاريع" : "All Projects"}
                        </button>

                        <button
                            onClick={() => navigate("/")}
                            className="text-sm text-accent hover:underline"
                        >
                            {lang === "ar" ? "الرئيسية" : "Home"}
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
