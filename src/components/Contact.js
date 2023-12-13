import '../scss/Contact.scss'

export default function Contact() {
    return(
        <div className='contact' id='contact'>
            <div className='gradient'></div>
            <div className="bubble"></div>
            <div className='contact-container'>
                <div className='contact-element'>
                    <div className='contact-element-insider'>
                        <input type='text' className='fillers' placeholder='Name'/>
                        <input type='email' className='fillers' placeholder='E-mail'/>
                        <textarea name="message" className='fillers' placeholder='message here...'></textarea>
                        <input type='submit' className='fillers' value='Submit' />
                    </div>
                </div>
            </div>
        </div>
    )
}