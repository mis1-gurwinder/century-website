import { sendMail, esc, json } from "./_mail.js";

const PHONE = /^[+\d][\d\s-]{7,}$/;
const EMAIL = /^\S+@\S+\.\S+$/;

export async function onRequestPost({ request, env }) {
  let d;
  try {
    d = await request.json();
  } catch {
    return json({ ok: false, error: "bad request" }, 400);
  }
  const s = (k, max) => String(d[k] ?? "").trim().slice(0, max);
  const name = s("name", 120), phone = s("phone", 30), email = s("email", 160);
  const biz = s("biz", 160), topic = s("topic", 80), msg = s("msg", 2000);

  if (!name) return json({ ok: false, error: "Add your name." }, 400);
  if (!PHONE.test(phone)) return json({ ok: false, error: "Add a phone number with at least 8 digits." }, 400);
  if (email && !EMAIL.test(email)) return json({ ok: false, error: "That email address looks incomplete." }, 400);

  const rows = [
    ["Name", name], ["Phone", phone], ["Email", email || "-"],
    ["Business", biz || "-"], ["Interested in", topic || "-"],
  ];
  const html = `<h2>New website enquiry</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join("")}</table>
    <p style="white-space:pre-wrap">${esc(msg)}</p>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + (msg ? `\n\n${msg}` : "");

  const res = await sendMail(env, {
    subject: `Website enquiry: ${topic || "General"}`,
    html, text,
    replyTo: email || undefined,
  });
  if (!res.ok) return json({ ok: false, error: "We could not send your enquiry. Please call 1800 296 7999." }, 502);
  return json({ ok: true });
}
