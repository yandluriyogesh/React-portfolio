import React from 'react'
import {IoLogoGithub,IoLogoLinkedin} from "react-icons/io5";

const SideBar = () => {
  return (
    <div>
        <div className='w-[90px] border-r-[1px] dark:bg-slate-800
    h-screen fixed flex flex-col justify-around items-center'>

            <h2 className='-rotate-90 tracking-widest'>HOMEPAGE</h2>
            <div className='flex flex-col gap-10 mb-10 text-[25px] '>
              <a href='https://github.com/yandluriyogesh'>
                <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" /></a>
              <a href='http://www.linkedin.com/in/yandluri-yogesh-41b750254'>
                <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out"/></a>
            
        </div>

    </div>
      
    </div>
  )
}

export default SideBar
