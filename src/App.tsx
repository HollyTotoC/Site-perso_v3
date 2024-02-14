import About from "./components/About";
import Card from "./components/Card";
import Landing from "./components/Landing";

import jdpMokeup from "./assets/images/mokeup/jdp-mokeup.png";
import quelorMokeup from "./assets/images/mokeup/quelor-mokeup.png";
import bioseineMokeup from "./assets/images/mokeup/bioseine-mokeup.png";
import Portfolio from "./components/Portfolio";

import useScrollAudio from "./hooks/useScrollAudio";

function App() {
    useScrollAudio(.7);

    return (
        <>
            <Landing />
            {/* Project 1 */}
            <Card
                url="https://labo-bioseine.fr/"
                bg="bg-bioseine"
                accent="bg-bioseine-accent"
                mokeup={bioseineMokeup}
                id="bioseine"
            >
                <div className="flex flex-col justify-end gap-6 z-10">
                    <h2 className="font-title text-6xl">Bioseine</h2>
                    <ul className="flex items-center justify-start text-md font-semibold gap-3">
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Frontend
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Backend
                        </li>
                    </ul>
                    <p className="font-semibold pr-20 text-lg w-[80%]">
                    Au sein de l'équipe IMI, j'ai contribué au projet Bioseine, un site innovant pour un laboratoire d'analyse médicale 2.0, en prenant en charge la mise en page de sections clés telles que la réservation et les tutoriels, ainsi que le développement de fonctionnalités de prise de photo via smartphone pour une expérience utilisateur enrichie et interactive.
                    </p>
                </div>
            </Card>
            {/* Project 2 */}
            <Card
                url="https://quelor.fr"
                bg="bg-quelor"
                accent="bg-quelor-accent"
                mokeup={quelorMokeup}
                id="quelor"
            >
                <div className="flex flex-col justify-end gap-6 text-white z-10">
                    <h2 className="font-title text-6xl">Quelor</h2>
                    <ul className="flex items-center justify-start text-md font-semibold gap-3">
                        <li className="py-2 px-4 border-2 border-white rounded-full uppercase">
                            Frontend
                        </li>
                        <li className="py-2 px-4 border-2 border-white rounded-full uppercase">
                            Design
                        </li>
                        <li className="py-2 px-4 border-2 border-white rounded-full uppercase">
                            User Experience
                        </li>
                    </ul>
                    <p className="font-semibold pr-20 text-lg w-[80%]">
                    Conception et développement Frontend d'un site web spécialisé dans l'or d'investissement, offrant divers outils intuitifs pour faciliter la compréhension des fluctuations des prix de l'or. Ce projet met en avant une interface utilisateur élégante et une expérience utilisateur optimisée, conçues pour aider les investisseurs à naviguer efficacement dans le marché de l'or, à analyser les tendances et à prendre des décisions d'investissement éclairées.
                    </p>
                </div>
            </Card>

            {/* Project 3 */}
            <Card
                url="https://jeandeportal.fr"
                bg="bg-jdp"
                accent="bg-jdp-accent"
                mokeup={jdpMokeup}
                id="jdp"
            >
                <div className="flex flex-col justify-end gap-6 z-10">
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
                    <p className="font-semibold pr-20 text-lg w-[78%]">
                    En tant que développeur Frontend, je suis actuellement en charge de la refonte du site des éditions Jean de Portal, enrichissant le site avec une interface utilisateur modernisée, une boutique en ligne, une gestion améliorée des stocks et des abonnements. Cette mise à jour comprend également l'intégration de campagnes publicitaires ciblées et de webinaires, tout en optimisant la gestion administrative grâce à un back office intuitif, pour une expérience utilisateur et gestionnaire améliorée.
                    </p>
                </div>
            </Card>

            <About />
            {/* full portfolio */}
            <Portfolio />
            {/* contact */}
        </>
    );
}

export default App;
