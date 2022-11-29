import '../css/Hobby.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Hobbys() {
    return(
        <div className='hobby' id='hobby'>
            <div className='containerHobby'>
                <div
                    className='hobbys'
                    data-aos='fade-up'
                    data-aos-duration="1500"
                    data-aos-delay="0"
                >
                    <div className='hobbysUp gym'></div>
                    <div className='hobbysDown'>Gym</div>
                </div>
                <div
                    className='hobbys'
                    data-aos='fade-up'
                    data-aos-duration="1500"
                    data-aos-delay="300"
                >
                    <div className='hobbysUp bicycle'></div>
                    <div className='hobbysDown'>Cycling</div>
                </div>
                <div
                    className='hobbys'
                    data-aos='fade-up'
                    data-aos-duration="1500"
                    data-aos-delay="600"
                >
                    <div className='hobbysUp games'></div>
                    <div className='hobbysDown'>Games</div>
                </div>
                <div
                    className='hobbys'
                    data-aos='fade-up'
                    data-aos-duration="1500"
                    data-aos-delay="900"
                >
                    <div className='hobbysUp music'></div>
                    <div className='hobbysDown'>Music</div>
                </div>
            </div>
        </div>
    )
}