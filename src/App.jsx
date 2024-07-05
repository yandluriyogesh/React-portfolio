import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Profile from './Components/Profile'
import Introduction from './Components/Introduction'
import About from './Components/About'

import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'



const App = () => {
  return (
    <div>
    <Header/> 
    <SideBar/>
    

    <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
      <div className='col-span-2'>
        <Introduction/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
      <div className='hidden md:block'>
        <Profile/>
      </div>
    </div>
    </div>
  )
}

export default App
