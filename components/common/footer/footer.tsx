
import Logo from "../widgets/logo";

const Footer=()=>{
    return(
        <main className="bg-[#363636] mt-40">
            <section className="flex pl-[7.9%]">
                <div className="w-1/3 pr-10">
                    <div className="bg-black text-center p-7 flex flex-col items-center mt-14">
                        <Logo inverse={true}/>
                        <p className="mt-10 font-bold text-white">I thrive on turning ideas into efficient and scalable software solutions.</p>
                        <h1 className="text-[20px] mt-5 font-bold text-white"> Follow me </h1>
                        <div className="flex mt-3 gap-2">
                            <i className="icon-facebook"></i>
                        </div>
        
                    </div>
                </div>
                <div className="w-1/3"> 

                </div>
                <div className="w-1/3">
 
                </div>
            </section>
        </main>
    )
}
export default Footer;