import './Header.scss';
import { Link } from 'react-router-dom';

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
                    <input type="checkbox"  id='checkbox' className='header__checkbox  header__visuallyHidden'/> 
                    <label htmlFor="checkbox">
                        <div className='header__hamburger'>
                            <span className='header__bar header__bar1'></span>
                            <span className='header__bar header__bar2'></span>
                            <span className='header__bar header__bar3'></span>
                            <span className='header__bar header__bar4'></span>    
                        </div> 
                    </label>
                    <ul className='header__nav__links'>
                        <Link className='header__link'>Home</Link>
                        <Link className='header__link'>About Me</Link>
                        <Link className='header__link'>Projects</Link>
                        <Link className='header__link'>Contact</Link>
                    </ul>
                </div>
                <ul className='header__nav__links header__nav__links--tablet'>
                    <Link className='header__link header__link--tablet'>Home</Link>
                    <Link className='header__link header__link--tablet'>About Me</Link>
                    <Link className='header__link header__link--tablet'>Projects</Link>
                    <Link className='header__link header__link--tablet'>Contact</Link>
                </ul> 
            </section>
        </article>
        </>
    );
}

export default Header;