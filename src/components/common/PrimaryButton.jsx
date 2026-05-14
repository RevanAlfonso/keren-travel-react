import { Link } from "react-router-dom";

export default function PrimaryButton({ to, children, variant = "primary" }) {
  const classes =
    variant === "outline"
      ? "inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
      : "inline-flex items-center rounded-xl bg-brand-500 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-brand-700";

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
