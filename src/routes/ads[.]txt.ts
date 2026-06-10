import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getPublisherIdForAdsTxt } from "@/lib/adsense";

function getRuntimeClientId(): string | null {
  return process.env.VITE_ADSENSE_CLIENT_ID?.trim() || null;
}

export const Route = createFileRoute("/ads.txt")({
  server: {
    handlers: {
      GET: async () => {
        const clientId = getRuntimeClientId();
        const publisherId = clientId ? getPublisherIdForAdsTxt(clientId) : null;

        if (!publisherId) {
          return new Response("Not found", { status: 404 });
        }

        return new Response(`google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
