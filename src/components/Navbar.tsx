"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Projetos", path: "/projects" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold">
          Gabriel Porto
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === route.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </nav>
    </header>
  );
}
