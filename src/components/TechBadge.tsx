interface TechBadgeProps {
    label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
    return (
        <span className="inline-block rounded border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-fg transition-colors hover:border-accent hover:text-accent">
            {label}
        </span>
    );
}
