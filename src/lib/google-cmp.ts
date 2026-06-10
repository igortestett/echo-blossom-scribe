declare global {
  interface Window {
    googlefc?: {
      callbackQueue: Array<Record<string, () => void>>;
    };
  }
}

/** Sinaliza ao Google que o site usa a CMP (Funding Choices / Privacy & messaging). */
export function signalGoogleCmpPresent(): void {
  if (typeof document === "undefined") return;
  if (document.querySelector('iframe[name="googlefcPresent"]')) return;

  const iframe = document.createElement("iframe");
  iframe.style.cssText =
    "width:0;height:0;border:none;position:absolute;left:-1000px;top:-1000px;z-index:-1000;";
  iframe.name = "googlefcPresent";
  iframe.title = "Google CMP";
  iframe.setAttribute("aria-hidden", "true");
  document.body.appendChild(iframe);
}

/** Reabre o painel "Gerenciar opções" da CMP do Google. */
export function openGooglePrivacySettings(): void {
  window.googlefc = window.googlefc || { callbackQueue: [] };
  window.googlefc.callbackQueue.push({
    OPEN_PRIVACY_SETTINGS: () => {},
  });
}
