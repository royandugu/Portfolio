"use client"

import context from '@/context/context';

import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

const HowIWork=()=>{
    const contextContainer=useContext(context);

    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    useEffect(()=>{
        if(inView) contextContainer.setActiveNav(2);
    },[inView])

    return(
        <section id="howIWork" data-aos="fade-right">
            <h5 className="text-center"> How I Work <span className="text-ternary">?</span></h5>
            <div className="flex flex-col md:flex-row items-center gap-20 mt-20">
                <div ref={ref} className="flex-1 w-1/2" data-aos="fade-right">
                    <img src="./Images/collaboration.svg"/>
                </div>
                <div className="flex-1" data-aos="fade-left">
                    <p className="text-[rgb(200,200,200)]"> - Requirement Analysis </p>
                    <p className="mt-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime ratione facere incidunt, molestias ad nemo cum, laudantium sunt aperiam dolorem quasi voluptatum commodi beatae ut iste amet illo eos?</p>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-20 mt-20">
                <div className="flex-1" data-aos="fade-right">
                    <p className="text-[rgb(200,200,200)]"> - Design </p>
                    <p className="mt-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime ratione facere incidunt, molestias ad nemo cum, laudantium sunt aperiam dolorem quasi voluptatum commodi beatae ut iste amet illo eos?</p>
                </div>
                <div className="w-1/2" data-aos="fade-left">
                    <img src="./Images/design.svg"/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-20 mt-20">
                <div className="w-1/2" data-aos="fade-right">
                    <img src="./Images/coding.svg"/>
                </div>
                <div className="flex-1" data-aos="fade-left">
                    <p className="text-[rgb(200,200,200)]"> - Coding </p>
                    <p className="mt-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime ratione facere incidunt, molestias ad nemo cum, laudantium sunt aperiam dolorem quasi voluptatum commodi beatae ut iste amet illo eos?</p>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-20 mt-20">
                <div className="flex-1" data-aos="fade-right">
                    <p className="text-[rgb(200,200,200)]"> - Testing </p>
                    <p className="mt-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime ratione facere incidunt, molestias ad nemo cum, laudantium sunt aperiam dolorem quasi voluptatum commodi beatae ut iste amet illo eos?</p>
                </div>
                <div className="w-1/2" data-aos="fade-left">
                    <img src="./Images/testing.svg"/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-20 mt-20">
                <div className="w-1/2" data-aos="fade-right">
                    <img src="./Images/review.svg"/>
                </div>
                <div className="flex-1" data-aos="fade-left">
                    <p className="text-[rgb(200,200,200)]"> - Deployement </p>
                    <p className="mt-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime ratione facere incidunt, molestias ad nemo cum, laudantium sunt aperiam dolorem quasi voluptatum commodi beatae ut iste amet illo eos?</p>
                </div>
            </div>
        </section>
    )
}
export default HowIWork;