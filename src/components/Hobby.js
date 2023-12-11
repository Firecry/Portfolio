import '../scss/Hobby.scss'
import { FirefliesCanvas } from '../hooks/FirefliesCanvas.js'

export default function Hobbys() {

    const hobbySetup = [
        {
            id: 0,
            name: 'skiing', 
            delay: '0'
        },
        {
            id: 1,
            name: 'calisthenics', 
            delay: '150'
        },
        {
            id: 2,
            name: 'cycling', 
            delay: '300'
        },
        {
            id: 3,
            name: 'jogging', 
            delay: '450'
        },
        {
            id: 4,
            name: 'coding', 
            delay: '600'
        },
        {
            id: 5,
            name: 'music', 
            delay: '750'
        },
        {
            id: 6,
            name: 'games', 
            delay: '900'
        },
        {
            id: 7,
            name: 'movies', 
            delay: '1050'
        },
    ]

    return(
        <div className='hobby' id='hobby'>
            
            <div className='background'></div>
            <FirefliesCanvas width={window.innerWidth} height={window.innerHeight} />

            <div className='containerHobby'>

                { hobbySetup.map(hobbies => {
                    return(
                        <div
                            className='hobbys'
                            data-aos='fade-up'
                            data-aos-duration="1500"
                            data-aos-delay={ hobbies.delay }
                            key = { hobbies.id }
                        >
                            <div className={ `hobbysUp ${ hobbies.name }` }></div>
                            <div className='hobbysDown'><div>{ hobbies.name }</div></div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}