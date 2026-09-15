"use client";

import type { ReactNode } from "react";

function TapedFrame({
  url,
  children,
  label,
}: {
  url: string;
  children: ReactNode;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — stylized interface preview`}
      className="relative overflow-hidden rounded-lg border border-line bg-background transition-colors duration-300 group-hover:border-accent/60"
    >
      <span className="tape -top-0 left-6 -rotate-3 z-10" aria-hidden />
      <span className="tape -top-0 right-6 rotate-3 z-10" aria-hidden />
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5 pt-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#8a4a3a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#8a6a3a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5a7a4a]" />
        <span className="ml-2 flex-1 truncate rounded border border-line bg-background px-3 py-1 font-mono text-[0.65rem] text-muted">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

function AnalyticsPreview() {
  const bars = [42, 68, 55, 82, 61, 90, 74, 58, 66, 84];
  return (
    <div className="bg-[#14110d] p-4">
      <div className="flex gap-3">
        <div className="hidden w-10 shrink-0 flex-col gap-2 rounded-md bg-surface-2 p-2 sm:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`h-6 rounded ${i === 0 ? "bg-accent/70" : "bg-line"}`}
            />
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="grid grid-cols-3 gap-2">
            {["Feedback", "Sentiment", "Themes"].map((s, i) => (
              <div key={s} className="rounded-md border border-line bg-surface-2 p-2">
                <div className="mb-1.5 h-1.5 w-2/3 rounded bg-line" />
                <div className={`h-2.5 w-1/2 rounded ${i === 1 ? "bg-accent-light/80" : "bg-muted/50"}`} />
                <span className="sr-only">{s}</span>
              </div>
            ))}
          </div>
          <div className="rounded-md border border-line bg-surface-2 p-3">
            <div className="mb-2.5 flex items-center justify-between">
              <div className="h-1.5 w-20 rounded bg-line" />
              <div className="h-1.5 w-10 rounded bg-accent/50" />
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t-sm ${i === 5 ? "bg-accent" : "bg-accent/25"}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border border-line bg-surface-2 p-3">
            {[
              ["Positive", "w-4/5", "bg-accent"],
              ["Neutral", "w-2/5", "bg-muted/50"],
              ["Needs attention", "w-1/5", "bg-line"],
            ].map(([label, w, color]) => (
              <div key={label} className="flex items-center gap-2">
                <div className="h-1.5 w-14 shrink-0 rounded bg-line" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-background">
                  <div className={`h-full rounded-full ${w} ${color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CampusPreview() {
  const rooms = [
    { id: 1, state: "free" },
    { id: 2, state: "busy" },
    { id: 3, state: "free" },
    { id: 4, state: "free" },
    { id: 5, state: "busy" },
    { id: 6, state: "qr" },
  ];
  return (
    <div className="bg-[#14110d] p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          {["Floor 1", "Floor 2"].map((t, i) => (
            <div
              key={t}
              className={`rounded px-2.5 py-1 font-mono text-[0.6rem] ${
                i === 0
                  ? "border border-accent/50 bg-accent/15 text-accent-light"
                  : "border border-line bg-surface-2 text-muted"
              }`}
            >
              {t}
            </div>
          ))}
        </div>
        <div className="h-1.5 w-12 rounded bg-line" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`relative h-16 rounded-md border ${
              room.state === "free"
                ? "border-accent/50 bg-accent/10"
                : "border-line bg-surface-2"
            }`}
          >
            <div className="absolute left-2 top-1.5 h-1 w-6 rounded bg-muted/40" />
            {room.state === "qr" ? (
              <div className="absolute bottom-2 right-2 grid grid-cols-4 gap-px">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 w-1 rounded-[1px] ${
                      [0, 1, 3, 4, 6, 9, 10, 12, 15, 5].includes(i)
                        ? "bg-heading"
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            ) : (
              <div className={`absolute bottom-2 right-2 h-2 w-2 rounded-full ${room.state === "free" ? "bg-accent" : "bg-muted/40"}`} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-4">
        {[
          ["Available", "bg-accent"],
          ["Booked", "bg-muted/40"],
        ].map(([label, color]) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${color}`} />
            <span className="font-mono text-[0.6rem] text-muted">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrafficPreview() {
  const actual =
    "M0,86 L28,74 L56,80 L84,58 L112,64 L140,40 L168,48 L196,30 L224,44 L252,26";
  const predicted =
    "M0,90 L28,78 L56,82 L84,64 L112,68 L140,46 L168,52 L196,36 L224,48 L252,30";
  return (
    <div className="bg-[#14110d] p-4">
      <div className="mb-3 flex gap-1.5">
        {["Junction 1", "Junction 2", "Junction 3", "Junction 4"].map((t, i) => (
          <div
            key={t}
            className={`rounded px-2 py-1 font-mono text-[0.6rem] ${
              i === 0
                ? "border border-accent/50 bg-accent/15 text-accent-light"
                : "border border-line bg-surface-2 text-muted"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="rounded-md border border-line bg-surface-2 p-3">
        <svg viewBox="0 0 252 100" className="h-28 w-full" preserveAspectRatio="none" aria-hidden>
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" y1={y} x2="252" y2={y} stroke="#33291d" strokeWidth="1" />
          ))}
          <path d={actual} fill="none" stroke="#877861" strokeWidth="2" strokeDasharray="4 3" />
          <path d={predicted} fill="none" stroke="#ff5c1f" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="252" cy="30" r="3" fill="#ffa25e" />
        </svg>
        <div className="mt-2 flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-mono text-[0.6rem] text-muted">
            <span className="inline-block h-0.5 w-4 bg-accent" /> Predicted
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[0.6rem] text-muted">
            <span
              className="inline-block h-0.5 w-4"
              style={{ backgroundImage: "repeating-linear-gradient(90deg,#877861 0 4px,transparent 4px 7px)" }}
            />
            Actual
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-md border border-accent/40 bg-accent/10 px-3 py-2">
        <span className="font-mono text-[0.65rem] text-accent-light">Best model: Random Forest</span>
        <span className="font-mono text-[0.65rem] text-heading">MAE ~2.89</span>
      </div>
    </div>
  );
}

const previews = {
  analytics: { url: "feedback-loop — dashboard", label: "AI Customer Feedback Intelligence Platform", Component: AnalyticsPreview },
  campus: { url: "campussync-c3d3c.web.app", label: "CampusSync", Component: CampusPreview },
  traffic: { url: "traffic-forecast — streamlit", label: "Smart City Traffic Forecasting", Component: TrafficPreview },
} as const;

export default function ProjectPreview({ variant }: { variant: keyof typeof previews }) {
  const { url, label, Component } = previews[variant];
  return (
    <TapedFrame url={url} label={label}>
      <Component />
    </TapedFrame>
  );
}
