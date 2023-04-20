/* eslint-disable react/display-name */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import {clsx, type ClassValue} from "clsx"
import { twMerge } from "tailwind-merge";


// Utility function: merge tailwind classes
function cn(...inputs: ClassValue[]) {
    return clsx(twMerge(clsx(inputs)));
}

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-md w-auto",
  {
    variants: {
      variant: {
        default: "bg-cyan-500",
        primary: "bg-cyan-500",
        outline: "bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white",
        ghost: "bg-transparent text-cyan-500 hover:bg-cyan-500 hover:text-white",
        disabled: "disabled bg-gray-500 cursor-not-allowed"
      },
      size: {
        default: "px-4 py-2 h-10",
        sm: "px-4 py-1 h-8",
        md: "px-4 py-2 h-10",
        lg: "px-8 py-4 h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, ...props }, ref) => {
        return (
            <Button 
                ref={ref} 
                className={cn(buttonVariants({variant, size, className}))} 
                {...props}
            />
        )
});

export { Button, buttonVariants };
