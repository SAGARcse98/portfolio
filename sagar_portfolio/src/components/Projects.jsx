const projects = [
  {
    title: "TicketsQue - Event Management Platform",
    description:
      "Developed a full-stack event management and ticket booking platform supporting secure payments and real-time booking workflows.",
    contributions: [
      "Built scalable frontend using React.js",
      "Integrated Razorpay payment gateway with webhook handling",
      "Developed user profile and ticket history modules",
      "Optimized checkout flow for fast and secure transactions",
    ],
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay"],
    links: [
      { label: "Live Demo", href: "https://ticketsque.com/" },
      { label: "GitHub", href: "https://github.com/SAGARcse98" },
    ],
  },
  {
    title: "E-amantrana",
    description:
      "Digital invitation platform enabling guests to access event details via QR code or missed-call system.",
    contributions: [
      "Designed responsive and modular UI using React.js",
      "Implemented QR-based and missed-call guest access workflows",
      "Developed reusable Redux-based components for scalability",
      "Integrated REST APIs for real-time event data rendering",
      "Improved cross-browser compatibility and mobile performance",
    ],
    techStack: ["React.js", "Redux", "REST APIs", "QR Access", "Responsive UI"],
  },
  {
    title: "Monitoring CPU & GPU Power Consumption using RAPL",
    description:
      "Performed energy profiling and performance analysis on PARAM Utkarsh supercomputer using CUDA, OpenMP, and RAPL interfaces.",
    contributions: [
      "Measured CPU/GPU energy consumption under workloads",
      "Developed CUDA-based parallel programs",
      "Applied OpenMP and MPI for multithreading",
      "Implemented SLURM job scheduling",
      "Used NVIDIA NVML for GPU monitoring",
      "Automated HPC workflows using Python and Linux",
    ],
    techStack: ["CUDA", "OpenMP", "MPI", "SLURM", "RAPL", "NVML"],
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-kicker">Build Portfolio</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`card group transition-all duration-300 hover:-translate-y-2 ${
              project.featured ? "ring-1 ring-cyan-400/60" : ""
            }`}
          >
            <h3 className="text-xl md:text-2xl font-extrabold leading-snug">{project.title}</h3>
            <p className="mt-3 text-[color:var(--muted)]">{project.description}</p>

            <div className="mt-4">
              <h4 className="font-bold">Key Contributions</h4>
              <ul className="list-disc ml-5 mt-2 space-y-1.5 text-[color:var(--muted)]">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>

            {project.links ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} className="btn-primary" target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
