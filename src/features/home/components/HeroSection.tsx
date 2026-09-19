import { useApp } from "@/context/AppContext";
import { GithubIcon } from "@/components/icons";
import { ArrowRight } from "lucide-react";
import CodeWindow from "./CodeWindow";
import { useNavigate } from "react-router-dom";
import { GitHub, LinkedIn } from "@/lib/links";

export default function HeroSection() {
    const { tr, lang } = useApp();
    const navigate = useNavigate();

    return (
        <section className="group relative flex min-h-screen flex-col justify-center overflow-hidden bg-(--hero-bg)">
            {/* Animated grid */}
            <div
                className="animate-grid absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />

            {/* Accent glow */}
            <div className="pointer-events-none absolute inset-s-1/4 top-1/3 size-96 animate-pulse-slow rounded-full bg-accent/10 blur-[120px]" />

            {/* Secondary glow */}
            <div className="pointer-events-none absolute -inset-e-32 top-1/4 size-72 animate-float-slow rounded-full bg-accent/5 blur-[100px]" />

            <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-28">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
                    {/* Text column */}
                    <div>
                        {/* Label */}
                        <div className="animate-fade-up mb-8 flex items-center gap-2">
                            <span className="animate-line-expand h-px w-5 bg-accent" />

                            <span className="font-mono text-xs uppercase tracking-widest text-accent">
                                {tr.role}
                            </span>

                            <span className="size-1.5 animate-ping rounded-full bg-accent" />
                        </div>

                        {/* Headline */}
                        <h1 className="animate-fade-up delay-1 mb-6 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-light leading-[1.1] tracking-tight text-white">
                            <span className="block">{tr.hero.headline1}</span>

                            <em className="block not-italic text-white/60 transition-colors duration-500 group-hover:text-white/75">
                                {tr.hero.headline2}
                            </em>

                            <span className="block text-white/90">
                                {tr.hero.headline3}
                            </span>
                        </h1>

                        {/* Sub */}
                        <p className="animate-fade-up delay-2 mb-6 max-w-xl text-base leading-relaxed text-white/50">
                            {tr.hero.sub}
                        </p>

                        {/* About me */}
                        <p className="animate-fade-up delay-3 mb-10 max-w-xl text-sm leading-relaxed text-white/40">
                            {tr.hero.aboutMe}
                        </p>

                        {/* CTAs */}
                        <div
                            className={`animate-fade-up delay-4 mb-10 flex flex-wrap gap-3 ${
                                lang === "ar" ? "justify-end" : ""
                            }`}
                        >
                            <button
                                onClick={() => navigate("/projects")}
                                className="group/cta inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-medium text-primary-fg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-accent/20"
                            >
                                {tr.hero.cta1}

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                                />
                            </button>

                            <a
                                href="mailto:abdok7496@gmail.com"
                                className="inline-flex items-center gap-2 rounded border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5 hover:text-white"
                            >
                                {tr.hero.cta2}
                            </a>

                            <a
                                href="/cv.pdf"
                                download
                                className="inline-flex items-center gap-2 rounded border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5 hover:text-white"
                            >
                                {tr.hero.cta3}
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="animate-fade-up delay-5 flex items-center gap-5">
                            <a
                                href={GitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/social flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white/80"
                            >
                                <GithubIcon
                                    size={15}
                                    className="transition-transform duration-300 group-hover/social:-translate-y-0.5"
                                />

                                <span className="font-mono text-xs">
                                    github.com/abdo
                                </span>
                            </a>

                            <span className="h-4 w-px bg-white/10" />

                            <a
                                href={LinkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs text-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:text-white/80"
                            >
                                linkedin.com/in/abdo
                            </a>
                        </div>
                    </div>

                    {/* Code card */}
                    <div className="animate-fade-up delay-6 hidden lg:block">
                        <div className="animate-float">
                            <CodeWindow />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-bg to-transparent" />
        </section>
    );
}
