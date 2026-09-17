import type { ProjectStatus } from "@/features/projects/data/projects";

/** Badge for project live/dev/archived status.
 *  Uses solid, opaque backgrounds so it remains legible over any image
 *  colour — light, dark, or gradient. */
interface StatusBadgeProps {
    status: ProjectStatus | string;
}

function getStatusClass(status: string): string {
    if (status === "Live")
        return "border-emerald-500/40 bg-emerald-950 text-emerald-400";
    if (status === "In Development")
        return "border-amber-500/40 bg-amber-950 text-amber-400";
    // Archived / fallback
    return "border-zinc-600/40 bg-zinc-900 text-zinc-400";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span
            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium ${getStatusClass(status)}`}
        >
            {status}
        </span>
    );
}
