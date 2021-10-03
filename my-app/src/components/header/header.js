import './header.css'
import logo from './assets/La Avispa v1.jpg'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
         <header className='headerWrapper'>
             <div className='logoContainer'>
                 <Link to='/'><img className='logo' src={logo}></img></Link> 
             </div>
             <div className='links'>
                    <Link to ='/estilos'>Nuestros estilos</Link>
                    <Link to='/nosotros'>Nosotros</Link>
                    <Link to='/contacto'>Contacto</Link>                                   
             </div>
         </header>
        </>
    )

}

export default Header