import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8f7ff",
          color: "#171725",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "72px 78px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 700,
          }}
        >
          <div
            style={{
              alignItems: "center",
              color: "#6c5ce7",
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              gap: 14,
              letterSpacing: -1,
            }}
          >
            <span
              style={{
                alignItems: "center",
                background: "#6c5ce7",
                borderRadius: 15,
                color: "white",
                display: "flex",
                height: 48,
                justifyContent: "center",
                width: 48,
              }}
            >
              S
            </span>
            SARIBAO
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.08,
              marginTop: 46,
            }}
          >
            <span>Votre commerce</span>
            <span>de charbon,</span>
            <span>plus simplement.</span>
          </div>
          <div style={{ color: "#68687a", fontSize: 24, marginTop: 24 }}>
            Une application Android qui fonctionne hors ligne.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "#6c5ce7",
            borderRadius: 46,
            color: "white",
            display: "flex",
            fontSize: 130,
            fontWeight: 700,
            height: 230,
            justifyContent: "center",
            marginLeft: 35,
            transform: "rotate(7deg)",
            width: 190,
          }}
        >
          S
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
