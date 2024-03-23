import { FaCode } from "react-icons/fa";

import "./header.css";
const Header = () => {
    return (
        <section className="header fixed top-0 left-0 right-0">
            <div className="flex justify-between items-center">
                <FaCode className="text-ternary text-8xl" />
                <ul className="flex text-white gap-10">
                    <li> Home </li>
                    <li> About </li>
                </ul>
            </div>

        </section>
    )
}
export default Header;