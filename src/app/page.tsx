"use client"

import Header from "@/components/header/header";
import Hero from "../components/hero/hero";
import AosWrapper from "@/components/wrappers/aosWrapper";
import About from "@/components/about/about";
import HowIWork from "@/components/howIWork/howIWork";
import Services from "@/components/services/services";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";

const Page = () => {
  return (
    <main>
      <AosWrapper>
        <Header />
        <Hero />
        <About/>
        <HowIWork/>
        <Services/>
        <Projects/>
        <Footer/>
      </AosWrapper>
    </main>
  )
}
export default Page;