type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <span className="h-px w-12 bg-gradient-to-l from-[#7185ff]/70 to-transparent sm:w-24" />

        <h2 className="shrink-0 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>

        <span className="h-px w-12 bg-gradient-to-r from-[#7185ff]/70 to-transparent sm:w-24" />
      </div>

      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}