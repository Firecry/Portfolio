import '../scss/Contact.scss'
import { MouseCanvas } from '../hooks/MouseCanvas.js'

export default function Contact() {
    return(
        <div className='contact' id='contact'>
            <MouseCanvas width={window.innerWidth} height={window.innerHeight} />
            <div className='contact-container'></div>
        </div>
    )
}