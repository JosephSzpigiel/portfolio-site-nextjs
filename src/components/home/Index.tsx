import React from 'react'
import Hero from './Hero'
import Experience from './Experience'
import About from './About'
// import Spotlight from '../spotlight/Spotlight'
import Projects from './Projects'
import NavBar from '../navbar/NavBar'

const Index = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        {/* <Spotlight/> */}

    </>
  )
}

export default Index