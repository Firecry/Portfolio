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
                    I'm a 22-year-old frontend web developer from Poland, specializing in creating modern websites with React.
                    My journey began in IT school, where I studied HTML and CSS for four years, and over the past five years,
                    I've dedicated myself to continuous learning.
                    Three years ago, I discovered JavaScript, which sparked my passion for building dynamic, interactive web applications.
                    I love combining code and design to craft intuitive user experiences while staying updated on the latest web technologies.
                    My current goal is to expand into full-stack development, exploring backend tools like Node.js to broaden my expertise.
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