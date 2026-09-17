import { useApp } from "@/context/AppContext";
import { skillGroups } from "@/lib/skillsData";
import { useReveal } from "@/hooks/useInView";

export default function SkillsSection() {
    const { tr, lang } = useApp();
    const revealRef = useReveal();

    return (
        <section className="bg-bg py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div ref={revealRef}>
                    <div className="reveal mb-3 flex items-center gap-2">
                        <span className="h-px w-4 bg-accent" />
                        <span className="font-mono text-xs uppercase tracking-widest text-accent">
                            Stack
                        </span>
                    </div>
                    <h2 className="reveal delay-1 mb-3 font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight text-fg">
                        {tr.sections.skills}
                    </h2>
                    <p className="reveal delay-2 mb-14 text-sm text-muted-fg">
                        {tr.sections.skillsSub}
                    </p>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {skillGroups.map((group, i) => (
                            <div
                                key={group.category}
                                className={`reveal delay-${Math.min(i + 1, 5)}`}
                            >
                                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-fg">
                                    {lang === "ar"
                                        ? group.categoryAr
                                        : group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-block cursor-default rounded border border-border bg-card px-2.5 py-1 font-mono text-[12px] text-fg transition-colors hover:border-accent hover:text-accent"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
