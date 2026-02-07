import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // This connects the Next.js variable to Tailwind's 'font-sans'
                sans: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                },
                // ... (Using standard shadcn/ui variables if needed)
            },
        },
    },
    plugins: [],
};
export default config;
