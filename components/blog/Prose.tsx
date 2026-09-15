export function ProseH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="display-title mt-12 text-3xl sm:text-4xl">
      {children}
    </h2>
  );
}

export function ProseH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-9 font-display text-[1.4rem] text-heading">
      {children}
    </h3>
  );
}

export function ProseP({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 text-[1.02rem] leading-[1.85] text-body">{children}</p>
  );
}

export function ProseList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 border-l-2 border-line pl-5">
      {items.map((item) => (
        <li
          key={item.slice(0, 40)}
          className="text-[1.02rem] leading-[1.75] text-body"
        >
          <span aria-hidden className="mr-2 font-bold text-accent">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SourcesBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="paper-card mt-12 p-6">
      <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-accent-light">
        Sources &amp; receipts
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}
