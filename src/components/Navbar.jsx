import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu,setShowMobileMenu]=useState(false);
     const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() =>{
        if (showMobileMenu) {
            document.body.style.overflow='hidden'
        }
         else {
            document.body.style.overflow='auto'
        }
        return () =>{
            document.body.style.overflow='auto'
        };

    },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white '>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                 <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                  <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                   <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                   

                
            </ul>
             <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-200"
        >
          Sign-Up
        </button>
            <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
            {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 rounded"
              />
              <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Submit
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-sm text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    
        </div>
        {/* mobile menu */}
        <div className={`md:hidden ${showMobileMenu?'fixed w-full':'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div onClick={()=>setShowMobileMenu(false)} className='flex justify-end p-6 cursor-pointer'> 
                <img src={assets.cross_icon} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a  onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a  onClick={()=>setShowMobileMenu(false)}href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=>setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={()=>setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>

    </div>
  )
}

export default Navbar