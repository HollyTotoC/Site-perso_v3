import Lottie from "react-lottie";
import animationData from "../assets/lotties/mail.json";
import { motion } from "framer-motion";
import totoPhoto from "../assets/images/toto.webp";
import cv from "../assets/CV_Certa_Theo_Frontend_2024.pdf";
import React, { useState, useEffect } from "react";

//picto
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import useScrollScale from "../hooks/useScrollScale";
import ResearchArticles from "./ResearchArticles";
import useSoundPlayer from "../hooks/usePlaySound";
import JobBox from "./JobBox";
import StackSlider from "./StackSlider";

const About = () => {
    const [speed, setSpeed] = React.useState(0.5);
    const [isDesktop, setIsDesktop] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const { scrollRef, marge, style } = useScrollScale({
        minMarge: "h-[100dvh]",
        maxMarge: "h-[200dvh]",
    });

    const playSound = useSoundPlayer();

    // Détection responsive pour la bio
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <motion.div className="relative" ref={scrollRef}>
            <motion.div
                className={`p-4 flex flex-col justify-end ${!isDesktop ? 'min-h-screen pb-8' : 'h-[100dvh]'}`}
                style={style}
                id="about"
            >
                <div className="h-full grid grid-cols-1 md:grid-cols-4 auto-rows-auto md:auto-rows-fr gap-y-4 md:gap-4 rounded-xl">
                    {/* box1 */}
                    <div className="row-span-2 col-span-2 flex flex-col justify-end bg-gray-50 rounded-xl p-5  shadow-white-xl">
                        <h2 className="font-title uppercase text-xl mt-32 mb-3 w-full md:w-8/12 text-gray-900">
                            Je suis Théo Certa, un développeur front-end
                            basé à Paris, France.
                        </h2>
                        {!isDesktop ? (
                            // Version Mobile/Tablette (< 768px)
                            <p className="text-gray-700">
                                Développeur front-end créatif avec 10 ans d'expérience en réalisation
                                et motion design. Je crée des expériences web immersives en combinant
                                sens artistique et expertise technique. 6 clients, 7 projets pro aboutis,
                                et une approche moderne intégrant les outils IA pour multiplier l'impact.
                            </p>
                        ) : (
                            // Version Desktop (>= 768px)
                            <>
                                <p className="mb-4 text-gray-700">
                                    Développeur front-end créatif spécialisé dans les expériences web immersives.
                                    Fort de 10 ans en réalisation et motion design, j'apporte une sensibilité
                                    artistique unique à mes projets web. Mon expertise couvre React, TypeScript,
                                    animations 3D (Three.js), et une maîtrise moderne des workflows augmentés
                                    par l'IA.
                                </p>
                                <p className="text-gray-700">
                                    J'ai accompagné 6 clients sur 7 projets professionnels aboutis, de la
                                    conception UI/UX à l'intégration technique. Mon approche : allier créativité
                                    débordante et rigueur technique pour créer des interfaces qui captivent et
                                    performent.
                                </p>
                            </>
                        )}
                    </div>

                    <div className="row-span-1 col-span-1 bg-white rounded-xl overflow-hidden  shadow-white-xl">
                        <img
                            className="object-cover w-full h-full"
                            src={totoPhoto}
                            alt="Photo de Théo Certa, développeur créatif et front-end"
                        />
                    </div>

                    <div className="row-span-1 col-span-1 rounded-xl">
                        <JobBox />
                    </div>

                    <div className="row-span-1 col-span-1 grid grid-cols-2 grid-row-2 gap-4 ">
                        <a
                            href="https://www.linkedin.com/in/theo-certa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="row-span-1 col-span-1 justify-center items-center rounded-xl bg-gradient-to-br from-violet-300/90 via-purple-300/80 to-indigo-300/85 shadow-white-xl"
                            aria-label="Profil LinkedIn de Théo Certa"
                            onClick={playSound}
                        >
                            <FaLinkedin className="text-4xl m-auto h-full" />
                        </a>
                        <a
                            href="https://github.com/HollyTotoC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="row-span-1 col-span-1 justify-center items-center rounded-xl bg-gradient-to-br from-violet-300/90 via-purple-300/80 to-indigo-300/85 shadow-white-xl"
                            aria-label="Profil GitHub de Théo Certa"
                            onClick={playSound}
                        >
                            <FaGithub className="text-4xl m-auto h-full" />
                        </a>
                        <a
                            href={cv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="row-span-1 col-span-1 justify-center items-center rounded-xl bg-gradient-to-br from-violet-300/90 via-purple-300/80 to-indigo-300/85 shadow-white-xl"
                            aria-label="Télécharger le CV de Théo Certa"
                            onClick={playSound}
                        >
                            <TbFileCv className="text-4xl m-auto h-full" />
                        </a>
                        <div className="row-span-1 col-span-1 rounded-xl bg-gradient-to-br from-violet-300/90 via-purple-300/80 to-indigo-300/85 shadow-white-xl"></div>
                    </div>

                    <a
                        className="row-span-3 col-span-1 flex flex-col h-full justify-around bg-gradient-to-br from-blue-500/90 via-indigo-500/80 to-purple-500/85 text-white rounded-xl p-5 cursor-pointer shadow-white-xl"
                        onMouseEnter={() => setSpeed(1)}
                        onMouseLeave={() => setSpeed(0.5)}
                        href="mailto:totoc.contact@gmail.com"
                        onClick={playSound}
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
                                Un projet? Contactez moi !
                            </h2>
                            <p>totoc.contact@gmail.com</p>
                        </div>
                    </a>

                    <div className="row-span-2 col-span-1 flex flex-col justify-between bg-gray-50 rounded-xl p-5  shadow-white-xl overflow-hidden">
                        <ResearchArticles />
                    </div>

                    {/* Bloc GitHub Contribution Graph */}
                    <a
                        href="https://github.com/HollyTotoC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="row-span-1 col-span-1 bg-gradient-to-br from-gray-100/95 via-white/90 to-slate-100/85 rounded-xl p-2 shadow-white-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group overflow-hidden"
                        onClick={playSound}
                    >
                        {/* GitHub Chart */}
                        <img
                            src="https://ghchart.rshah.org/HollyTotoC"
                            alt="GitHub Contribution Graph de Théo Certa"
                            className="w-full h-full object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
                            loading="lazy"
                        />
                    </a>

                    {/* Bloc Stats - À la place du 2ème bloc test */}
                    <div className="row-span-1 col-span-1 bg-gradient-to-br from-emerald-400/80 via-teal-400/70 to-cyan-400/75 rounded-xl p-4 shadow-white-xl flex flex-col items-center justify-center text-center text-white">
                        {/* Chiffre principal */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="text-5xl font-bold font-title">6</div>
                            <div className="text-lg font-semibold mt-1 uppercase tracking-wide">Clients</div>
                        </div>

                        {/* Séparateur */}
                        <div className="w-12 h-0.5 bg-white/30 my-3"></div>

                        {/* Chiffre secondaire */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="text-2xl font-bold font-title">14</div>
                            <div className="text-xs font-semibold uppercase tracking-wide">Projets Livrés</div>
                        </div>

                        {/* Mention discrète */}
                        <div className="text-xs mt-2 opacity-75">
                            + 3-4 en cours
                        </div>
                    </div>

                    {/* Stack Technologies - AVEC SLIDER */}
                    <div className="row-span-1 col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 shadow-white-xl overflow-hidden">
                        <StackSlider />
                    </div>
                </div>
            </motion.div>
            <div className={marge}></div>
        </motion.div>
    );
};

export default About;
