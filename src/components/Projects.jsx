const projects = [
  {
    title: "ExamVault — Banking & SSC Exam Preparation Platform",
    description:
      "Full-stack exam preparation platform serving thousands of Banking & SSC aspirants with video lectures, comprehensive notes, formula sheets, mock tests, and smart tools for IBPS, SBI, and SSC exams. Features progress tracking, favorites management, and admin content management system.",
    contributions: [
      "Architected full-stack platform using React.js with TypeScript and Next.js for performance",
      "Built topic-wise video lecture modules with progress tracking and favorites system",
      "Implemented categorized notes with PDF viewer, download capability, and offline access",
      "Created formulas & tricks quick-access sheets with memory tips by topic",
      "Developed smart calculator tool with table generator, squares, cubes, and power calculations",
      "Built admin management system with full content management and user analytics",
      "Implemented authentication, user dashboards, and progress tracking across 5 exam subjects",
      "Optimized performance for high concurrent user loads with lazy loading and caching",
      "Deployed on Vercel with CI/CD pipeline for continuous delivery",
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs", "Vercel"],
    links: [
      { label: "Live Demo", href: "https://examvault-six.vercel.app/" },
    ],
    featured: true,
  },
  {
    title: "TicketsQue — Event Management & Ticket Booking Platform",
    description:
      "Full-stack SaaS platform for event management and ticket booking with secure payments, real-time state management, and role-based access control. Serves multiple event organizers with scalable infrastructure and AI-assisted workflows.",
    contributions: [
      "Built end-to-end ticket booking platform using TypeScript, React.js, and Node.js with RESTful APIs",
      "Designed and implemented GraphQL-ready API layer for event data queries, improving client data-fetching efficiency",
      "Integrated Razorpay payment gateway for web and mobile transactions with webhook handling and order reconciliation",
      "Implemented OTP-based authentication flows, user dashboards, and real-time ticket state management using Redux",
      "Optimized app performance via lazy loading, code splitting, and component memoization, reducing load time by ~30%",
      "Explored AWS S3 for media storage and API Gateway for routing with infrastructure scripting using Node.js",
      "Integrated AI-assisted features using LLM APIs to automate event description generation and support workflows",
      "Implemented role-based access control for admins, organizers, and users",
    ],
    techStack: ["React.js", "Node.js", "Express", "TypeScript", "MongoDB", "GraphQL", "REST APIs", "Razorpay", "Redux", "AWS S3", "AWS API Gateway", "OpenAI API", "Vercel"],
    links: [
      { label: "Live Demo", href: "https://ticketsque.com/" },
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
