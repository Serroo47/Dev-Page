type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}