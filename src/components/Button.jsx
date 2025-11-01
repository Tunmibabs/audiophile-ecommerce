import React from "react";

function cn(...args) {
  return args.filter(Boolean).join(' ');
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const baseStyles =
    "inline-block font-bold uppercase text-subtitle tracking-subtitle transition-colors duration-300";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-light px-8 py-3",
    secondary:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white px-8 py-4",
      tertiary:
      'bg-black-pure text-white hover:bg-black',
    link: "text-black text-opacity-50 hover:text-primary leading-normal",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
