import './Header.scss';
import { NavLink } from 'react-router-dom';

import headShot from '../../assets/images/carlos-sanchez-image.jpeg';
import { useState } from 'react';

function Header() {

    const [colorChange, setColorChange] = useState (false)

    const changeHeaderColor = () => {
        if (window.scrollY >= 15) {
              setColorChange (true);
        }
        else {
            setColorChange (false);
        }
    };
    window.addEventListener ('scroll', changeHeaderColor);


    const handleClickScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <>
       <article className={colorChange ? "header header__colorChange" : "header"}>
            <section className='header__info'>
                <img className='header__headshot' src={headShot} alt="Carlos Sanchez headshot"/>
                <p className=' header__name'>Carlos Sanchez</p>
            </section>
            
            <section className='header__nav'>
                <div className='header__hamburger__menu'>
                    <input type="checkbox"  id='checkbox' className='header__checkbox  header__hidden'/> 
                    <label htmlFor="checkbox">
                        <div className='header__hamburger'>
                            <span className='header__bar header__bar1'></span>
                            <span className='header__bar header__bar2'></span>
                            <span className='header__bar header__bar3'></span>    
                        </div> 
                    </label>
                    <ul className='header__nav__links'>
                        <li className='header__nav__item' onClick={() => handleClickScroll('homePage')}>
                            <NavLink className='header__nav__link'>Home</NavLink>
                        </li>
                        <li className='header__nav__item' onClick={() => handleClickScroll('aboutMe')}>
                            <NavLink className='header__nav__link'>About Me</NavLink>
                        </li>
                        <li className='header__nav__item' onClick={() => handleClickScroll('projects')}>
                            <NavLink className='header__nav__link'>Projects</NavLink>
                        </li>
                        <li className='header__nav__item' onClick={() => handleClickScroll('skills')}>
                            <NavLink className='header__nav__link'>Skills</NavLink>
                        </li>
                        <li className='header__nav__item' onClick={() => handleClickScroll('contact')}>
                            <NavLink className='header__nav__link'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <ul className='header__nav__links header__nav__links--tablet'>
                    <li className='header__nav__item header__nav__item--tablet' onClick={() => handleClickScroll('homePage')}>
                        <NavLink className='header__nav__link header__nav__link--tablet'>Home</NavLink>
                    </li>
                    <li className='header__nav__item header__nav__item--tablet' onClick={() => handleClickScroll('aboutMe')}>
                        <NavLink className='header__nav__link header__nav__link--tablet'>About Me</NavLink>
                    </li>
                    <li className='header__nav__item header__nav__item--tablet' onClick={() => handleClickScroll('projects')}>
                        <NavLink className='header__nav__link header__nav__link--tablet'>Projects</NavLink>
                    </li>
                    <li className='header__nav__item header__nav__item--tablet' onClick={() => handleClickScroll('skills')}>
                        <NavLink className='header__nav__link header__nav__link--tablet'>Skills</NavLink>
                    </li>
                    <li className='header__nav__item header__nav__item--tablet' onClick={() => handleClickScroll('contact')}>
                        <NavLink className='header__nav__link header__nav__link--tablet'>Contact</NavLink>
                    </li>
                </ul> 
            </section>
        </article>
        </>
    );
}

export default Header;