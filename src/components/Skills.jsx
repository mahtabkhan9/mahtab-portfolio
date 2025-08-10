import React, { useState } from 'react'
import { SkillsInfo } from '../data.js'
import Tilt from 'react-parallax-tilt';

const Skills = () => {

  const [isHover, setIsHover] = useState(false);

  return (
    <section id='skills'
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans clip-path-custom'
      style={{ background: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)' }}
    >
      {/* section title */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>

        <p className='text-gray-400 mt-4 text-lg font-semibold'>A collection of my technical skills and expertise honed through various projects and experiences</p>
      </div>

      {/* skills */}
      <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_40px_2px_rgba(130,69,236,0.5)] transition-shadow duration-300'
          >
            <h3 className='text-xl sm:text-2xl font-semibold text-gray-400 mb-4 text-center'>
              {category.title}
            </h3>
            {/* skill items - 3 in large screen in each row */}

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className='relative group flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center hover:scale-[1.05] transition duration-300 hover:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] cursor-pointer'
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className='w-6 h-6 sm:w-8 sm:h-8'
                  />
                  <span
                    className='absolute  -top-7 z-10 bg-purple-800 px-2 py-2 rounded-sm  text-xs sm:text-sm text-gray-300  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
