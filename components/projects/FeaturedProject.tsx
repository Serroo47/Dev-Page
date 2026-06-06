import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/Icons";
import { Card } from "@/components/Card";


const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Responsive Design",
];

export function FeaturedProject() {
  return (
    <Card className="group overflow-hidden border-[#526dff]/25 shadow-[0_0_55px_rgba(82,109,255,0.08)]">
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 bg-[#050816] sm:min-h-[360px] lg:min-h-[500px] lg:border-b-0 lg:border-r">
          <Image
            src="/images/project-previews/websites.png"
            alt="Vorschau der SERHAT-DEV Developer-Website"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03050d]/40 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              In Entwicklung
            </span>

            <span className="text-sm text-slate-500">
              Persönliches Projekt
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            SERHAT-DEV
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            Meine persönliche Developer-Website, auf der ich Projekte,
            technische Fähigkeiten und meinen Weg als angehender
            Fachinformatiker präsentiere.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Entwickelt mit Fokus auf Performance, responsive Gestaltung,
            wiederverwendbare Komponenten und eine klare visuelle Struktur.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/Serroo47/Dev-Page"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#526dff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-[#6f82ff]"
            >
              GitHub ansehen
              <ArrowIcon className="h-4 w-4" />
            </a>

            <Link
                href="/"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-[#7185ff]/35 hover:bg-[#526dff]/10"
                >
                Website öffnen
                <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}