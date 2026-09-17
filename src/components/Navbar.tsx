import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useApp } from "@/context/AppContext";
import { GitHub, LinkedIn } from "@/lib/links";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const { theme, lang, toggleTheme, tr } = useApp();

    const location = useLocation();
    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);

        window.addEventListener("scroll", handler, { passive: true });

        return () => window.removeEventListener("scroll", handler);
    }, []);

    const navLinks = [
        {
            key: "home",
            path: "/",
            label: tr.nav.home,
        },
        {
            key: "projects",
            path: "/projects",
            label: tr.nav.projects,
        },
        {
            key: "contributions",
            path: "/contributions",
            label: tr.nav.contributions,
        },
    ];

    const isActive = (path: string) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname.startsWith(path);
    };

    const handleContact = () => {
        setMenuOpen(false);

        if (location.pathname !== "/") {
            navigate("/");

            setTimeout(() => {
                document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                });
            }, 100);
        } else {
            document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    // When the navbar is transparent (not scrolled) it sits directly on top of
    // the dark hero section in both themes, so it needs light text regardless
    // of the active color scheme. Once scrolled, it has its own blurred
    // bg-bg/90 backing, so it can safely switch to theme-aware colors.
    const logoClass = scrolled
        ? "text-fg hover:text-accent"
        : "text-white hover:text-white/80";

    const linkClass = scrolled
        ? "text-muted-fg hover:text-fg"
        : "text-white/80 hover:text-white";

    const iconClass = scrolled
        ? "text-muted-fg hover:text-fg"
        : "text-white/80 hover:text-white";

    const menuButtonClass = scrolled ? "text-fg" : "text-white";

    return (
        <>
            <nav
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "border-b border-border bg-bg/90 py-3 backdrop-blur-md"
                        : "bg-transparent py-5"
                }`}
            >
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
                    {/* Logo */}
                    <div
                        onClick={() => {
                            setMenuOpen(false);

                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        className={`font-display text-xl font-light tracking-tight transition-colors ${logoClass}`}
                    >
                        ABDALLUH KHALED
                    </div>

                    {/* Desktop nav links */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                to={link.path}
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
                                className={`link-underline text-sm font-medium transition-colors ${
                                    isActive(link.path)
                                        ? "text-accent"
                                        : linkClass
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Contact */}
                        <button
                            onClick={handleContact}
                            className={`link-underline text-sm font-medium transition-colors ${linkClass}`}
                        >
                            {tr.nav.contact}
                        </button>
                    </div>

                    {/* Desktop actions */}
                    <div className="hidden items-center gap-3 md:flex">
                        <button
                            onClick={toggleTheme}
                            className={`p-1.5 transition-colors ${iconClass}`}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun size={17} />
                            ) : (
                                <Moon size={17} />
                            )}
                        </button>

                        <a
                            href={GitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-1.5 transition-colors ${iconClass}`}
                            aria-label="GitHub"
                        >
                            <GithubIcon size={18} />
                        </a>

                        <a
                            href={LinkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-1.5 transition-colors ${iconClass}`}
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon size={18} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className={`p-2 md:hidden ${menuButtonClass}`}
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <X size={22} strokeWidth={1.8} />
                        ) : (
                            <Menu size={22} strokeWidth={1.8} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile panel */}
            <div
                className={`mobile-menu fixed bottom-0 top-0 z-50 w-72 border-border bg-card md:hidden ${
                    lang === "ar" ? "right-0 border-l" : "left-0 border-r"
                } ${menuOpen ? "open" : ""}`}
            >
                <div className="flex h-full flex-col p-6">
                    {/* Mobile header */}
                    <div className="mb-10 flex items-center justify-between">
                        <div
                            onClick={() => {
                                setMenuOpen(false);

                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                            className="font-display text-xl font-light"
                        >
                            ABDALLUH KHALED
                        </div>
                    </div>

                    {/* Mobile navigation */}
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                to={link.path}
                                onClick={() => {
                                    setMenuOpen(false);

                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
                                className={`border-b border-border py-2.5 text-start text-base font-medium transition-colors ${
                                    isActive(link.path)
                                        ? "text-accent"
                                        : "text-fg"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Contact */}
                        <button
                            onClick={handleContact}
                            className="border-b border-border py-2.5 text-start text-base font-medium text-fg transition-colors hover:text-accent"
                        >
                            {tr.nav.contact}
                        </button>
                    </nav>

                    {/* Mobile actions */}
                    <div className="mt-auto flex items-center gap-4 pt-6">
                        <button
                            onClick={toggleTheme}
                            className="p-1.5 text-muted-fg transition-colors hover:text-fg"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun size={17} />
                            ) : (
                                <Moon size={17} />
                            )}
                        </button>

                        <a
                            href={GitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-muted-fg transition-colors hover:text-fg"
                            aria-label="GitHub"
                        >
                            <GithubIcon size={18} />
                        </a>

                        <a
                            href={LinkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-muted-fg transition-colors hover:text-fg"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}