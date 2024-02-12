import React from "react";
import PortfolioProject from "./PortfolioProject";
import portfolio from '../assets/portfolio.json'
import Lottie from "react-lottie";
import animationData from "../assets/lotties/mail.json";

const Portfolio = () => {
    const [speed, setSpeed] = React.useState(0.5);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="p-4 min-h-[100dvh] flex flex-col justify-end sticky top-0 z-10">
            <div className="h-full grid grid-cols-4 auto-rows-fr gap-4 rounded-xl">
                <div className="row-span-1 col-span-2 flex flex-col justify-center bg-zinc-100 rounded-xl p-5  shadow-white-xl">
                    <h2 className="font-title uppercase text-3xl mt-20 mb-3 w-8/12">
                        Portfolio
                    </h2>
                </div>

                {/* to load colors  */}
                <div className="hidden bg-mvs-accent bg-hifumi-accent bg-meteo-accent bg bg-kasa-accent bg-piiquante-accent bg-omf-accent bg-kanap-accent bg-panthere-accent"></div>

                {portfolio.map((project, index) => (
                    <PortfolioProject key={index} project={project}></PortfolioProject>
                ))}

                <a
                        className="row-span-1 col-span-2 flex flex-col h-full justify-around bg-blue-600 text-white rounded-xl p-5 cursor-pointer shadow-white-xl"
                        onMouseEnter={() => setSpeed(1)}
                        onMouseLeave={() => setSpeed(0.5)}
                        href="mailto:totoc.contact@gmail.com"
                    >
                        <div className="overflow-hidden h-full relative">
                            {/* <iframe className="absolute h-[120%] top-[-90px] right-[-90px] " src="https://lottie.host/embed/26b65f0b-16f1-4763-9d53-27c19ea1038a/TwoYmaLxur.json"></iframe> */}
                            <div className="absolute top-[-140px] right-[-140px] cursor-none">
                                <Lottie
                                    options={defaultOptions}
                                    isClickToPauseDisabled
                                    height={400}
                                    width={400}
                                    speed={speed ? speed : 0.5}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-title text-3xl mb-3">
                                Des questions
                            </h2>
                            <p>totoc.contact@gmail.com</p>
                        </div>
                    </a>

            </div>
        </div>
    );
};

export default Portfolio;
