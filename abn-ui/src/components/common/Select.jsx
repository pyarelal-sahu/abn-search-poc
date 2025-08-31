import { clsx } from "clsx";
import PropTypes from "prop-types";

/** options: [{label, value}] ; placeholder: 'State' */
export function Select({ className, options = [], placeholder, ...props }) {
  return (
    <select
      className={clsx(
        "w-full rounded-lg border bg-white text-slate-900 border-slate-300 transition focus:shadow-glow focus:border-sky-400",
        "dark:bg-slate-950 dark:text-slate-100 dark:border-slate-700",
        className
      )}
      {...props}
    >
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((opt) => (
        <option key={opt.value ?? opt} value={opt.value ?? opt}>
          {opt.label ?? opt}
        </option>
      ))}
    </select>
  );
}
Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
      PropTypes.string,
      PropTypes.number,
    ])
  ),
  placeholder: PropTypes.string,
};
