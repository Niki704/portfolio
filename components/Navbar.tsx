"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { DownloadCV } from "@/components/download-cv";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-end gap-4 ${scrolled
                ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm py-4 px-6 md:px-12"
                : "bg-transparent py-6 px-6 md:px-12"
                }`}
        >
            <DownloadCV />
            <ThemeToggle />
        </header>
    );
}
