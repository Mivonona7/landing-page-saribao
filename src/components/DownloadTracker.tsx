"use client";

import { useEffect, useState } from "react";

const downloadEvent = "saribao:download-counter-update";
const downloadErrorEvent = "saribao:download-counter-error";

type DownloadResponse = {
  downloads?: number;
  error?: string;
};

async function updateCounter(method: "GET" | "POST") {
  const response = await fetch("/api/downloads", {
    method,
    cache: "no-store",
    ...(method === "POST" ? { keepalive: true } : {}),
  });
  const result = (await response.json()) as DownloadResponse;

  if (!response.ok || !Number.isSafeInteger(result.downloads)) {
    throw new Error(result.error ?? "Le compteur est temporairement indisponible.");
  }

  return Number(result.downloads);
}

export function DownloadLink({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
}) {
  function recordDownload() {
    void updateCounter("POST")
      .then((downloads) => {
        window.dispatchEvent(
          new CustomEvent(downloadEvent, { detail: downloads }),
        );
      })
      .catch(() => {
        window.dispatchEvent(new Event(downloadErrorEvent));
      });
  }

  return (
    <a className={className} download="saribao.apk" href={href} onClick={recordDownload}>
      {children}
    </a>
  );
}

export function DownloadCount() {
  const [downloads, setDownloads] = useState<number>();
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;

    function onCountUpdate(event: Event) {
      if (event instanceof CustomEvent && typeof event.detail === "number") {
        setDownloads(event.detail);
        setUnavailable(false);
      }
    }

    function onCountError() {
      setUnavailable(true);
    }

    window.addEventListener(downloadEvent, onCountUpdate);
    window.addEventListener(downloadErrorEvent, onCountError);

    void updateCounter("GET")
      .then((count) => {
        if (active) {
          setDownloads(count);
          setUnavailable(false);
        }
      })
      .catch(() => {
        if (active) setUnavailable(true);
      });

    return () => {
      active = false;
      window.removeEventListener(downloadEvent, onCountUpdate);
      window.removeEventListener(downloadErrorEvent, onCountError);
    };
  }, []);

  if (unavailable) {
    return (
      <span className="download-count-message" role="status">
        Compteur momentanément indisponible. Le téléchargement reste accessible.
      </span>
    );
  }

  if (downloads === undefined) {
    return (
      <span className="download-count-message" role="status">
        Chargement du compteur…
      </span>
    );
  }

  return (
    <span aria-live="polite" className="download-count">
      <strong>{downloads.toLocaleString("fr-FR")}</strong>{" "}
      {downloads > 1 ? "téléchargements lancés" : "téléchargement lancé"}
    </span>
  );
}
