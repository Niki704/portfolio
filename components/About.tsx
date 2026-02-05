export default function About() {
    return (
        <section className="py-20 px-8 md:px-24 bg-foreground/5" id="about">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-primary">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-lg text-foreground/80">
                        <p>
                            I am a <strong>Full Stack Software Engineer</strong> and an undergraduate reading for my <strong>BSc (Hons) in Software Engineering</strong> at Coventry University (UK).
                            I currently hold a Higher National Diploma and a Diploma in Software Engineering from NIBM (GPA 3.7/4.0), where I honed my skills in <strong>Java (Spring Boot), Next.js, and Flutter</strong>.
                        </p>
                        <p>
                            My focus is on designing well-structured systems, considering user needs, data flow, and reliable architecture.
                            I'm actively seeking a Software Engineering Internship to apply my skills in real-world projects.
                        </p>
                        <p>
                            Beyond coding, I am a professional <strong>Call of Duty: Mobile</strong> player.
                            My channel 'CoD Niki' has amassed massive views, teaching me discipline, strategic thinking, and resilience under pressure.
                        </p>
                    </div>

                    <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
                        <h3 className="text-2xl font-semibold mb-4 text-primary">Education & Highlights</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-primary rounded-full mt-1.5"></span>
                                <div>
                                    <span className="font-bold block">BSc (Hons) Software Engineering</span>
                                    <span className="text-sm text-foreground/60">Coventry University (Expected)</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-primary rounded-full mt-1.5"></span>
                                <div>
                                    <span className="font-bold block">Higher National Diploma in SE</span>
                                    <span className="text-sm text-foreground/60">NIBM (Ongoing)</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-primary rounded-full mt-1.5"></span>
                                <div>
                                    <span className="font-bold block">Diploma in Software Engineering</span>
                                    <span className="text-sm text-foreground/60">NIBM (GPA 3.7/4.0)</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-3 h-3 bg-primary rounded-full"></span>
                                <span>CoD Mobile Content Creator</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
