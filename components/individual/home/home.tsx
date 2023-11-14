import DotTexture from "../../common/widgets/dotTexture";
import Button from "../../common/widgets/button";

const Home = () => {
    return (
        <main className="flex">
            <section className="flex bg-[#ffdc80] w-2/3 justify-between relative">
                <div className="flex gap-10 pt-28 pb-28">
                    <div className="w-[17%]">
                        <DotTexture length={115} />
                    </div>
                    <div className="pr-20">
                        <h5 className="font-bold text-[25px]"> Hello, </h5>
                        <h1 className="text-[60px] font-bold"> I'am Royan </h1>
                        <h5 className="font-bold text-[25px]"> Full stack / MERN stack developer </h5>
                        <p className=" mt-5">I thrive on turning ideas into efficient and scalable software solutions. My love for coding extends to both the front-end and back-end, allowing me to create seamless and responsive web applications.</p>
                        <Button text="My Skills" background="#f5c845"/>
                    </div>
                </div>
                <div className="w-[26%]">
                    <DotTexture length={185}/>
                </div>
            </section>
            <section className="relative flex-1">
                <div className="absolute border-[10px] rounded-[50%] border-solid border-white top-[101.5px] left-[-150px] p-5">
                    <img src="./Images/file.jpg" className=" w-72 rounded-[50%]" />
                </div>
            </section>
        </main>
    )
}
export default Home;