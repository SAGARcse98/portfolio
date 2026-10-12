import { get } from "@vercel/blob"

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate")
  try {
    const result = await get("resume.pdf", { access: "private" })
    if (!result || !result.stream) {
      return res.redirect(302, "/SagarChavhan_RESUME_2026.pdf")
    }

    res.setHeader("Content-Type", "application/pdf")
    res.setHeader("Content-Disposition", 'inline; filename="SagarChavhan_Resume.pdf"')
    if (result.blob.size) {
      res.setHeader("Content-Length", result.blob.size)
    }

    // Pipe the private stream directly to the response
    const reader = result.stream.getReader()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      res.write(value)
    }
    return res.end()
  } catch (err) {
    console.error("Failed to fetch private resume from blob:", err)
    return res.redirect(302, "/SagarChavhan_RESUME_2026.pdf")
  }
}

