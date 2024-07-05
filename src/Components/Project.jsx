import React from 'react'
import String2 from '../Shared/String2'
import { IoArrowForwardOutline } from "react-icons/io5";

const Project = () => {
    const project =[
        {
            id: 1,
            title: String2.FRONTED,
            desc: String2.FRONTED_DESC,
            logo: "./images/e-commerce.jpg",

        },
        {
            id: 2,
            title: String2.BACKEND,
            desc: String2.BACKEND_DESC,
            logo: "./images/quiz1.png"
        },
        {
            id: 3,
            title: String2.ONLINE,
            desc: String2.ONLINE_DESC,
            logo: "./images/fakestore.jpg ", 
        
          },
    ]
  return (
   
      
    <div className='px-12 mt-12'>
    <div className='flex items-center'>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <h2 className='text-[24px] font-bold'>{String2.PROJECT}</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
    </div>
    <div className='flex justify-around mt-16'>
        {project.map((item)=>(
            <div className='text-center flex flex-col justify-center items-center
            gap-6'>
                <div className='bg-white-200 rounded-full w-[80px] h-[80px]'>
                    <img src={item.logo} className='w-[80px] h-[80px]
                    p-4 hover:scale-110 transition-all cursor-pointer'/>
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

export default Project
