import { put } from "@vercel/blob"
import { timingSafeEqual } from "node:crypto"

const MAX_BYTES = 4 * 1024 * 1024 // Vercel functions cap request bodies at ~4.5 MB

export const config = { api: { bodyParser: false } }

function safeEqual(a, b) {
  const x = Buffer.from(String(a))
  const y = Buffer.from(String(b))
  return x.length === y.length && timingSafeEqual(x, y)
}

async function readBody(req) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > MAX_BYTES) throw new Error("too_large")
    chunks.push(chunk)
  }
  return Buffer.concat(chunks)
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })

  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return res.status(500).json({ error: "ADMIN_PASSWORD is not configured" })
  if (!safeEqual(req.headers["x-admin-password"] || "", expected)) {
    return res.status(401).json({ error: "Wrong password" })
  }

  let body
  try {
    body = await readBody(req)
  } catch {
    return res.status(413).json({ error: "File too large (max 4 MB)" })
  }

  if (body.length < 5 || body.subarray(0, 5).toString() !== "%PDF-") {
    return res.status(400).json({ error: "File is not a valid PDF" })
  }

  const blob = await put("resume.pdf", body, {
    access: "public",
    contentType: "application/pdf",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  })

  return res.status(200).json({ ok: true, url: blob.url })
}

