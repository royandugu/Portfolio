"use client"

import Header from "@/components/header/header";
import Hero from "../components/hero/hero";
import AosWrapper from "@/components/wrappers/aosWrapper";
import About from "@/components/about/about";

const Page = () => {
  return (
    <main>
      <AosWrapper>
        <Header />
        <Hero />
        <About/>
      </AosWrapper>
    </main>
  )
}
export default Page;