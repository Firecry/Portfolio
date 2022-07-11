import '../css/Navbar.css';

export default function Navbar() {
    return (
        <header className="navbar">
            <div className='border'>Home</div>
            <div className='elements'>
                <div className='margin border'>About Me</div>
                <div className='margin border'>Projects</div>
                <div className='margin border'>Hobby</div>
                <div className='margin border'>CV</div>
            </div>
        </header>
    )
}