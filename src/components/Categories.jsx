import React from 'react'
import CategorySection from './CategorySection'
import GetInTouch from './GetInTouch'
import Footer from './Footer'

const Categories = () => {
  return (
    <div className='w-full h-full'>
        <div className='px-4 md:px-14 py-6'>
            <div className='w-96'>
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input 
                        type="text" 
                        class="bg-white border border-[#C6C9CF] text-black text-sm rounded-md block w-full pl-10 p-2.5 outline-none" placeholder="Search articles" 
                        required />
                    </div>
                </form>
            </div>
            <h2 className='text-[1.75rem] font-bold mt-4'>Categories</h2>
            <div>
                <CategorySection />
            </div>
        </div>
        <div>
            <GetInTouch />
            <Footer />
        </div>
    </div>
  )
}

export default Categories