"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Start", href: "/" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            SERHAT<span className="text-[#7185ff]">-DEV</span>
          </Link>

          {/* Desktop-Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-2 text-[15px] font-semibold tracking-[0.01em] transition duration-300 ${
                    active
                      ? "text-[#aebaff] drop-shadow-[0_0_10px_rgba(113,133,255,0.75)]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 rounded-full bg-gradient-to-r from-[#526dff] via-[#8b9aff] to-[#526dff] shadow-[0_0_12px_rgba(82,109,255,0.9)] transition-all duration-500 ${
                      active
                        ? "w-full scale-x-100 opacity-100"
                        : "w-0 scale-x-0 opacity-0 group-hover:w-full group-hover:scale-x-100 group-hover:opacity-60"
                    }`}
                  />

                  {active && (
                    <span className="absolute inset-x-0 -bottom-2 mx-auto h-3 w-full animate-nav-glow rounded-full bg-[#526dff]/20 blur-md" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Burger-Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition duration-300 hover:border-[#7185ff]/40 hover:bg-[#526dff]/10 md:hidden"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "top-2.5 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "top-2.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Abdunkelung */}
      <button
        type="button"
        aria-label="Menü schließen"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[55] bg-black/65 backdrop-blur-[3px] transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Rechtes Off-Canvas-Menü */}
      <aside
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-[82%] max-w-[360px] flex-col border-l border-white/10 bg-[#070a18]/95 shadow-[-24px_0_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center border-b border-white/10 px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fa0ff]">
            Navigation
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-2 px-5 py-6">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-[15px] font-semibold tracking-[0.01em] transition-all duration-200 ${
                  active
                    ? "bg-white/[0.07] text-white"
                    : "text-slate-400 hover:bg-white/[0.045] hover:text-slate-100"
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-px rounded-full bg-white/45" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-6 py-6">
          <p className="text-sm leading-6 text-slate-500">
            Moderne Websites, Web-Apps und digitale Ideen.
          </p>
        </div>
      </aside>
    </>
  );
}