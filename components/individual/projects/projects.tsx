import { projects } from "../../static/projects";

const Projects=()=>{

    return(
        <main className="pt-32 pl-[7.9%]">
            <section>
                <h1 className="text-[40px] font-bold"> Projects </h1>
                <div className="flex flex-wrap pt-5">
                    {projects.map((project,index)=>(
                        <div key={index} className="border-2 border-solid border-[rgb(240,240,240)] bg-cover" style={{backgroundImage:`url(${project.image})`}}>
                            <div className='addTransition p-24 px-32 bg-[rgba(0,0,0,.5)] hover:bg-transparent cursor-pointer'>
                                <h5 className="text-white font-bold text-[40px]"> {project.name} </h5>
                                <div className="bg-[#ffdc80] h-[5px] w-full"/>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
export default Projects;