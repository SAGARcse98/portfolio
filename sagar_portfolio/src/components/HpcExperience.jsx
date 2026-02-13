export default function HpcExperience() {
  const highlights = [
    "Worked on PARAM Utkarsh Supercomputer environment",
    "Implemented CUDA-based GPU acceleration programs",
    "Applied OpenMP and MPI for multithreaded CPU execution",
    "Used SLURM for HPC job scheduling and workload management",
    "Performed CPU/GPU power profiling using Intel RAPL and NVIDIA NVML",
    "Automated experiment workflows using Linux shell scripting and Python",
  ]

  return (
    <section id="hpc-experience" className="section">
      <div className="section-header">
        <span className="section-kicker">Differentiator</span>
        <h2 className="section-title">HPC Experience</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {highlights.map((item) => (
          <div key={item} className="card">
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
