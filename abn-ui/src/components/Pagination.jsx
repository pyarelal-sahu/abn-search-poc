import PropTypes from "prop-types";

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
function paginate(total, page, pageSize, siblings = 1) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const left = Math.max(2, page - siblings);
  const right = Math.min(pages - 1, page + siblings);
  const items = [];
  items.push(1);
  if (left > 2) items.push("…");
  items.push(...range(left, right));
  if (right < pages - 1) items.push("…");
  if (pages > 1) items.push(pages);
  return { pages, items };
}

export function Pagination({ total, page, pageSize, onPage }) {
  const { pages, items } = paginate(total, page, pageSize, 1);
  const canPrev = page > 1,
    canNext = page < pages;
  const btn =
    "px-2.5 py-1.5 rounded-md text-xs border border-slate-300 dark:border-slate-700 hover:bg-slate-50/70 dark:hover:bg-slate-800/50";
  const active =
    "bg-gradient-to-r from-brand to-sky-400 text-slate-950 border-transparent";

  return (
    <nav className="flex items-center gap-2" aria-label="Pagination">
      <button
        className={btn}
        disabled={!canPrev}
        onClick={() => onPage(1)}
        aria-label="First"
      >
        «
      </button>
      <button
        className={btn}
        disabled={!canPrev}
        onClick={() => onPage(Math.max(1, page - 1))}
        aria-label="Previous"
      >
        ‹
      </button>
      {items.map((it, idx) =>
        it === "…" ? (
          <span
            className="px-2 text-xs text-slate-500 dark:text-slate-400"
            key={"e" + idx}
          >
            …
          </span>
        ) : (
          <button
            key={it}
            onClick={() => onPage(it)}
            className={`${btn} ${it === page ? active : ""}`}
          >
            {it}
          </button>
        )
      )}
      <button
        className={btn}
        disabled={!canNext}
        onClick={() => onPage(Math.min(pages, page + 1))}
        aria-label="Next"
      >
        ›
      </button>
      <button
        className={btn}
        disabled={!canNext}
        onClick={() => onPage(pages)}
        aria-label="Last"
      >
        »
      </button>
    </nav>
  );
}
Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPage: PropTypes.func.isRequired,
};
