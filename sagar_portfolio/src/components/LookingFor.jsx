export default function LookingFor() {
  const opportunities = [
    "High Performance Computing (HPC)",
    "Performance Engineering",
    "Frontend Development",
    "Systems Programming",
  ]

  return (
    <section id="looking-for" className="section">
      <div className="section-header">
        <span className="section-kicker">Open Roles</span>
        <h2 className="section-title">What I'm Looking For</h2>
        <p className="section-subtitle">Actively seeking opportunities in these domains.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {opportunities.map((item) => (
          <div key={item} className="card font-medium">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
