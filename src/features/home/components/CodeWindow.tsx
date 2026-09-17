export default function CodeWindow() {
    return (
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0E0F14] font-mono text-sm shadow-2xl shadow-black/60">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-white/[0.07] bg-[#0A0B0F] px-4 py-3">
                <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-[#FF5F57]/80" />
                    <div className="size-2.5 rounded-full bg-[#FEBC2E]/80" />
                    <div className="size-2.5 rounded-full bg-[#28C840]/80" />
                </div>
                <span className="ms-2 text-xs text-white/25">portfolio.ts</span>
            </div>

            {/* Code body */}
            <div className="p-5 text-[13px] leading-[1.7]">
                <div>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-sky-300">abdo</span>{" "}
                    <span className="text-white/40">{"= {"}</span>
                </div>
                <div className="ms-4">
                    <span className="text-emerald-400">role</span>
                    <span className="text-white/40">{": "}</span>
                    <span className="text-amber-300">{'"Frontend Developer"'}</span>
                    <span className="text-white/40">,</span>
                </div>
                <div className="ms-4">
                    <span className="text-emerald-400">stack</span>
                    <span className="text-white/40">{": ["}</span>
                    <span className="text-amber-300">{'"React"'}</span>
                    <span className="text-white/40">{", "}</span>
                    <span className="text-amber-300">{'"TypeScript"'}</span>
                    <span className="text-white/40">{", "}</span>
                    <span className="text-amber-300">{'"Next.js"'}</span>
                    <span className="text-white/40">],</span>
                </div>
                <div className="ms-4">
                    <span className="text-emerald-400">focus</span>
                    <span className="text-white/40">{": "}</span>
                    <span className="text-amber-300">
                        {'"Clean UI · Scalable Arch"'}
                    </span>
                    <span className="text-white/40">,</span>
                </div>
                <div className="ms-4">
                    <span className="text-emerald-400">available</span>
                    <span className="text-white/40">{": "}</span>
                    <span className="text-sky-400">true</span>
                    <span className="text-white/40">,</span>
                </div>
                <div>
                    <span className="text-white/40">{"} "}</span>
                    <span className="text-violet-400">satisfies</span>
                    <span className="text-sky-300"> Developer</span>
                    <span className="text-white/40">;</span>
                </div>

                <div className="mt-4 border-t border-white/6 pt-4">
                    <span className="text-xs text-white/25">
                        {
                            "// Status: "
                        }
                    </span>
                </div>

                <div className="mt-1 flex items-center gap-1.5">
                    <span className="inline-block size-2 rounded-full bg-emerald-400/80" />
                    <span className="text-xs text-emerald-400/70">
                        open to opportunities
                    </span>
                    <span className="cursor-blink inline-block h-3 w-px bg-emerald-400/50" />
                </div>
            </div>
        </div>
    );
}
