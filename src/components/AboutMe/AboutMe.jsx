import { Link } from 'react-router-dom';
import './AboutMe.scss';
import headshot from '../../assets/images/carlos-sanchez-image.jpeg';
import education from '../../assets/icons/education.svg';
import experience from '../../assets/icons/experience.svg';
import projects from '../../assets/icons/projects.svg';

function AboutMe() {

    return (
        <>
       <article className='aboutMe'>
            <img className='aboutMe__image' src={headshot} alt="Carlos Sanchez" />
            <div className='aboutMe__cards'>
                <div className='aboutMe__card'>
                <img className='aboutMe__icon' src={education} alt="Carlos Sanchez" />
                    {/* <Education className='aboutMe__icon'/> */}
                    <p>Education</p>
                    <p>(Diploma)</p>
                </div>
                <div className='aboutMe__card'>
                    {/* <Experience className='aboutMe__icon'/> */}
                    <img className='aboutMe__icon' src={experience} alt="Carlos Sanchez" />
                    <p>Experience</p>
                    <p>(6+ months)</p>
                </div>
                <div className='aboutMe__card'>
                    {/* <Projects className='aboutMe__icon'/> */}
                    <img className='aboutMe__icon' src={projects} alt="Carlos Sanchez" />
                    <p>Projects</p>
                    <p>(6+ projects)</p>
                </div>
            </div>
            <div>
                <p>
                    After more than a decade in hospitality industry, I recently made the transition to become a Software Developer. I've
                    always had a knack for solving problems and playing around with technology, which eventually led me to complete a
                    Web Development Course and BootCamp. With these experiences, I've gained a solid foundation in Full-Stack Web
                    Development, and my love for math and problem-solving fuels my desire to explore new possibilities. I'm always eager to
                    learn and explore new technologies and coding languages, and I thrive in the fast-paced and dynamic environment.
                </p>
            </div>
            <Link>
                See my CV!
            </Link>

        </article>
        </>
    );
}

export default AboutMe;