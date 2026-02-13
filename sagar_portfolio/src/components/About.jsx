export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-kicker">Background</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Engineering mindset with frontend depth and compute-performance rigor.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
        <div className="card space-y-4 text-[color:var(--muted)]">
          <p>
            I am a Frontend Developer with 2+ years of experience and hands-on exposure to
            High-Performance Computing (HPC). I specialize in building scalable React
            applications and optimizing compute-intensive workloads.
          </p>
          <p>
            I have worked on the PARAM Utkarsh supercomputer, where I implemented CUDA and
            OpenMP-based parallel programs and performed CPU/GPU energy profiling using RAPL
            and NVML.
          </p>
          <p>
            My core focus is performance optimization, GPU acceleration, and developing
            responsive, production-ready web systems that scale efficiently.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold">Core Strengths</h3>
          <ul className="mt-4 space-y-2 text-[color:var(--muted)]">
            <li>Scalable frontend architecture</li>
            <li>GPU acceleration and profiling</li>
            <li>Compute-performance optimization</li>
            <li>Production-focused delivery</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
