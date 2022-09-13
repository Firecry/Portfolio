import '../css/Aboutme.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Aboutme() {
    return(
        <div className='aboutme' id='aboutme'>
            <div
                className='description'
                data-aos='fade-right'
                data-aos-duration="1000"
            >
                Hello World!
            </div>
            <div
                className='photo'
                data-aos='fade-left'
                data-aos-duration="1000"
            ></div>
        </div>
    )
}