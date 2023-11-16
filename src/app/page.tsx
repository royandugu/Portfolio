import Header from "../../components/common/header/header";
import Home from "../../components/individual/home/home";
import About from "../../components/individual/about/about";
import Projects from "../../components/individual/projects/projects";
import Skills from "../../components/individual/skills/skills";
import Footer from "../../components/common/footer/footer";

const Page = () => {
  return (
    <>  
      <Header />
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </>

  )
}
export default Page;