import { motion as Motion } from "framer-motion"
import sagar from "../assets/Swagar.jpg"
import Reveal from "./Reveal"

export default function Hero() {
  const techChips = ["React", "Node.js", "CUDA", "OpenMP", "SLURM", "MongoDB"]

  return (
    <Reveal>
      <section className="section min-h-screen flex items-center pt-28">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center w-full">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-kicker">Portfolio</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Hi, I'm <span className="text-cyan-600 dark:text-cyan-400">Sagar Chavhan</span>
            </h1>
            <h2 className="mt-3 text-xl md:text-2xl font-semibold text-[color:var(--muted)]">
              Frontend Developer & HPC Enthusiast
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)]">
              I build high-performance web applications and parallel computing
              solutions using React, CUDA, and OpenMP.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {techChips.map((chip) => (
                <span key={chip} className="badge">
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-4 md:p-5"
          >
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
              <img src={sagar} alt="Sagar Chavhan" className="w-full h-[430px] object-cover" loading="eager" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="rounded-xl p-3 border border-[var(--border)] bg-[color:var(--surface-strong)]">
                <p className="text-xs uppercase tracking-wide text-[color:var(--muted)]">Experience</p>
                <p className="text-lg font-bold">2+ Years</p>
              </div>
              <div className="rounded-xl p-3 border border-[var(--border)] bg-[color:var(--surface-strong)]">
                <p className="text-xs uppercase tracking-wide text-[color:var(--muted)]">Focus</p>
                <p className="text-lg font-bold">HPC + React</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </Reveal>
  )
}
