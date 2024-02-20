import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Approach from './Components/Approach'
import Eyes from './Components/Eyes'
import FeaturedProjects from './Components/FeaturedProjects'
import ClientsReviews from './Components/ClientsReviews'
import Cards from './Components/Cards'
import Eye2 from './Components/Eye2'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='text-white w-full min-h-screen bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Approach/>
      <Eyes/>
      <FeaturedProjects/>
      <ClientsReviews/>
      <Cards/>
      <Eye2/>
      <Footer/>
    </div>
  )
}

export default App