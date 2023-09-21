import React from 'react';
import Address from '../assets/svg/address.svg';
import Email from '../assets/svg/email.svg';
import Phone from '../assets/svg/phone.svg';
import Linkedin from '../assets/svg/linkedin.svg';
import Twitter from '../assets/svg/twitter.svg';
import Facebook from '../assets/svg/facebook.svg';
import NewsLetter from '../assets/svg/newsletter.svg';

const GetInTouch = () => {
  return (
    <div className='w-full h-full bg-[#01174E] py-20 pl-14'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <div>
                <h2 
                className='text-white text-[3.5rem] leading-[4.105625rem] font-bold'
                >
                    Get in touch with us.
                </h2>
                <p className='w-[81%] text-white text-lg font-medium leading-[27px] mt-4'>
                We are here to assist you with your legal needs and answer any questions you may have. Please don't hesitate to reach out to us using the following contact information
                </p>
                <div className='flex flex-col mt-5'>
                    <div className='flex items-center gap-3'>
                        <img src={Address} alt="Address-icon" />
                        <div>
                            <p className='text-lg text-white font-bold'>Address</p>
                            <p className='text-lg text-white font-normal'>8502 Preston Rd. Inglewood</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-5'>
                        <img src={Email} alt="Address-icon" />
                        <div>
                            <p className='text-lg text-white font-bold'>Email Address</p>
                            <p className='text-lg text-white font-normal'>TRLP.law@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-5'>
                        <img src={Phone} alt="Address-icon" />
                        <div>
                            <p className='text-lg text-white font-bold'>Phone Number</p>
                            <p className='text-lg text-white font-normal'>(480) 555-0103</p>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <h3 className='text-lg font-bold text-white'>Follow us on</h3>
                    <div className='flex items-center gap-4 mt-3'>
                        <img className='cursor-pointer' src={Facebook} alt="" />
                        <img className='cursor-pointer' src={Twitter} alt="" />
                        <img className='cursor-pointer' src={Linkedin} alt="" />
                    </div>
                </div>
            </div>

            <div className='w-full bg-white pt-8 pl-14'>
                <h2 className='text-[#23272E] text-5xl leading-[3.51875rem] font-bold'>Subscribe to our newsletter.</h2>
                <div className='flex items-center gap-5 w-full h-full mt-4 relative pb-10'>
                    <div className='flex flex-col w-[133px]'>
                        <label htmlFor='name' className='mb-5 block w-full sm:w-[420px]'>
                            Your Name
                            <div className='relative'>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                className='w-full md:w-[328px] rounded-lg border border-[#D3DBE1] p-3 mt-2 appearance-none outline-none text-xs md:text-sm text-dark-100'
                                required
                            />
                            </div>
                        </label>
                        <label htmlFor='password' className='mb-5 w-full sm:w-[420px]'>
                            Your Email
                            <div className='relative'>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                className='w-full sm:w-[328px] rounded-lg border border-[#D3DBE1] bg-white p-3 mt-2 appearance-none outline-none text-xs md:text-sm text-dark-100'
                                required
                            />
                            </div>
                        </label>
                        <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-2 text-white text-lg bg-[#235CEB] font-bold rounded-md md:py-[11px] md:px-6 hover:bg-blue-800'>
                            Subscribe
                        </button>
                    </div>

                    <div className='w-[280px] absolute bottom-0 right-0'>
                        <img src={NewsLetter} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch