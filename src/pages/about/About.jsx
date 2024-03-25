import React from 'react'
import './about.scss'
import AboutHero from '../../components/aboutHero/AboutHero'
import WeAre from '../../components/weare/WeAre'
import Process from '../../components/process/Process'
import Mission from '../../components/mission/Mission'
import Benefit from '../../components/benefit/Benefit'
import Team from '../../components/team/Team'

const About = () => {
  return (
    <div>
      <AboutHero />
      <WeAre />
      <Process />
      <Mission />
      <Benefit />
      <Team />
    </div>
  )
}

export default About