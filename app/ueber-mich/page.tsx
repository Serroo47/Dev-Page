import type { Metadata } from "next";
import Image from "next/image";

import { Card } from "@/components/Card";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/animation/Reveal";
import { StaggerGroup } from "@/components/animation/StaggerGroup";

export const metadata: Metadata = {
  title: "Über mich | Serhat Alptekin",
  description:
    "Mehr über Serhat Alptekin, seinen Weg als angehender Fachinformatiker und seinen Fokus in der Webentwicklung.",
};

const workSteps = [
  {
    number: "01",
    title: "Verstehen",
    text: "Ich kläre zuerst das Ziel, die Anforderungen und das eigentliche Problem.",
  },
  {
    number: "02",
    title: "Strukturieren",
    text: "Danach plane ich Aufbau, Komponenten und die sinnvolle Reihenfolge der Umsetzung.",
  },
  {
    number: "03",
    title: "Umsetzen",
    text: "Anschließend entwickle, teste und verbessere ich die Lösung Schritt für Schritt.",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Frameworks und Sprachen für moderne Webanwendungen.",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
    ],
  },
  {
    title: "Styling & UI",
    description: "Responsive Oberflächen mit klarer visueller Struktur.",
    skills: [
      "Tailwind CSS",
      "CSS",
      "SCSS",
      "Responsive Design",
      "UI-Grundlagen",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Werkzeuge für Entwicklung, Versionierung und Qualität.",
    skills: [
      "Git & GitHub",
      "Docker",
      "VS Code",
      "Figma",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: "Weitere Kenntnisse",
    description: "Bereiche, in denen ich arbeite und mich weiterentwickle.",
    skills: [
      "REST APIs",
      "SQL",
      "Testing",
      "Performance",
      "UX & Struktur",
    ],
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        {/* Intro */}
        <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 pb-10 pt-8 sm:px-6 sm:pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:pb-14 lg:pt-14">
          <div>
            <Reveal direction="up" delay={50} distance={18}>
              <div className="mb-5 inline-flex items-center rounded-lg border border-[#526dff]/25 bg-[#526dff]/10 px-3 py-1.5 text-xs font-medium text-[#aebaff]">
                &lt;/&gt; Persönlichkeit & Entwicklung
              </div>
            </Reveal>

            <Reveal direction="up" delay={130} distance={22}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Über <span className="text-[#526dff]">mich.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={210} distance={18}>
              <p className="mt-5 text-base font-medium leading-7 text-[#aebaff] sm:text-lg">
                Wer ich bin, was mich antreibt und woran ich arbeite.
              </p>
            </Reveal>

            <Reveal direction="up" delay={290} distance={18}>
              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                <p>
                  Ich bin Serhat, angehender Fachinformatiker für
                  Anwendungsentwicklung. Mich begeistert die Verbindung aus
                  Technik, Gestaltung und der Möglichkeit, aus einer Idee eine
                  funktionierende Anwendung entstehen zu lassen.
                </p>

                <p>
                  Bei meinen Projekten geht es mir nicht nur darum, dass etwas
                  funktioniert. Eine verständliche Struktur, eine saubere
                  Umsetzung und eine Oberfläche, die sich natürlich bedienen
                  lässt, gehören für mich genauso dazu.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal
            direction="left"
            delay={200}
            duration={850}
            distance={36}
            className="w-full"
          >
            <PortraitCard />
          </Reveal>
        </section>

        {/* Arbeitsweise */}
        <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <Reveal direction="up" distance={18}>
            <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fa0ff]">
                Meine Arbeitsweise
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Von der Idee zur Umsetzung
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Ich arbeite strukturiert und versuche, Probleme zuerst zu verstehen,
                bevor ich mit der eigentlichen Umsetzung beginne.
            </p>
            </div>
        </Reveal>

        <StaggerGroup
            className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] md:grid md:grid-cols-3"
            itemClassName="h-full"
            delay={100}
            staggerDelay={100}
        >
            {workSteps.map((step, index) => (
            <div
                key={step.number}
                className={`h-full p-6 sm:p-7 ${
                index !== workSteps.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }`}
            >
                <h3 className="mt-3 text-lg font-semibold text-white">
                {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                {step.text}
                </p>
            </div>
            ))}
        </StaggerGroup>
        </section>

    {/* Technologien und Fähigkeiten */}
        <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
            <Reveal direction="up" distance={18}>
            <div className="max-w-md">
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Technologien & Fähigkeiten
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Eine Auswahl der Technologien und Werkzeuge, die ich in meinen
                Projekten einsetze oder aktuell weiter vertiefe.
                </p>

                <div className="mt-6 h-px w-20 bg-[#526dff]" />

                <p className="mt-6 text-sm leading-6 text-slate-500">
                Mein Fokus liegt nicht darauf, möglichst viele Technologien
                aufzuzählen, sondern sie sinnvoll und passend zum jeweiligen Projekt
                einzusetzen.
                </p>
            </div>
            </Reveal>

            <Reveal
            direction="up"
            delay={100}
            duration={750}
            distance={24}
            >
            <Card className="overflow-hidden p-0">
                <div className="grid sm:grid-cols-2">
                {skillGroups.map((group, index) => (
                    <div
                    key={group.title}
                    className={`p-5 sm:p-6 ${
                        index < 2 ? "border-b border-white/10" : ""
                    } ${
                        index % 2 === 0
                        ? "sm:border-r sm:border-white/10"
                        : ""
                    }`}
                    >
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#526dff]/25 bg-[#526dff]/10 text-xs font-semibold text-[#8fa0ff]">
                        {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="font-semibold text-white">
                        {group.title}
                        </h3>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                        {group.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 hover:border-[#7185ff]/30 hover:bg-[#526dff]/10 hover:text-white"
                        >
                            {skill}
                        </span>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </Card>
            </Reveal>
        </div>
        </section>
      </main>
    </SiteShell>
  );
}

function PortraitCard() {
  return (
    <Card className="relative mx-auto w-full max-w-[360px] overflow-hidden border-[#526dff]/20 p-3 shadow-[0_0_35px_rgba(82,109,255,0.08)] sm:p-4 lg:ml-auto">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#526dff]/12 blur-[70px]" />

      <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl border border-white/10 bg-[#080d1d]">
        <Image
          src="/images/about/serhat-portrait.jpeg"
          alt="Porträt von Serhat Alptekin"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 360px"
          className="object-cover object-[center_22%]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03050d]/45 via-transparent to-transparent" />
      </div>
    </Card>
  );
}