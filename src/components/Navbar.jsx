import React from 'react'
import Logo from '../assets/svg/logo.svg'

const links = [
    {
      id: 1,
      url: "/home",
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
  return (
    <div className='w-full h-full py-4 px-14 bg-white border border-b-[#C6C9CF]'>
        <div className='flex items-center justify-between'>
            <div>
                <img 
                src={Logo} 
                alt="" />
            </div>
            <div className="hidden lg:flex items-center gap-5 lg:gap-[2rem]">
                {links.map((links) => (
                <a href={links.url} 
                key={links.id} 
                className="nav-item text-[#353A43] text-lg font-medium">
                {links.text}
                </a>
                ))}
            </div>
            <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-2 text-white text-lg bg-[#235CEB] font-bold rounded-md md:py-[11px] md:px-6 hover:scale-100 hover:text-xl transform transition-all duration-500'>
                Let's get in touch
            </button>
        </div>
    </div>
  )
}

export default Navbar