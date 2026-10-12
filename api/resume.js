import { head } from "@vercel/blob"

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store")
  try {
    const blob = await head("resume.pdf")
    return res.redirect(302, blob.url)
  } catch {
    // Nothing uploaded yet (or Blob not configured): use the bundled resume
    return res.redirect(302, "/SagarChavhan_RESUME_2026.pdf")
  }
}

