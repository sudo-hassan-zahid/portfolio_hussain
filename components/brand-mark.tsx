import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export default function BrandMark({ className, compact = false }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "relative isolate inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--hairline-strong)] bg-[var(--primary)] text-[var(--on-primary)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",
        compact ? "h-9 w-9" : "h-11 w-11",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-[5px] rounded-full border border-current opacity-[0.18]" />
      <span className="absolute left-1/2 top-1/2 h-[1px] w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current opacity-[0.22]" />
      <span className="relative flex items-baseline gap-[1px] font-serif leading-none tracking-[-0.04em]">
        <span className={compact ? "text-[17px]" : "text-xl"}>H</span>
        <span className={compact ? "text-[15px]" : "text-lg"}>Z</span>
      </span>
    </span>
  );
}
