import { NextResponse } from "next/server";
import {
  DownloadCounterConfigurationError,
  incrementDownloadCount,
  readDownloadCount,
} from "@/lib/download-counter";

function unavailableResponse(error: unknown) {
  if (error instanceof DownloadCounterConfigurationError) {
    return NextResponse.json(
      { error: error.message },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  console.error("Échec de la communication avec le compteur Upstash.", error);
  return NextResponse.json(
    { error: "Le compteur de téléchargements est temporairement indisponible." },
    { status: 502, headers: { "Cache-Control": "no-store" } },
  );
}

export async function GET() {
  try {
    const downloads = await readDownloadCount();

    return NextResponse.json(
      { downloads },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return unavailableResponse(error);
  }
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json(
      { error: "Origine de la requête non autorisée." },
      { status: 403, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const downloads = await incrementDownloadCount();

    return NextResponse.json(
      { downloads },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return unavailableResponse(error);
  }
}
