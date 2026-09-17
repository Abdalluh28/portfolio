import { useApp } from "@/context/AppContext";
import { projects } from "@/features/projects/data/projects";
import { useReveal } from "@/hooks/useInView";
import HomeProjectCard from "./HomeProjectCard";
import { useNavigate } from "react-router-dom";

export default function FeaturedProjects() {
    const { tr } = useApp();
    const navigate = useNavigate();
    const revealRef = useReveal();
    const featured = projects.filter((p) => p.featured);

    return (
        <section className="bg-bg py-24">
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
                                Work
                            </span>
                        </div>
                        <h2 className="reveal delay-1 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight text-fg">
                            {tr.sections.featuredProjects}
                        </h2>
                        <p className="reveal delay-2 mt-2 text-sm text-muted-fg">
                            {tr.sections.featuredSub}
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/projects")}
                        className="reveal delay-3 flex items-center gap-1 whitespace-nowrap text-sm font-medium text-accent hover:underline"
                    >
                        {tr.sections.viewAll}
                    </button>
                </div>

                {/* Project cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {featured.map((project, i) => (
                        <HomeProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            onViewDetails={() =>
                                navigate(`/projects/${project.id}`)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
