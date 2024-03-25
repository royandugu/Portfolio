"use client"

import { FaCode } from "react-icons/fa";
import { menu } from "../statics/statics";
import { useEffect, useState } from "react";

import "./header.css";

const Header = () => {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Check if user scrolled down a little
      if (window.scrollY > 50) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header className={`header fixed bg-primary top-0 left-0 right-0 ${scrolledDown && 'py-5'}`}>
      <div className="flex justify-between items-center">
        <FaCode className="text-ternary text-8xl" data-aos="fade-right" />
        <div className="w-1/2 pl-20 flex justify-end" data-aos="fade-left">
          <ul className="flex text-white w-full justify-between">
            {menu.map((content, index: number) => (
              <li key={index} className={`${index === 0 && 'selected'} cursor-pointer text-[rgb(200,200,200)] hover:text-white`}> {content} </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header;