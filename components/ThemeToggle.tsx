"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border-3 border-black shadow-neo-sm bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
      aria-label="Toggle dark mode"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        // Ikon bulan sabit (untuk beralih ke dark mode)
        <svg
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.88C20.8 17.24 17.25 20.5 13 20.5c-4.42 0-8-3.58-8-8s3.58-8 8-8c.5 0 .97.05 1.44.14C6.77 5.07 2 9.56 2 15c0 5.52 4.48 10 10 10 5.44 0 9.93-4.77 10.88-11.12z" />
        </svg>
      ) : (
        // Ikon matahari (untuk beralih ke light mode)
        <svg
          className="w-5 h-5 text-orange-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM13 2h-2v3h2V2zm0 15h-2v3h2v-3zM5 11H2v2h3v-2zm15 0h-3v2h3v-2zM6.3 5.3L4.2 3.2 2.8 4.6l2.1 2.1 1.4-1.4zm11.4 11.4l-1.4 1.4 2.1 2.1 1.4-1.4-2.1-2.1zM19.8 4.6l-2.1 2.1 1.4 1.4 2.1-2.1-1.4-1.4zM7.7 17.7l-1.4 1.4 2.1 2.1 1.4-1.4-2.1-2.1z" />
        </svg>
      )}
    </button>
  );
}