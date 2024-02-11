import { useScroll } from "framer-motion";
import "./App.css";
import About from "./components/About";
import Card from "./components/Card";
import Landing from "./components/Landing";

import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

function App() {
    const { scrollYProgress } = useScroll();
    // Références et état pour observer l'entrée dans le viewport
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const [landingInView, setLandingInView] = useState(true);
    const [card1InView, card1InViewRef] = useInView({ threshold: 0.1 });
    const [card2InView, card2InViewRef] = useInView({ threshold: 0.1 });
    const [card3InView, card3InViewRef] = useInView({ threshold: 0.1 });

    useEffect(() => {
        card1InView(card1Ref.current);
        card2InView(card2Ref.current);
        card3InView(card3Ref.current);
    }, []);

    // États pour les styles animés de chaque carte
    const [landingStyle, setLandingStyle] = useState({ scale: 1, opacity: 1 });
    const [card1Style, setCard1Style] = useState({ scale: 1, opacity: 1 });
    const [card2Style, setCard2Style] = useState({ scale: 1, opacity: 1 });
    const [aboutStyle, setAboutStyle] = useState({ scale: 1, opacity: 1 });

    // Ajustement des styles basés sur la progression du défilement et l'entrée des cartes dans le viewport
    useEffect(() => {
        console.log("card1", card1InViewRef);
        console.log("card2", card2InViewRef);
        console.log("card3", card3InViewRef);

        const unsubscribe = scrollYProgress.onChange((latest) => {
            if (card1InViewRef) {
                const scaleValue = 1 - latest * 2;
                const opacityValue = 1 - latest * 2;
                setLandingStyle({
                    scale: Math.max(0, scaleValue),
                    opacity: Math.max(0, opacityValue),
                });
            }
            if (card2InViewRef) {
                const scaleValue = 1 - latest * 2;
                const opacityValue = 1 - latest * 2;
                setCard1Style({
                    scale: Math.max(0, scaleValue),
                    opacity: Math.max(0, opacityValue),
                });
            }
            if (card3InViewRef) {
                const scaleValue = 1 - latest * 2;
                const opacityValue = 1 - latest * 2;
                setCard2Style({
                    scale: Math.max(0, scaleValue),
                    opacity: Math.max(0, opacityValue),
                });
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress, card1InViewRef, card2InViewRef, card3InViewRef]);

    return (
        <>
            <Landing style={landingStyle} />
            {/* Project 1 */}
            <Card
                url="https://labo-bioseine.fr/"
                ref={card1Ref}
                style={card1Style}
            >
                <div className="flex flex-col justify-end gap-6">
                    <h2 className="font-title text-6xl">Bioseine</h2>
                    <ul className="flex items-center justify-start text-md font-semibold gap-3">
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Frontend
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Backend
                        </li>
                    </ul>
                    <p className="font-semibold pr-20">
                        Labore incididunt labore sit culpa cillum magna qui. Ea
                        pariatur consectetur incididunt consectetur deserunt
                        culpa Lorem deserunt enim pariatur irure cupidatat.
                        Fugiat ad cillum est commodo aute do amet laborum Lorem
                        veniam esse commodo. Anim consectetur aliqua consequat
                        reprehenderit ullamco commodo anim excepteur ex. Eu
                        cupidatat excepteur incididunt ut elit culpa ex ex sint
                        reprehenderit reprehenderit incididunt. Ut elit sint
                        sunt consequat anim commodo irure dolore nisi non amet
                        reprehenderit tempor occaecat. Quis labore officia
                        reprehenderit in sit incididunt adipisicing aliquip
                        veniam.
                    </p>
                </div>
            </Card>
            {/* Project 2 */}
            <Card url="https://quelor.fr" ref={card2Ref} style={card2Style}>
                <div className="flex flex-col justify-end gap-6">
                    <h2 className="font-title text-6xl">Quelor</h2>
                    <ul className="flex items-center justify-start text-md font-semibold gap-3">
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Frontend
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Design
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            User Experience
                        </li>
                    </ul>
                    <p className="font-semibold  pr-20">
                        Labore incididunt labore sit culpa cillum magna qui. Ea
                        pariatur consectetur incididunt consectetur deserunt
                        culpa Lorem deserunt enim pariatur irure cupidatat.
                        Fugiat ad cillum est commodo aute do amet laborum Lorem
                        veniam esse commodo. Anim consectetur aliqua consequat
                        reprehenderit ullamco commodo anim excepteur ex. Eu
                        cupidatat excepteur incididunt ut elit culpa ex ex sint
                        reprehenderit reprehenderit incididunt. Ut elit sint
                        sunt consequat anim commodo irure dolore nisi non amet
                        reprehenderit tempor occaecat. Quis labore officia
                        reprehenderit in sit incididunt adipisicing aliquip
                        veniam.
                    </p>
                </div>
            </Card>

            {/* Project 3 */}
            <Card
                url="https://jeandeportal.fr"
                ref={card3Ref}
                style={aboutStyle}
            >
                <div className="flex flex-col justify-end gap-6">
                    <h2 className="font-title text-6xl">
                        Editions
                        <br />
                        Jean de Portal
                    </h2>
                    <ul className="flex items-center justify-start text-md font-semibold gap-3">
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Frontend
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Design
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            User Experience
                        </li>
                    </ul>
                    <p className="font-semibold pr-20">
                        Labore incididunt labore sit culpa cillum magna qui. Ea
                        pariatur consectetur incididunt consectetur deserunt
                        culpa Lorem deserunt enim pariatur irure cupidatat.
                        Fugiat ad cillum est commodo aute do amet laborum Lorem
                        veniam esse commodo. Anim consectetur aliqua consequat
                        reprehenderit ullamco commodo anim excepteur ex. Eu
                        cupidatat excepteur incididunt ut elit culpa ex ex sint
                        reprehenderit reprehenderit incididunt. Ut elit sint
                        sunt consequat anim commodo irure dolore nisi non amet
                        reprehenderit tempor occaecat. Quis labore officia
                        reprehenderit in sit incididunt adipisicing aliquip
                        veniam.
                    </p>
                </div>
            </Card>

            <About />
            {/* full portfolio */}
            {/* contact */}
        </>
    );
}

export default App;
