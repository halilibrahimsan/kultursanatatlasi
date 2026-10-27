import { forwardRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "danger";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark border-brand",
  secondary: "bg-white text-navy border-gray-200 hover:bg-gray-50",
  ghost: "bg-transparent text-gray-600 border-transparent hover:bg-gray-100",
  danger: "bg-white text-red-600 border-red-200 hover:bg-red-50",
};

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: "sm" | "md" }>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border font-semibold transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        "disabled:cursor-not-allowed disabled:opacity-60",
        size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2.5 text-[15px]",
        VARIANTS[variant],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";

const fieldBase =
  "w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[15px] text-navy placeholder:text-gray-400 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(fieldBase, className)} {...props} />
));
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, "resize-none", className)} {...props} />
));
Textarea.displayName = "Textarea";

export function Field({ label, htmlFor, hint, error, children }: { label: string; htmlFor: string; hint?: ReactNode; error?: string | null; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
      {error ? <p className="text-sm text-red-600">{error}</p> : hint ? <p className="text-xs text-gray-500">{hint}</p> : null}
    </div>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <section className={cn("rounded-2xl border border-gray-200 bg-white p-5 sm:p-6", className)}>{children}</section>;
}
