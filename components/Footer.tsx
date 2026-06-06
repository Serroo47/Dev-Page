import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";

const navItems = [
  { label: "Start", href: "/" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "/kontakt" },
];

const contactItems = [
  {
    value: "serhat.alptekin2802@gmail.com",
    href: "mailto:serhat.alptekin2802@gmail.com",
    icon: "/icons/footer/gmail.svg",
  },
  {
    value: "Serroo47",
    href: "https://github.com/Serroo47",
    icon: "/icons/footer/github.svg",
  },
  {
    value: "Serhat Alptekin",
    href: "https://www.linkedin.com/in/serhat-alptekin-59b223240/",
    icon: "/icons/footer/linkedin.svg",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-6 overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#526dff]/60 to-transparent shadow-[0_0_16px_rgba(82,109,255,0.55)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-9 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.25fr_0.7fr_1fr] lg:gap-12">
          <Reveal direction="up" distance={18}>
            <div>
              <Link
                href="/"
                className="group inline-flex text-xl font-bold tracking-tight text-white"
              >
                SERHAT
                <span className="text-[#7185ff] transition duration-300 group-hover:text-[#91a0ff]">
                  -DEV
                </span>
              </Link>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                Angehender Fachinformatiker für Anwendungsentwicklung mit
                Fokus auf moderne Websites, Web-Apps und verständliche
                Benutzeroberflächen.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                Offen für Austausch und neue Projekte
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={80} distance={18}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fa0ff]">
                Navigation
              </h3>

              <nav className="mt-4 flex flex-col items-start gap-2.5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative text-sm text-slate-400 transition duration-300 hover:text-white"
                  >
                    {item.label}

                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#7185ff] shadow-[0_0_8px_rgba(113,133,255,0.8)] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>
          </Reveal>

          <Reveal direction="up" delay={160} distance={18}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fa0ff]">
                Kontakt & Profile
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                {contactItems.map((item) => (
                  <a
                    key={item.value}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 text-sm text-slate-300 transition duration-300 hover:text-[#91a0ff]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#7185ff] transition duration-300 group-hover:border-[#7185ff]/35 group-hover:bg-[#526dff]/10">
                      <img src={item.icon} alt={item.value} className="h-full w-full object-contain" />
                    </span>

                    <span>{item.value}</span>

                    <span className="ml-auto inline-block text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-[#91a0ff]">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={200} distance={12}>
          <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-slate-500">
            © {currentYear} SERHAT-DEV. Alle Rechte vorbehalten.
          </div>
        </Reveal>
      </div>
    </footer>
  );
}