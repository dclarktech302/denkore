import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full resize-y rounded-lg border border-white/12 bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder:text-white/35 outline-none transition-colors",
        "focus-visible:border-violet-light/50 focus-visible:ring-2 focus-visible:ring-violet-light/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-neon/60 aria-invalid:ring-neon/20",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
