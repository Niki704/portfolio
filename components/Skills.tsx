export default function Skills() {
    const languages = ["Java", "C", "C#", "JavaScript", "TypeScript"];
    const mobile = ["Flutter (Dart)", "Kotlin"];
    const web = ["Next.js", "React", "Laravel", "Spring Boot", "Tailwind CSS"];
    const db = ["MySQL", "Supabase (PostgreSQL)", "Firebase", "MSSQL", "SQLite"];
    const professional = ["System Design", "Architecture Thinking", "Client Oriented Analysis", "Debugging"];

    return (
        <section className="py-20 px-8 md:px-24 bg-foreground/5" id="skills">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-primary">Technical Skills</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            Programming Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {languages.map(skill => <SkillBadge key={skill} name={skill} />)}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            Web App Development
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {web.map(skill => <SkillBadge key={skill} name={skill} />)}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            Mobile App Development
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {mobile.map(skill => <SkillBadge key={skill} name={skill} />)}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            Database Management
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {db.map(skill => <SkillBadge key={skill} name={skill} />)}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            Professional Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {professional.map(skill => <SkillBadge key={skill} name={skill} />)}
                        </div>
                    </div>

                </div>

                {/* Core Skills Section */}
                <div className="mt-20">
                    <h2 className="text-4xl font-bold mb-12 text-primary">Core Skills</h2>
                    <div className="space-y-8">
                        {[
                            { title: "Advanced Problem Solving", desc: "Ability to break down complex system requirements into manageable, scalable, and efficient code components." },
                            { title: "User-Centric Design", desc: "Focusing on the end-user experience by implementing intuitive interfaces and smooth interaction flows." },
                            { title: "Agile Methodology", desc: "Experienced in iterative development, sprint planning, and adapting to changing requirements rapidly." },
                            { title: "Code Optimization", desc: "Writing clean, maintainable, and high-performance code to ensure optimal application speed and reliability." }
                        ].map((skill, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="w-3 h-3 rounded-full bg-primary mt-2.5 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{skill.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed max-w-2xl">
                                        {skill.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillBadge({ name }: { name: string }) {
    return (
        <span className="px-5 py-2 bg-white dark:bg-zinc-800 rounded-lg text-foreground/90 text-sm font-medium border border-foreground/10 hover:border-primary/50 transition-colors shadow-sm">
            {name}
        </span>
    );
}
