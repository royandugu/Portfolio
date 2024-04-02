"use client"

import context from '@/context/context';

import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
    const contextContainer=useContext(context);

    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    useEffect(()=>{
        if(inView) contextContainer.setActiveNav(4);
    },[inView])

    return (
        <section id="projects" className="relative">
            <div ref={ref} className="flex items-center justify-between">
                <div>
                    <p className="text-ternary" data-aos="fade-right"> Here are some of my </p>
                    <h5 data-aos="fade-right"> Projects </h5>
                </div>
            <div className="flex gap-5">
                    <div className="bg-ternary p-5 cursor-pointer bg-opacity-80 hover:bg-opacity-100">
                        <FaArrowLeft className="text-primary text-[20px]" />
                    </div>
                    <div className="bg-ternary p-5 cursor-pointer bg-opacity-80 hover:bg-opacity-100">
                        <FaArrowRight className="text-primary text-[20px]"/>
                    </div> 
                </div>
            </div>
            <div className="flex mt-14">
                <div className="w-full sm:w-1/2 lg:w-1/3 pr-5 flex-shrink-0">
                    <img src="./Images/Projects/wizeAdminDashboard.png" className="w-full" />
                    <div className="bg-secondary p-10 pr-5">
                        <p className='h-[120px] overflow-hidden'> Wize Consult : Design, Admin Dashboard, Student portal, CMS </p>
                        <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente, dicta laborum debitis perferendis delectus, exercitationem sunt! tenetur alias possimus? </p>
                        <button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 pr-5 flex-shrink-0">
                    <img src="./Images/Projects/pokemon.png" className="w-full" />
                    <div className="bg-secondary p-10 pr-5">
                        <p className='h-[120px] overflow-hidden'> Pokemon : Light/Dark mode, Poke API implementation </p>
                        <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente, dicta laborum debitis perferendis delectus, exercitationem sunt! tenetur alias possimus? </p>
                        <button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 pr-5 flex-shrink-0">
                    <img src="./Images/Projects/eventDashboard.png" className="w-full" />
                    <div className="bg-secondary p-10 pr-5">
                        <p className='h-[120px] overflow-hidden'> Event-Book : Socket Notification, Chat system, QR validation </p>
                        <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente, dicta laborum debitis perferendis delectus, exercitationem sunt! tenetur alias possimus? </p>
                        <button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Projects;