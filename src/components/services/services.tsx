import { services } from "../statics/statics";
import { MdDesignServices } from "react-icons/md";
import { GiCargoCrate } from "react-icons/gi";
import { AiTwotoneApi } from "react-icons/ai";
import { SiDatocms } from "react-icons/si";
import { GiMagicPortal } from "react-icons/gi";
import { TbBrandSocketIo } from "react-icons/tb";
import { FiCornerDownRight } from "react-icons/fi";

import "./services.css";

const Services=()=>{
    return(
        <section>
            <div className="bg-secondary">
                <div className="flex gap-20 p-20">
                    <div>
                        <p className="text-ternary" data-aos="fade-right"> Here are some of my </p>
                        <h5 data-aos="fade-right"> Services </h5>
                        <h5 className="ml-[40%]"><FiCornerDownRight/></h5>
                    </div>
                    <div className="flex-1 gap-10 flex flex-wrap">
                        {services.map((ser,index:number)=>(
                            <div key={index} className="servicesContainer group border-2 hover:bg-white serviceContainer cursor-pointer w-[30%] flex flex-col justify-center items-center gap-5 border-white p-20">
                                
                                {index === 0 ? <h5 className="group-hover:text-black"><MdDesignServices/></h5>:index===1?<h5 className="group-hover:text-black"><GiCargoCrate/></h5>:index===2?<h5 className="group-hover:text-black"><AiTwotoneApi/></h5>:index===3?<h5 className="group-hover:text-black"><SiDatocms/></h5>:index===4?<h5 className="group-hover:text-black"><GiMagicPortal/></h5>:<h5 className="group-hover:text-black"><TbBrandSocketIo/></h5>}
                                 
                                
                                <h5 className=" group-hover:text-black text-[30px]"> {ser} </h5>
                            </div>
                        ))}
                    </div>
                </div>
            
            </div>
        </section>
    )
}
export default Services;