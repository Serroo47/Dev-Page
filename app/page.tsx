import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteShell } from "@/components/SiteShell";
import { Tag } from "@/components/Tag";
import {
  AppIcon,
  ArrowIcon,
  StructureIcon,
  WebsiteIcon,
} from "@/components/Icons";

const whatIDo = [
  {
    title: "Websites",
    text: "Moderne, responsive Webseiten mit klarer Struktur.",
    icon: WebsiteIcon,
  },
  {
    title: "Web-Apps",
    text: "Interaktive Anwendungen mit Funktionen und Logik.",
    icon: AppIcon,
  },
  {
    title: "UI & Struktur",
    text: "Saubere Oberflächen und verständlicher Aufbau.",
    icon: StructureIcon,
  },
];

const focusItems = [
  "React",
  "TypeScript",
  "Angular",
  "Tailwind CSS",
  "Git",
  "UI Design",
];

const projectIdeas = [
  {
    title: "Website-Konzepte",
    text: "Ideen und Konzepte für moderne Webseiten.",
  },
  {
    title: "UI-Experimente",
    text: "Design-Experimente und Komponenten zum Üben.",
  },
  {
    title: "Mini-Dashboards",
    text: "Kleine Dashboards mit Daten, Charts und Funktionen.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 pt-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-8 lg:pb-8 lg:pt-14">
          <div>
            <div className="mb-5 inline-flex items-center rounded-lg border border-[#526dff]/25 bg-[#526dff]/10 px-3 py-1.5 text-xs font-medium text-[#aebaff]">
              &lt;/&gt; Angehender Fachinformatiker
            </div>

            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ich entwickle moderne{" "}
              <span className="text-[#526dff]">Websites</span> und{" "}
              <span className="text-[#526dff]">Web-Apps.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Ich bin Serhat, angehender Fachinformatiker für
              Anwendungsentwicklung. Hier zeige ich meine Projekte, Skills und
              meinen Weg als Entwickler.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/projekte">Projekte ansehen →</Button>
              <Button href="/ueber-mich" variant="secondary">
                Über mich
              </Button>
            </div>
          </div>

          <HeroVisual />
        </section>

        {/* Was ich mache */}
        <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
          <SectionTitle title="Was ich mache" />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {whatIDo.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="group p-6">
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#526dff]/25 bg-[#526dff]/10 text-[#6f82ff] shadow-lg shadow-blue-500/10">
                      <Icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>
                    </div>

                    <ArrowIcon className="ml-auto hidden h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-[#8fa0ff] sm:block" />
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Aktueller Fokus */}
        <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
          <SectionTitle title="Aktueller Fokus" />

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {focusItems.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </section>

        {/* Projekte & Ideen */}
        <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
          <SectionTitle title="Projekte & Ideen" />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {projectIdeas.map((project) => (
              <Card key={project.title} className="group overflow-hidden">
                <div className="h-32 border-b border-white/10 bg-gradient-to-br from-indigo-500/20 via-white/[0.03] to-transparent p-4">
                  <div className="h-full rounded-xl border border-white/10 bg-[#070A13]/70 p-4">
                    <div className="mb-3 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/10" />
                    </div>

                    <div className="space-y-2">
                      <div className="h-3 w-2/3 rounded-full bg-indigo-400/50" />
                      <div className="h-3 w-full rounded-full bg-white/10" />
                      <div className="h-3 w-4/5 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {project.text}
                      </p>
                    </div>

                    <span className="ml-auto text-2xl text-slate-500 transition group-hover:translate-x-1 group-hover:text-indigo-300">
                      →
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <Card className="border-indigo-400/30 p-6 shadow-indigo-500/10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-3xl text-indigo-400">
                  ◌
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    Du hast eine Idee oder möchtest dich austauschen?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
                    Ich bin offen für spannende Projekte und neue Kontakte.
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <Button href="/kontakt">Kontakt aufnehmen →</Button>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </SiteShell>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[330px] w-full max-w-[620px] sm:h-[380px] lg:h-[390px]">
      {/* blauer Glow wie im Mockup */}
      <div className="absolute left-[55%] top-[45%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563eb]/25 blur-[90px]" />
      <div className="absolute right-[6%] top-[28%] h-64 w-64 rounded-full bg-[#526dff]/18 blur-[90px]" />

      {/* Browser hinten rechts */}
      <div className="absolute right-[8%] top-0 w-[74%] rounded-[1.55rem] border border-[#6f82ff]/45 bg-[#080d1d]/95 shadow-[0_0_44px_rgba(82,109,255,0.22)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-slate-400/70" />
          <span className="h-3 w-3 rounded-full bg-slate-500/60" />
          <span className="h-3 w-3 rounded-full bg-slate-600/60" />
        </div>

        <div className="p-6">
          <div className="grid grid-cols-[1fr_0.9fr] gap-6">
            <div className="h-24 rounded-xl bg-white/10" />

            <div className="space-y-3 pt-2">
              <div className="h-3 w-full rounded-full bg-white/14" />
              <div className="h-3 w-4/5 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="h-3 w-[82%] rounded-full bg-white/10" />
            <div className="h-3 w-[66%] rounded-full bg-white/10" />
            <div className="h-3 w-[26%] rounded-full bg-[#526dff]" />
          </div>
        </div>
      </div>

      {/* Code Card vorne links */}
      <div className="absolute left-[4%] top-[122px] w-[36%] rounded-[1.35rem] border border-white/15 bg-[#090e1f]/95 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.48)] backdrop-blur">
        <div className="text-[2.35rem] font-bold leading-none text-[#6f82ff]">
          &lt;/&gt;
        </div>

        <div className="mt-5 space-y-3">
          <div className="h-3 w-24 rounded-full bg-[#6f82ff]" />

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            <div className="h-2.5 w-28 rounded-full bg-white/14" />
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            <div className="h-2.5 w-36 rounded-full bg-cyan-300/55" />
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            <div className="h-2.5 w-24 rounded-full bg-[#8090ff]" />
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            <div className="h-2.5 w-32 rounded-full bg-white/14" />
          </div>
        </div>
      </div>

      {/* UI Card vorne rechts */}
      <div className="absolute right-[0%] top-[150px] w-[32%] rounded-[1.35rem] border border-white/15 bg-[#090e1f]/95 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.48)] backdrop-blur">
        <div className="flex gap-4">
          <div className="h-14 w-14 shrink-0 rounded-xl bg-gradient-to-br from-[#526dff] to-[#6d45ff] shadow-lg shadow-blue-500/25" />

          <div className="flex-1 space-y-3 pt-1">
            <div className="h-3 w-full rounded-full bg-white/14" />
            <div className="h-3 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-slate-400/55" />

          <div className="flex-1 space-y-3">
            <div className="h-3 w-3/4 rounded-full bg-white/14" />
            <div className="h-3 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="mt-5 h-9 w-24 rounded-lg bg-gradient-to-r from-[#526dff] to-[#334dff] shadow-lg shadow-blue-500/25" />
      </div>
    </div>
  );
}