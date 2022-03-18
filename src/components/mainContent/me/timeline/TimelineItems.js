import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export const TimelineItems = [
  {
    id: '1lf',
    title: 'Licence STAPS Mention Entrainement Sportif',
    date: '2016 - 2020',
    lieu: 'Fac de sport, Brest',
    description: 'Après 4 années j\'ai obtenu ma licence dans le domaine du sport. J’ai acquis de nombreuses connaissances dans le domaine de l’entraînement sportif. Après l’obtention de celle-ci, je voulais me réorienter vers le domaine du numérique, j’ai donc décidé de prendre une année de pause pour réfléchir à ce que j’allais faire (étude, freelances ?).',
    icon: <FontAwesomeIcon icon={faGraduationCap} className='sizeIcon'/>,
    cName: 'row row-1'
  },

  {
    id: '2dp',
    title: 'Découverte des métiers du numérique',
    date: 'Janvier 2021',
    lieu: 'Par l\'ENI à Quimper',
    description: 'Lors d’un entretien avec Pole-emploi, mon conseiller m’a parlé la formation « Découverte des métiers du numérique » de l’ENI qui dure un mois. Elle m’a permis de découvrir les métiers du développement, ceux de la branche réseau, les métiers du test, etc. Ce qui m’a permis de me conforter dans mon choix de me diriger vers le développement.',
    icon: <FontAwesomeIcon icon={faTerminal} className='sizeIcon'/>,
    cName: 'row row-2'
  },

  {
    id: '3bp',
    title: 'Bootcamp The Hacking Project',
    date: 'Avril 2021',
    lieu: 'Pont-l\'Abbé',
    description: 'The Hacking Project est un bootcamp qui propose des formations dans le développement web de 3 à 6 mois sur le langage Ruby et Ruby on Rails pour le côté back ainsi que HTML, CSS, JAVASCRIPT pour la partie front. Au mois d’avril, ils ont proposé d’essayer leurs formations pendant un mois gratuitement, j’en ai donc profité pour approfondir mes connaissances en développement web.',
    icon: <FontAwesomeIcon icon={faCode} className='sizeIcon'/>,
    cName: 'row row-1'
  },

  {
    id: '4bg',
    title: 'BTS SIO option SLAM',
    date: '2021 - 2022',
    lieu: 'Greta de Quimper',
    description: 'Après cette année de pause, j’ai décidé de me lancer dans un BTS SIO option SLAM accéléré sur 1 an. J’ai pu consolider mes bases en HTML, CSS, Javascript, découvrir le PHP ainsi que tout ce qui touche au langage SQL par le biais de projets. J’ai aussi commencé l’apprentissage du Python et C++, ainsi que la POO avec JAVA sur notre projet final Climb-This.',
    icon: <FontAwesomeIcon icon={faLaptopCode} className='sizeIcon'/>,
    cName: 'row row-2'
  }
]