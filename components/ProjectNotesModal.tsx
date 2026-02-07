"use client";

import { useEffect, useState } from "react";
import { X, StickyNote } from "lucide-react";

interface Note {
    title: string;
    content: React.ReactNode;
    type: string;
    date: string;
}

interface ProjectNotesModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectTitle: string;
    notes: Note[];
}

export default function ProjectNotesModal({ isOpen, onClose, projectTitle, notes }: ProjectNotesModalProps) {
    const [activeTab, setActiveTab] = useState(0);

    // Lock body scroll when modal is open and reset tab
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setActiveTab(0); // Reset tab when modal opens
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, projectTitle]);

    if (!isOpen) return null;

    const currentNote = notes[activeTab] || notes[0];
    if (!currentNote) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-zinc-900 w-full max-w-4xl h-[85vh] rounded-3xl shadow-2xl border border-foreground/10 overflow-hidden relative flex flex-col animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 border-b border-foreground/10 flex justify-between items-center bg-foreground/5 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <StickyNote className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">{projectTitle}</h3>
                            <p className="text-sm text-foreground/60">Project Insights & Reviews</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 opacity-70" />
                    </button>
                </div>

                {/* Tabs & Content */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar Tabs (Desktop) / Top Tabs (Mobile) */}
                    <div className="w-64 border-r border-foreground/10 bg-foreground/[0.02] flex flex-col overflow-y-auto hidden md:flex shrink-0">
                        <div className="p-4 space-y-2">
                            {notes.map((note, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 border ${activeTab === index
                                        ? "bg-white dark:bg-zinc-800 border-primary/20 shadow-sm"
                                        : "hover:bg-foreground/5 border-transparent text-foreground/60"
                                        }`}
                                >
                                    <div className="font-medium text-sm mb-1 line-clamp-1">{note.title}</div>
                                    <div className="flex justify-between items-center text-xs opacity-70">
                                        <span className="capitalize">{note.type}</span>
                                        <span>{note.date}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-zinc-900/50">
                        {/* Mobile Tabs */}
                        <div className="md:hidden flex overflow-x-auto p-4 gap-2 border-b border-foreground/10 shrink-0">
                            {notes.map((note, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === index
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-foreground/5 text-foreground/70"
                                        }`}
                                >
                                    {note.title}
                                </button>
                            ))}
                        </div>

                        {/* Note Body */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            <div className="max-w-3xl mx-auto space-y-6">
                                <div className="mb-6 pb-6 border-b border-foreground/5">
                                    <h2 className="text-2xl font-bold text-foreground mb-2">
                                        {currentNote.title}
                                    </h2>
                                    <div className="flex gap-3 text-sm text-foreground/50">
                                        <span className="px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10 uppercase text-xs font-semibold tracking-wider">
                                            {currentNote.type}
                                        </span>
                                        <span>•</span>
                                        <span>{currentNote.date}</span>

                                    </div>
                                </div>
                                <div className="prose dark:prose-invert max-w-none text-foreground/80 leading-relaxed">
                                    <div className="prose dark:prose-invert max-w-none text-foreground/80 leading-relaxed">
                                        {currentNote.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-foreground/10 bg-foreground/5 flex justify-end shrink-0">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
