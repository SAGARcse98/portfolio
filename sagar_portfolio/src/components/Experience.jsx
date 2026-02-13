const roles = [
  {
    company: "TicketsQue",
    title: "Software Engineer",
    period: "Jun 2023 - Aug 2024",
    points: [
      "Implemented OTP-based authentication and account flows",
      "Integrated Razorpay payments and booking transaction handling",
      "Delivered scalable React, Node.js, and MongoDB features",
    ],
  },
  {
    company: "Adihptham Technology",
    title: "Frontend Developer",
    period: "Jan 2022 - May 2023",
    points: [
      "Built UI modules for the E-amantrana digital invitation platform",
      "Implemented QR and missed-call based event access journeys",
      "Developed reusable Redux-driven UI components",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-kicker">Career</span>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="space-y-5">
        {roles.map((role) => (
          <article key={role.company} className="card">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold">{role.title}</h3>
                <p className="text-[color:var(--muted)]">{role.company}</p>
              </div>
              <span className="badge">{role.period}</span>
            </div>

            <ul className="mt-4 list-disc ml-5 space-y-1.5 text-[color:var(--muted)]">
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
