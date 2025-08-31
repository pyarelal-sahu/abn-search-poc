const KEY = "abn_theme";
export const getSystemPref = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
export const getSavedTheme = () => localStorage.getItem(KEY) || "system";
export const applyTheme = (mode) => {
  const r = document.documentElement;
  const resolved = mode === "system" ? getSystemPref() : mode;
  resolved === "dark" ? r.classList.add("dark") : r.classList.remove("dark");
  r.setAttribute("data-theme", resolved);
};
export const setTheme = (mode) => {
  localStorage.setItem(KEY, mode);
  applyTheme(mode);
};
