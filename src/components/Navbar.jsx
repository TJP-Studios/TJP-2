import React from 'react'
import Logo from '../assets/svg/logo.svg'
import { Link, useLocation } from 'react-router-dom';

const links = [
    {
      id: 1,
      url: "/",
      text: "Home",
    },
    {
      id: 2,
      url: "/about",
      text: "About Us",
    },
    {
      id: 3,
      url: "/attorney-profile",
      text: "Attorney's Profile",
    },
    {
        id: 4,
        url: "/services",
        text: "Services",
      },
      {
        id: 5,
        url: "/blog",
        text: "Blog",
      },
      {
        id: 6,
        url: "/contact-us",
        text: "Contact Us",
      },
  ];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='w-full h-full py-4 px-4 md:px-14 bg-white border border-b-[#C6C9CF] sticky top-0'>
        <div className='w-full flex items-center justify-between'>
            <div>
                <img 
                src={Logo} 
                alt="" />
            </div>
            <div className="hidden lg:flex items-center gap-5 lg:gap-[2rem]">
                {links.map((links) => (
                <Link to={links.url} 
                key={links.id} 
                className={`nav-item text-[#353A43] text-lg font-medium hover:text-[#235CEB] ${
                location.pathname === links.url ? 'bg-[#EFF4FF] text-[#235CEB] p-1' : ''
              }`}>
                {links.text}
                </Link>
                ))}
            </div>
            <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-2 text-white text-base md:text-lg bg-[#235CEB] font-bold rounded-md md:py-[0.6875rem] md:px-6 hover:bg-blue-800'>
              Let's get in touch
            </button>
        </div>
    </div>
  )
}

export default Navbar