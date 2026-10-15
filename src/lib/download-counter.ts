const counterKey = "saribao:downloads";

type UpstashResponse = {
  result?: unknown;
  error?: unknown;
};

export class DownloadCounterConfigurationError extends Error {}

function getUpstashCredentials() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new DownloadCounterConfigurationError(
      "Le compteur de téléchargements n’est pas encore configuré.",
    );
  }

  return { token, url: url.replace(/\/+$/, "") };
}

export async function readDownloadCount() {
  return runCommand("get");
}

export async function incrementDownloadCount() {
  return runCommand("incr");
}

async function runCommand(command: "get" | "incr") {
  const { token, url } = getUpstashCredentials();
  const response = await fetch(
    `${url}/${command}/${encodeURIComponent(counterKey)}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Upstash Redis a répondu avec le statut ${response.status}.`);
  }

  const payload = (await response.json()) as UpstashResponse;

  if (command === "get" && payload.result === null) {
    return 0;
  }

  if (
    payload.error ||
    !Number.isSafeInteger(payload.result) ||
    Number(payload.result) < 0
  ) {
    throw new Error("Upstash Redis a renvoyé une réponse invalide.");
  }

  return Number(payload.result);
}
