import React from 'react'
import Me from './me/Me'
import Project from './project/Project'
import Contact from './contact/Contact'
import '../../style/mainContent/Main.css'

const Main = () => {
  return (
    <div>
      <Me />
      <Project />
      <Contact />
    </div>
  )
}

export default Main