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
            I am a Full Stack Engineer with 4+ years of experience building scalable web and mobile applications. Proficient in TypeScript, 
React, Node.js, and GraphQL with hands-on exposure to AWS services (Lambda, S3, EC2, API Gateway). Experienced 
integrating AI/LLM APIs into production workflows and delivering end-to-end features including authentication, payment 
systems, and QR-based access control. Skilled in HPC and parallel programming (CUDA, OpenMP, MPI).
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
            <li>Full Stack Development (React, Node.js, TypeScript)</li>
            <li>Performance Optimization & Scalability</li>
            <li>HPC & GPU Programming (CUDA, OpenMP, MPI)</li>
            <li>API Design & Integration (GraphQL, REST, LLM APIs)</li>
            <li>Payment Systems & Authentication</li>
            <li>Real-time Features & State Management</li>
            <li>Mobile Development (React Native)</li>
            <li>AWS Cloud Services</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
