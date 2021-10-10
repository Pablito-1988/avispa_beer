
import './contacto.css'

import emailjs from 'emailjs-com'
import {  useRef } from 'react'
import Modal from './Modal/Modal';

function Contacto (){

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_d8x5lfx','template_fiz3b0n', e.target,'user_R2WV8np2I5apUnVMFdjgE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

    }
    return(
        <div className='contactContainer'>
            <div className='wrapper'>
                <h2>Contacto</h2>
                <div className='underline'></div>
                <h4>¡Ponete en contacto con nosotros!  <a href="mailto:avispahomebrew@gmail.com">avispahomebrew@gmail.com</a></h4> 
                <Modal/>         
                       <form   onSubmit={sendEmail} className='contactForm'>
                           <div className='nameField'>
                           <label>Nombre completo</label>
                           <input
                                type='text'
                                name='fullName'
                                id='fullName'
                                className='fullName'
                                required/>
                         
                            </div>
                            <div className='secondRow'>
                                <div className='emailField'>
                                <label>Email</label>
                                <input
                                type='email'
                                required
                                name='email'
                                id='email'
                                className='email'/>
                        
                            </div>
                            <div className='phoneField'>
                                <label>Telefono</label>
                                <input
                                type='tel'
                                required
                                name='phone'
                                id='phone'
                                className='phone'/>
                        
                            </div>
                            </div>
                            <div className='textField'>
                            <label>Texto</label>
                            <textarea
                                 typeof='text'
                                 required
                                 name='text'
                                 id='text'
                                 className='text'/> 
                            
                            </div>
                        <button className='contactSubmit' type='submit'>Enviar</button>                       
                       </form>
            </div>
        </div>
    )
}

export default Contacto