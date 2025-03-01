import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20 flex justify-center items-center" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-6'>Let's Talk</h3>
            <p className="text-gray-300">I'm open to discussing web development projects or job opportunities.</p>
            <div className='mt-8 space-y-4'>
              <div className="flex items-center text-lg">
                <FaEnvelope className='text-green-400 mr-3' />
                <a href="mailto:rajasmhatre2704@gmail.com" className='hover:underline'>
                  rajasmhatre2704@gmail.com
                </a>
              </div>
              <div className="flex items-center text-lg">
                <FaPhone className='text-green-400 mr-3' />
                <span>+91 7218858844</span>
              </div>
              <div className="flex items-center text-lg">
                <FaMapMarkedAlt className='text-green-400 mr-3' />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
          <div>
            <form className='space-y-6' action="mailto:rajasmhatre2704@gmail.com" method="POST" encType="text/plain">
              <div>
                <label htmlFor="name" className='block mb-2 text-lg'>Your Name</label>
                <input type="text" name="name"
                  className='w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400 text-white'
                  placeholder='Enter Your Name' required/>
              </div>
              <div>
                <label htmlFor="email" className='block mb-2 text-lg'>Email</label>
                <input type="email" name="email"
                  className='w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400 text-white'
                  placeholder='Enter Your Email' required/>
              </div>
              <div>
                <label htmlFor="message" className='block mb-2 text-lg'>Message</label>
                <textarea name="message"
                  className='w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400 text-white'
                  rows="5"
                  placeholder='Enter Your Message' required></textarea>
              </div>
              <button type="submit" className='bg-gradient-to-r from-green-400 to-blue-500 text-white w-full 
                transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full text-lg font-semibold'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
