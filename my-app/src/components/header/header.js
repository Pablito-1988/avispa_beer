import './header.css'
import logo from './assets/La Avispa v1.jpg'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
         <header className='headerWrapper'>
             <div className='logoContainer'>
                   <img className='logo' src={logo}></img> 
             </div>
             <div className='links'>
                    <Link to ='#'>Nuestros estilos</Link>
                    <Link>Noticas</Link>
                    <Link>Nosotros</Link>
                    <Link>Contacto</Link>                                    
             </div>
         </header>
        </>
    )

}

export default Header