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
  return (
    <main style={{scrollBehavior:'smooth'}}>
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
export default Page;