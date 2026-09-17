import { useApp } from "@/context/AppContext";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useNavigate } from "react-router-dom";
import { GitHub, LinkedIn } from "@/lib/links";

export default function Footer() {
    const { tr, toggleTheme, theme } = useApp();
    const navigate = useNavigate();

    const navLinks: { label: string; page: string }[] = [
        { label: tr.nav.home, page: "" },
        { label: tr.nav.projects, page: "projects" },
        { label: tr.nav.contributions, page: "contributions" },
    ];

    return (
        <footer className="border-t border-border bg-card py-12">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-10 grid grid-cols-1 items-start gap-8 sm:grid-cols-[1fr_auto_auto]">
                    {/* Brand */}
                    <div>
                        <span className="mb-1 block font-display text-xl font-light text-fg">
                            ABDO
                        </span>
                        <span className="text-xs text-muted-fg">
                            {tr.role}
                        </span>
                    </div>

                    {/* Nav */}
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((l) => (
                            <button
                                key={l.page}
                                onClick={() => navigate(`/${l.page}`)}
                                className="text-start text-sm text-muted-fg transition-colors hover:text-fg"
                            >
                                {l.label}
                            </button>
                        ))}
                    </nav>

                    {/* Controls */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={toggleTheme}
                            className="w-fit rounded border border-border px-2 py-1 font-mono text-xs text-muted-fg transition-colors hover:text-fg"
                        >
                            {theme === "dark" ? "Light Mode" : "Dark Mode"}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
                    <span className="text-xs text-muted-fg">
                        {tr.footer.copy}
                    </span>
                    <div className="flex items-center gap-4">
                        <a
                            href={GitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-xs text-muted-fg transition-colors hover:text-fg"
                        >
                            <GithubIcon size={14} />
                        </a>
                        <a
                            href={LinkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-xs text-muted-fg transition-colors hover:text-fg"
                        >
                            <LinkedinIcon size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
