import './navbar.css'
import Image from './image';



function Navbar() {

    const handleScrollToSocials = () => {
        const NavbarSection = document.getElementById('Navbar12');
        NavbarSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="navbar" id='Navbar12'>
                <h2 className="AquaLife">AquaLife</h2>
                <ul className="ul1">
                    <li className="list" onClick={handleScrollToSocials}>Home</li>
                    <li className="list">Socials</li>
                    <li className="list">Contacts</li>
                </ul>
            </div>
            <Image />
        </>

    )
}


export default Navbar;