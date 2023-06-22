import { Link } from 'react-router-dom';
import './AboutMe.scss';

function AboutMe() {

    return (
        <>
       <article className='aboutMe'>
            <img src="" alt="" />
            <div>
                <div>
                    <img src="" alt="Education Emoji" />
                    <p>BrainStation</p>
                    <p>(Diploma)</p>
                </div>
                <div>
                    <img src="" alt="Experience Emoji" />
                    <p>Experience</p>
                    <p>(6+ months)</p>
                </div>
                <div>
                    <img src="" alt="Laptop Emoji" />
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