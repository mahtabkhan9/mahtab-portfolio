import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import Tilt from 'react-parallax-tilt';
import profile from '../assets/profile2.jpg'

const About = () => {
    return (
        <section id='about' className='py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-16 lg:mt-20 mb-10'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                {/* left side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
                        Hi, I am
                    </h1>
                    <h2 id='myName' className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
                        Mahtab Alam
                    </h2>
                    {/* typing effect */}
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                        <TypewriterComponent
                            options={{
                                strings: [
                                    'Full Stack Developer',
                                    'MERN Stack Developer',
                                    // 'App Developer',
                                    'Frontend Developer',
                                    'Backend Developer',
                                    'Software Engineer',
                                    // 'DevOps Engineer',
                                    'UI/UX Designer',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <p className='text-sm sm:text-base text-gray-400 mb-10 mt-4 leading-relaxed'>
                        I am a passionate Full Stack Developer with a focus on building dynamic and responsive web applications. I have experience in both frontend and backend development, utilizing technologies like React, Node.js, Express.js, and MongoDB. My goal is to create seamless user experiences while ensuring robust functionality.
                    </p>
                    {/* resume button */}
                    <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0'>
                    <a
                        href="https://drive.google.com/file/d/1ftOv87Afy47-9T-4mIUbiZmYvk0lYqfJ/view?usp=drive_link"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block text-white py-3 px-8 rounded-full mt-5v text-lg font-bold transition duration-300 transform hover:scale-105'
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        Resume
                    </a>
                    <a
                        href="mailto:mahtabalam7173@gmail.com"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block text-white py-3 px-8 rounded-full mt-5v text-lg font-bold transition duration-300 transform hover:scale-105'
                        style={{
                            background: 'linear-gradient(90deg, #a855f7, #8245ec)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        Hire Me
                    </a>
                    </div>
                </div>

                {/* right side image */}
                <div className='md:w-1/3 flex justify-center md:justify-end'>
                    <Tilt
                    className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    >
                        <img src={profile} alt="Mahtab"
                            className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    )
}

export default About
