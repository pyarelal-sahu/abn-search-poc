import { Linkedin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="flex items-center justify-center space-x-4">
        <span>© ABN Search POC · Data © Australian Business Register</span>

        <a
          className="flex items-center space-x-1 underline hover:text-slate-700 dark:hover:text-slate-300"
          href="https://www.linkedin.com/in/pyarelal-sahu/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={14} />
          <span>LinkedIn</span>
        </a>

        <a
          className="flex items-center space-x-1 underline hover:text-slate-700 dark:hover:text-slate-300"
          href="https://pyarelal-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Globe size={14} />
          <span>Portfolio</span>
        </a>
      </div>
    </footer>
  );
}
