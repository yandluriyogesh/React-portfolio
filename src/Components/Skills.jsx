import React from 'react'
import String1 from '../Shared/String1'
import { IoArrowForwardOutline } from "react-icons/io5";

const Skills = () => {
    const Skills =[
        {
            id:1,
            title: String1.FRONTED,
            desc: String1.FRONTED_DESC,
            logo: "./images/design.png",

        },
        {
            id: 2,
            title: String1.BACKEND,
            desc: String1.BACKEND_DESC,
            logo: "./images/backend.png",  
        },
        {
            id: 3,
            title: String1.ONLINE,
            desc: String1.ONLINE_DESC,
            logo: "./images/teaching.png",  
        },
    ]
  return (
    <div className='px-12 mt-12'>
        <div className='flex items-center'>
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
            <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
            <h2 className='text-[24px] font-bold'>{String1.SKILLS}</h2>
            <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        </div>
        <div className='flex justify-around mt-16'>
            {Skills.map((item)=>(
                <div className='text-center flex flex-col justify-center items-center
                gap-6'>
                    <div className='bg-white-200 rounded-full w-[80px] h-[80px]'>
                        <img src={item.logo} className='w-[80px] h-[80px]
                        p-5 hover:scale-110 transition-all cursor-pointer'/>
                    </div>
                    <h2 className='mt-5 font-bold'>{item.title}</h2>
                    <h2 className='text-gray-400'>{item.desc}</h2>
                    <IoArrowForwardOutline className="bg-green-500 text-[35px]
                    p-2 text-white rounded-full cursor-pointer hover:scale-110
                    transition-all"/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
