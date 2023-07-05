import { Link } from 'react-router-dom';
import './AboutMe.scss';
import headshot from '../../assets/images/carlos-sanchez-image.jpeg';
import education from '../../assets/icons/education.svg';
import experience from '../../assets/icons/experience.svg';
import projects from '../../assets/icons/projects.svg';
import cv from '../../assets/documents/Carlos_Sanchez_Web_Developer_Resume.pdf';

function AboutMe() {

    const handleClickCv = () => {
        window.open(cv)
    }

    return (
        <>
       <article className='aboutMe' id='aboutMe'>
            <h1 className='aboutMe__header'>About Me</h1>
            <img className='aboutMe__image' src={headshot} alt="Carlos Sanchez" />
            <div className='aboutMe__cards'>
                <div className='aboutMe__card'>
                    <img className='aboutMe__card__icon' src={education} alt="Carlos Sanchez" />
                    <p className='aboutMe__card__header'>Education</p>
                    <p className='aboutMe__card__subheader'>(Diploma)</p>
                </div>
                <div className='aboutMe__card'>
                    <img className='aboutMe__card__icon' src={experience} alt="Carlos Sanchez" />
                    <p className='aboutMe__card__header'>Experience</p>
                    <p className='aboutMe__card__subheader'>(6+ months)</p>
                </div>
                <div className='aboutMe__card'>
                    <img className='aboutMe__card__icon' src={projects} alt="Carlos Sanchez" />
                    <p className='aboutMe__card__subheader'>Projects</p>
                    <p className='aboutMe__card__subheader'>(5+ projects)</p>
                </div>
            </div>
            <div className='aboutMe__story'>
                <p>
                    After more than a decade in hospitality industry, I recently made the transition to become a Software Developer. I've
                    always had a knack for solving problems and playing around with technology, which eventually led me to complete a
                    Web Development Course and BootCamp. With these experiences, I've gained a solid foundation in Full-Stack Web
                    Development, and my love for math and problem-solving fuels my desire to explore new possibilities. I'm always eager to
                    learn and explore new technologies and coding languages, and I thrive in the fast-paced and dynamic environment.
                </p>
            </div>
            <Link className='aboutMe__link__cv' onClick={handleClickCv}>
                <button className='aboutMe__button__cv'>See my CV!</button>
            </Link>
            <Link ></Link>

        </article>
        </>
    );
}

export default AboutMe;