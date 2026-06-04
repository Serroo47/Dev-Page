type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}