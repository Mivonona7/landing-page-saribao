"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function subscribe(onThemeChange: () => void) {
  const observer = new MutationObserver(onThemeChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerTheme(): Theme {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("saribao-theme", nextTheme);
  }

  return (
    <button
      aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
      aria-pressed={theme === "dark"}
      className="theme-toggle"
      onClick={toggleTheme}
      title={theme === "dark" ? "Mode sombre activé" : "Mode clair activé"}
      type="button"
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" size={17} />
      ) : (
        <Moon aria-hidden="true" size={17} />
      )}
      <span className="theme-toggle-label">
        {theme === "dark" ? "Mode clair" : "Mode sombre"}
      </span>
    </button>
  );
}
