import React from 'react'
import './ScrollTopBtn.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(window.scrollY > 300){
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div>
      <button type='button' className={isVisible ? 'scrollTopBtn' : 'none'} onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} className='btnUpIcon'/></button>
    </div>
  )
}

export default ScrollTopBtn

