import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition";

  const variantClasses =
    variant === "primary"
      ? "bg-[#526dff] text-white shadow-lg shadow-blue-500/20 hover:bg-[#6f82ff]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}