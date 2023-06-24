import { Link } from 'react-router-dom';
import './AboutMe.scss';
import education from '../../assets/icons/education.svg';
import experience from '../../assets/icons/experience.svg';
import projects from '../../assets/icons/projects.svg';

function AboutMe() {

    return (
        <>
       <article className='aboutMe'>
            <img src="" alt="Carlos Sanchez" />
            <div>
                <div>
                    <img className='aboutMe__icon' src={education} alt="Education Emoji" />
                    <p>BrainStation</p>
                    <p>(Diploma)</p>
                </div>
                <div>
                    <img className='aboutMe__icon' src={experience} alt="Experience Emoji" />
                    <p>Experience</p>
                    <p>(6+ months)</p>
                </div>
                <div>
                    <img className='aboutMe__icon' src={projects} alt="Laptop Emoji" />
                    <p>Projects</p>
                    <p>(6+ projects)</p>
                </div>
            </div>
            <div>
                <p>
                    (story about me to be added)
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