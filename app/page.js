'use client';   //client side rendering
import About from "./components/About";
import Academics from "./components/Academics";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    < >
    <Navbar/>
    <Header/>
    <About/>
    <Academics/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
