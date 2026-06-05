const roles = [
  {
    company: "TicketsQue",
    title: "Software Engineer — Full Stack",
    period: "Jun 2023 - May 2026",
    points: [
      "Built end-to-end ticket booking platform using TypeScript, React.js, and Node.js with RESTful APIs and role-based access control",
      "Designed and implemented GraphQL-ready API layer for event data queries, improving client data-fetching efficiency",
      "Integrated Razorpay payment gateway for web and mobile transactions with webhook handling and order reconciliation",
      "Implemented OTP-based authentication flows, user dashboards, and real-time ticket state management using Redux",
      "Optimised app performance via lazy loading, code splitting, and component memoisation, reducing load time by ~30%",
      "Explored AWS S3 for media storage and API Gateway for routing, with infrastructure scripting using Node.js",
      "Integrated AI-assisted features using LLM APIs to automate event description generation and support workflows",
    ],
  },
  {
    company: "Adihptham Private Limited",
    title: "Software Engineer — Frontend / Mobile",
    period: "Jan 2022 - May 2023",
    points: [
      "Developed the E-Amantrana digital invitation platform UI using React Native and TypeScript for cross-platform mobile",
      "Implemented QR-code-based guest entry flow with real-time API calls and offline-tolerant scan handling",
      "Built reusable, accessible component library that cut feature development time by ~25%",
      "Collaborated with backend team to integrate REST APIs for real-time event data, guest lists, and RSVP management",
      "Resolved rendering bottlenecks through component restructuring and FlatList optimisation on React Native",
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
