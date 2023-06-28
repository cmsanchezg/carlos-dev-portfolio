import '../HomePage/HomePage.scss';

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

function HomePage() {
    return (
        <>
        <section className='homePage__header__hero'>
            <Header/>
            <Hero/>
        </section>
        <AboutMe/>
        <Projects/>
        <Contact/>
        </>
    );
}

export default HomePage;