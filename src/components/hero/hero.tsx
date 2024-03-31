"use client"

import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";

import Link from "next/link";

import context from "@/context/context";

import "./hero.css";

const Hero = () => {
    const contextContainer=useContext(context);

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(()=>{
        if(inView) contextContainer.setActiveNav(0);
    },[inView])

    return (
        <section id="hero" className="hero relative">
            <div ref={ref} className="flex flex-col md:flex-row items-center justify-between pt-64 pb-10">
                <div> 
                    <h1 data-aos="fade-right"> Royan</h1>
                    <h1 data-aos="fade-right" className="leading-[50px] shadow-xl"> Dugu. </h1>
                    <div className="mt-10 h-[10px] bg-ternary lineAnimation" data-aos="fade-right" />
                    <div className="iconContainer mt-32 flex gap-5" data-aos="fade-up">
                        <FaFacebookSquare />
                        <FaWhatsapp />
                        <FaGithub />
                        <FaLinkedinIn />
                    </div>
                </div>
                <div className="w-1/2 pl-20">
                    <p className="text-[rgb(200,200,200)]" data-aos="fade-left"> - Introduction </p>
                    <h5 className="mt-6 leading-[50px] brk1:leading-[60px]" data-aos="fade-left"> Welcome to my World of Web Development Excellence </h5>
                    <p className="mt-6 text-[rgb(200,200,200)]" data-aos="fade-left"> With years of hands-on experience in the dynamic realm of web development, I specialize in creating robust, scalable, and visually stunning web applications.</p>
                    <Link href="./resume.pdf" download={"resume.pdf"}><p className="text-ternary cursor-pointer mt-11 underline" data-aos="fade-up"> Download CV </p></Link>
                </div>
            </div>
            <div className="absolute z-[-1] bottom-0 left-[15%] opacity-10 w-[40%] animateTopDown">
                <img src="./Images/myCartoon.png" className="w-full"/>
            </div>
        </section>
    )
}
export default Hero;