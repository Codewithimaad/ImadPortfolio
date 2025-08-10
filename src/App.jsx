import React from 'react'
import Navbar from './Components/Navbar'
import NavbarTop from './Components/NavbarTop'
import Hero from './Components/Hero'
import Technologies from './Components/Technologies'
import Projects from './Components/Projects'
import MyServices from './Components/MyServices'
import About from './Components/About'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Footer from './Components/Footer'
import Experience from './Components/Experience'
import Certifications from './Components/Certifications'
import TestimonialsSection from './Components/Testimonials'
import ScrollToTopButton from './Components/ScrollToTopButton' // ✅ New import

const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      <div className='fixed inset-0 -z-10'>
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <NavbarTop />

      <div className='container mx-auto px-4 md:px-4 lg:px-8'>
        <section id="home"><Navbar /></section>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="technologies"><Technologies /></section>
        <section id="experience"><Experience /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="education"><Education /></section>
        <section id="certifications"><Certifications /></section>
        <section id="projects"><Projects /></section>
        <section id="services"><MyServices /></section>
        <section id="contact"><Contact /></section>

      </div>

      <Footer />

      {/* ✅ Scroll To Top Button */}
      <ScrollToTopButton />
    </div>
  )
}

export default App
