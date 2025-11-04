import React from "react";
import { Link, LinkProps } from "react-router-dom";

function cn(...args: (string | undefined | null | boolean)[]): string {
  return args.filter(Boolean).join(" ");
}

interface CommonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "link";
  className?: string;
}

type LinkButtonProps = CommonProps & {
  as: "link";
  to: LinkProps["to"];
} & Omit<LinkProps, "to">;

type RegularButtonProps = CommonProps & {
  as?: "button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | RegularButtonProps;


export default function Button({
  children,
  variant = "primary",
  className,
  as,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-block font-bold uppercase text-subtitle tracking-subtitle transition-colors duration-300";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-light px-8 py-3",
    secondary:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white px-8 py-4",
    tertiary: "bg-black-pure text-white hover:bg-black px-8 py-4",
    link: "text-black text-opacity-50 hover:text-primary leading-normal",
  };

  const combinedClassName = cn(baseStyles, variantStyles[variant], className);
  if (as === "link") {
    const { to, ...linkProps } = props as Omit<LinkButtonProps, keyof CommonProps | "as">;
    return (
      <Link className={combinedClassName} to={to} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as Omit<RegularButtonProps, keyof CommonProps | "as">;
  return (
    <button className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}