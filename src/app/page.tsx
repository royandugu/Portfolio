"use client"

import Header from "@/components/header/header";
import Hero from "../components/hero/hero";
import AosWrapper from "@/components/wrappers/aosWrapper";

const Page = () => {
  return (
    <main>
      <AosWrapper>
        <Header />
        <Hero />
      </AosWrapper>
    </main>
  )
}
export default Page;