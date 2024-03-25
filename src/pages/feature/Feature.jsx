import React from 'react'
import './feature.scss'
import FeatHero from '../../components/featHero/FeatHero'
import SwipeIcon from '../../components/swiperIcon/SwipeIcon'
import Benefits from '../../components/benefitboxes/Benefits'
import Clients from '../../components/clients/Clients'
import Accord from '../../components/accordion/Accord'

const Feature = () => {
  return (
    <div className='feature'>
      <FeatHero />
      <SwipeIcon />
      <Benefits />
      <Clients />
      <Accord />
    </div>
  )
}

export default Feature