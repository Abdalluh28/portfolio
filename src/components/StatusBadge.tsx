/** Badge for project live/dev/archived status (used in project cards). */
interface StatusBadgeProps {
    status: string;
}

function getStatusClass(status: string): string {
    if (status === "Live")
        return "border-emerald-500/30 bg-emerald-500/20 text-emerald-300";
    if (status === "In Development")
        return "border-amber-500/30 bg-amber-500/20 text-amber-300";
    return "border-white/20 bg-white/10 text-white/50";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span
            className={`rounded-full border font-mono text-[10px] font-medium px-2 py-0.5 ${getStatusClass(status)}`}
        >
            {status}
        </span>
    );
}
