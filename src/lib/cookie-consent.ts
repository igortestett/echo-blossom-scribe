export type ConsentChoice = "accepted" | "rejected";

const STORAGE_KEY = "cc-cookie-consent";
export const CONSENT_EVENT = "cc-cookie-consent-changed";

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(STORAGE_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function hasAdConsent(): boolean {
  return getStoredConsent() === "accepted";
}

export function setStoredConsent(choice: ConsentChoice): void {
  localStorage.setItem(STORAGE_KEY, choice);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
