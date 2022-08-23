import React from 'react'
import Cities from '../../components/Cities/Cities'
import Footer from '../../components/Footer/Footer'
import HeroHeader from '../../components/header/HeroHeader'
// import Office from '../../components/OfficeSection/Office'
import Partner from '../../components/partner/Partner'
import Pocket from '../../components/Pocket/Pocket'
import style from "./Home.module.scss"
const Home = () => {
  return (
    <div className={style.container}>

      <HeroHeader />   
      <Partner/>
      <Cities/>
      <Pocket/>
      {/* < Office/> */}
      <Footer/>
    </div>
  )
}

export default Home