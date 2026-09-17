import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    /** Set to "rtl" to flip prev/next icons */
    dir?: "ltr" | "rtl";
}

export default function Pagination({
    page,
    totalPages,
    onPageChange,
    dir = "ltr",
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const PrevIcon = dir === "rtl" ? ChevronRight : ChevronLeft;
    const NextIcon = dir === "rtl" ? ChevronLeft : ChevronRight;

    return (
        <div className="flex items-center justify-center gap-1">
            {/* Prev */}
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className="flex size-8 items-center justify-center rounded border border-border text-muted-fg transition-colors hover:border-fg/30 hover:text-fg disabled:cursor-not-allowed disabled:opacity-30"
            >
                <PrevIcon size={14} />
            </button>

            {/* Page numbers */}
            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onPageChange(p)}
                    aria-label={`Page ${p}`}
                    aria-current={p === page ? "page" : undefined}
                    className={`flex size-8 items-center justify-center rounded border text-sm font-mono transition-colors ${
                        p === page
                            ? "border-accent bg-accent text-primary-fg"
                            : "border-border text-muted-fg hover:border-fg/30 hover:text-fg"
                    }`}
                >
                    {p}
                </button>
            ))}

            {/* Next */}
            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
                className="flex size-8 items-center justify-center rounded border border-border text-muted-fg transition-colors hover:border-fg/30 hover:text-fg disabled:cursor-not-allowed disabled:opacity-30"
            >
                <NextIcon size={14} />
            </button>
        </div>
    );
}
