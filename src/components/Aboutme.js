import '../css/Aboutme.css'
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
            >
                <h1>Szymon Smolorz<div class="material-symbols-outlined">waving_handwaving_hand</div></h1>
            </div>
                <div
                    className='description'
                    data-aos='fade-right'
                    data-aos-duration="2000"
                >
                    <p>
                        I'm a frontend web developer, creating websites using React framework.
                        I'm 20 years old and come from Poland. I used to study HTML and CSS for 4 years in IT school.
                        My interest in JavaScript started a year ago, by my friend.
                        It was like he was telling me I had to start, but I didn't want to so much.
                        But now I am fascinated and I want to learn new things every day.
                    </p>
                </div>
            <div
                className='photo'
                data-aos='fade-left'
                data-aos-duration="3000"
            ></div>
        </div>
    )
}