import { clsx } from "clsx";
import PropTypes from "prop-types";
export function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        "w-full rounded-lg border bg-white text-slate-900 border-slate-300 placeholder:text-slate-400 transition focus:shadow-glow focus:border-sky-400",
        "dark:bg-slate-950 dark:text-slate-100 dark:border-slate-700",
        className
      )}
      {...props}
    />
  );
}
Input.propTypes = { className: PropTypes.string };
