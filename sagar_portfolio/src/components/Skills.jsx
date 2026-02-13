const skillGroups = [
  {
    title: "Programming",
    items: ["C", "C++", "Python", "JavaScript (ES6)", "Shell Scripting"],
  },
  {
    title: "HPC & Parallel Computing",
    items: [
      "CUDA",
      "OpenMP",
      "MPI",
      "SLURM",
      "RAPL",
      "NVML",
      "Parallel Computing",
      "Multithreading",
      "GPU Acceleration",
      "Performance Optimization",
    ],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Context API", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    items: ["Linux", "Git", "GitHub", "Debugging", "Profiling", "MongoDB"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span className="section-kicker">Capability Matrix</span>
        <h2 className="section-title">Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {skillGroups.map((group) => (
          <article key={group.title} className="card">
            <h3 className="text-xl font-bold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
