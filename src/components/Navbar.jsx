import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="NavContainer relative">
      <div className={`flex w-full bg-[#ebe7d9] h-16 m-auto justify-between items-center px-16 ${menu ? 'hidden' : 'flex'}`}>

              {/* -------------------------------logo------------------------------- */}
              
        <div className="logo text-[28px] text-[#254336] font-bold">
          <Link to="/"><h2 className="hover:scale-110  transition ease-in-out duration-300">evento</h2></Link>
        </div> 
                {/* ----------------- nav for bigger screen ---------------------------  */}

        <div className="hidden md:flex Navlinks text-[#6B8A7A] gap-10">
          <Link className="hover:text-[#254336] text-[18px] hover:scale-110  transition ease-in-out duration-300" to="/">Home</Link>
          <Link className="hover:text-[#254336] text-[18px] hover:scale-110 transition ease-in-out duration-300" to="/about">About</Link>
          <Link className="hover:text-[#254336] text-[18px] hover:scale-110 transition ease-in-out duration-300" to="/event">Events</Link>
          <Link className="hover:text-[#254336] text-[18px] hover:scale-110 transition ease-in-out duration-300" to="/contact">Contact</Link>
          <Link className="hover:text-[#254336] text-[18px] hover:scale-110 transition ease-in-out duration-300" to="/login">Login</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#254336"> <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></button>
        </div>
      </div>

            {/*---------------------- Responsive nav for mobile devices----------------------  */}


      {menu && (<div className="responsive-nav absolute bg-[#B7B597] w-full h-screen z-10 top-0 left-0 flex flex-col items-center justify-center gap-5">
        <button onClick={toggleMenu} className="absolute top-5 right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#254336"
          >
            <path d="M294-240l186-186 186 186 56-56-186-186 186-186-56-56-186 186-186-186-56 56 186 186-186 186 56 56Z" />
          </svg>
        </button>

        <Link className="text-[#254336] text-2xl hover:text-white hover:scale-110 transition ease-in-out duration-300" to="/" onClick={toggleMenu}>Home</Link>
        <Link className="text-[#254336] text-2xl hover:text-white hover:scale-110 transition ease-in-out duration-300" to="/about" onClick={toggleMenu}>About</Link>
        <Link className="text-[#254336] text-2xl hover:text-white hover:scale-110 transition ease-in-out duration-300" to="/event" onClick={toggleMenu}>Events</Link>
        <Link className="text-[#254336] text-2xl hover:text-white hover:scale-110 transition ease-in-out duration-300" to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link className="text-[#254336] text-2xl hover:text-white hover:scale-110 transition ease-in-out duration-300" to="/login" onClick={toggleMenu}>Login</Link>
      </div>)}

    </div>
  );
};

export default Navbar;
