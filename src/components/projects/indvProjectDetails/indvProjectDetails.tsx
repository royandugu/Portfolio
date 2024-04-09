import { MdOutlineTurnLeft } from "react-icons/md";

const projects = [
    {
        image: "/Images/Projects/wizeHomePage.png",
        title: "Wize Consult : Design, Admin Dashboard, Student portal, CMS"
    },
    {
        image: "/Images/Projects/wizeAdminDashboard.png",
        title: "Wize Consult : Design, Admin Dashboard, Student portal, CMS"
    },
    {
        image: "/Images/Projects/wizeAdminDashboard.png"
    },
    {
        image: "/Images/Projects/wizeAdminDashboard.png"
    },
    {
        image: "/Images/Projects/wizeAdminDashboard.png"
    },
    {
        image: "/Images/Projects/wizeAdminDashboard.png"
    }
]


const IndvProjectDetails = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <div className="h-[50vh]" style={{ background: `url(${projects[parseInt(params.id) - 1].image})`, backgroundSize: "cover", backgroundPosition: "fixed", opacity: .5 }} />
            <section>
                <p className="text-ternary"> {projects[parseInt(params.id) - 1].title} </p>
                <p className="mt-5 max-w-3xl"> I'm excited to present a glimpse of my expertise in developing dynamic consultancy websites equipped with advanced features to streamline operations and engage users effectively. Here's what sets my consultancy websites apart:
                </p>
            </section>
            <div className="bg-ternary p-3 cursor-pointer bg-opacity-80 hover:bg-opacity-100 absolute top-5 left-5">
                <MdOutlineTurnLeft className="text-primary text-[40px]" />
            </div>
        </>
    )
}

export default IndvProjectDetails;