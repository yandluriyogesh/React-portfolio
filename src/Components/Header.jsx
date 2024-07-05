
import React from 'react'

import { Link } from 'react-scroll'




const Header = () => {
    

    const menu = [
        {
            id : 1,
            name : 'HOME',
            
        },
        {
            id : 2,
            name : 'SKILS',
        },
        {
            id : 3,
            name : 'PROJECTS',
        },
        {
            id : 4,
            name : 'CONTACT',
        },
    ]

  return (
    <div className='flex items-center fixed
    w-full justify-between border-b-[1px] bg-white scroll-auto'>
    <div className='w-[90px] h-[90px] bg-white'>
        <img src='./images/logo.jpg'/>
    </div>
    <div className='flex gap-60'>
        {menu.map((item)=>(

            
            <div className='cursor-pointer  
                hover:underline font-medium'>
                <h2 id={item.name}></h2>
                <div >
                <Link className='text-black' to={item.name} smooth={true} offset={1000} duration={400} >{item.name}</Link>
                </div>
               </div>
            

        ))}
    </div>
    <div className='w-[90px] h-[90px] 
    bg-white-500 flex justify-center items-center cursor-pointer '>
        {/* <img src='./logo.jpg'/> */}
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-10 h-10 text-black">
  <path 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

    </div>
    </div>
  )
}

export default Header
