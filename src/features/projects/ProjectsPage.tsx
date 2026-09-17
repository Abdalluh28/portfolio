import FilterBar from "@/components/FilterBar";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import { useApp } from "@/context/AppContext";
import { useState } from "react";
import { projects, type FilterKey } from "./data/projects";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsHeader from "./components/ProjectsHeader";

const FILTERS: FilterKey[] = [
    "All",
    "Frontend",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
];
const PAGE_SIZE = 6;

export default function ProjectsPage() {
    const { tr, lang } = useApp();
    const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
    const [page, setPage] = useState(1);

    const filtered = projects.filter(
        (p) =>
            activeFilter === "All" ||
            p.type === activeFilter ||
            p.tech.some((t) => t === activeFilter),
    );

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const filterLabels: Record<FilterKey, string> = {
        All: tr.projects.filters.all,
        Frontend: tr.projects.filters.frontend,
        "Full Stack": tr.projects.filters.fullstack,
        React: "React",
        "Next.js": "Next.js",
        TypeScript: "TypeScript",
        "Node.js": "Node.js",
    };

    function handleFilterChange(f: FilterKey) {
        setActiveFilter(f);
        setPage(1);
    }

    return (
        <>
            <main className="min-h-screen bg-bg">
                <ProjectsHeader />

                <div className="mx-auto max-w-6xl px-6 py-16">
                    {/* Filters */}
                    <div className="mb-12">
                        <FilterBar
                            filters={FILTERS}
                            active={activeFilter}
                            onSelect={handleFilterChange}
                            labelFor={(f) => filterLabels[f]}
                        />
                    </div>

                    {/* Grid */}
                    <ProjectsGrid projects={paginated} />

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12">
                            <Pagination
                                page={page}
                                totalPages={totalPages}
                                onPageChange={setPage}
                                dir={lang === "ar" ? "rtl" : "ltr"}
                            />
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
