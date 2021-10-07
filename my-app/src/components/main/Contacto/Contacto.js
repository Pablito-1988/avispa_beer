
import './contacto.css'
import { Formik, Form, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com'
import {  useRef } from 'react'

function Contacto (){
    return(
        <div className='contactContainer'>
            <div className='wrapper'>
                <h2>Contacto</h2>
                <div className='underline'></div>
                <h4>¡Ponete en contacto con nosotros!  <a href="mailto:avispahomebrew@gmail.com">avispahomebrew@gmail.com</a></h4>
                <Formik 
                    initialValues = {{
                        email:'',
                        phone:'',
                        fullName:'',
                        text:''
                    }}
                    validate={(values)=>{
                        const errors ={}
                        if (!values.email) {
                            errors.email = 'Debes agregar un email porfavor'
                         }
                         if (!values.phone) {
                            errors.phone = 'Debes agregar un telefono porfavor'
                         }
                         if (!values.fullName) {
                            errors.fullName = 'Debes agregar un Nombre'
                         }
                         if (!values.text) {
                            errors.text = 'Debes agregar un texto'
                         } 
                         return errors  
                    }}
                    onSubmit={(values)=>{
                        
                                emailjs.sendForm('gmail', 'template_fiz3b0n',values.email, 'user_R2WV8np2I5apUnVMFdjgE')
                                  .then((result) => {
                                      console.log(result.text);
                                  }, (error) => {
                                      console.log(error.text);
                                  });
                        
                    }}
                >
                   {({ handleChange, setFieldValue}) => ( 
                       <Form  className='contactForm'>
                           <div className='nameField'>
                           <label>Nombre completo</label>
                           <input
                                type='text'
                                onChange={handleChange}
                                name='fullName'
                                id='fullName'
                                className='fullName'/>
                        <ErrorMessage name='fullName' className='errors' component='span' />       
                            </div>
                            <div className='secondRow'>
                                <div className='emailField'>
                                <label>Email</label>
                                <input
                                type='email'
                                onChange={handleChange}
                                name='email'
                                id='email'
                                className='email'/>
                        <ErrorMessage name='email' className='errors' component='span' />
                            </div>
                            <div className='phoneField'>
                                <label>Telefono</label>
                                <input
                                type='tel'
                                onChange={handleChange}
                                name='phone'
                                id='phone'
                                className='phone'/>
                        <ErrorMessage name='phone' className='errors' component='span' />
                            </div>
                            </div>
                            <div className='textField'>
                            <label>Texto</label>
                            <textarea
                                 typeof='text'
                                 onChange={handleChange}
                                 name='text'
                                 id='text'
                                 className='text'/> 
                            <ErrorMessage name='text' className='errors' component='span' />  
                            </div>
                        <button className='contactSubmit' type='submit'>Enviar</button>
                       
                       </Form>
                   )}
                </Formik>

            </div>

        </div>
    )
}

export default Contacto