import { menu } from "../../static/menu";

const Header=()=>{
    return(
        <header className="flex justify-between p-10 pl-28 pr-28 items-center">
            <h1> Royan </h1>
            <nav> 
                <ul className="flex justify-evenly gap-10 items-center">

                    {menu.map((data,index)=>(
                        <li key={index}>
                            <h5> {data.name} </h5>
                        </li>
                    ))}
                    <button className=" bg-[#ffdc80] p-5"> Download portfolio </button>
                </ul>
            </nav>
        </header>
    )
}
export default Header;