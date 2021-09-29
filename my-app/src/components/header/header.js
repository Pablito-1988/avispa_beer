import './header.css'
import logo from './assets/La Avispa v1.jpg'

function Header(){
    return(
        <>
         <header className='headerWrapper'>
             <div className='logoContainer'>
                   <img className='logo' src={logo}></img> 
             </div>
             <div className='links'>
                 <ul>
                     <li>Nuestros estilos</li>
                     <li>Noticas</li>
                     <li>Nosotros</li>
                     <li>Contacto</li>
                 </ul>
             </div>
         </header>
        </>
    )

}

export default Header