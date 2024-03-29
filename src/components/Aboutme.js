import '../scss/Aboutme.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Aboutme() {
    return(
        <div className='aboutme' id='aboutme'>
            <div
                className='title'
                data-aos='fade-right'
                data-aos-duration="1500"
                data-aos-delay='0'
            >
                <h1>Szymon Smolorz<div className="material-symbols-outlined">waving_handwaving_hand</div></h1>
            </div>
                <div
                    className='description'
                    data-aos='fade-right'
                    data-aos-duration="1500"
                    data-aos-delay='300'
                >
                    <p>
                        I'm a frontend web developer, creating websites using React framework.
                        I'm 21 years old and come from Poland. I used to study HTML and CSS for 4 years in IT school,
                         but im still learning by myself. It's been 5 years at all.
                        My interest in JavaScript started 2 years ago, by my friend.
                        It was like he was telling me I had to start, but I didn't want to so much.
                        But now I am fascinated and I want to learn new things every day.
                    </p>
                </div>
            <div
                className='photo'
                data-aos='fade-left'
                data-aos-duration="1500"
                data-aos-delay='600'
            ></div>
        </div>
    )
}