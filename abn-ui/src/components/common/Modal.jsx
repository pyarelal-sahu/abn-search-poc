import { useEffect } from "react";
import PropTypes from "prop-types";
export function Modal({ open, onClose, children }) {
  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) {
      document.addEventListener("keydown", onEsc);
    }
    return () => document.removeEventListener("keydown", onEsc);
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 fade-in">
        {children}
      </div>
    </div>
  );
}
Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
