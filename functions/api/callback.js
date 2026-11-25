import { sendMail, esc, json } from "./_mail.js";

const PHONE = /^[+\d][\d\s-]{7,}$/;

export async function onRequestPost({ request, env }) {
  let d;
  try {
    d = await request.json();
  } catch {
    return json({ ok: false, error: "bad request" }, 400);
  }
  const phone = String(d.phone ?? "").trim().slice(0, 30);
  if (!PHONE.test(phone)) return json({ ok: false, error: "Enter a phone number with at least 8 digits." }, 400);

  const res = await sendMail(env, {
    subject: "Call-back request from website",
    html: `<p>Please call back: <b>${esc(phone)}</b></p>`,
    text: `Please call back: ${phone}`,
  });
  if (!res.ok) return json({ ok: false, error: "We could not send your request. Please call 1800 296 7999." }, 502);
  return json({ ok: true });
}
