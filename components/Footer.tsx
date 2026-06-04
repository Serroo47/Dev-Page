import Link from "next/link";

const navItems = [
  { label: "Start", href: "/" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              SERHAT<span className="text-indigo-400">.DEV</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Angehender Fachinformatiker für Anwendungsentwicklung mit
              Leidenschaft für sauberen Code und gutes Design.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Kontakt</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="mailto:hallo@serhat.dev" className="block transition hover:text-white">
                hallo@serhat.dev
              </a>
              <a href="#" className="block transition hover:text-white">
                github.com/serhat-dev
              </a>
              <a href="#" className="block transition hover:text-white">
                linkedin.com/in/serhat-dev
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2025 SERHAT.DEV · Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}