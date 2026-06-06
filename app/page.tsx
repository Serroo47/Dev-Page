import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteShell } from "@/components/SiteShell";
import {
  AppIcon,
  ArrowIcon,
  StructureIcon,
  WebsiteIcon,
  ChatIcon
} from "@/components/Icons";
import { FocusMarquee } from "@/components/FocusMarquee";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";
import { StaggerGroup } from "@/components/animation/StaggerGroup";

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

const projectIdeas = [
  {
    title: "Website-Konzepte",
    text: "Ideen und Konzepte für moderne Webseiten.",
    image: "/images/project-previews/concept.png",
  },
  {
    title: "UI-Experimente",
    text: "Design-Experimente und Komponenten zum Üben.",
    image: "/images/project-previews/ui.png",
  },
  {
    title: "Mini-Dashboards",
    text: "Kleine Dashboards mit Daten, Charts und Funktionen.",
    image: "/images/project-previews/dashboard.png",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 pt-8 sm:px-6 sm:pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-8 lg:pb-8 lg:pt-14">
          <div>
            <Reveal direction="up" delay={50} distance={18}>
              <div className="mb-5 inline-flex items-center rounded-lg border border-[#526dff]/25 bg-[#526dff]/10 px-3 py-1.5 text-xs font-medium text-[#aebaff]">
                &lt;/&gt; Angehender Fachinformatiker
              </div>
            </Reveal>

            <Reveal direction="up" delay={140} distance={26}>
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ich entwickle moderne{" "}
                <span className="text-[#526dff]">Websites</span> und{" "}
                <span className="text-[#526dff]">Web-Apps.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={250} distance={22}>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Ich bin Serhat, angehender Fachinformatiker für
                Anwendungsentwicklung. Hier zeige ich meine Projekte, Skills und
                meinen Weg als Entwickler.
              </p>
            </Reveal>

            <Reveal direction="up" delay={360} distance={18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/projekte">Projekte ansehen →</Button>

                <Button href="/ueber-mich" variant="secondary">
                  Über mich
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal
            direction="left"
            delay={240}
            duration={900}
            distance={45}
            className="w-full"
          >
            <HeroVisual />
          </Reveal>
        </section>

        {/* Was ich mache */}
        <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
          <Reveal>
            <SectionTitle title="Was ich mache" />
          </Reveal>

          <StaggerGroup
            className="mt-8 grid gap-4 md:grid-cols-3"
            itemClassName="h-full"
            delay={120}
            staggerDelay={140}
          >
            {whatIDo.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="group h-full p-6">
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#526dff]/25 bg-[#526dff]/10 text-[#6f82ff] shadow-lg shadow-blue-500/10">
                      <Icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>
                    </div>

                  </div>
                </Card>
              );
            })}
          </StaggerGroup>
        </section>

        {/* Tech Stack */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <Reveal>
              <SectionTitle title="Tech Stack" />
            </Reveal>
          </div>

          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <FocusMarquee />
            </Reveal>
          </div>
        </section>

        {/* Projekte & Ideen */}
        <section className="mx-auto max-w-[1400px] px-5 py-10 sm:px-6 lg:px-8">
          <Reveal>
            <SectionTitle title="Projekte & Ideen" />
          </Reveal>

          <StaggerGroup
            className="mt-8 grid gap-6 lg:grid-cols-3"
            itemClassName="h-full"
            delay={120}
            staggerDelay={150}
          >
            {projectIdeas.map((project) => (
              <Card
                key={project.title}
                className="group h-full overflow-hidden"
              >
                <div className="overflow-hidden border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={`${project.title} Vorschau`}
                    width={2172}
                    height={724}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {project.text}
                      </p>
                    </div>

                    <ArrowIcon className="ml-auto mt-1 h-5 w-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8fa0ff]" />
                  </div>
                </div>
              </Card>
            ))}
          </StaggerGroup>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Reveal direction="scale" duration={850}>
            <Card className="group border-[#526dff]/30 p-5 shadow-[0_0_45px_rgba(82,109,255,0.08)] transition duration-500 hover:border-[#7185ff]/45 hover:shadow-[0_0_55px_rgba(82,109,255,0.14)] sm:p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#526dff]/25 bg-[#526dff]/10 text-[#7185ff] shadow-lg shadow-blue-500/10 transition duration-500 group-hover:scale-105 group-hover:border-[#7185ff]/50 group-hover:bg-[#526dff]/15 sm:h-16 sm:w-16">
                    <ChatIcon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  <div>
                    <h2 className="max-w-xl text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
                      Du hast eine Idee oder möchtest dich austauschen?
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                      Ich bin offen für spannende Projekte und neue Kontakte.
                    </p>
                  </div>
                </div>

                <div className="w-full shrink-0 transition duration-300 group-hover:translate-x-1 md:w-auto">
                  <div className="[&>a]:w-full md:[&>a]:w-auto">
                    <Button href="/kontakt">Kontakt aufnehmen →</Button>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </section>
      </main>
    </SiteShell>
  );
}

