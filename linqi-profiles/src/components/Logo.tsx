import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link to="/" className={cn("text-xl font-bold tracking-wide", light ? "text-white" : "text-navy", className)}>
      LINQI
    </Link>
  );
}
