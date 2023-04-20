import AboutMe from "./component/AboutMe";
import ContactMe from "./component/ContactMe";
import HomeContent from "./component/HomeContent";
import MyProjects from "./component/MyProjects";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
export default function Home() {
    return (
        <>
            <NavBar />
            <HomeContent />
            <AboutMe />
            <MyProjects />
            <ContactMe />
            <Footer />
        </>
    );
}
