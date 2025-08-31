import PropTypes from "prop-types";
export function EmptyState({ label = "No results" }) {
  return (
    <div className="text-center text-sm text-slate-500 dark:text-slate-400 py-10">
      {label}
    </div>
  );
}
EmptyState.propTypes = { label: PropTypes.string };
