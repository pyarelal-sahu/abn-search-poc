import PropTypes from "prop-types";
export function Card({ className = "", children }) {
  return (
    <div
      className={`p-[1px] rounded-xl bg-gradient-to-r from-brand to-sky-400 animate-[gradient-x_8s_ease_infinite]`}
    >
      <div
        className={`rounded-[inherit] bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
Card.propTypes = { className: PropTypes.string, children: PropTypes.node };
