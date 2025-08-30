import Header from '/src/component/Header.jsx'
import Hero from '/src/component/Hero.jsx'
import Visi from '/src/component/Visi.jsx'
import Facilities from './component/Facilities'
import WhyUs from './component/WhyUs'
import Rating from './component/Rating'


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Visi />
      <WhyUs />
      <Facilities />
      <Rating />
    </div>
  )
}

export default App