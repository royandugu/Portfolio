import { FaCode } from "react-icons/fa";
import { menu } from "../statics/statics";

import "./header.css";

const Header = () => {
    return (
        <section className="header fixed top-0 left-0 right-0">
            <div className="flex justify-between items-center">
                <FaCode className="text-ternary text-8xl" />
                <div className="flex-1 flex justify-end">
                    <ul className="flex text-white gap-[3.8rem]">
                        {menu.map((content, index: number) => (
                            <li key={index} className={`${index===0 && 'selected'} cursor-pointer text-[rgb(200,200,200)] hover:text-white`}> {content} </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Header;