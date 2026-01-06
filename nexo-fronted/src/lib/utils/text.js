export function normalizeText(text) {
  return text.normalize("NFD").replace(/[^\w\s]/g, "").toLowerCase();
}
