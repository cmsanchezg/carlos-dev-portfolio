import './Skills.scss';

function Skills() {

    return (
        <>
       <article className='skills'>
           <h1 className='skills__header'>Skills</h1>
           <div className='skills__container'>
                <div className='skills__wrap'>
                    <h2 className='skills__wrap__title'>Front-End</h2>
                    <div className='skills__wrap__icons'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='skills__wrap'>
                    <h2 className='skills__wrap__title'>Back-End</h2>
                    <div className='skills__wrap__icons'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='skills__wrap'>
                    <h2 className='skills__title'>Soft-Skills</h2>
                    <div className='skills__wrap__icons'>
                        <img src="" alt="" />
                    </div>
                </div>
           </div>
        </article>
        </>
    );
}

export default Skills;