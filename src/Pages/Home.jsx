import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import Lessons from '../components/Lessons/Lessons'
import Sponsor from '../components/Sponsor/Sponsor'
import LessonCards from '../components/Lessons/LessonCards'
import ProfessionalSkills from '../components/ProfessionalSkills/ProfessionalSkills'

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Lessons />
      <Sponsor />
      <div className='container'>
        <h2 style={{marginBottom: "-16px", fontWeight: "bold" }}>Sizin için önerilenler</h2>
        <LessonCards />
      </div>
      <div className='container'>
        <h2 style={{marginBottom: "-16px", fontWeight: "bold" }}>Öğrenciler, bunları görüntülüyor</h2>
        <LessonCards />
      </div>

      <ProfessionalSkills />
    </>
  )
}

export default Home
