export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="space-x-3">
        <span>
          © ABN Search POC · Data © Australian Business Register (CC BY 3.0 AU)
        </span>
        <a
          className="underline hover:text-slate-700 dark:hover:text-slate-300"
          href="https://www.linkedin.com/in/pyarelal-sahu/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="underline hover:text-slate-700 dark:hover:text-slate-300"
          href="https://pyarelal-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Portfolio
        </a>
      </div>
    </footer>
  );
}
