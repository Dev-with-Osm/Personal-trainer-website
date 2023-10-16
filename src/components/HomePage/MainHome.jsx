import React from 'react'
import HomeText from './HomeText'
import HomeImg from './HomeImg'
import './Home.css'

const MainHome = () => {
  return (
    <section className="home" id="home">
        <HomeText />
        <HomeImg />
    </section>
  )
}

export default MainHome