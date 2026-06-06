"use client";

import { Children, type ReactNode } from "react";
import { Reveal } from "./Reveal";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  delay?: number;
  staggerDelay?: number;
};

export function StaggerGroup({
  children,
  className = "",
  itemClassName = "",
  delay = 0,
  staggerDelay = 120,
}: StaggerGroupProps) {
  const items = Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, index) => (
        <Reveal
          key={index}
          className={itemClassName}
          delay={delay + index * staggerDelay}
          direction="up"
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}