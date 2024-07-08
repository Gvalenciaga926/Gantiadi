import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import About from './Components/about/about'
import Slider from './Components/slider/slider'
import {sliders} from './data/carouselData.json'
import Contact from './Components/Contact/Contact'
import Veterans from './Components/veterans/Veterans'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Programs/>
      <About/>
      <Slider data={sliders}/>
      <Contact/>
      <Veterans/>
    </div>
  )
}

export default App