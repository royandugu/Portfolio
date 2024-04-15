"use client"

import context from '@/context/context';
import Link from 'next/link';

import { useEffect, useContext, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css"

const ProjectOne = () => {
    return (
        <div className="w-full flex-shrink-0">
            <img src="./Images/Projects/wizeAdminDashboard.png" className="w-full" />
            <div className="bg-secondary p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Wize Consult : Design, Admin Dashboard, Student portal, CMS </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Welcome to our comprehensive educational platform designed to streamline administration, enhance student engagement, and facilitate content management. Our website combines intuitive user interfaces with powerful backend systems to provide a seamless experience for administrators, students, and content creators alike. </p>
                <Link href="/project/1" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button></Link>
            </div>
        </div>
    )
}
const ProjectTwo = () => {
    return (
        <div className="w-full flex-shrink-0">
            <img src="./Images/Projects/pokemon.png" className="w-full" />
            <div className="bg-secondary p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Pokemon : Light/Dark mode, Poke API implementation </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Embark on an exciting journey into the captivating world of Pokémon with this immersive website. We&apos;ve curated an experience that combines the nostalgia of the classic games and the excitement of modern technology. Dive into a vast collection of Pokémon information, powered by the PokeAPI, and explore a user-friendly interface designed to delight both seasoned trainers and newcomers alike.</p>
                <Link href="/project/2" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button></Link>
            
            </div>
        </div>
    )
}
const ProjectThree = () => {
    return (
        <div className="w-full flex-shrink-0">
            <img src="./Images/Projects/threeJS.png" className="w-full" />
            <div className="bg-secondary p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Virtual wear-on glasses prototype- Three.JS/Mediapipe </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden">In this project, I tried to understand the creation of a 3D glasses try-on application. Leveraging the powerful capabilities of both Three.js and TensorFlow, I was able to gasp the concept of rendering a glass over the face on the webcam. </p>
                <Link href="/project/3" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button></Link>
            </div>
        </div>
    )
}
const ProjectFour = () => {
    return (
        <div className="w-full flex-shrink-0">
            <img src="./Images/Projects/designersHub.png" className="w-full" />
            <div className="bg-secondary p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Designers Hub: Elevating Interior Designing to Artistry </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Designers Hub is to redefine interior designing as an art form and strive to blend aesthetics with practicality, creating spaces that not only delight the eyes but also enhance everyday living. The aim is to be the ultimate destination for anyone seeking inspiration, guidance, and expertise in interior design. </p>
                <Link href="/project/4" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button></Link>
            </div>
        </div>
    )
}
const ProjectFive = () => {
    return (
        <div className="w-full flex-shrink-0">
            <img src="./Images/Projects/funtasticEvents.png" className="w-full" />
            <div className="bg-secondary p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Event-Book : Event sorting, listing via location and End user&apos;s perspective </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden">Experience the pinnacle of event management with this cutting-edge platform designed to revolutionize the way you plan, book, and attend events. From seamless booking processes to real-time communication and secure validation, we&apos;ve got everything you need to ensure your event experience is nothing short of extraordinary. </p>
                <Link href="/project/5" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button></Link>
            
            </div>
        </div>
    )
}

const Projects = () => {
    const slider = useRef<any>(null);
    const sliderMid = useRef<any>(null);
    const sliderSml = useRef<any>(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    const settingsMid = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    }

    const settingsSmall = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    const contextContainer = useContext(context);

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    useEffect(() => {
        if (inView) contextContainer.setActiveNav(4);
    }, [inView])


    return (
        <section id="projects">
            <div ref={ref} className="flex items-center justify-between">
                <div>
                    <p className="text-ternary" data-aos="fade-right"> Here are some of my </p>
                    <h5 data-aos="fade-right"> Projects </h5>
                </div>
                <div className="flex gap-5">
                    <div className="bg-ternary p-5 cursor-pointer bg-opacity-80 hover:bg-opacity-100" onClick={() => {
                        slider?.current?.slickPrev()
                        sliderMid?.current?.slickPrev()
                        sliderSml?.current?.slickPrev()
                    }}>
                        <FaArrowLeft className="text-primary text-[20px]" />
                    </div>
                    <div className="bg-ternary p-5 cursor-pointer bg-opacity-80 hover:bg-opacity-100" onClick={() => {
                        slider?.current?.slickNext()
                        sliderMid?.current?.slickNext()
                        sliderSml?.current?.slickNext()
                    }}>
                        <FaArrowRight className="text-primary text-[20px]" />
                  </div>
                </div> 
            </div>
            <div className="mt-14 hidden xl:block">
                <Slider ref={slider} {...settings}>
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                    <ProjectFour />
                    <ProjectFive />
                </Slider>
            </div>
            <div className="mt-14 hidden md:block xl:hidden">
                <Slider ref={sliderMid} {...settingsMid}>
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                    <ProjectFour />
                    <ProjectFive />
                </Slider>
            </div>
            <div className="mt-14 block md:hidden">
                <Slider ref={sliderSml} {...settingsSmall}>
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                    <ProjectFour />
                    <ProjectFive />
                </Slider>
            </div>
        </section>
    )
}
export default Projects;