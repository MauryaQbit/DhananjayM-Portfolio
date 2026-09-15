import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: React.ReactNode;
  description?: string;
}

export default function SectionHeading({
  index,
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-accent font-bold tracking-[0.2em]">
          {index}
        </span>
        <span className="index-label">/ {kicker}</span>
        <span aria-hidden className="h-px flex-1 self-center bg-line" />
        <span
          aria-hidden
          className="hidden sm:block font-mono text-[0.65rem] text-muted/70"
        >
          ✳
        </span>
      </div>
      <h2 className="display-title mt-5 text-4xl sm:text-5xl max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-body">
          {description}
        </p>
      )}
    </Reveal>
  );
}
