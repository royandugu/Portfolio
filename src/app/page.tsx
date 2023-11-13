import Header from "../../components/common/header/header";
import Home from "../../components/individual/home/home";
import About from "../../components/individual/about/about";
import Projects from "../../components/individual/projects/projects";

const Page = () => {
  return (
    <>  
      <Header />
      <Home/>
      <About/>
      <Projects/>
    </>

  )
}
export default Page;