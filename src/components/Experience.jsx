import React from 'react'
import { experiences } from '../data'

const Experience = () => {
  return (
    <section id='experience'
      className='py-24 pb-24 px-[12vw] md:pc-[7vw] lg:px-[16vw] font-sans clip-path-custom-2'
      style={{ background: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)' }}

    >
      {/* section title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>EXPERIENCE</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A collection of my work experience and the roles I have taken in various organizations</p>
      </div>

      {/* experience timeline */}
      <div className='relative '>
        {/* vertical line */}
        <div className='absolute sm:left-1/2 left-0 transform translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full'></div>
        {/* entries exp */}
        {
          experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex flex-col cursor-pointer sm:flex-row items-center mb-16 ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'}`}
            >
              {/* content */}
              <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              ${index % 2 === 0 ? 'sm:ml-0' : 'sm:mr-0'} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
                {/* flex container */}
                <div className='flex items-center space-x-6'>
                  {/* company logo */}
                  <div className='w-16 h-16 rounded-md overflow-hidden'>
                    <img className='h-full w-full object-cover' src={exp.img} alt={exp.company} />
                  </div>

                  {/* role, company name, date */}
                  <div className='flex flex-col justify-between'>
                    <div>
                      <h3 className='text-xl sm:text-2xl font-semibold text-white'>{exp.role}</h3>
                      <h4 className='text-sm sm:text-base text-gray-300'>{exp.company}</h4>
                    </div>

                    {/* date */}
                    <p className='text-sm text-gray-500 mt-2'>{exp.date}</p>
                  </div>
                </div>
                <p className='mt-4 text-gray-400'>{exp.desc}</p>
                <div className='mt-4'>
                  <h5 className='font-medium text-white'>Skills</h5>
                  <ul className='flex flex-wrap mt-2'>
                    {exp.skills.map((skill, index) => (
                      <li
                      key={index}
                      className='bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400'
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Experience
