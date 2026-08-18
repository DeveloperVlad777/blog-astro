/** Escapes HTML, then converts `**bold**` markers to <strong> tags.
 * Only meant for short, author-controlled strings (e.g. promo copy). */
export function boldToHtml(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
