export default function LookingFor() {
  const opportunities = [
    "Full Stack Development",
    "Mobile Development",
    "Backend Development",
    "Frontend Development",
    "Data Scientist / Data Engineer",
    "AI/ML Engineering",
    "HPC & Parallel Programming",
    "Performance Engineering",
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
