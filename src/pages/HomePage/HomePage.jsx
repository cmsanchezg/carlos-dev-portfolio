import '../HomePage/HomePage.scss';

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AboutMe from '../../components/AboutMe/AboutMe';

function HomePage() {
    return (
        <>
        <section className='homePage__header__hero'>
            <Header/>
            <Hero/>
        </section>
        <AboutMe/>
        </>
    );
}

export default HomePage;