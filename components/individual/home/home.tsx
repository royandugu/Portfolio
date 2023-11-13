import Button from "../../common/widgets/button";

const Home = () => {
    return (
        <main className="flex">
            <section className="flex bg-[#ffdc80] w-2/3 justify-between">
                <section className="flex gap-10 pt-20 pb-20">
                    <h5> section one </h5>
                    <div>
                        <h5> Hello </h5>
                        <h1> I'am Royan </h1>
                        <h5> Full stack developer </h5>
                        <p>I thrive on turning ideas into efficient and scalable software solutions. My love for coding extends to both the front-end and back-end, allowing me to create seamless and responsive web applications.</p>
                        <Button text="Click me"/>
                    </div>
                </section>
                <section>
                    <h5> Section two </h5>
                </section>
            </section>
        </main>
    )
}
export default Home;