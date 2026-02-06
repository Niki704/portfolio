export default function About() {
    return (
        <section className="py-20 px-8 md:px-24 bg-foreground/5" id="about">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-primary">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-lg text-foreground/80">
                        <p>
                            I am a <strong>Software Engineering undergraduate</strong> currently reading for my <strong>BSc (Hons) in Software Engineering</strong> at Coventry University (UK). I have completed a <strong>Diploma in Software Engineering</strong> and am finalizing my <strong>Higher National Diploma</strong> at NIBM, maintaining a <strong>GPA of 3.7/4.0</strong>. Through this academic journey, I have built a strong foundation in <strong>Java, Next.js, and core web development concepts</strong>, along with experience using <strong>modern frameworks</strong>.
                        </p>
                        <p>
                            My focus is on <strong>designing well-structured and reliable systems</strong>, with careful attention to <strong>user needs, data flow, and scalable architecture</strong>. I am actively seeking a <strong>Software Engineering Internship</strong> where I can apply my skills in commercial-grade environments and continue growing as an engineer.
                        </p>
                        <p>
                            Beyond academics and development work, I have experience in <strong>competitive esports</strong>, which has strengthened my <strong>leadership, discipline, and strategic thinking</strong>—skills that translate directly into collaborative engineering teams.
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
                                <span className="font-bold">Founder of Zifty & CoD Mobile Content Creator</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
