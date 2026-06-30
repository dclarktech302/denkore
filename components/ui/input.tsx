import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-lg border border-white/12 bg-white/[0.03] px-4 text-[14px] text-white placeholder:text-white/35 outline-none transition-colors",
        "focus-visible:border-violet-light/50 focus-visible:ring-2 focus-visible:ring-violet-light/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-neon/60 aria-invalid:ring-neon/20",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
