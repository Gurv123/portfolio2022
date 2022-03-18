import React, { useState } from 'react'
import { ProjectItems } from './ProjectItems'
import PopUp from './PopUp'
import '../../../../style/mainContent/project/modalPopUp/Modals.css'

const Modals = () => {
  const [showModal, setShowModal] = useState(false);

  const openModals = () =>{
    setShowModal(prev => !prev);
  }

  const [popUpContent, setPopUpContent] = useState([]);
  
  const changeContent = (item) => {
    setPopUpContent([item]);
  }

  return (
    <div>
      <div className='wrapperImg'>
      {ProjectItems.map((item) => {
        return(
          <div className="content_card" key={item.id} onClick={() => { openModals(); changeContent(item);}}>
            <img src={item.img} alt={item.title} />
          </div>
        )
      })}
      </div>

      <PopUp  showModal={showModal} setShowModal={setShowModal} popUpContent={popUpContent} />
    </div>
  )
}

export default Modals