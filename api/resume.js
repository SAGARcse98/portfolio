import { getDownloadUrl } from "@vercel/blob"

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store")
  try {
    const downloadUrl = await getDownloadUrl("resume.pdf")
    return res.redirect(302, downloadUrl)
  } catch {
    // Nothing uploaded yet (or Blob not configured): use the bundled resume
    return res.redirect(302, "/SagarChavhan_RESUME_2026.pdf")
  }
}

