import React from 'react'
import Me from './me/Me'
import Project from './project/Project'
import Contact from './contact/Contact'
import Veille from './veille/Veille'
import '../../style/mainContent/Main.css'

const Main = () => {
  return (
    <div>
      <Me />
      <Project />
      <Veille />
      <Contact />
    </div>
  )
}

export default Main