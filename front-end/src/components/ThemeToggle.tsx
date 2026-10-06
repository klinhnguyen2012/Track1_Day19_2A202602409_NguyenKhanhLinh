import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";

export function ThemeToggle({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  const isDark = theme === "dark";
  return (
    <label className="theme-control">
      <Sun size={15} aria-hidden="true" />
      <Switch checked={isDark} onCheckedChange={onToggle} aria-label="Chuyển đổi giao diện sáng và tối" />
      <Moon size={15} aria-hidden="true" />
      <span className="sr-only">{isDark ? "Giao diện tối" : "Giao diện sáng"}</span>
    </label>
  );
}
