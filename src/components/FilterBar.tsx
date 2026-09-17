interface FilterBarProps<T extends string> {
    filters: T[];
    active: T;
    onSelect: (filter: T) => void;
    labelFor?: (filter: T) => string;
    /** Extra CSS applied to the active button when not using default accent style */
    activeClassName?: (filter: T) => string;
}

export default function FilterBar<T extends string>({
    filters,
    active,
    onSelect,
    labelFor,
    activeClassName,
}: FilterBarProps<T>) {
    return (
        <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
                const isActive = f === active;
                const customActive = activeClassName?.(f);
                return (
                    <button
                        key={f}
                        onClick={() => onSelect(f)}
                        className={`rounded border px-4 py-1.5 text-sm font-medium transition-colors ${
                            isActive
                                ? (customActive ??
                                  "border-accent bg-accent text-primary-fg")
                                : "border-border text-muted-fg hover:border-(--fg)/30 hover:text-fg"
                        }`}
                    >
                        {labelFor ? labelFor(f) : f}
                    </button>
                );
            })}
        </div>
    );
}
