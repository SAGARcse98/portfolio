import { motion } from "framer-motion"
import sagar from "../assets/sagar.jpg"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* IMAGE SIDE (merged with background) */}
      <div className="absolute inset-0 grid md:grid-cols-2">
        
        {/* Left empty space (background only) */}
        <div />

        {/* Right image with soft overlays */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sagar})` }}
          />

          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l 
            from-transparent 
            via-[rgba(246,243,239,0.6)] 
            to-[var(--bg)] 
            dark:via-[rgba(11,18,32,0.6)]" />

          {/* Blur fade to merge */}
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 section min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m{" "}
            <span style={{ color: "black" }}>
              Sagar Chavhan
            </span>
          </h1>

          <p className="mt-6 text-lg opacity-90">
            React.js Developer with 2+ years of experience building
            scalable, high-performance web applications with exposure
            to AI/ML & HPC.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-current px-6 py-3 rounded-full font-semibold"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}














// import { motion } from "framer-motion"
// import sagar from "../assets/Swagar.jpg"

// export default function Hero() {
//   return (
//     <section className="section min-h-screen flex items-center gap-10 flex-col md:flex-row">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-5xl font-bold">
//           Hi, I’m <span style={{ color: "var(--accent)" }}>Sagar</span>
//         </h1>

//         <p className="mt-4 max-w-xl">
//           React Developer with 2+ years experience building scalable apps.
//         </p>

//         <div className="mt-6 flex gap-4">
//           <a href="#contact" className="btn-primary">Hire Me</a>
//           <a href="/resume.pdf" download className="border px-6 py-3 rounded-full">
//             Download Resume
//           </a>
//         </div>
//       </motion.div>

//       <motion.img
//         src={sagar}
//         alt="Sagar"
//         className="w-64 h-64 rounded-full"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//       />
//     </section>
//   )
// }





// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6">
      
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold">
//           Hi, I’m <span className="text-indigo-600">Sagar Chavhan</span>
//         </h1>

//         <p className="mt-4 text-lg max-w-xl">
//           React.js Developer with 2+ years of experience building scalable,
//           responsive web applications with strong exposure to AI/ML & HPC.
//         </p>

//         <div className="mt-6 flex gap-4">
//           <a href="#projects" className="btn-primary">View Projects</a>
//           <a href="#contact" className="btn-secondary">Contact Me</a>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="rounded-full overflow-hidden shadow-xl"
//       >
//         <Image
//           src="/sagar.jpg"
//           alt="Sagar Chavhan"
//           width={280}
//           height={280}
//           className="rounded-full"
//         />
//       </motion.div>
//     </section>
//   );
// }
