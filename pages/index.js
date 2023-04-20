import AboutMe from "./component/AboutMe";
import ContactMe from "./component/ContactMe";
import HomeContent from "./component/HomeContent";
import MyProjects from "./component/MyProjects";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import styled from "styled-components";
const Container = styled.div`
    height: 100hv;
    background-color: rebeccapurple;
`;
export default function Home() {
    return (
        <Container>
            <NavBar />
            <HomeContent />
            <AboutMe />
            <MyProjects />
            <ContactMe />
            <Footer />
        </Container>
    );
}
