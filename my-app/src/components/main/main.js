import './main.css'
import slider2 from './assets/slider2.jpg'
import slider3 from './assets/slider3.jpg'
import slider4 from './assets/slider4.jpg'
import slider5 from './assets/slider5.jpg'

function Main() {
    return (
        <div className='mainContainer'>
            <div className='mainSlider'>
                <div className='slider'>
                    <ul>
                        <li><img src={slider5} alt=""/></li>
                        <li><img src={slider2} alt=""/></li>
                        <li><img src={slider3} alt=""/></li>
                        <li><img src={slider4} alt=""/></li>
                    </ul>
                </div>
            </div>
            <section className='mainInfoContainer'>
                <div className='mainInfo'>
                <h3 className='mainInfoTitle'> Titulo </h3>
                <p className='mainText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>

        </div>
    )
}

export default Main