import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HighlightsBento from "@/components/HighlightsBento";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="page-container">
        <Hero />
        <HighlightsBento />
        <About />
        <Education />
        <Experience />
        <Research />
        <Skills />
        <Projects />
        <Certifications />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
