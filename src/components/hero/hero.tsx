import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="flex items-center justify-between pt-64 pb-10">
                <div>
                    <h1 data-aos="fade-right"> Royan</h1>
                    <h1 data-aos="fade-right" className="leading-[50px] shadow-xl"> Dugu. </h1>
                    <div className="mt-10 h-[10px] bg-ternary lineAnimation" data-aos="fade-right"/>
                    <div className="iconContainer mt-32 flex gap-5" data-aos="fade-up">
                        <FaFacebookSquare />
                        <FaWhatsapp />
                        <FaGithub />
                        <FaLinkedinIn />
                    </div>
                </div>
                <div className="max-w-2xl">
                    <p className="text-[rgb(200,200,200)]" data-aos="fade-left"> - Introduction </p>
                    <h5 className="mt-6 leading-[60px]" data-aos="fade-left"> Welcome to my World of Web Development Excellence </h5>
                    <p className="mt-6 text-[rgb(200,200,200)]" data-aos="fade-left"> With years of hands-on experience in the dynamic realm of web development, I specialize in creating robust, scalable, and visually stunning web applications.</p>
                    <p className="text-ternary cursor-pointer mt-11 underline " data-aos="fade-up"> Read more </p>
                </div>
            </div>
        </section>
    )
}
export default Hero;