import React from 'react'
import { itemsBlocVeille } from './itemsBlocVeille'
import '../../../style/mainContent/veille/Veille.css'

const Veille = () => {
  return (
    <div id='veille'>
      <section>
        <h2>Veille</h2>
        <div className='veilleExpli'>
          <p>Ma veille cette année a été consacré au Javascript, et plus précisément au Framework de ce langage. J'ai pu m'apercevoir qu'il en existait énormement, et cette veille m'a permis de voir quels framework étaient les plus en vogue en 2021/2022 et pourquoi.</p>
          <p>JavaScript (JS) est un langage de programmation web dynamique qui peut mettre à jour et modifier à la fois le CSS et le HTML. Il se conforme aux spécifications ECMAScript et est utilisé pour manipuler, valider et contrôler les données. Les frameworks JavaScript sont essentiellement des outils qui facilitent le travail avec JavaScript. Ils fournissent aux développeurs des modèles préconstruits qui permettent de réutiliser les modèles de programmation courants. Cela permet aux développeurs de gagner du temps lorsqu'il s'agit d'écrire du code pour chaque nouvelle application.</p>
          <p>Le lien vers mon pearltrees : <a href="https://www.pearltrees.com/gurv123" target="_blank" rel="noopener noreferrer">cliquer ici.</a></p>
        </div>

        <div className='wrapperVeille'>
          {itemsBlocVeille.map((item) => {
            return(
              <div className='itemVeille'>
                <h4>{item.title}</h4>
                <p>{item.date}</p>
                <p>{item.details}</p>
                <p><a href={item.url}>Allez vers de l'article</a></p>
              </div>
            )
          })}
        </div>

      </section>
    </div>
  )
}

export default Veille