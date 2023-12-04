"use client";

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import LoadingSpinner from "./LoadingSpinner";
import { cn } from "@/utils/tailwindUtils";
import Ripple from "@/utils/ripple";

const ripple = new Ripple();

const buttonVariants = cva(
  "inline-flex w-full items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600",
        error: "bg-rose-500 text-white hover:bg-rose-600",
        success: "bg-emerald-500 text-white hover:bg-emerald-600",
        monochrome: "bg-slate-800 text-white hover:bg-slate-700",
        warning: "bg-amber-400 text-white hover:bg-amber-500",
        outline: "bg-transparent border border-slate-200 hover:bg-onHover",
        outlineSuccess:
          "bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-100",
        outlineError:
          "bg-transparent border text-red-500 border-red-400 hover:bg-red-100",
        outlineDefault:
          "bg-transparent border text-blue-500 border-blue-400 hover:bg-blue-100",
        outlineWarning:
          "bg-transparent border text-yellow-500 border-yellow-400 hover:bg-yellow-100",
        ghost: "bg-transparent data-[state=open]:bg-transparent",
        ghostInfo:
          "bg-transparent data-[state=open]:bg-transparent text-blue-500 dark:text-blue-400",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 hover:bg-transparent",
        disabled: "bg-slate-200 text-slate-400",
      },

      isLoading: {
        shouldLoading: "bg-onHover border-onHover",
      },

      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
        xl: "h-14 px-8",
        xs: "h-8 px-3 text-xs",
        xs2: "h-7 px-2.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, isLoading, ...props }, ref) => {
    if (isLoading) {
      return (
        <button
          className={cn(
            buttonVariants({ variant, size, className, isLoading })
          )}
          ref={ref}
          disabled
          {...props}
        >
          <LoadingSpinner size="small" variant="disabled" />
        </button>
      );
    }

    return (
      <button
        onPointerDown={(e) => ripple.create(e, "light")}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={variant === "disabled"}
        type="submit"
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
