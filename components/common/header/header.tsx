"use client"

import { useState } from "react";
import { menu } from "../../static/menu";
import Logo from "../widgets/logo";

const Header=()=>{
    const [scrolledDown,setScrolledDown]=useState(false);

    if(typeof window !== undefined){
        window.addEventListener("scroll",()=>{
            if(scrollY>=20) setScrolledDown(true);
            else setScrolledDown(false);
        })
    }

    return(
        <header className={`flex sticky top-0 justify-between p-10 pl-28 pr-28 items-center ${scrolledDown && 'border-1 border-b border-[#e0e0e0] '} bg-white z-30`}>
            <div className="flex items-center gap-1">
                <div className="flex justify-center items-center bg-black pl-5 pr-5">
                    <h1 className="text-white text-[40px] font-bold"> R </h1>
                </div>
                <div>
                    <h1 className="text-[30px] font-bold"> OYAN </h1>
                    <h1 className="text-[15px] font-bold text-[#424242]" style={{lineHeight:'1px'}}> Dugu </h1> 
                </div>
            </div>
            <nav> 
                <ul className="flex justify-evenly gap-10 items-center">

                    {menu.map((data,index)=>(
                        <li key={index}>
                            <h5> {data.name} </h5>
                        </li>
                    ))}
                    <button className=" bg-[#ffdc80] p-5"> Download portfolio </button>
                </ul>
            </nav>
        </header>
    )
}
export default Header;