import './App.css';
import './index.css';
import './media.css'
import { gsap } from 'gsap'
import { ScrollTrigger} from "gsap/ScrollTrigger";
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import { useEffect, useState } from "react";
import Preloader from './components/Preloader';
import MainSection from './MainSection';
gsap.registerPlugin(ScrollTrigger);
function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const FakeDataFetch = () =>{
            setTimeout(() =>{
                setIsLoading(false);
            }, 4000);
            };
            FakeDataFetch();
    }, [])

    return isLoading ? (
        <Preloader />) : (
        <>
            <MainSection />
            <SecondSection />
            <ThirdSection />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
        </>

    )
}

export default App;
