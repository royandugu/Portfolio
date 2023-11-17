import { FaRegMap } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

import Logo from "../widgets/logo";
import Link from "next/link";
const Footer = () => { 
    return (
        <main className="bg-[#363636] mt-40 pb-20">
            <section className="flex pl-[7.9%] pt-14">
                <div className="w-1/3 pr-10">
                    <div className="bg-black text-center p-7 flex flex-col items-center">
                        <Logo inverse={true} />
                        <p className="mt-10 font-bold text-white">I thrive on turning ideas into efficient and scalable software solutions.</p>
                        <h1 className="text-[20px] mt-5 font-bold text-white"> Follow me </h1>
                        <div className="flex mt-3 gap-2">
                            <i className="icon-facebook"></i>
                            <i className="icon-whatsapp"></i>
                        </div>

                    </div>
                </div>
                <div className="w-1/3 pl-20">
                    <div className="flex items-center gap-3">
                        <FaRegMap className="text-[#ffdc80] text-[60px]"/>
                        <div>
                            <h5 className="text-white font-bold"> Madhyapur Thimi </h5>
                            <h5 className="text-white"> Bhaktapur </h5> 
                        </div>
                    </div>
                    <h5 className="text-white font-bold text-[25px] mt-[70px]"> Useful links </h5>
                    <span className="animate-border border-black"></span>
                    <div className=" mt-7 flex gap-20">
                        <ul>
                            <li>
                                <Link href="#" className=" text-[#a6a6a6] hover:text-white"> Home </Link>
                            </li>
                            <li className="mt-5">
                                <Link href="#" className="text-[#a6a6a6] hover:text-white"> About </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link href="#" className="text-[#a6a6a6] hover:text-white"> Projects </Link>
                            </li>
                            <li className="mt-5">
                                <Link href="#" className="text-[#a6a6a6] hover:text-white"> Skills </Link>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div className="w-1/3">
                    <div className="flex items-center gap-3">
                        <FaPhoneFlip className="text-[#ffdc80] text-[40px]"/>
                        <div>
                            <h5 className="text-white font-bold"> +977 9864460627 </h5>
                            <h5 className="text-white"> Give a call </h5> 
                        </div>
                    </div>
                    <h5 className="text-white font-bold text-[25px] mt-[82px]"> My Github </h5>
                    <span className="animate-border border-black"></span>
                    <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" className="rounded-[50%] h-[120px] w-[120px] mt-5 cursor-pointer"/>
                </div>
            </section>
        </main>
    )
}
export default Footer;