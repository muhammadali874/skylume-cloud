import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeMode = "dark" | "light" | "system";

const STORAGE_KEY = "skylume-theme";

type ThemeContextValue = { theme: ThemeMode; setTheme: (mode: ThemeMode) => void; resolved: "dark" | "light" };

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  setTheme: () => {},
  resolved: "dark",
});

function resolve(mode: ThemeMode): "dark" | "light" {
  if (mode !== "system") return mode;
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [resolved, setResolved] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    setThemeState(stored ?? "dark");
  }, []);

  useEffect(() => {
    const next = resolve(theme);
    setResolved(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
  }, [theme]);

  const setTheme = useCallback((mode: ThemeMode) => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    setThemeState(mode);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme, resolved }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
