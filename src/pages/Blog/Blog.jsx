import React from 'react'
import BlogImg from '../../assets/svg/blog_img.svg';
import Categories from '../../components/Categories';

const Blog = () => {
  return (
    <div className='w-full h-full'>
        <div className='flex flex-col md:flex-row items-center bg-[#063ABD] text-center md:text-start justify-between px-4 md:px-14 py-6'>
            <div className='w-full md:w-[40%]'>
                <h1 className='text-base md:text-[4rem] font-bold md:leading-[4.691875rem] text-white'>Welcome to our blogs section.</h1>
                <p className='text-lg font-medium mt-3 text-white'>Our legal blog is a platform where our experienced attorneys share insights, guidance, and updates on a wide range of legal topics.</p>
            </div>
            <div>
                <img src={BlogImg} alt="" />
            </div>
        </div>
        <Categories />
    </div>
  )
}

export default Blog