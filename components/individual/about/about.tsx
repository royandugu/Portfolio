import Button from "../../common/widgets/button";

const About = () => {
    return (
        <main className="pt-32 pl-[7.9%]">
            <section className="flex">
                <div>
                    <h1 className="text-[40px] font-bold">About Me</h1>
                    <p className=" mt-10">Hello, I'm Royan Dugu, a dedicated MERN (MongoDB, Express.js, React.js, Node.js) stack developer passionate about creating innovative and efficient web applications. With a solid foundation in full-stack development, I enjoy the challenge of bringing ideas to life through clean and scalable code. My journey in the world of programming began with a fascination for crafting digital experiences that seamlessly blend creativity and functionality. Over the years, I have honed my skills in JavaScript, leveraging the power of React.js for dynamic and interactive front-end development, and Node.js for building robust and scalable server-side applications.</p>

                    <p className="mt-8">One of the aspects of development that excites me the most is the ever-evolving nature of technology. I am committed to staying updated with the latest trends and continuously expanding my skill set to deliver modern, user-centric solutions. Whether it's implementing RESTful APIs, designing responsive user interfaces, or optimizing database performance, I thrive on overcoming challenges and turning them into opportunities for growth. I believe in the importance of writing clean, maintainable code and fostering a collaborative and innovative development environment.</p>

                    <Button text="Contact me" background="#ffdc80"/>
                </div>
                <div>
                    <h1> Stats </h1>
                </div>

            </section>
        </main>
    )
}
export default About;