import { motion as Motion } from "framer-motion"

export default function Reveal({ children }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  )
}
