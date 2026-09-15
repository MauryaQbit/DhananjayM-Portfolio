import { ImageResponse } from "next/og";

export const alt =
  "Dhananjay Maurya — Software Engineer & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0e 0%, #10101a 60%, #16162a 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#818cf8",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Dhananjay Maurya
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#a1a1aa",
            marginBottom: 48,
          }}
        >
          Software Engineer &amp; Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 24,
            color: "#c7d2fe",
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js", "Python"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(99,102,241,0.4)",
                  background: "rgba(99,102,241,0.12)",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            display: "flex",
            gap: 24,
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <span>github.com/MauryaQbit</span>
          <span>·</span>
          <span>linkedin.com/in/dhananjay-maurya</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 480,
            height: 480,
            borderRadius: 999,
            background: "rgba(99,102,241,0.22)",
            filter: "blur(80px)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
