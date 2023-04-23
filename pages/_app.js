import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            delay: 400,
            duration: 800,
        });
    }, []);
    return <Component {...pageProps} />;
}