{/* Hero-Visual mit Glows, Code-Card und Browser-Animation*/ }
function HeroVisual() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[620px] sm:h-[380px] lg:h-[390px]">
      {/* Hintergrund-Glows */}
      <div className="absolute left-[55%] top-[45%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563eb]/25 blur-[80px] sm:h-72 sm:w-72 sm:blur-[90px]" />
      <div className="absolute right-[3%] top-[28%] h-48 w-48 rounded-full bg-[#526dff]/18 blur-[75px] sm:right-[6%] sm:h-64 sm:w-64 sm:blur-[90px]" />

      {/* Browser hinten */}
      <div className="absolute right-[3%] top-0 w-[82%] rounded-[1.25rem] border border-[#6f82ff]/45 bg-[#080d1d]/95 shadow-[0_0_44px_rgba(82,109,255,0.22)] sm:right-[8%] sm:w-[74%] sm:rounded-[1.55rem]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3 sm:gap-2 sm:px-5 sm:py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-400/70 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-500/60 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600/60 sm:h-3 sm:w-3" />
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-[1fr_0.9fr] gap-3 sm:gap-6">
            <div className="h-16 rounded-lg bg-white/10 sm:h-24 sm:rounded-xl" />

            <div className="space-y-2 pt-1 sm:space-y-3 sm:pt-2">
              <div className="h-2.5 w-full rounded-full bg-white/14 sm:h-3" />
              <div className="h-2.5 w-4/5 rounded-full bg-white/10 sm:h-3" />
            </div>
          </div>

          <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            <div className="h-2.5 w-[82%] rounded-full bg-white/10 sm:h-3" />
            <div className="h-2.5 w-[66%] rounded-full bg-white/10 sm:h-3" />
            <div className="h-2.5 w-[26%] rounded-full bg-[#526dff] sm:h-3" />
          </div>
        </div>
      </div>

      {/* Code-Card vorne links */}
      <div className="absolute left-0 top-[108px] w-[46%] rounded-[1.1rem] border border-white/15 bg-[#090e1f]/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.48)] backdrop-blur sm:left-[4%] sm:top-[122px] sm:w-[36%] sm:rounded-[1.35rem] sm:p-5">
        <div className="text-[1.8rem] font-bold leading-none text-[#6f82ff] sm:text-[2.35rem]">
          &lt;/&gt;
        </div>

        <div className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
          <div className="h-2.5 w-[58%] rounded-full bg-[#6f82ff] sm:h-3 sm:w-24" />

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
            <div className="h-2 w-[65%] rounded-full bg-white/14 sm:h-2.5 sm:w-28" />
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
            <div className="h-2 w-[82%] rounded-full bg-cyan-300/55 sm:h-2.5 sm:w-36" />
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
            <div className="h-2 w-[55%] rounded-full bg-[#8090ff] sm:h-2.5 sm:w-24" />
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
            <div className="h-2 w-[72%] rounded-full bg-white/14 sm:h-2.5 sm:w-32" />
          </div>
        </div>
      </div>

      {/* UI-Card vorne rechts */}
      <div className="absolute right-0 top-[136px] w-[43%] rounded-[1.1rem] border border-white/15 bg-[#090e1f]/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.48)] backdrop-blur sm:top-[150px] sm:w-[32%] sm:rounded-[1.35rem] sm:p-5">
        <div className="flex gap-2 sm:gap-4">
          <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-[#526dff] to-[#6d45ff] shadow-lg shadow-blue-500/25 sm:h-14 sm:w-14 sm:rounded-xl" />

          <div className="min-w-0 flex-1 space-y-2 pt-1 sm:space-y-3">
            <div className="h-2.5 w-full rounded-full bg-white/14 sm:h-3" />
            <div className="h-2.5 w-2/3 rounded-full bg-white/10 sm:h-3" />
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 sm:mt-5 sm:gap-4">
          <div className="h-8 w-8 shrink-0 rounded-full bg-slate-400/55 sm:h-10 sm:w-10" />

          <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
            <div className="h-2.5 w-3/4 rounded-full bg-white/14 sm:h-3" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/10 sm:h-3" />
          </div>
        </div>

        <div className="mt-3 h-8 w-[70%] rounded-lg bg-gradient-to-r from-[#526dff] to-[#334dff] shadow-lg shadow-blue-500/25 sm:mt-5 sm:h-9 sm:w-24" />
      </div>
    </div>
  );
}