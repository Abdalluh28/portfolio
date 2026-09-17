import FilterBar from "@/components/FilterBar";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import { useApp } from "@/context/AppContext";
import { useState } from "react";
import {
    contributions,
    type ContribType,
} from "./data/contributions";
import ContributionsHeader from "./components/ContributionsHeader";
import ContributionsTimeline from "./components/ContributionsTimeline";

const ALL_TYPES: (ContribType | "All")[] = [
    "All",
    "Bug Fix",
    "Feature",
    "Refactoring",
    "Documentation",
    "Performance",
    "Accessibility",
];

const PAGE_SIZE = 5;

export default function ContributionsPage() {
    const { tr, lang } = useApp();
    const [activeType, setActiveType] = useState<ContribType | "All">("All");
    const [page, setPage] = useState(1);

    const filtered =
        activeType === "All"
            ? contributions
            : contributions.filter((c) => c.type === activeType);

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    function typeLabel(type: ContribType | "All"): string {
        if (type === "All") return lang === "ar" ? "الكل" : "All";
        const map: Record<ContribType, string> = {
            "Bug Fix": lang === "ar" ? tr.badge.bugFix : "Bug Fix",
            Feature: lang === "ar" ? tr.badge.feature : "Feature",
            Refactoring: lang === "ar" ? tr.badge.refactor : "Refactoring",
            Documentation: lang === "ar" ? tr.badge.docs : "Documentation",
            Performance: lang === "ar" ? tr.badge.perf : "Performance",
            Accessibility: lang === "ar" ? tr.badge.a11y : "Accessibility",
        };
        return map[type];
    }

    function handleTypeChange(t: ContribType | "All") {
        setActiveType(t);
        setPage(1);
    }

    return (
        <>
            <main className="min-h-screen bg-bg">
                <ContributionsHeader />

                <div className="mx-auto max-w-5xl px-6 py-16">
                    {/* Type filters */}
                    <div className="mb-14">
                        <FilterBar
                            filters={ALL_TYPES}
                            active={activeType}
                            onSelect={handleTypeChange}
                            labelFor={typeLabel}
                        />
                    </div>

                    {/* Timeline */}
                    <ContributionsTimeline
                        contributions={paginated}
                    />

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
