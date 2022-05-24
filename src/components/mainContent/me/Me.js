import React from 'react'
import '../../../style/mainContent/me/Me.css'
import Timeline from './timeline/Timeline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import CV from '../../../assets/Gurvan_CV.pdf'
import me from '../../../assets/me.jpg'

const Me = () => {
  return (
    <div id='me'>
      <section>
        <h2>A propos</h2>
        <div className='detailsMe'>
          <img src={me} alt="Gurvan Buanic" className='imgMe'/>
          <div className='paraMe'>
            <p>Gurvan Buanic, 24 ans, après une licence dans le domaine du sport (Licence Sciences et Techniques des Activités Physiques et Sportives : Entrainement Sportif) j'ai voulu me réorienter dans le domaine du développement, un domaine qui me passionne depuis longtemps. J'ai donc commencé cette année un BTS SIO option SLAM (Branche du développement web/application) au Greta de Quimper.</p>
            <p>Le lien du Drive vers mes projet effectué lors de mon BTS : <a href="https://drive.google.com/drive/u/0/folders/1fug4Q1JFJ5TsQAOIab6qGbgWBl-BzQja">Drive Google</a></p>
          </div>
          <div className='wrapper-btn'>
            <p>Vous pouvez regarder ou télécharger mon CV ici :</p>
            <a href={CV} target="_blank" rel='noreferrer' className='btn-cv'><FontAwesomeIcon icon={faArrowAltCircleDown} className='setSizeIcon'/></a>
          </div>
        </div>
        <Timeline />
      </section>
    </div>
  )
}

export default Me

/*
cv
*/