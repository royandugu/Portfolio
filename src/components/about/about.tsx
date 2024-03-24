import AboutSvg from "../svgs/aboutSvg";

const About=()=>{
    return(
        <section>
            <h1> Hello </h1>
            <div className="bg-secondary relative p-20">
                <div className="absolute top-[-30px] left-0 h-[90px] w-[90px] bg-ternary"></div>
                <div className="flex">
                    <AboutSvg/>
                    <a href="https://storyset.com/work">Work illustrations by Storyset</a>  
                </div>
            </div>
            
        </section>
    )
}
export default About;