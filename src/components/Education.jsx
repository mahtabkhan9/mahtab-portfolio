import React from 'react'
import { education } from '../data'

const Education = () => {
  return (
    <section id='education'
      className='py-24 pb-24 px-[12vw] md:pc-[7vw] lg:px-[16vw] font-sans clip-path-custom-3'
      style={{ background: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)' }}

    >
      {/* section title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>EDUCATION</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>My education has been a journey of learning and development. Here are the details of my academic background</p>
      </div>

      {/* education timeline */}
      <div className='relative '>
        {/* vertical line */}
        <div className='absolute sm:left-1/2 left-0 transform translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full'></div>
        {/* entries edu */}
        {
          education.map((education, index) => (
            <div
              key={education.id}
              className={`flex flex-col cursor-pointer sm:flex-row items-center mb-16 ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
            >
              {/* content */}
              <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                  ${index % 2 === 0 ? 'sm:ml-0' : 'sm:mr-0'} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
                {/* flex container */}
                <div className='flex items-center space-x-6'>
                  {/* school logo */}
                  <div className='w-16 h-16 rounded-md overflow-hidden'>
                    <img className='h-full w-full object-cover' src={education.img} alt={education.school} />
                  </div>

                  {/* course, school, date */}
                  <div className='flex flex-col justify-between'>
                    <div>
                      <h3 className='text-xl sm:text-2xl font-semibold text-white'>{education.degree}</h3>
                      <h4 className='text-sm sm:text-base text-gray-300'>{education.school}</h4>
                    </div>

                    {/* date */}
                    <p className='text-sm text-gray-500 mt-2'>{education.date}</p>
                  </div>
                </div>
                <p className='mt-4 text-gray-400 font-bold'>Grade: {education.grade}</p>
                <p className='mt-4 text-gray-400'>{education.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Education
