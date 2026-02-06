export default function Projects() {
    return (
        <section className="py-20 px-8 md:px-24" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-primary">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Zifty GG Card */}
                    <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-foreground/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
                        <div className="p-8 flex-1">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Zifty GG</h3>
                            <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">Next.js • Supabase • ML</p>
                            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                                A commercial-level full stack gaming community platform. Features authentication, role-based access,
                                public feed, clan management, tournaments, and an ML model to classify players based on performance.
                            </p>
                        </div>
                        <div className="px-8 pb-8">
                            <span className="text-sm font-bold text-foreground/40 group-hover:text-foreground/80 transition-colors">Higher Diploma Project</span>
                        </div>
                    </div>

                    {/* University Event Management System */}
                    <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-foreground/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
                        <div className="p-8 flex-1">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Uni Management System</h3>
                            <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">Spring Boot • MySQL • Hibernate</p>
                            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                                A RESTful backend system to manage students, lecturers, & batches.
                                Implemented layered architecture (Controllers, Services, DTOs) ensuring data integrity and consistent API responses.
                            </p>
                        </div>
                        <div className="px-8 pb-8">
                            <span className="text-sm font-bold text-foreground/40 group-hover:text-foreground/80 transition-colors">Enterprise App Dev</span>
                        </div>
                    </div>

                    {/* Sprintify */}
                    <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-foreground/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
                        <div className="p-8 flex-1">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Sprintify</h3>
                            <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">Flutter • Arduino • Firebase</p>
                            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                                IoT-based Sprint Tracker Mobile App. Integrated with Arduino to track sprint/performance metrics in real-time.
                                Uses Firebase for secure user access and live data synchronization.
                            </p>
                        </div>
                        <div className="px-8 pb-8">
                            <span className="text-sm font-bold text-foreground/40 group-hover:text-foreground/80 transition-colors">IoT Project</span>
                        </div>
                    </div>

                    {/* Player Classification System */}
                    <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-foreground/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
                        <div className="p-8 flex-1">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Player Classification</h3>
                            <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">Python • Pandas • Scikit-learn</p>
                            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                                Machine Learning model generating a Player Performance Prediction Score (PPPS) via notebooks.
                                Automates the player classification ecosystem for Zifty.
                            </p>
                        </div>
                        <div className="px-8 pb-8">
                            <span className="text-sm font-bold text-foreground/40 group-hover:text-foreground/80 transition-colors">ML Project</span>
                        </div>
                    </div>

                    {/* Media Mart */}
                    <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-foreground/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
                        <div className="p-8 flex-1">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Media Mart</h3>
                            <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">HTML/CSS • PHP • JS</p>
                            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                                A pure no-framework link-aggregation website. Organized movies, games, and music into structured categories
                                with clean markup and minimal server-side logic.
                            </p>
                        </div>
                        <div className="px-8 pb-8">
                            <span className="text-sm font-bold text-foreground/40 group-hover:text-foreground/80 transition-colors">Modern Web Project</span>
                        </div>
                    </div>

                    {/* Hospital Billing System */}
                    <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-foreground/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
                        <div className="p-8 flex-1">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Hospital Billing System</h3>
                            <p className="text-xs uppercase tracking-wider font-bold text-primary mb-4">C</p>
                            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                                C-based hospital billing system that marked my first deep dive into programming, combining core language fundamentals into a structured, state-driven application without external frameworks.
                            </p>
                        </div>
                        <div className="px-8 pb-8">
                            <span className="text-sm font-bold text-foreground/40 group-hover:text-foreground/80 transition-colors">Programming Fundamentals Project</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
