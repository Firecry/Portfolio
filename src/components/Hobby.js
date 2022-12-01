import '../css/Hobby.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Hobbys() {

    const hobbySetup = [
        {
            name: 'Gym',
            class: 'gym', 
            delay: '0'
        },
        {
            name: 'Cycling',
            class: 'bicycle', 
            delay: '300'
        },
        {
            name: 'Games',
            class: 'games', 
            delay: '600'
        },
        {
            name: 'Music',
            class: 'music', 
            delay: '900'
        }
    ]

    return(
        <div className='hobby' id='hobby'>
            <div className='containerHobby'>

                { hobbySetup.map(hobbies => {
                    return(
                        <div
                            className='hobbys'
                            data-aos='fade-up'
                            data-aos-duration="1500"
                            data-aos-delay={ hobbies.delay }
                        >
                            <div className={ `hobbysUp ${ hobbies.class }` }></div>
                            <div className='hobbysDown'><div>{ hobbies.name }</div></div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}