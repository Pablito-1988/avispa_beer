import './login.css'
import { Formik, Form, ErrorMessage } from 'formik';

function Access() {
    return(
        <div className='formContainer'>
            <div className='form'>
            <Formik
                initialValues={{
                    user: '',
                    password: ''
                }}
                validate={(values)=>{
                    const errors = {}
                    if (!values.user) {
                        errors.user = 'Debes agregar un usuario valido'
                     }
                     if (!values.password) {
                        errors.password = 'Debes agregar una contraseña'
                     }

                    return errors
                }}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
              {({ handleChange, setFieldValue}) => ( 
                  <Form>
                    <label>Usuario</label>
                    <input
                        type='text'
                        onChange={handleChange}
                        name="user"
                        id='user'
                        className='userName' />

                    <ErrorMessage name='user' className='errors' component='span' />

                    <label>Password</label>
                    <input 
                        type='password'
                        placeholder='Password'
                        onChange={handleChange}
                        name='password'
                        />
                    <ErrorMessage name='password' className='errors' component='span' />
                    <button type='submit'>Ingresar</button>
                  </Form>

              )}
            </Formik>
            </div>
        </div>    
    )
}

export default Access