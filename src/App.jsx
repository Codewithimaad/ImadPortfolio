import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Technologies from './Components/Technologies'
import Projects from './Components/Projects'
import MyServices from './Components/MyServices'
import About from './Components/About'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      <div className='fixed inset-0 -z-10'>
        <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
      <div className='container mx-auto px-4 md:px-4 lg:px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Projects />
        <MyServices />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
