import React from 'react'
import linkedin from '../../assets/linkedin.png'
import '../../style/footer/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="https://www.linkedin.com/in/gurvan-buanic/">
          <img src={linkedin} alt="Logo Linkedin" className='logoLinkedin'/>
        </a>
        <p className='copyright'>Copyright © Gurvan Buanic - 2022</p>
      </footer>
    </div>
  )
}

export default Footer