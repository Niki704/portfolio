import CoreSkillsAccordion from "./CoreSkillsAccordion";

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
                    <div className="flex items-center gap-2 mb-12">
                        <h2 className="text-4xl font-bold text-primary">Core Skills</h2>
                        <p className="text-2xl font-bold text-primary pt-1"> (Important) </p>
                    </div>
                    <CoreSkillsAccordion
                        skills={[
                            { title: "System Architecture & Design", desc: "I begin every feature by analyzing requirements and selecting a technology stack that balances efficiency, maintainability, and scalability. My approach is database-first—I design the data model early, as it often exposes architectural issues at first sight. After a feasibility check, I define how features and services interconnect and how data flows across the application to ensure user needs are met. Before any feature reaches production, a security review is a mandatory part of my process." },
                            { title: "Problem Solving from a User Perspective", desc: "When addressing a requirement, I approach it from the user’s perspective, not just as a developer. Small oversights can easily lead to UX frustration, so I consider how each feature behaves in real user environments. Many implementations fail because they focus solely on how to build something rather than how it is experienced. Even simple navigation or interaction issues can negatively impact usability. Especially in academic environments where dedicated QA teams are unavailable, this mindset allows me to proactively identify issues and ensure user expectations are fulfilled." },
                            { title: "Prioritizing Logic Over Syntax", desc: "When it comes to business logic, coding itself is not the most important part. Every domain has its own logic and underlying infrastructure that must be understood first. If that understanding is wrong, even the most polished UI cannot compensate. This mindset shaped the start of my development journey while building a hospital billing system. Before writing any code, I studied how real-world billing systems operate, then designed functions that interact with each other to accurately satisfy those business requirements." },
                            { title: "Code Review & Understanding Codebases", desc: "AI has significantly accelerated modern development, productivity has increased—but I never rely on it blindly. Regardless of the source or language, I review and understand code before integrating it into a project. Knowing what the code does is essential for debugging, maintaining quality, and ensuring security. The same discipline applies when working with existing codebases—before making changes, I take time to understand why each file exists, how components interact, and where responsibilities lie. This ensures safe modifications and long-term maintainability." }
                        ]}
                    />
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
