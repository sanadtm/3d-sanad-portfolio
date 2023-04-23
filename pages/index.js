import AboutMe from "./component/AboutMe";
import ContactMe from "./component/ContactMe";
import HomeContent from "./component/HomeContent";
import MyProjects from "./component/MyProjects";
import Head from "next/head";
import Footer from "./component/Footer";
import styled from "styled-components";
const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behaviour: smooth;
    overflow-y: auto;
    schollbar-width: none;
    background: url("./img/stars.png");
    &::-webkit-scrollbar {
        display: none;
    }
`;
export default function Home() {
    return (
        <>
            <Head>
                <title>Sanad Thapa | Software Dev</title>
                <link rel="icon" href="img/sjtmlogo.png" />
            </Head>
            <Container>
                <HomeContent />
                <AboutMe />
                <MyProjects />
                <ContactMe />
                <Footer />
            </Container>
        </>
    );
}
