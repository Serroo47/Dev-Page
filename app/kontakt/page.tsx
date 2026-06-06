import type { Metadata } from "next";
import Image from "next/image";

import { Card } from "@/components/Card";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/animation/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Serhat Alptekin",
  description:
    "Kontaktiere Serhat Alptekin per E-Mail, GitHub, LinkedIn oder über das Kontaktformular.",
};

const contactItems = [
  {
    title: "E-Mail",
    value: "serhat.alptekin2802@gmail.com",
    href: "mailto:serhat.alptekin2802@gmail.com",
    icon: "/icons/footer/gmail.svg",
  },
  {
    title: "GitHub",
    value: "github.com/Serroo47",
    href: "https://github.com/Serroo47",
    icon: "/icons/footer/github.svg",
  },
  {
    title: "LinkedIn",
    value: "Serhat Alptekin",
    href: "https://www.linkedin.com/in/serhat-alptekin-59b223240/",
    icon: "/icons/footer/linkedin.svg",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
          <Reveal direction="up" distance={20}>
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center rounded-lg border border-[#526dff]/25 bg-[#526dff]/10 px-3 py-1.5 text-xs font-medium text-[#aebaff]">
                &lt;/&gt; Kontakt
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Lass uns <span className="text-[#526dff]">sprechen.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Hast du eine Idee, eine Frage oder möchtest dich einfach
                austauschen? Schreib mir gerne eine Nachricht.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
            <Reveal
              direction="up"
              delay={100}
              duration={750}
              distance={24}
              className="h-full"
            >
              <Card className="h-full p-5 sm:p-7">
                <SectionHeading
                  icon={<MessageIcon className="h-6 w-6" />}
                  title="Nachricht senden"
                  description="Fülle das Formular aus und dein E-Mail-Programm öffnet sich mit der vorbereiteten Nachricht."
                />

                <ContactForm />
              </Card>
            </Reveal>

            <Reveal
              direction="up"
              delay={180}
              duration={750}
              distance={24}
              className="h-full"
            >
              <Card className="h-full p-5 sm:p-7">
                <SectionHeading
                  icon={<ContactIcon className="h-6 w-6" />}
                  title="Kontaktmöglichkeiten"
                  description="Du erreichst mich auch direkt über diese Plattformen."
                />

                <div className="mt-7 space-y-3">
                  {contactItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="group flex min-h-24 items-center gap-4 rounded-2xl border border-white/10 bg-[#080d1d]/65 p-4 transition duration-300 hover:border-[#7185ff]/30 hover:bg-[#526dff]/[0.07] sm:p-5"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#526dff]/20 bg-[#526dff]/10 p-2.5 transition duration-300 group-hover:border-[#7185ff]/35 group-hover:bg-[#526dff]/15">
                        <Image
                          src={item.icon}
                          alt=""
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      </span>

                      <span className="min-w-0">
                        <span className="block font-semibold text-white">
                          {item.title}
                        </span>

                        <span className="mt-1 block truncate text-sm text-slate-400">
                          {item.value}
                        </span>
                      </span>

                      <ArrowIcon className="ml-auto h-5 w-5 shrink-0 text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-[#8fa0ff]" />
                    </a>
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

type SectionHeadingProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function SectionHeading({
  icon,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex items-start gap-4 border-b border-white/10 pb-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#526dff]/25 bg-[#526dff]/10 text-[#7185ff]">
        {icon}
      </span>

      <div>
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

type IconProps = {
  className?: string;
};

function MessageIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m5 7 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.8 18c.5-3.2 2.3-4.8 5.2-4.8s4.7 1.6 5.2 4.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16 7.5h4M18 5.5v4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}