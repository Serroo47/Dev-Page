"use client";

import { type FormEvent, useState } from "react";

const recipientEmail = "serhat.alptekin2802@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Neue Nachricht von ${name}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      "",
      "Nachricht:",
      message,
    ].join("\n");

    window.location.href =
      `mailto:${recipientEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Dein Name"
          className="w-full rounded-xl border border-white/10 bg-[#080d1d]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/15 focus:border-[#7185ff]/55 focus:ring-4 focus:ring-[#526dff]/10"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          E-Mail
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="deine@email.de"
          className="w-full rounded-xl border border-white/10 bg-[#080d1d]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/15 focus:border-[#7185ff]/55 focus:ring-4 focus:ring-[#526dff]/10"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Nachricht
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Worum geht es?"
          className="min-h-40 w-full resize-y rounded-xl border border-white/10 bg-[#080d1d]/80 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 hover:border-white/15 focus:border-[#7185ff]/55 focus:ring-4 focus:ring-[#526dff]/10"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#526dff] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-[#6f82ff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#526dff]/25"
      >
        <SendIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        Nachricht senden
      </button>
    </form>
  );
}

type IconProps = {
  className?: string;
};

function SendIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="m21 3-8.2 18-2.2-7.6L3 11.2 21 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m10.6 13.4 4.8-4.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}