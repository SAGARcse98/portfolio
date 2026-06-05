import { useEffect, useMemo, useState } from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#about")
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme")
    if (stored) return stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""))

    function onScroll() {
      const offset = window.scrollY + 140
      let current = "#about"

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= offset) {
          current = `#${id}`
        }
      }

      setActiveLink((prev) => (prev === current ? prev : current))
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const themeLabel = useMemo(() => (theme === "dark" ? "Light" : "Dark"), [theme])

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    localStorage.setItem("theme", nextTheme)
  }

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[var(--border)] bg-[color:var(--surface)]/95 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <a href="#" className="font-extrabold tracking-tight text-lg">
          Sagar Chavhan
        </a>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition ${
                activeLink === link.href
                  ? "bg-sky-500/18 text-sky-600 dark:text-sky-300"
                  : "hover:bg-slate-200/50 dark:hover:bg-slate-800/60"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button type="button" onClick={toggleTheme} className="btn-secondary text-sm" aria-label="Toggle dark mode">
            {themeLabel}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button type="button" onClick={toggleTheme} className="btn-secondary text-xs" aria-label="Toggle dark mode">
            {themeLabel}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="btn-secondary text-xs"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="md:hidden border-t border-[var(--border)] px-4 py-3 bg-[color:var(--surface-strong)]">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold ${
                  activeLink === link.href ? "bg-sky-500/18 text-sky-700 dark:text-sky-300" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
