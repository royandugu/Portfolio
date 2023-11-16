import Button from "../../common/widgets/button";
import MyStats from "../../common/widgets/myStats";

const About = () => {
    return (
        <main className="pt-32 pr-32 pl-[7.9%]">
            <section className="flex gap-16 justify-center items-center">
                <div className="w-[100%]">
                    <h1 className="text-[40px] font-bold">About Me</h1>
                    <p className=" mt-10">Hello, I'm Royan Dugu, a dedicated MERN (MongoDB, Express.js, React.js, Node.js) stack developer passionate about creating innovative and efficient web applications. My journey in the world of programming began with a fascination for crafting digital experiences that seamlessly blend creativity and functionality.</p>

                    <p className="mt-8">I am committed to staying updated with the latest trends and continuously expanding my skill set to deliver modern, user-centric solutions. Whether it's implementing RESTful APIs, designing responsive user interfaces, or optimizing database performance, I thrive on overcoming challenges and turning them into opportunities for growth.</p>

                    <Button text="Contact me" background="#ffdc80"/>
                </div>
                <div className="pt-10 flex gap-5 flex-wrap">
                    <MyStats/>
                    <MyStats/>
                    <MyStats/>
                    <MyStats/>
                </div>

            </section>
        </main>
    )
}
export default About;