import { useApp } from "@/context/AppContext";
import { useReveal } from "@/hooks/useInView";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail } from "lucide-react";
import { GitHub, LinkedIn } from "@/lib/links";

export default function ContactSection() {
    const { tr, lang } = useApp();
    const revealRef = useReveal();

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-(--hero-bg) py-32"
        >
            {/* Top line glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />
            {/* Center glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

            <div
                ref={revealRef}
                className="relative mx-auto max-w-3xl px-6 text-center"
            >
                <div className="reveal mb-6 flex items-center justify-center gap-2">
                    <span className="h-px w-5 bg-accent" />
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">
                        Contact
                    </span>
                    <span className="h-px w-5 bg-accent" />
                </div>

                <h2 className="reveal delay-1 mb-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.1] text-white">
                    {tr.contact.headline}
                </h2>
                <p className="reveal delay-2 mb-12 font-display italic text-[clamp(1.5rem,3vw,2.5rem)] font-light text-white/50">
                    {tr.contact.sub}
                </p>

                <div className="reveal delay-3 flex flex-wrap justify-center gap-3">
                    <a
                        href={GitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    >
                        <GithubIcon size={16} />
                        GitHub
                    </a>
                    <a
                        href={LinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    >
                        <LinkedinIcon size={16} />
                        LinkedIn
                    </a>
                    <a
                        href="mailto:hello@abdalluh.dev"
                        className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-medium text-primary-fg transition-opacity hover:opacity-90"
                    >
                        <Mail size={16} />
                        {lang === "ar" ? "البريد الإلكتروني" : "Email Me"}
                    </a>
                </div>
            </div>
        </section>
    );
}
