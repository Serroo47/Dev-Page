"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 520,
  distance = 28,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 20px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  const hiddenTransform = getHiddenTransform(direction, distance);

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : hiddenTransform,
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "opacity, transform",
  };

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
}

function getHiddenTransform(
  direction: RevealDirection,
  distance: number,
): string {
  switch (direction) {
    case "down":
      return `translate3d(0, -${distance}px, 0) scale(1)`;

    case "left":
      return `translate3d(${distance}px, 0, 0) scale(1)`;

    case "right":
      return `translate3d(-${distance}px, 0, 0) scale(1)`;

    case "scale":
      return "translate3d(0, 12px, 0) scale(0.96)";

    case "up":
    default:
      return `translate3d(0, ${distance}px, 0) scale(1)`;
  }
}