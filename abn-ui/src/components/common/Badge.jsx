import PropTypes from "prop-types";
export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 ${className}`}
    >
      {children}
    </span>
  );
}
Badge.propTypes = { children: PropTypes.node, className: PropTypes.string };
