import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
    return (
        <section className="relative">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-ternary" data-aos="fade-right"> Here are some of my </p>
                    <h5 data-aos="fade-right"> Projects </h5>
                </div>
            <div className="flex gap-5">
                    <div className="bg-ternary p-5 cursor-pointer">
                        <FaArrowLeft className="text-primary text-[20px]" />
                    </div>
                    <div className="bg-ternary p-5 cursor-pointer">
                        <FaArrowRight className="text-primary text-[20px]" />
                    </div>
                </div>
            </div>
            <div className="flex mt-14">
                <div className="w-1/3 pr-5">
                    <img src="./Images/Projects/wizeAdminDashboard.png" className="w-full" />
                    <div className="bg-secondary p-10 pr-5">
                        <p> Wize Consult : Design, Admin Dashboard, Student portal and CMS </p>
                        <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente, dicta laborum debitis perferendis delectus, exercitationem sunt! tenetur alias possimus? </p>
                        <button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button>
                    </div>
                </div>
                <div className="w-1/3 pr-5">
                    <img src="./Images/Projects/pokemon.png" className="w-full" />
                    <div className="bg-secondary p-10 pr-5">
                        <p> Pokemon : Light/Dark mode, Poke API implementation </p>
                        <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente, dicta laborum debitis perferendis delectus, exercitationem sunt! tenetur alias possimus? </p>
                        <button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button>
                    </div>
                </div>
                <div className="w-1/3 pr-5">
                    <img src="./Images/Projects/eventDashboard.png" className="w-full" />
                    <div className="bg-secondary p-10 pr-5">
                        <p> Event-Book : Socket Notification, Chat system, QR validation </p>
                        <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente, dicta laborum debitis perferendis delectus, exercitationem sunt! tenetur alias possimus? </p>
                        <button className="py-5 font-bold text-ternary uppercase text-[20px]">Project details</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Projects;