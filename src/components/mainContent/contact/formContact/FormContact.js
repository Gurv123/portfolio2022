import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import '../../../../style/mainContent/contact/formContact/FormContact.css'

const Result = () => {
  return(
    <p>Votre message à bien été envoyé.</p>
  )
}

const FormContact = () => {
  const [result, showResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7apq1wr', 'template_1ymupxo', form.current, 'rK-IW7rP7egi0VPto')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };

  setTimeout(() =>{
    showResult(false)
  }, 5000);

  return (
    <div className="wrapperContact">
      <h3>Vous pouvez me contacter ici : </h3> 

      <form ref={form} onSubmit={sendEmail} >
        <input type="text" name='fullName' placeholder='Votre Nom & Prénom' required />

        <input type="text" name='email' placeholder='Votre email' required />

        <input type="text" name='object' placeholder='Objet' required />

        <textarea name="message" placeholder='Comment puis-je vous aider ?' rows="4"></textarea>

        <button type="submit" className='sendBtn'>Envoyer</button>

        <div className='resultContact'>
          {result ? <Result /> : null}
        </div>
      </form>
    </div>
  )
}

export default FormContact