interface StatusDotProps {
    status: string;
}

const dotColor: Record<string, string> = {
    Merged: "bg-violet-500",
    Open: "bg-emerald-500",
    Closed: "bg-muted-fg",
};

export default function StatusDot({ status }: StatusDotProps) {
    const cls = dotColor[status] ?? "bg-muted-fg";
    return <span className={`inline-block size-1.5 rounded-full ${cls}`} />;
}
