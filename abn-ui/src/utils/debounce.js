export function debounce(fn, ms = 300) {
  let t;
  return (...args) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}
