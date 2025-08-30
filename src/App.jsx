import React from 'react'
import Header from '/src/component/Header.jsx'
import Hero from '/src/component/Hero.jsx'
import Visi from '/src/component/Visi.jsx'
import Facilities from './component/Facilities'
import WhyUs from './component/WhyUs'


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Visi />
      <WhyUs />
      <Facilities />
    </div>
  )
}

export default App