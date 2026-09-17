import { useApp } from "@/context/AppContext";

export default function ProjectsHeader() {
    const { tr } = useApp();

    return (
        <div className="border-b border-white/5 bg-(--hero-bg) pb-20 pt-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-4 flex items-center gap-2">
                    <span className="h-px w-4 bg-accent" />
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">
                        Portfolio
                    </span>
                </div>
                <h1 className="mb-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-tight text-white">
                    {tr.projects.title}
                </h1>
                <p className="max-w-lg text-base text-white/50">
                    {tr.projects.sub}
                </p>
            </div>
        </div>
    );
}
