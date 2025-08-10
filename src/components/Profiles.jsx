import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Profiles = () => {
    return (
        <section className='flex flex-col items-center justify-center py-16 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-white'>CODING PROFILES</h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
            </div>
            <div className='flex flex-wrap justify-center gap-8 text-white'>
                {[
                    {name: "GitHub", icon: <FaGithub />, url: "https://github.com/mahtabkhan9" },
                    {name: "GeeksforGeeks", icon: <SiGeeksforgeeks />, url: "https://www.geeksforgeeks.org/user/mahtabal1xrk/" },
                    {name: "LeetCode", icon: <SiLeetcode />, url: "https://leetcode.com/u/mahtabalam7173/" },
                ].map((profile, index) => (
                    <a href={profile.url} key={index} className='relative flex group items-center justify-center w-16 h-16 bg-gray-900 rounded-full shadow-lg cursor-pointer hover:bg-purple-500 transition duration-300'>
                        {profile.icon}
                        <span
                            className='absolute -top-10 z-10 bg-purple-800 px-2 py-2 rounded-sm  text-xs sm:text-sm text-gray-300  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
                            {profile.name}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Profiles
