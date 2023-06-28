import './Projects.scss';
import headshot from '../../assets/images/carlos-sanchez-image.jpeg';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <article className='projects'>
            <p className='projects__header'>Projects</p>
            
            <div className='projects__cards'>
                <div className='projects__card'>
                    <div>
                        <img className='projects__card__image' src={headshot} alt="project" />
                    </div>
                    <div className='projects__card__text'>                
                        <p className='projects__card__title'>(project name)</p>
                        <p className='projects__card__description'>(project short description)</p>
                        <p className='projects__card__skills'>(project skills)</p>
                    </div>
                    <div className='projects__card__buttons'>
                        <Link className='projects__card__link'>
                            <button className='projects__card__button'>Website</button>
                        </Link>
                        <Link className='projects__card__link'>
                            <button className='projects__card__button'>Code</button>
                        </Link>
                    </div>
                </div>
                <div className='projects__card'>
                    <div>
                        <img className='projects__card__image' src={headshot} alt="project" />
                    </div>
                    <div className='projects__card__text'>                
                        <p className='projects__card__title'>(project name)</p>
                        <p className='projects__card__description'>(project short description)</p>
                        <p className='projects__card__skills'>(project skills)</p>
                    </div>
                    <div className='projects__card__buttons'>
                        <Link className='projects__card__link'>
                            <button className='projects__card__button'>Website</button>
                        </Link>
                        <Link className='projects__card__link'>
                            <button className='projects__card__button'>Code</button>
                        </Link>
                    </div>
                </div>
            </div>    
        </article>
    );
}

export default Projects;