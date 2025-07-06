import React from 'react'

const Contact = () => {
    return (
        <div className='text-center p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl text-center font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With us</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'> Ready to make amove? Lets's Build your future together</p>
            <form className='max-w-2xl mx-auto text-gray-600 pt8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                </div>
                 
                    <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
                </div>
                </div>
                <div className='my-6 text-left'>
                    Message 
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>Send Message</button>

            </form>

        </div>
    )
}

export default Contact