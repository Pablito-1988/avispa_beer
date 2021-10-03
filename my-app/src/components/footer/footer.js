import './footer.css'
import {Link} from 'react-router-dom'

function Footer(){
    var today = new Date(),
   date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    return (
        <>
        <footer>
            <div className='footerWrapper'>
                <div className='contactInfo'>
                    <ul>
                        <li>Tel: 4554454654654</li>
                        <li>Florida Vte Lopez</li>
                    </ul>
                </div>
                <div className='socialLinks'>
                    <Link><i class="fab fa-instagram"></i></Link>
                    <Link><i class="fab fa-facebook-square"></i></Link>
                    <Link><i class="far fa-envelope"></i></Link>
                </div>
            </div>
         <p className='copy'>«Copyright {date} por Pablito»</p>   
        </footer>
        
        </>
    )
}

export default Footer