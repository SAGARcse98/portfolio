export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-header">
        <span className="section-kicker">Academic</span>
        <h2 className="section-title">Education</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <article className="card">
          <h3 className="text-lg font-bold">PG Advanced Certificate (HPC and AI/ML)</h3>
          <p className="mt-2 text-[color:var(--muted)]">CDAC Bengaluru</p>
        </article>

        <article className="card">
          <h3 className="text-lg font-bold">B.Tech in Computer Science and Engineering</h3>
          <p className="mt-2 text-[color:var(--muted)]">Reva University (2020)</p>
        </article>
      </div>
    </section>
  )
}
