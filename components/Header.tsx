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
                  className={`group relative py-2 text-sm font-medium transition duration-300 ${
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
          {navItems.map((item, index) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                style={{
                  transitionDelay: menuOpen
                    ? `${120 + index * 60}ms`
                    : "0ms",
                }}
                className={`group relative flex items-center justify-between overflow-hidden rounded-2xl border px-5 py-4 text-base font-medium transition-all duration-500 ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                } ${
                  active
                    ? "border-[#7185ff]/30 bg-[#526dff]/12 text-[#b8c2ff] shadow-[0_0_28px_rgba(82,109,255,0.1)]"
                    : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span>{item.label}</span>

                <span
                  className={`text-xl transition duration-300 group-hover:translate-x-1 ${
                    active ? "text-[#8fa0ff]" : "text-slate-600"
                  }`}
                >
                  →
                </span>

                {active && (
                  <>
                    <span className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#7185ff] to-transparent shadow-[0_0_12px_rgba(113,133,255,0.8)]" />
                    <span className="absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-full bg-[#7185ff] shadow-[0_0_12px_rgba(113,133,255,0.9)]" />
                  </>
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