import Image from "next/image";

const focusItems = [
  {
    label: "React",
    icon: "/icons/react.svg",
  },
  {
    label: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    label: "Angular",
    icon: "/icons/angular.svg",
  },
  {
    label: "Docker",
    icon: "/icons/docker.svg",
  },
  {
    label: "Python",
    icon: "/icons/python.svg",
  },
  {
    label: "Tailwind CSS",
    icon: "/icons/tailwind.svg",
  },
  {
    label: "Git",
    icon: "/icons/git.svg",
  },
  {
    label: "UI Design",
    icon: "/icons/ui-design.svg",
  },
];

export function FocusMarquee() {
  return (
    <div className="focus-marquee">
      <div className="focus-marquee-track">
        <FocusGroup />

        <div className="focus-marquee-group" aria-hidden="true">
          {focusItems.map((item) => (
            <FocusItem
              key={`duplicate-${item.label}`}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FocusGroup() {
  return (
    <div className="focus-marquee-group">
      {focusItems.map((item) => (
        <FocusItem
          key={item.label}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

type FocusItemProps = {
  label: string;
  icon: string;
};

function FocusItem({ label, icon }: FocusItemProps) {
  return (
    <div className="focus-marquee-item">
      <Image
        src={icon}
        alt={`${label} Logo`}
        width={64}
        height={64}
        className="focus-marquee-icon"
      />

      <span>{label}</span>
    </div>
  );
}