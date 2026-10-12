import { useState } from "react"

export default function Admin() {
  const [password, setPassword] = useState("")
  const [file, setFile] = useState(null)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    if (!file) return
    if (file.type !== "application/pdf") {
      setMessage({ ok: false, text: "Please choose a PDF file." })
      return
    }
    setBusy(true)
    setMessage(null)
    try {
      const res = await fetch("/api/upload-resume", {
        method: "POST",
        headers: { "x-admin-password": password, "content-type": "application/pdf" },
        body: file,
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || `Upload failed (${res.status})`)
      setMessage({ ok: true, text: "Resume updated. The Download Resume button now serves this file." })
      setFile(null)
      event.currentTarget.reset()
    } catch (err) {
      setMessage({ ok: false, text: err.message })
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="section min-h-screen flex items-center justify-center">
      <form className="card space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-extrabold">Admin — Upload Resume</h1>
        <input
          type="password"
          placeholder="Admin password"
          className="field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        <input
          type="file"
          accept="application/pdf"
          className="field"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
        />
        <div className="flex gap-3 items-center">
          <button type="submit" className="btn-primary" disabled={busy}>
            {busy ? "Uploading..." : "Upload Resume"}
          </button>
          <a href="/api/resume" target="_blank" rel="noreferrer" className="btn-secondary">
            View current
          </a>
        </div>
        {message ? (
          <p className={`text-sm ${message.ok ? "text-green-600" : "text-red-500"}`}>{message.text}</p>
        ) : null}
      </form>
    </main>
  )
}

