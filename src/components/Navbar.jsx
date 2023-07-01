"use client";
import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  // FaFacebook,
  // FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo_1.png';
import { Link } from 'react-scroll';
import pdf from '../assets/PawanResume.pdf'


const Navbar = () => {
  // const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  // const [openIndex, setOpenIndex] = useState(-1);
  // const handleSubmenu = (index) => {
  //   if (openIndex === index) {
  //     setOpenIndex(-1);
  //   } else {
  //     setOpenIndex(index);
  //   }
  // };
  return (
    <>
      <header className={`h-[80px] px-2 header top-0 left-0 z-40 flex w-full items-center bg-transparent ${sticky
        ? "!fixed !z-[9999] border-b-2 !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
        : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link to="home" className={`header-logo block w-full py-8 }`} >
                <img src={Logo} className='responsive_image' style={{ width: '8rem', borderRadius: "50%" }} alt='...' />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-black ${navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-black ${navbarOpen ? "opacity-0 " : " "
                      }`}
                  />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-black ${navbarOpen ? " top-[-8px] -rotate-45" : " "}`} />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar mt-2 absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {/* menu */}
                    <li>
                      <Link to='home' className='hover:text-red-700' smooth={true} duration={500}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to='about' className='hover:text-red-700' smooth={true} duration={500}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to='skills' className='hover:text-red-700' smooth={true} duration={500}>
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link to='work' className='hover:text-red-700' smooth={true} duration={500}>
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link to='contact' className='hover:text-red-700' smooth={true} duration={500}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/pawan-kumar-maurya-5699771b7/' target="_blank" rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/pawan9129' target="_blank" rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:pawankmaurya466@gmail.com' target="_blank" rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={pdf} target="_blank" rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
