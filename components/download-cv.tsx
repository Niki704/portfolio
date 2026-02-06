"use client"

import * as React from "react"
import { Download } from "lucide-react"

export function DownloadCV() {
    return (
        <a
            href="/Niklesh_Karunaweera_Software_Engineering_Intern_Resume_Updated.pdf"
            download="Niklesh_Karunaweera_SE_Resume.pdf"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-themeBtn hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            aria-label="Download CV"
        >
            <span className="text-sm font-medium text-foreground">Download CV</span>
            <Download className="h-4 w-4 text-foreground group-hover:translate-y-0.5 transition-transform duration-300" />
        </a>
    )
}
