import { useEffect, useState } from "react";
import { getSavedTheme, setTheme, applyTheme } from "../../utils/theme";
export function ToggleTheme() {
  const [mode, setMode] = useState("system");
  useEffect(() => {
    const saved = getSavedTheme();
    setMode(saved);
    applyTheme(saved);
  }, []);
  return (
    <select
      value={mode}
      onChange={(e) => {
        const m = e.target.value;
        setMode(m);
        setTheme(m);
      }}
      className="text-xs rounded-lg border px-2 py-1 bg-white border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-100"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
