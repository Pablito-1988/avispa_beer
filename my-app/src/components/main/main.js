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
        </div>
    )
}

export default Main