"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Skill {
    title: string;
    desc: string;
}

export default function CoreSkillsAccordion({ skills }: { skills: Skill[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {skills.map((skill, index) => (
                <div key={index} className="border border-foreground/10 rounded-xl overflow-hidden bg-white/5 dark:bg-zinc-900/50">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors group"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-3 h-3 rounded-full bg-primary mt-1 shrink-0 transition-opacity ${openIndex === index ? 'opacity-100' : 'opacity-50'}`} />
                            <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                                {skill.title}
                            </h3>
                        </div>
                        <ChevronDown
                            className={`w-5 h-5 text-primary/70 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="p-6 pt-0 text-foreground/70 leading-relaxed border-t border-transparent">
                            {skill.desc}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
