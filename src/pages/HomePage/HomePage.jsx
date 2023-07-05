import '../HomePage/HomePage.scss';

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Skills from '../../components/Skills/Skils';

function HomePage() {
    return (
        <>
        <section className='homePage__header__hero' id='homePage'>
            <Header/>
            <Hero/>
        </section>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Contact/>
        </>
    );
}

export default HomePage;