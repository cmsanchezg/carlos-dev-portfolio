import './Hero.scss';

import linkedin from '../../assets/icons/linkedin.svg';
import gitHub from '../../assets/icons/github.svg';
import email from '../../assets/icons/email.svg';
import resume from '../../assets/icons/resume.png';
import { ReactComponent as Arrow } from '../../assets/icons/down-arrow.svg'

function Hero() {
    return (
        <article className='hero'>
            <p className='hero__name'>Hello! My name is <span>Carlos Sanchez!</span></p>
            <p className='hero__location'>I am a <span>Web Developer</span> based in <span>Vancouver, B.C.</span></p>       
            <section className='hero__social'>
                <img className='hero__social__icon' src={linkedin} alt="LinkedIn Logo"/>
                <img className='hero__social__icon' src={gitHub} alt="Git Hub Logo"/>
                <img className='hero__social__icon' src={email} alt="Email Logo"/>
                <img className='hero__social__icon' src={resume} alt="Resume Logo"/>
            </section>    
            <section className='hero__scroll__down'>
                <p>Scroll down to get to know me better!</p>
                <Arrow className='hero__down__arrow'/>
            </section>
        </article>
    );
}

export default Hero;