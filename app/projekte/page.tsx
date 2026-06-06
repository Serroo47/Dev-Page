import type { Metadata } from "next";


import { Reveal } from "@/components/animation/Reveal";
import { ConceptSlider } from "@/components/projects/ConceptSlider";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { SiteShell } from "@/components/SiteShell";
import { Card } from "@/components/Card";
import { ChatIcon } from "@/components/Icons";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Projekte | Serhat Alptekin",
  description:
    "Ausgewählte Projekte, Webdesign-Konzepte und technische Experimente von Serhat Alptekin.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main>
        <section className="px-5 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-6xl">
            <Reveal direction="up" distance={22}>
            <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center rounded-lg border border-[#526dff]/25 bg-[#526dff]/10 px-3 py-1.5 text-xs font-medium text-[#aebaff]">
                &lt;/&gt; Projekte & Konzepte
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Projekte, Ideen und{" "}
                <span className="text-[#526dff]">Webdesign-Konzepte.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Hier zeige ich ausgewählte Arbeiten, technische Experimente und
                unterschiedliche Website-Konzepte.
                </p>
            </div>
            </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-[1400px] sm:mt-14">
            <Reveal
            direction="up"
            delay={180}
            duration={800}
            distance={30}
            >
            <ConceptSlider />
            </Reveal>
        </div>
        <div className="mx-auto mt-16 max-w-6xl sm:mt-20">
            <Reveal direction="up" distance={28}>
                <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fa0ff]">
                    Eigenes Projekt
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Aktuell in Entwicklung
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                    Ein persönliches Projekt, an dem ich aktuell arbeite und das meine
                    technische sowie gestalterische Entwicklung zeigt.
                </p>
                </div>
            </Reveal>

            <Reveal
                direction="up"
                delay={120}
                duration={750}
                distance={30}
            >
            <FeaturedProject />
            </Reveal>
            </div>
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