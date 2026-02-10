export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="font-bold">TicketsQue</h3>
          <p>Event booking platform with payments & profiles.</p>
        </div>

        <div className="card">
          <h3 className="font-bold">E-amantrana</h3>
          <p>Digital wedding & event invitation system.</p>
        </div>

        <div className="card">
          <h3 className="font-bold">CPU/GPU Power Monitoring</h3>
          <p>HPC project using CUDA, RAPL & NVML.</p>
        </div>
      </div>
    </section>
  )
}
