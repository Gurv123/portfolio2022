import React, { useRef, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../../../../style/mainContent/project/modalPopUp/PopUp.css'

const PopUp = ({showModal, setShowModal, popUpContent}) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <div>
      {showModal ? (
        <div className='backgroundPopUp' onClick={closeModal} ref={modalRef}>
          {popUpContent.map((pop) => {
            return(
              <div className="popUpWrapper" key={pop.id}>
                <img src={pop.img} alt={pop.title} />
                <div className='popUpContent'>
                  <h3>{pop.title}</h3>
                  <p>Language : <span>{pop.language}</span></p>
                  <p>{pop.details}</p>
                  <a href={pop.url} target='_blank' rel="noreferrer">Voir</a>
                </div>
                <button onClick={() => setShowModal (prev => !prev)} className='closePopUpButton'><FontAwesomeIcon icon={faTimes} className='closeIconSize'/></button>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  );
}

export default PopUp