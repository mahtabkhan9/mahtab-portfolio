import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // scroll effect and change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    // scroll function
    const handleMenuToggle = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
    ]

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? 'bg-[#050414]/50 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
            <div className='text-white py-5 flex justify-between items-center'>

                {/* Logo */}
                <div className='text-lg font-semibold cursor-pointer'>
                    <span className='text-[#8245ec]'>&lt;</span>
                    <span className='text-white'>Mahtab</span>
                    <span className='text-[#8245ec]'>/</span>
                    <span className='text-white'>Alam</span>
                    <span className='text-[#8245ec]'>&gt;</span>
                </div>

                {/* desktop menu */}
                <ul className='hidden md:flex space-x-8 text-gray-200'>
                    {menuItems.map(item => (
                        <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] transition duration-300 ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                            <button className='cursor-pointer' onClick={() => handleMenuToggle(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* social icons */}
                <div className='hidden md:flex space-x-8'>
                    <a href="https://www.github.com/mahtabkhan9" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-[#8245ec] transition duration-300'>
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/mahtab7860/" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-[#8245ec] transition duration-300'>
                        <FaLinkedin size={24} />
                    </a>
                </div>

                {/* mobile menu */}
                <div className='md:hidden'>
                    {
                        isOpen ? (
                            <FiX className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(false)} />
                        ) : (
                            <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)} />
                        )
                    }
                </div>
            </div>

            {/* mobile menu items */}
            {isOpen && (
                <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden'>
                    <ul className='flex flex-col items-center space-y-4 py-4 text-gray-200'>
                        {menuItems.map(item => (
                            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] transition duration-300 ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                                <button onClick={() => handleMenuToggle(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className='flex space-x-4 mt-4'>
                            <a href="https://www.github.com/mahtabkhan9" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-[#8245ec] transition duration-300'>
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/mahtab7860/" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-[#8245ec] transition duration-300'>
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
