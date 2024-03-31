"use client"

import context from '@/context/context';

import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const contextContainer=useContext(context);

    const { ref, inView } = useInView({
        threshold: 0.7,
    });

    useEffect(()=>{
        if(inView) contextContainer.setActiveNav(1);
    },[inView])

    const frameworkExpertise = [
        {
            name: "React.JS",
            per: "90"
        },
        {
            name: "NEXT.JS",
            per: "80"
        },
        {
            name: "Node.JS",
            per: "50"
        }
    ]

    const languageExpertise = [
        {
            name: "HTML/CSS",
            per: "90"
        },
        {
            name: "HTML/CSS",
            per: "90"
        },
        {
            name: "HTML/CSS",
            per: "90"
        }
    ]

    return ( 
        <section>
            <div id="about" ref={ref} className="bg-secondary relative p-20 pl-10 pr-10 md:pl-20 md:pr-20 ">
                <div className="absolute top-[-30px] left-0 h-[90px] w-[90px] bg-ternary"></div>
                <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                    <div className="md:flex-1">
                        <p className="text-ternary" data-aos="fade-right"> - Education </p>
                        <p className="mt-6 text-[rgb(200,200,200)]" data-aos="fade-right"> With years of hands-on experience in the dynamic realm of web development, I specialize in creating robust, scalable, and visually stunning web applications.</p>
                        <p className="text-ternary mt-10" data-aos="fade-right"> - Framework Expertise </p>
                        {languageExpertise.map((lg,index:number) => (
                            <div key={index} className="h-[20px] mt-5 w-[90%] bg-primary">
                                <div className={`h-[20px] bg-ternary w-[50%]`} data-aos="fade-left">
                                </div>
                            </div>
                        ))} 
                    </div>
                    <div className="md:w-1/2 md:pl-20">
                        <div className="border-2 border-ternary w-full" data-aos="fade-left">
                            <img src="./Images/myPhoto.jpg" className="w-full" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[-150px] left-[50%] bg-ternary h-[150px] w-[20px]" data-aos="fade-up" />
            </div>
        </section>
    )
}
export default About;