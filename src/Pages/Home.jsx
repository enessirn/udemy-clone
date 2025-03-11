import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import Lessons from '../components/Lessons/Lessons'
import Sponsor from '../components/Sponsor/Sponsor'

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Lessons />
      <Sponsor />
    </>
  )
}

export default Home
