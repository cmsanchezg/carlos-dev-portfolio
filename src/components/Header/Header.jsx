import './Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import headShot from '../../assets/images/carlos-sanchez-image.jpeg';
import hamburgerMenuIcon from '../../assets/icons/hamburger_menu_icon.svg';

function Header() {

    const [viewNavLinks, setViewNavLinks] = useState(false);

    const handleNavLinks = () => {
        setViewNavLinks(!viewNavLinks);
    };

    return (
        <>
       <article className='header'>
            <section className='header__info'>
                <img className='header__headshot' src={headShot} alt="Carlos Sanchez headshot"/>
                <p className=' header__name'>Carlos Sanchez</p>
            </section>
            <section className='header__nav'>
                <img className='header__menu__icon' src={hamburgerMenuIcon} alt="Hamburger Menu" onClick={handleNavLinks}/>
                <ul className='header__nav__links header__nav__links--tablet'>
                    <Link className='header__link header__link--tablet'>Home</Link>
                    <Link className='header__link header__link--tablet'>About</Link>
                    <Link className='header__link header__link--tablet'>Projects</Link>
                    <Link className='header__link header__link--tablet'>Contact</Link>
                </ul> 
            </section>
        </article>

        {viewNavLinks ?
            <ul className='header__nav__links'>
                <Link className='header__link'>Home</Link>
                <Link className='header__link'>About</Link>
                <Link className='header__link'>Projects</Link>
                <Link className='header__link'>Contact</Link>
            </ul> 
        : "" }
        </>
    );
}

export default Header;