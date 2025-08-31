import { ToggleTheme } from "./common/ToggleTheme";
export function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-sky-400">
            ABN Search Portal
          </span>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-brand/20 text-brand">
            POC
          </span>
        </h1>
        <div className="flex items-center gap-3">
          <a
            href="https://data.gov.au/data/dataset/abn-bulk-extract"
            target="_blank"
            className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 underline"
          >
            Data source
          </a>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
