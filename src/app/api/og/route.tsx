import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0a0f1d",
        backgroundImage:
          "radial-gradient(circle at 25% 20%, rgba(59,130,246,0.25), transparent 45%), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          color: "#60a5fa",
          fontSize: 28,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 9999,
            background: "#3b82f6",
          }}
        />
        Open to backend, ML &amp; full-stack roles
      </div>
      <div
        style={{
          fontSize: 92,
          fontWeight: 700,
          marginTop: 24,
          letterSpacing: "-0.03em",
        }}
      >
        {SITE.name}
      </div>
      <div
        style={{
          fontSize: 36,
          marginTop: 10,
          color: "#94a3b8",
        }}
      >
        Software Engineer · Backend · AI · Full-Stack
      </div>
      <div
        style={{
          fontSize: 28,
          marginTop: 40,
          color: "#64748b",
        }}
      >
        {SITE.url.replace("https://", "")}
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
