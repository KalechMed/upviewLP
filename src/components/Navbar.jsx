import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

 

  const navigate = useNavigate();

  

  return (
    <nav className="w-full flex py-8  ml-10 mr-10 justify-between items-center navbar">
      <img src={logo} alt="upview" className="w-[145px] " />

      

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => 
              {
                setActive(nav.title)
                navigate(`/${nav.title}`)
              }
              }
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            
          </ul>
        </div>
        
        
      </div>
      
      <div className="flex justify-between">
      <button className="bg-transparent border border-white rounded-lg text-white px-8 py-2" onClick={() => {window.location.href = 'http://localhost:3000/login';}}>Sign in</button>

  <button className="bg-blue-500 rounded-lg text-white px-8 py-2 ml-4" onClick={() => {window.location.href = 'http://localhost:3000/signup';}} >Sign up</button>
</div>
    


    </nav>
  );
};

export default Navbar;
