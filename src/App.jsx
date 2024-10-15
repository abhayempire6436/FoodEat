import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TopList from './components/TopList/TopList'
import Service from './components/Services/Service'
import Banner from './components/Banner/Banner'

const App = () => {
  return (
    <div className='bg-yellow-50'>
      <Navbar />
      <Hero />
      <TopList />
      <Banner />
      <Service />
    </div>
  )
}

export default App