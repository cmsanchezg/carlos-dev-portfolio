import './Header.scss';
import { NavLink } from 'react-router-dom';

import headShot from '../../assets/images/carlos-sanchez-image.jpeg';

function Header() {

    return (
        <>
       <article className='header'>
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
                        <li className='header__nav__item'>
                            <NavLink className='header__nav__link'>Home</NavLink>
                        </li>
                        <li className='header__nav__item'>
                            <NavLink className='header__nav__link'>About Me</NavLink>
                        </li>
                        <li className='header__nav__item'>
                            <NavLink className='header__nav__link'>Projects</NavLink>
                        </li>
                        <li className='header__nav__item'>
                            <NavLink className='header__nav__link'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <ul className='header__nav__links header__nav__links--tablet'>
                    <li className='header__nav__item header__nav__item--tablet'>
                        <NavLink className='header__nav__link header__nav__link--tablet'>Home</NavLink>
                    </li>
                    <li className='header__nav__item header__nav__item--tablet'>
                        <NavLink className='header__nav__link header__nav__link--tablet'>About Me</NavLink>
                    </li>
                    <li className='header__nav__item header__nav__item--tablet'>
                        <NavLink className='header__nav__link header__nav__link--tablet'>Projects</NavLink>
                    </li>
                    <li className='header__nav__item header__nav__item--tablet'>
                        <NavLink className='header__nav__link header__nav__link--tablet'>Contact</NavLink>
                    </li>
                </ul> 
            </section>
        </article>
        </>
    );
}

export default Header;