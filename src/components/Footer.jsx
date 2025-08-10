import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className='text-white py-4 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>Mahtab Alam</h2>
        {/* nav links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button key={index}
              className='hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer'
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* social */}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            {icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/mahtab7860'},
            {icon: <FaXTwitter/>, link: 'https://www.x.com/mahtab_7173'},
            {icon: <FaInstagram/>, link: 'https://www.instagram.com/mahtab_khan1971/'},
            {icon: <IoMail />, link: 'mailto:mahtabalam7173@gmail.com'},
          ].map((item, index) => (
            <a
            key={index}
            href={item.link}
            target='_blank'
            className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'>
              {item.icon}
            </a>
          ))}
        </div>

        {/* copyright */}
        <p className='text-sm text-gray-400 mt-6'>
          &copy; 2025 Mahtab Alam | All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
