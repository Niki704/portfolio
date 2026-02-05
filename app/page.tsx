import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Connect />
    </main>
  );
}
