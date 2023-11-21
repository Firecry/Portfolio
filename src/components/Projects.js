import '../scss/Projects.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Projects() {

    const links = [
        {
            name: 'Clicker',
            url: 'https://money-clicker-73c52d.netlify.app',
            class: 'clicker-game', 
            delay: '0'
        },
        {
            name: 'RGB Calculator',
            url: 'https://js-calculator-ee022d.netlify.app',
            class: 'calculator', 
            delay: '300'
        },
        {
            name: 'Arm Wresling',
            url: 'https://arm-wresling-f9c5a3.netlify.app',
            class: 'arm-wresling', 
            delay: '600'
        },
        {
            name: 'DWB-Poland Sp. z o. o.',
            url: 'https://dwb.com.pl/',
            class: 'dwb-poland', 
            delay: '900'
        },
    ]

    return(
        <div className='projects' id="projects">
            <div className='wave'>
                <svg id="svg" viewBox="0 0 1400 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-100 ease-in-out delay-100">
                    <path d="M 0,400 C 0,400 0,200 0,200 C 56.02011684157658,165.37032435433133 112.04023368315316,130.74064870866266 158,137 C 203.95976631684684,143.25935129133734 239.85918210896398,190.4077295196807 285,224 C 330.140817891036,257.5922704803193 384.52303788099084,277.6284332126147 437,257 C 489.47696211900916,236.37156678738532 540.0486663670729,175.07853762986068 580,171 C 619.9513336329271,166.92146237013932 649.2822966507176,220.05741626794259 697,256 C 744.7177033492824,291.9425837320574 810.8221470300563,310.691797298369 869,274 C 927.1778529699437,237.30820270163102 977.4291152290573,145.17539453858151 1019,143 C 1060.5708847709427,140.82460546141849 1093.4613920537151,228.60662454730493 1144,238 C 1194.5386079462849,247.39337545269507 1262.7253165560812,178.3981072721986 1315,159 C 1367.2746834439188,139.6018927278014 1403.6373417219593,169.80094636390072 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#000000" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
                </svg>
            </div>
            <div className='project-flex'>
                <div className='box-container'>
                    <div className='element-container'>
                    { links.map(link => {
                        return(
                            <div className='box-bg'
                                data-aos='fade-up'
                                data-aos-duration="1500"
                                data-aos-delay={ link.delay }
                            >
                                <div className='box-rotate'></div>
                                <div
                                    className='box-element'
                                >
                                    <a href={ link.url } target="_blank" rel="noreferrer">
                                        <div className={`project-items ${link.class}`}></div>
                                        <div className='project-text'>{link.name}</div>
                                    </a>
                                </div>
                            </div>
                        )
                    }) }
                    </div>

                    <div className='seemore-bg'
                        data-aos='fade-up'
                        data-aos-duration="1500"
                        data-aos-delay="1200"
                    >
                        <div
                            className='seemore'
                        >
                            <a href='https://github.com/Firecry?tab=repositories' target='_blank' rel="noreferrer"><div>Show Me More!</div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}