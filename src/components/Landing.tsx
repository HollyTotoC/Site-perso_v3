import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { motion } from "framer-motion";
import useScrollScale from "../hooks/useScrollScale";
import cv from "../assets/CV_Certa_Theo_Frontend_2024.pdf"
import useSoundPlayer from "../hooks/usePlaySound";
import Sphere3D from "./Sphere";

const Landing = () => {
    const available = () => {
        return (
            <div className="flex justify-center items-center text-black bg-white rounded-full px-4 py-1">
                <span>
                    Disponible pour <span className="font-bold">Fev 2024</span>
                </span>
                <span className="bg-green-500 animate-pulse rounded-full h-3 w-3 ml-2"></span>
            </div>
        );
    };

    const { scrollRef, marge, style} = useScrollScale({
        minMarge: "h-[100dvh]",
        maxMarge: "h-[200dvh]",
    });

    const playSound = useSoundPlayer();

    return (
        <motion.div className="relative" ref={scrollRef}>
            <motion.div className="h-[100dvh] p-4" style={style}>
                <div className="h-full flex flex-col justify-between bg-zinc-100 p-5 md:p-10 overflow-hidden relative rounded-xl shadow-white-xl">
                    <Sphere3D />
                    <div className="flex items-center justify-between relative z-10">
                        <h1 className="text-lg md:text-xl text-black font-bold uppercase font-title">
                            Toto Certa.
                        </h1>
                        <div className="flex justify-center items-center gap-6">
                            <div className="hidden md:block">{available()}</div>
                            <a
                                href="mailto:totoc.contact@gmail.com"
                                className="flex items-center bg-black text-white font-semibold leading-4 rounded-full text-center px-2 h-16 w-16"
                                onClick={playSound}
                            >
                                Let's talk
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start relative">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-3 mb-14">
                            <div className="flex flex-col w-full font-title pointer-events-none	">
                                <h2 className="text-3xl md:text-6xl text-black uppercase font-bold ">
                                    Developpeur Front.
                                </h2>
                                <h2 className="text-2xl md:text-6xl text-black uppercase font-bold ">
                                    React, Next, JS.
                                </h2>
                            </div>
                            <div className="md:hidden">{available()}</div>
                            <p className="md:w-1/5 font-semibold pointer-events-none">
                                J'aide mes clients à développer des expériences
                                web dynamiques et efficaces.
                            </p>
                            <iframe
                                aria-label="scroll arrow"
                                className="absolute right-[-7rem] bottom-[-3rem] scale-50"
                                src="https://lottie.host/embed/3876b0fc-e191-4afe-b570-2c6e748cfbe6/ExPeIO6APg.json"
                            ></iframe>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/in/toto-certa/" onClick={playSound} target="#blank" aria-label="linkedin link">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="https://github.com/HollyTotoC" onClick={playSound}  target="#blank" aria-label="github link">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href={cv} onClick={playSound} target="#blank" aria-label="cv download link">
                                <TbFileCv className="text-2xl" />
                            </a>
                            <a href="#about" onClick={playSound} className="rounded-full bg-black text-white text-xs font-semibold uppercase px-3 py-[3px]">
                                A propos
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className={marge}></div>
        </motion.div>
    );
};

export default Landing;
