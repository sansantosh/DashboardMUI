import React from 'react';
import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Mission } from './components/mission'
import { Contact } from './components/contact'
import { Career } from './components/career'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Career data={landingPageData.career} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
