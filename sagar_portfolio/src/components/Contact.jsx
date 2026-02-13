import { useState } from "react"
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi"

export default function Contact() {
  const [status, setStatus] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const message = String(formData.get("message") || "").trim()
    const recipients = "sagarsc01@gmail.com,cse.sagarchavhan@gmail.com"
    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Website Visitor"}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`
    setStatus("Opening your mail app with a prefilled message to both email IDs.")
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <span className="section-kicker">Connect</span>
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let's discuss frontend, HPC, and performance-focused roles.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="card">
          <h3 className="text-lg font-bold">Direct Contact</h3>
          <div className="mt-4 space-y-3">
            <p className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-cyan-600 dark:text-cyan-400" />
              <span>
                <strong>Location:</strong> Bengaluru, India
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FiMail className="mt-1 text-cyan-600 dark:text-cyan-400" />
              <span>
                <strong>Email:</strong> <a href="mailto:sagarsc01@gmail.com">sagarsc01@gmail.com</a>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FiMail className="mt-1 text-cyan-600 dark:text-cyan-400" />
              <span>
                <strong>Alternate Email:</strong>{" "}
                <a href="mailto:cse.sagarchavhan@gmail.com">cse.sagarchavhan@gmail.com</a>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FiPhone className="mt-1 text-cyan-600 dark:text-cyan-400" />
              <span>
                <strong>Phone:</strong> <a href="tel:+917795905230">7795905230</a>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FiLinkedin className="mt-1 text-cyan-600 dark:text-cyan-400" />
              <span>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/in/sagar-chavhan-a423b0151"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/sagar-chavhan-a423b0151
                </a>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FiGithub className="mt-1 text-cyan-600 dark:text-cyan-400" />
              <span>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/SAGARcse98" target="_blank" rel="noreferrer">
                  github.com/SAGARcse98
                </a>
              </span>
            </p>
          </div>
        </div>

        <form className="card space-y-3" onSubmit={handleSubmit}>
          <h3 className="text-lg font-bold">Quick Message</h3>
          <p className="text-sm text-[color:var(--muted)]">
            Clicking Send Message opens your email app and sends this to both email IDs.
          </p>
          <input type="text" name="name" placeholder="Your Name" className="field" required />
          <input type="email" name="email" placeholder="Your Email" className="field" required />
          <textarea name="message" rows="5" placeholder="Your Message" className="field" required />
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Send Message
          </button>
          {status ? <p className="text-sm text-cyan-700 dark:text-cyan-300">{status}</p> : null}
        </form>
      </div>
    </section>
  )
}
