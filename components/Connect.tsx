export default function Connect() {
    return (
        <section className="py-20 px-8 md:px-24" id="connect">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-primary">Let's Connect</h2>
                <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
                    Whether you're interested in my coding projects or my gaming content, I'd love to hear from you.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a
                        href="https://github.com/Niki704"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/niki704"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-blue-700 text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://youtube.com/@CoDNiki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-500 transition-all duration-300"
                    >
                        YouTube
                    </a>
                    <a
                        href="mailto:chamupathikarunaweera@gmail.com"
                        className="px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-500 transition-all duration-300"
                    >
                        Email Me
                    </a>
                </div>

                <footer className="mt-20 text-foreground/40 text-sm">
                    &copy; {new Date().getFullYear()} Niki. All rights reserved.
                </footer>
            </div>
        </section>
    );
}
