import { ImageResponse } from "next/og"

export const alt = "Iris казино - официальный сайт онлайн казино"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          background:
            "linear-gradient(120deg, #1e1b4b 0%, #6d28d9 50%, #db2777 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 40,
            fontWeight: 700,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#facc15",
              color: "#1a1430",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 800,
            }}
          >
            I
          </div>
          Iris казино
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          Официальный сайт онлайн казино
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            opacity: 0.85,
            maxWidth: 900,
          }}
        >
          Welcome Pack до 50%, более 7000 игр и быстрые выплаты
        </div>
      </div>
    ),
    { ...size },
  )
}
