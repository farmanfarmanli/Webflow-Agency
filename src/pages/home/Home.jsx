import React from 'react'
import './home.scss'
import Hero from '../../components/hero/Hero'
import HowWork from '../../components/howWork/HowWork'
import Project from '../../components/projects/Project'
import Design from '../../components/design/Design'
import Testi from '../../components/testimonials/Testi'
import Accord from '../../components/accordion/Accord'
import Inquiry from '../../components/form/Inquiry'
import Blogs from '../../components/ourBlog/Blogs'


const Home = () => {
  return (
    <div>
      <Hero />
      <HowWork />
      <Project />
      <Design />
      <Testi />
      <Accord />
      <Inquiry />
      <Blogs />
    </div>
  )
}

export default Home