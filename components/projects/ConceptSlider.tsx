"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  type TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const AUTO_PLAY_DELAY = 4000;
const SWIPE_DISTANCE = 45;

const concepts = [
  {
    title: "Gastronomie-Konzept",
    category: "Webdesign · Gastronomie",
    description:
      "Ein atmosphärisches Restaurant-Konzept mit eleganter Editorial-Typografie, warmer Bildsprache und einer klaren, hochwertigen Nutzerführung.",
    image: "/images/project-concepts/gastronomie.png",
  },
  {
    title: "Analytics-Plattform",
    category: "UI / UX · SaaS",
    description:
      "Ein helles SaaS-Konzept mit Dashboard, Kennzahlen, Diagrammen und modularen Komponenten für eine übersichtliche Produktdarstellung.",
    image: "/images/project-concepts/saas-dashboard.png",
  },
  {
    title: "Architektur-Studio",
    category: "Webdesign · Architektur",
    description:
      "Ein ruhiges Architektur-Konzept mit asymmetrischem Layout, hochwertiger Bildsprache, Projektfiltern und editorialer Gestaltung.",
    image: "/images/project-concepts/architektur.png",
  },
];

export function ConceptSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeConcept = concepts[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    function updateMotionPreference() {
      setReducedMotion(mediaQuery.matches);
    }

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    function handleVisibilityChange() {
      setPageVisible(document.visibilityState === "visible");
    }

    handleVisibilityChange();

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, []);

  useEffect(() => {
    const autoplayDisabled =
      reducedMotion ||
      detailsOpen ||
      interactionPaused ||
      !pageVisible ||
      concepts.length <= 1;

    if (autoplayDisabled) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % concepts.length;
      });
    }, AUTO_PLAY_DELAY);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    activeIndex,
    detailsOpen,
    interactionPaused,
    pageVisible,
    reducedMotion,
  ]);

  function goToSlide(index: number) {
    setDetailsOpen(false);
    setActiveIndex(index);
  }

  function showPreviousSlide() {
    const previousIndex =
      (activeIndex - 1 + concepts.length) % concepts.length;

    goToSlide(previousIndex);
  }

  function showNextSlide() {
    const nextIndex = (activeIndex + 1) % concepts.length;

    goToSlide(nextIndex);
  }

  function toggleDetails() {
    setDetailsOpen((currentValue) => !currentValue);
  }

  function handleSliderKeyDown(
    event: KeyboardEvent<HTMLDivElement>,
  ) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDetails();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousSlide();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextSlide();
    }

    if (event.key === "Escape") {
      setDetailsOpen(false);
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchEndX.current = null;
    touchStartX.current = event.touches[0].clientX;
    setInteractionPaused(true);
  }

  function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
    touchEndX.current = event.touches[0].clientX;
  }

  function handleTouchEnd() {
    const startX = touchStartX.current;
    const endX = touchEndX.current;

    setInteractionPaused(false);

    if (startX === null || endX === null) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }

    const swipeDistance = startX - endX;

    if (swipeDistance > SWIPE_DISTANCE) {
      showNextSlide();
    }

    if (swipeDistance < -SWIPE_DISTANCE) {
      showPreviousSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }

  return (
    <article
      aria-label="Webdesign-Konzepte"
      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080c1b]/85 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={() => setInteractionPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div
          role="button"
          tabIndex={0}
          aria-label={
            detailsOpen
              ? "Informationen zum Konzept schließen"
              : "Informationen zum Konzept anzeigen"
          }
          aria-expanded={detailsOpen}
          onClick={toggleDetails}
          onKeyDown={handleSliderKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative aspect-[2/1] cursor-pointer touch-pan-y overflow-hidden bg-[#050816] outline-none focus-visible:ring-2 focus-visible:ring-[#7185ff] focus-visible:ring-inset"
        >
          <div
            className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {concepts.map((concept, index) => (
              <div
                key={concept.title}
                className="relative h-full min-w-full"
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={concept.image}
                  alt={`Website-Konzept: ${concept.title}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 94vw, 1400px"
                  className={`object-cover object-center transition-transform duration-700 ${
                    detailsOpen && index === activeIndex
                      ? "scale-[1.025]"
                      : "scale-100"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03050d]/45 via-transparent to-black/10" />

          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03050d]/95 via-[#03050d]/72 to-[#03050d]/35 backdrop-blur-[2px] transition-opacity duration-500 ${
              detailsOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 max-w-3xl p-5 transition-all duration-500 sm:p-8 lg:p-12 ${
              detailsOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aebaff] sm:text-xs sm:tracking-[0.2em]">
              {activeConcept.category}
            </p>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:mt-3 sm:text-3xl lg:text-5xl">
              {activeConcept.title}
            </h2>

            <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-200 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
              {activeConcept.description}
            </p>

            <p className="mt-4 hidden text-sm font-medium text-[#aebaff] sm:block">
              Erneut klicken, um die Informationen zu schließen.
            </p>
          </div>

          <div
            className={`pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-medium text-white/85 shadow-lg backdrop-blur-md transition duration-300 sm:bottom-6 sm:left-6 sm:px-4 sm:py-2 sm:text-xs ${
              detailsOpen ? "translate-y-2 opacity-0" : "opacity-100"
            }`}
          >
            Details anzeigen
          </div>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            showPreviousSlide();
          }}
          aria-label="Vorheriges Konzept"
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#050816]/75 text-base text-white shadow-lg backdrop-blur transition duration-300 hover:border-[#7185ff]/50 hover:bg-[#526dff]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7185ff] sm:left-5 sm:h-11 sm:w-11 sm:text-xl"
        >
          ←
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            showNextSlide();
          }}
          aria-label="Nächstes Konzept"
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#050816]/75 text-base text-white shadow-lg backdrop-blur transition duration-300 hover:border-[#7185ff]/50 hover:bg-[#526dff]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7185ff] sm:right-5 sm:h-11 sm:w-11 sm:text-xl"
        >
          →
        </button>
        </div>

        <div className="flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4">
            <div
                className="flex items-center justify-center gap-2"
                aria-label="Konzept auswählen"
            >
                {concepts.map((concept, index) => {
                const isActive = index === activeIndex;

                return (
                    <button
                    key={concept.title}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`${concept.title} anzeigen`}
                    aria-current={isActive ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7185ff] sm:h-2.5 ${
                        isActive
                        ? "w-7 bg-[#7185ff] shadow-[0_0_12px_rgba(113,133,255,0.75)] sm:w-8"
                        : "w-2 bg-white/20 hover:bg-white/40 sm:w-2.5"
                    }`}
                    />
                );
                })}
            </div>
        </div>
    </article>
  );
}