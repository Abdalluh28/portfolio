import { t, type Lang } from "@/lib/translations";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

interface AppContextType {
    theme: "light" | "dark";
    lang: Lang;
    toggleTheme: () => void;
    toggleLang: () => void;
    tr: (typeof t)["en"];
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [lang, setLang] = useState<Lang>("en");

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        const html = document.documentElement;

        html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
        html.setAttribute("lang", lang);
    }, [lang]);

    const toggleTheme = useCallback(() => {
        document.documentElement.classList.add("theme-transition");

        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
        );

        setTimeout(() => {
            document.documentElement.classList.remove("theme-transition");
        }, 400);
    }, []);

    const toggleLang = useCallback(() => {
        setLang((currentLang) => (currentLang === "en" ? "ar" : "en"));
    }, []);

    const tr = t[lang] as (typeof t)["en"];

    return (
        <AppContext.Provider
            value={{
                theme,
                lang,
                toggleTheme,
                toggleLang,
                tr,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const ctx = useContext(AppContext);

    if (!ctx) {
        throw new Error("useApp must be used within AppProvider");
    }

    return ctx;
}
