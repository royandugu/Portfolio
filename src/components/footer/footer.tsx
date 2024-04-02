import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { menu } from "../statics/statics";

const Footer = () => {
    return (
        <footer id="footer" className="bg-secondary bg-opacity-40 mt-20 relative">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-1/3 justify-center md:justify-start flex">
                    <Link href="#hero" className="bg-ternary bg-opacity-80 hover:bg-opacity-100 p-5 cursor-pointer relative">
                        <FaArrowUp className="text-primary text-[20px] animateArrowUpDown"/>
                    </Link>
                </div> 
                <div className="w-full md:w-1/2 lg:w-1/3 mt-10 md:mt-0 text-center flex-col items-center justify-center">
                    <h5> Let's Talk ? </h5>
                    <div className="flex flex-wrap gap-5 mt-10 justify-center">
                        {menu.map((mn,index:number)=>(
                            <div key={index} className="text-[rgb(200,200,200)]">
                                {mn.text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
                    <button className=" bg-transparent border-2 border-[rgb(200,200,200)] text-[rgb(200,200,200)] px-5 py-3 uppercase font-bold"> Contact me </button>
                </div>
            </div>

        </footer>

    )
}
export default Footer;