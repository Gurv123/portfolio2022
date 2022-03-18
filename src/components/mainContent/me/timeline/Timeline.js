import React from 'react'
import '../../../../style/mainContent/me/timeline/Timeline.css'
import { TimelineItems } from './TimelineItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

const Timeline = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="center-line">
          <FontAwesomeIcon icon={faCaretDown} className="scroll-icon"/>
        </div>
        {TimelineItems.map((item) => {
          return (
            <div className={item.cName} key={item.id}>
              <section>
                <div className='icon'>{item.icon}</div>
                <div className="details">
                  <span className='title'>{item.title}</span>
                  <span>{item.date}</span>
                </div>
                <p>{item.description}</p>
                <span className='bottom'>{item.lieu}</span>
              </section>
            </div>            
          )
        })}
      </div>
    </div>
  )
}

export default Timeline