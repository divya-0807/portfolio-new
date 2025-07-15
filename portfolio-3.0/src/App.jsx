import React from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'

import Cards from './components/TechStack/Cards'
import FeaturedProjects from './components/Section2'

const App = () => {
  return (
    <>
    <div className='w-full  bg-black'>
  <Navbar/>
    
      <Section1/>
    <Cards/>
    <FeaturedProjects/>
      


    </div>
    </>
  )
}

export default App
