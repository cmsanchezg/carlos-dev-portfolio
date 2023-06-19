import './Hero.scss';

import linkedin from '../../assets/icons/linkedin.svg';
import gitHub from '../../assets/icons/github.svg';
// import leetCode from '../../assets/icons/leetcode.svg';
import email from '../../assets/icons/email.svg';


function Hero() {
    return (
        <article className='hero'>
            <section className='hero__name'>
                Hello! My name is Carlos Sanchez!
            </section>
            <section className='hero__location'>
                I am a Web Developer based in Vancouver, B.C. 
            </section>      
            <section className='hero__social'>
                <img className='hero__social__icon' src={linkedin} alt="LinkedIn Logo"/>
                <img className='hero__social__icon' src={gitHub} alt="Git Hub Logo"/>
                <img className='hero__social__icon' src={email} alt="Email Logo"/>
            </section>    
            <section>
                scroll down to get to know me better!
            </section>
        </article>
    );
}

export default Hero;