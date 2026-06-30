import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-[13px] font-semibold tracking-[0.04em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-light/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-violet text-white shadow-[0_0_24px_rgba(124,58,237,0.45),0_0_60px_rgba(124,58,237,0.15)] hover:shadow-[0_0_32px_rgba(124,58,237,0.65),0_0_80px_rgba(124,58,237,0.25)] hover:-translate-y-px",
        ghost:
          "bg-transparent text-white/75 border border-white/18 hover:border-white/40 hover:text-white",
      },
      size: {
        default: "h-auto px-7 py-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
