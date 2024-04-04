"use client"

import { useState, useEffect } from "react";

import Header from "@/components/header/header";
import Hero from "../components/hero/hero";
import AosWrapper from "@/components/wrappers/aosWrapper";
import About from "@/components/about/about";
import HowIWork from "@/components/howIWork/howIWork";
import Services from "@/components/services/services";
import Projects from "@/components/projects/projects";
import ContextState from "@/context/contextStates";
import Footer from "@/components/footer/footer";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      if (document.readyState === 'complete') {
        setIsLoading(false);
      }
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [])

  if (isLoading) return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center">
      <img src="./loader.svg"/>
      <p className="mt-5"> Loading contents ..</p>
    </div>
  )
  else {
    return (
      <main style={{ scrollBehavior: 'smooth' }}>
        <ContextState>
          <AosWrapper>
            <Header />
            <Hero />
            <About />
            <HowIWork />
            <Services />
            <Projects />
            <Footer />
          </AosWrapper>
        </ContextState>
      </main>
    )
  }
}
export default Page;