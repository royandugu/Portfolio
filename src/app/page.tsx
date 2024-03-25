"use client"

import Header from "@/components/header/header";
import Hero from "../components/hero/hero";
import AosWrapper from "@/components/wrappers/aosWrapper";
import About from "@/components/about/about";
import HowIWork from "@/components/howIWork/howIWork";
import Services from "@/components/services/services";

const Page = () => {
  return (
    <main>
      <AosWrapper>
        <Header />
        <Hero />
        <About/>
        <HowIWork/>
        <Services/>
      </AosWrapper>
    </main>
  )
}
export default Page;