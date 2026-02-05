"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="p-2 rounded-full bg-foreground/5 opacity-50 cursor-not-allowed">
                <Sun className="h-5 w-5 text-foreground" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-themeBtn hover:bg-primary/20 transition-colors border border-transparent hover:border-primary/50 relative overflow-hidden group"
            aria-label="Toggle Theme"
        >
            <div className="relative z-10">
                {theme === "dark" ? (
                    <Moon className="h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
                ) : (
                    <Sun className="h-5 w-5 text-yellow-500 transition-transform group-hover:rotate-90" />
                )}
            </div>
        </button>
    )
}
