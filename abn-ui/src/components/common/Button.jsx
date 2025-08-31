import { clsx } from "clsx";
import PropTypes from "prop-types";
import React from "react";

const base =
  "inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 btn-ripple";
const variants = {
  primary:
    "bg-gradient-to-r from-brand to-sky-400 text-slate-950 hover:opacity-90 focus:ring-sky-400 border border-transparent",
  outline:
    "bg-transparent text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50/70 dark:hover:bg-slate-800/60 focus:ring-slate-400 btn-ripple outline",
  ghost:
    "bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 border border-transparent",
};
const sizes = { sm: "px-2 py-1 text-xs", md: "", lg: "px-4 py-2 text-base" };

export function Button({
  className,
  variant = "primary",
  size = "md",
  onClick,
  children,
  ...props
}) {
  const ref = React.useRef(null);
  const handleClick = (e) => {
    const btn = ref.current;
    if (btn) {
      const circle = document.createElement("span");
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      const rect = btn.getBoundingClientRect();
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.className = "ripple";
      const existing = btn.getElementsByClassName("ripple")[0];
      if (existing) existing.remove();
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 650);
    }
    onClick && onClick(e);
  };
  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "outline", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};
