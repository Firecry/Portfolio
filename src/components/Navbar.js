import '../css/Navbar.css';

export default function Navbar() {
    return (
        <header className="navbar">
            <div>Home</div>
            <div className='elements'>
                <div className='margin'>About Me</div>
                <div className='margin'>Projects</div>
                <div className='margin'>Hobby</div>
                <div className='margin'>CV</div>
            </div>
        </header>
    )
}