import React from 'react'
import '../../../style/mainContent/me/Me.css'
import Timeline from './timeline/Timeline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import CV from '../../../assets/Gurvan_CV.pdf'

const Me = () => {
  return (
    <div id='me'>
      <section>
        <h2>Parcours</h2>
        <div className='detailsMe'>
          <p>Gurvan Buanic, 24 ans, actuellement en BTS SIO option SLAM (Branche du développement web/application). Je souhaite poursuivre mes études avec une licence professionnelle en alternance pour l’année 2022-2023. C’est pourquoi je suis à la recherche d’une entreprise qui me permettra d’allier enseignement théorique et formation pratique. J’aspire à devenir plus tard un développeur plus orienté web, mais le coté logiciel applicatif m’intéresse aussi.</p>
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