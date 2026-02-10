import { FaReact, FaNodeJs, FaLinux, FaDatabase } from "react-icons/fa"
import { SiMongodb, SiJavascript, SiPython, SiNextdotjs, SiRedux, SiRazorpay} from "react-icons/si"

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <FaLinux />, name: "Linux" },
  { icon: <FaDatabase />, name: "Database" },
  { icon: <SiNextdotjs />, name: "Next" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiRazorpay />, name: "Razorpay" },
  
  
]

export default function Skills() {
  return (
    <section className="section">
      <h2 className="section-title">Tech Stack</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {skills.map(skill => (
          <div key={skill.name} className="card">
            <div className="text-4xl mb-2" style={{ color: "var(--accent)" }}>
              {skill.icon}
            </div>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}







// const skills = [
//   "ReactJS", "NextJS", "JavaScript", "Node.js", "MongoDB",
//   "Redux", "Context API", "Python", "CUDA", "OpenMP",
//   "MPI", "REST APIs", "Razorpay", "Linux"
// ]

// export default function Skills() {
//   return (
//     <section id="skills" className="section">
//       <h2 className="section-title">Skills</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {skills.map(skill => (
//           <div key={skill} className="card text-center">
//             {skill}
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }



// const skills = [
//   "ReactJS", "NextJS", "JavaScript (ES6)", "Node.js", "MongoDB",
//   "Redux", "Context API", "Python", "CUDA", "OpenMP", "MPI",
//   "REST APIs", "Razorpay", "Linux"
// ];

// export default function Skills() {
//   return (
//     <section className="py-20 px-6">
//       <h2 className="section-title">Skills</h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
//         {skills.map((skill) => (
//           <div
//             key={skill}
//             className="p-4 rounded-xl bg-white shadow-md hover:scale-105 transition"
//           >
//             {skill}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
