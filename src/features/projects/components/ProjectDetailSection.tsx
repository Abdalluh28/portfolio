import type { ReactNode } from "react";

interface ProjectDetailSectionProps {
    label: string;
    children: ReactNode;
}

export default function ProjectDetailSection({
    label,
    children,
}: ProjectDetailSectionProps) {
    return (
        <div>
            <h2 className="mb-4 border-b border-border pb-3 font-mono text-xs uppercase tracking-widest text-muted-fg">
                {label}
            </h2>
            {children}
        </div>
    );
}
