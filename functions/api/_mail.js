// Sends one email through Resend. The API key comes from the Cloudflare
// environment variable RESEND_API_KEY (never stored in the repo).
export const TO = "century@thecentury.in";
export const FROM = "Century Website <website@thecentury.in>";

export const esc = (v) =>
  String(v ?? "-").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export async function sendMail(env, { subject, html, text, replyTo }) {
  if (!env.RESEND_API_KEY) return { ok: false, status: 500, error: "mail not configured" };
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      subject,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  return { ok: r.ok, status: r.status };
}

export const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
