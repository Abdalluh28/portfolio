export const contribColors: Record<string, string> = {
    "Bug Fix": "border-rose-500/25 bg-rose-500/10 text-rose-500",
    Feature: "border-violet-500/25 bg-violet-500/10 text-violet-500",
    Refactoring: "border-amber-500/25 bg-amber-500/10 text-amber-500",
    Documentation: "border-sky-500/25 bg-sky-500/10 text-sky-500",
    Performance: "border-emerald-500/25 bg-emerald-500/10 text-emerald-500",
    Accessibility: "border-teal-500/25 bg-teal-500/10 text-teal-500",
};

interface TypeBadgeProps {
    type: string;
}

export default function TypeBadge({ type }: TypeBadgeProps) {
    return (
        <span
            className={`inline-block rounded border font-mono text-[11px] font-medium px-2 py-0.5 ${contribColors[type] ?? "border-border text-muted-fg"}`}
        >
            {type}
        </span>
    );
}
