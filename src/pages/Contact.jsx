import React from 'react'
import Man from '../assets/svg/man.svg';
import Address from '../assets/svg/address.svg';
import Email from '../assets/svg/email.svg';
import Phone from '../assets/svg/phone.svg';
import Map from '../assets/svg/Figmap.svg';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-full bg-[#3E434F] flex flex-col md:flex-row items-center justify-center px-4 md:px-14'>
            <div>
            <img className='object-cover' src={Man} alt="" />
            </div>
            <div className='mt-3 md:mt-0'>
                <h2 className='text-lg text-[#121212] font-bold md:text-[3.5rem] whitespace-nowrap'>We prioritize our Clients</h2>
                <div className='flex items-center justify-center'>
                    <button className='mt-3 md:mt-14 gap-2 w-[fit-content] py-[0.4475rem] px-2 text-white text-base md:text-lg bg-[#235CEB] font-bold rounded-md md:py-[0.6875rem] md:px-6 hover:bg-blue-800'>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
        <div className='bg-[#EBEBEB] w-full h-full'>
           <div className='flex flex-col md:flex-row justify-center mx-auto py-20 w-full md:w-[1318px]'>
                <div className='bg-[#235CEB] py-24 pl-16'>
                    <div className='bg-white p-10 h-[600px] md:h-[60s0px] w-[300px] md:w-[550px]'>
                        <h1 className='text-center font-bold text-[#353A43]'>Send us a message</h1>
                        <form className='w-full mt-4'>
                            <div className="flex flex-col gap-[1rem]">
                                <input type="text" placeholder="Name" name="user_name" className='bg-[#D9D9D9] py-3 px-4 outline-none rounded-md md:rounded-none placeholder:text-center placeholder:font-bold' required/>
                                <input type="email" placeholder="Email" name="user_email" className='bg-[#D9D9D9] py-3 px-4 outline-none rounded-md md:rounded-none placeholder:text-center placeholder:font-bold' required/>
                                <textarea
                                className="resize-none w-full md:col-span-2 bg-[#D9D9D9] border border-[#D9D9D9] outline-none py-2 px-4 rounded-md md:rounded-none placeholder:text-center placeholder:font-bold"
                                placeholder="Message"
                                name="message"
                                required
                                // cols="10"
                                rows="10"
                                ></textarea>
                            </div>
                            <button className="mt-5 rounded-lg shadow-md py-2 px-8 text-white bg-[#2F80ED] flex items-center justify-center mx-auto gap-2">
                                <span>Send</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className='bg-white py-24 pr-16'>
                    <div className='bg-[#235CEB] p-10 h-[600px]'>
                        <div className='bg-white'>
                            <h2 className='text-[2.1875rem] text-center text-black font-bold'>Contact Form</h2>
                        </div>
                        <div className='flex flex-col mt-28'>
                            <div className='flex items-center gap-3'>
                                <img src={Address} alt="Address-icon" />
                                <div>
                                    <p className='text-lg text-[#353A43] font-bold'>Address</p>
                                    <p className='text-lg text-[#353A43] font-normal'>8502 Preston Rd. Inglewood</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-8'>
                                <img src={Email} alt="Address-icon" />
                                <div>
                                    <p className='text-lg text-[#353A43] font-bold'>Email Address</p>
                                    <p className='text-lg text-[#353A43] font-normal'>TRLP.law@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-8'>
                                <img src={Phone} alt="Address-icon" />
                                <div>
                                    <p className='text-lg text-[#353A43] font-bold'>Phone Number</p>
                                    <p className='text-lg text-[#353A43] font-normal'>(480) 555-0103</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <div className='px-4 md:px-14 py-12'>
            <img className='object-cover' src={Map} alt="map" />
        </div>
        <div>
            <GetInTouch />
            <Footer />
        </div>
    </div>
  )
}

export default Contact