import React from 'react'
import Logo from '../assets/svg/logo_white.svg'

const Footer = () => {
  return (
    <div className='w-full h-full px-14 py-8 bg-[#01174E]'>
        <div className='border border-t-[#C6C9CF] w-full mb-10'></div>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <img src={Logo} alt="" />
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                <div>
                <a className='text-white font-medium text-lg' href="#">Home</a>
                </div>
                <div>
                <a className='text-white font-medium text-lg' href="#">About Us</a>
                </div>
                <div>
                <a className='text-white font-medium text-lg' href="#">Attorney's Profile</a>
                </div>
                <div>
                <a className='text-white font-medium text-lg' href="#">Services</a>
                </div>
                <div>
                <a className='text-white font-medium text-lg' href="#">Blog</a>
                </div>
                <div>
                <a className='text-white font-medium text-lg' href="#">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer