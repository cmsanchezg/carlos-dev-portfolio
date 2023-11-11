import './Skills.scss';
import html from '../../assets/icons/skills/frontend/html.svg';
import css from '../../assets/icons/skills/frontend/css.svg';
import sass from '../../assets/icons/skills/frontend/sass.svg';
import javascript from '../../assets/icons/skills/frontend/javascript.svg';
import react from '../../assets/icons/skills/frontend/react.svg';
// import tailwind from '../../assets/icons/skills/frontend/tailwind-css.svg';
// import bootstrap from '../../assets/icons/skills/frontend/bootstrap.svg';

import mongodb from '../../assets/icons/skills/backend/mongodb.svg';
import express from '../../assets/icons/skills/backend/express-js.svg';
import mysql from '../../assets/icons/skills/backend/mysql.svg';
import node from '../../assets/icons/skills/backend/nodejs.svg';
import api from '../../assets/icons/skills/backend/rest-api.svg';

import vs from '../../assets/icons/skills/tools/visual-studio-code.svg';
import slack from '../../assets/icons/skills/tools/slack.svg';
import typography from '../../assets/icons/skills/tools/fonts-typography.svg';
import terminal from '../../assets/icons/skills/tools/terminal-cmd.svg';
import git from '../../assets/icons/skills/tools/git.svg';
import github from '../../assets/icons/skills/tools/github.svg';
import npm from '../../assets/icons/skills/tools/npm.svg';
import postman from '../../assets/icons/skills/tools/postman-api.svg';
// import figma from '../../assets/icons/skills/tools/figma.svg';
import heroku from '../../assets/icons/skills/tools/heroku.svg';


function Skills() {

    return (
        <>
       <article className='skills' id='skills'>
           <h1 className='skills__header'>Skills</h1>
           <div className='skills__container'>
                <div className='skills__wrap'>
                    <h2 className='skills__wrap__title'>Front-End</h2>
                    <div className='skills__wrap__icons'>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={html} alt="html" />
                        </div>    
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={css} alt="css" />
                        </div>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={sass} alt="sass" />
                        </div>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={javascript} alt="javascript" />
                        </div>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={react} alt="react js" />
                        </div>
                    </div>
                </div>
                <div className='skills__wrap'>
                    <h2 className='skills__wrap__title'>Back-End</h2>
                    <div className='skills__wrap__icons'>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={mongodb} alt="mongodb" />
                        </div>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={express} alt="express" />
                        </div>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={mysql} alt="mysql" />
                        </div>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={node} alt="node js" />
                        </div>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={api} alt="rest api" />
                        </div>
                    </div>
                </div>
                <div className='skills__wrap'>
                    <h2 className='skills__wrap__title'>Tools</h2>
                    <div className='skills__wrap__icons'>
                        <div className='skills__wrap__box'>
                            <img className='skills__wrap__icon' src={vs} alt="visual studio code" />
                        </div>    
                        <div className='skills__wrap__box'>   
                            <img className='skills__wrap__icon' src={slack} alt="slack" />
                        </div>  
                        <div className='skills__wrap__box'>    
                            <img className='skills__wrap__icon' src={typography} alt="font typography" />
                        </div>    
                        <div className='skills__wrap__box'>    
                            <img className='skills__wrap__icon' src={terminal} alt="terminal command" />
                       </div>    
                        <div className='skills__wrap__box'>    
                            <img className='skills__wrap__icon' src={git} alt="git" />
                        </div>    
                        <div className='skills__wrap__box'>    
                            <img className='skills__wrap__icon' src={github} alt="github" />
                        </div>    
                        <div className='skills__wrap__box'>    
                            <img className='skills__wrap__icon' src={npm} alt="npm" />
                        </div>    
                        <div className='skills__wrap__box'>     
                            <img className='skills__wrap__icon' src={postman} alt="postman" />
                        </div>    
                        <div className='skills__wrap__box'>    
                            <img className='skills__wrap__icon' src={heroku} alt="heroku" />
                        </div>
                    </div>
                </div>
           </div>
        </article>
        </>
    );
}

export default Skills;