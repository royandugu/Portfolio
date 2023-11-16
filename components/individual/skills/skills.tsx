import { skills } from "../../static/skills";

const Skills = () => {
    return (
        <main className="pt-32 pr-32 pl-[7.9%]">
            <section className="relative">
                <h1 className="text-[40px] font-bold">My Skills </h1>
                <div className="absolute top-[100px] w-[400px] z-20 border-[10px] border-solid border-white">
                    <img src="/Images/skillsPic.jpg" className="w-full" />
                </div>
                <div className="mt-10 pl-[150px]">
                    <div className="bg-[#ffdc80] pt-5 pb-20 pr-10 pl-[25%] flex-1 mt-[100px]">
                        {skills.map((skill, index) => (
                            <div key={index} className="mt-10">
                                <div className="flex justify-between items-center" key={index}>
                                    <h1 className="text-[22px] font-bold"> {skill.name} </h1>
                                    <h1 className="text-[15px] font-bold"> {skill.percentage}% </h1>
                                </div>


                                <div className="w-full h-2 mt-1 bg-white relative">
                                    <div className={`${skill.percentage === 90 ? 'w-[90%]' : skill.percentage === 80 ? 'w-[80%]':skill.percentage===70?'w-[70%]':skill.percentage===60 && 'w-[60%]'} h-2 bg-black`}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Skills;