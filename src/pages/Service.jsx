import React from 'react'
import vector from '../assets/svg/Vector.svg';
import people from '../assets/svg/People.svg';
import Home from '../assets/svg/Home.svg';
import law from '../assets/svg/Law.svg';
import supply from '../assets/svg/supply.svg';
import employment from '../assets/svg/employment.svg';
import corporate from '../assets/svg/corporate.svg';
import EA from '../assets/svg/ea.svg';
import theft from '../assets/svg/theft.svg';
import ED from '../assets/svg/ed.svg';
import money from '../assets/svg/money.svg';
import Bell from '../assets/svg/Doorbell.svg';
import fight from '../assets/svg/fight.svg';
import spy from '../assets/svg/Spy.svg';
import legal from '../assets/svg/legal.svg';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const Service = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-full px-4 md:px-14 py-12 md:py-28 flex flex-col lg:flex-row gap-2 justify-between bg-[#235CEB]'>
            <div className='w-full md:w-[60%]'>
                <h2 className='text-base md:text-[3.5rem] md:leading-[72.91px] font-bold text-white text-center md:text-start'>The Legal Service you will ever need</h2>
                <p className='text-white font-normal ml-0 md:ml-5 text-base md:text-2xl mt-4 text-center md:text-start'>
                Clients come to us for our unwavering commitment, as well as our vast knowledge. of international expertise – and an understanding of our clients’ industries that can only be borne of direct experience.
                </p>
                <div className='hidden md:flex items-center justify-center mt-3 md:mt-44'>
                    <button className=' gap-2 w-[fit-content] py-[0.4475rem] px-2 text-[#235CEB] text-base md:text-lg bg-white font-bold rounded-md md:py-[0.6875rem] md:px-6'>
                        Let's get in Touch
                    </button>
                </div>
            </div>
            <div>
                <img src={vector} alt="" />
            </div>
            <div className='flex md:hidden items-center justify-center mt-3 md:mt-44'>
                <button className=' gap-2 w-[fit-content] py-[0.4475rem] px-2 text-[#235CEB] text-base md:text-lg bg-white font-bold rounded-md md:py-[0.6875rem] md:px-6'>
                 Let's get in Touch
                 </button>
            </div>
        </div>
        <div className='bg-[#EBEBEB] w-full h-full py-14 px-4 md:px-14'>
            <h2 className='text-[#353A43] font-bold text-[2rem] text-center'>Our Practice Areas</h2>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mt-6'>
                <div className='w-full md:w-[350px] px-2 py-14 text-center flex flex-col items-center bg-white'>
                    <img src={people} alt="" />
                    <h2 className='text-[#353A43] font-bold text-[1.85rem] mt-3'>COMMERCIAL LAW</h2>
                    <p className='mt-3 text-[#262626] text-lg w-[fit-content] font-normal'>
                    Our team provides comprehensive business advisory services, including guidance on all aspects of corporate and commercial law, foreign investments, regulatory compliance, and divestments and liquidations.
                    </p>
                </div>
                <div className='w-full md:w-[350px] px-2 py-14 text-center flex flex-col items-center bg-white'>
                    <img src={Home} alt="" />
                    <h2 className='text-[#353A43] font-bold text-[1.85rem] mt-3'>PROPERTY LAW</h2>
                    <p className='mt-3 text-[#262626] text-lg w-[fit-content] font-normal'>
                    We provide market-leading advice on real estate transactions, drawing on our deep understanding of industry trends and the complexities of the markets in which our clients operate.
                    </p>
                </div>
                <div className='w-full md:w-[350px] px-2 py-14 text-center flex flex-col items-center bg-white'>
                    <img src={corporate} alt="" />
                    <h2 className='text-[#353A43] font-bold text-[1.85rem] mt-3'>CORPORATE LAW</h2>
                    <p className='mt-3 text-[#262626] text-lg w-[fit-content] font-normal'>
                    Our law firm handles a wide range of complex and high-value litigation and arbitration cases, including law matters, trade disputes, insolvency matters, shipping disputes, real estate disputes..
                    </p>
                </div>
                <div className='w-full md:w-[350px] px-2 py-14 text-center flex flex-col items-center bg-white'>
                    <img src={law} alt="" />
                    <h2 className='text-[#353A43] font-bold text-[1.85rem] mt-3'>INTERNATIONAL LAW</h2>
                    <p className='mt-3 text-[#262626] text-lg w-[fit-content] font-normal'>
                    Our lawyers have a deep knowledge of local laws, international treaties, free trade agreements, international law and the rules of common trade practices.
                    </p>
                </div>
                <div className='w-full md:w-[350px] px-2 py-14 text-center flex flex-col items-center bg-white'>
                    <img src={employment} alt="" />
                    <h2 className='text-[#353A43] font-bold text-[1.85rem] mt-3'>EMPLOYMENT LAW</h2>
                    <p className='mt-3 text-[#262626] text-lg w-[fit-content] font-normal'>
                    We provides sound Labour law advice on terminations, contracts, schemes, arrangements, wages, outsourcing, pensions, liabilities, contractors, and compliance.
                    </p>
                </div>
                <div className='w-full md:w-[350px] px-2 py-14 text-center flex flex-col items-center bg-white'>
                    <img src={supply} alt="" />
                    <h2 className='text-[#353A43] font-bold text-[1.85rem] mt-3'>PROPERTY LAW</h2>
                    <p className='mt-3 text-[#262626] text-lg w-[fit-content] font-normal'>
                    We provide market-leading advice on real estate transactions, drawing on our deep understanding of industry trends and the complexities of the markets in which our clients operate.
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full h-full case py-16 px-4 md:px-14 mx-auto'>
            <h2 className='text-white text-[2rem] font-bold text-center'>Cases Like Yours</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto place-content-center gap-x-4 mt-8'>
                <div>
                    <img className='object-cover' src={EA} alt='' />
                    <p className='text-center text-white font-bold text-2xl mt-4'>Employee Assault</p>
                </div>
                <div>
                    <img className='object-cover' src={theft} alt='' />
                    <p className='text-center text-white font-bold text-2xl mt-4'>Theft</p>
                </div>
                <div>
                    <img className='object-cover' src={ED} alt='' />
                    <p className='text-center text-white font-bold text-2xl mt-4'>Employee Dispute</p>
                </div>
                <div>
                    <img className='object-cover' src={money} alt='' />
                    <p className='text-center text-white font-bold text-2xl mt-4'>Money Laundering</p>
                </div>
            </div>
        </div>
        <div className='w-full h-full bg-[#EBEBEB] py-16 px-4 md:px-14 mx-auto'>
            <h2 className='text-black text-[2rem] font-bold text-center'>How It Works</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto place-content-center gap-x-4 gap-y-6 mt-8'>
                <div className='bg-white py-20 flex flex-col items-center'>
                    <img className='object-cover' src={Bell} alt='' />
                    <p className='text-center text-black font-bold text-2xl mt-14'>Schedule Appointment</p>
                </div>
                <div className='bg-white py-20 flex flex-col items-center'>
                    <img className='object-cover' src={spy} alt='' />
                    <p className='text-center text-black font-bold text-2xl mt-14'>Investigate</p>
                </div>
                <div className='bg-white py-20 flex flex-col items-center'>
                    <img className='object-cover' src={fight} alt='' />
                    <p className='text-center text-black font-bold text-2xl mt-14'>Case Fight</p>
                </div>
            </div>
        </div>
        <div className='w-full px-4 md:px-14 py-12 md:pt-28 flex flex-col lg:flex-row items-center bg-white'>
            <div className='w-full md:w-[60%]'>
                <h2 className='text-base md:text-[3.5rem] md:leading-[72.91px] font-bold text-black text-center md:text-start'>Trusted <span className='text-[#235CEB]'>Legal</span> Solutions, Take Our Word For It.</h2>
            </div>
            <div>
                <img className='object-cover' src={legal} alt="" />
            </div>
        </div>
        <div>
            <GetInTouch />
            <Footer />
        </div>
    </div>
  )
}

export default Service