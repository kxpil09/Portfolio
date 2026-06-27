"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontFamily: "system-ui, sans-serif",
          background: "#0a0f1d",
          color: "#f8fafc",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700 }}>
          Something went wrong
        </h1>
        <button
          onClick={reset}
          style={{
            padding: "0.6rem 1.25rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "#3b82f6",
            color: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
