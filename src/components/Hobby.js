import '../scss/Hobby.scss'

export default function Hobbys() {

    const hobbySetup = [
        {
            id: 0,
            name: 'Skiing',
            class: 'skiing', 
            delay: '0'
        },
        {
            id: 1,
            name: 'Calisthenics',
            class: 'calisthenics', 
            delay: '150'
        },
        {
            id: 2,
            name: 'Cycling',
            class: 'bicycle', 
            delay: '300'
        },
        {
            id: 3,
            name: 'Jogging',
            class: 'jogging', 
            delay: '450'
        },
        {
            id: 4,
            name: 'Coding',
            class: 'coding', 
            delay: '600'
        },
        {
            id: 5,
            name: 'Music',
            class: 'music', 
            delay: '750'
        },
        {
            id: 6,
            name: 'Games',
            class: 'games', 
            delay: '900'
        },
        {
            id: 7,
            name: 'Movies',
            class: 'movies', 
            delay: '900'
        },
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
                            key = { hobbies.id }
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