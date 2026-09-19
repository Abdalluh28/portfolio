/** Badge for project live/dev/archived status.
 *  Uses a solid dark backdrop so it stays legible on any image color,
 *  including white or very light thumbnails.
 */
interface StatusBadgeProps {
    status: string;
}

function getStatusClass(status: string): string {
    if (status === "Live")
        return "border-emerald-500/50 bg-emerald-950/80 text-emerald-400";
    if (status === "In Development")
        return "border-amber-500/50 bg-amber-950/80 text-amber-400";
    // Archived / unknown
    return "border-zinc-500/50 bg-zinc-900/80 text-zinc-400";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span
            className={`rounded-full border font-mono text-[10px] font-medium px-2 py-0.5 backdrop-blur-sm ${getStatusClass(status)}`}
        >
            {status}
        </span>
    );
}
