import Lottie from "react-lottie";
import animationData from "../assets/lotties/mail.json";
import { motion } from "framer-motion";

//import logos
import html5 from "../assets/images/logos/html5.svg";
import css3 from "../assets/images/logos/css3.svg";
import javascript from "../assets/images/logos/javascript.svg";
import react from "../assets/images/logos/react.svg";
import typescript from "../assets/images/logos/typescript.svg";
import sass from "../assets/images/logos/sass.svg";
import bootstrap from "../assets/images/logos/bootstrap.svg";
import React from "react";

//picto
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";
import useScrollScale from "../hooks/useScrollScale";

const About = () => {
    const [speed, setSpeed] = React.useState(0.5);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const { scrollRef, marge, style, scale } = useScrollScale({
        minMarge: "h-[100dvh]",
        maxMarge: "h-[200dvh]",
    });

    return (
        <motion.div className="relative" ref={scrollRef}>
            {/* <motion.div
                style={{
                    scaleX: scale,
                    transformOrigin: "left",
                    background: "blue",
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    height: "20px",
                    zIndex: 100,
                }}
            /> */}
            <motion.div className="p-4 min-h-[100dvh] flex flex-col justify-end" style={style}>
                <div className="h-full grid grid-cols-4 auto-rows-fr gap-4 rounded-xl">
                    {/* box1 */}
                    <div className="row-span-2 col-span-2 flex flex-col justify-end bg-emerald-500 rounded-xl p-5  shadow-white-xl">
                        <h2 className="font-title uppercase text-xl mt-32 mb-3 w-8/12">
                            Je suis Théo-toto Certa, un développeur front-end
                            basé en France.
                        </h2>
                        <p>
                            Développeur web passionné et créatif. Anciennement
                            diplômé en cinéma avec une pratique de 10 ans comme
                            réalisateur et motion designer. Fort d'une
                            expérience de conseil en communication digitale,
                            j'ai décidé de me diriger vers le développement web
                            en suivant une formation chez OpenClassrooms.
                            Compétent en HTML, CSS, JavaScript, React,
                            Bootstrap, Git, Adobe Creative Suite et Figma, je
                            suis en mesure de créer des expériences web
                            innovantes et engageantes.
                        </p>
                    </div>

                    <div className="row-span-1 col-span-1  rounded-xl overflow-hidden  shadow-white-xl">
                        <img
                            className="object-cover h-full"
                            src="src/assets/images/toto.webp"
                            alt=""
                        />
                    </div>

                    <div className="row-span-1 col-span-1 flex flex-col bg-lime-300 rounded-xl p-5  shadow-white-xl">
                        test
                    </div>

                    <div className="row-span-1 col-span-1 grid grid-cols-2 grid-row-2 gap-4 ">
                        <a
                            href=""
                            className="row-span-1 col-span-1 justify-center items-center rounded-xl bg-select-accent  shadow-white-xl"
                            aria-label="linkedin"
                        >
                            <FaLinkedin className="text-4xl m-auto h-full" />
                        </a>
                        <a
                            href=""
                            className="row-span-1 col-span-1 justify-center items-center rounded-xl bg-select-accent  shadow-white-xl"
                            aria-label="github"
                        >
                            <FaGithub className="text-4xl m-auto h-full" />
                        </a>
                        <a
                            href=""
                            className="row-span-1 col-span-1 justify-center items-center rounded-xl bg-select-accent shadow-white-xl"
                            aria-label="cv"
                        >
                            <TbFileCv className="text-4xl m-auto h-full" />
                        </a>
                        <div className="row-span-1 col-span-1 rounded-xl bg-select-accent  shadow-white-xl"></div>
                    </div>

                    <div
                        className="row-span-3 col-span-1 flex flex-col h-full justify-around bg-blue-600 text-white rounded-xl p-5  shadow-white-xl"
                        onMouseEnter={() => setSpeed(1)}
                        onMouseLeave={() => setSpeed(0.5)}
                    >
                        <div className="overflow-hidden h-full relative">
                            {/* <iframe className="absolute h-[120%] top-[-90px] right-[-90px] " src="https://lottie.host/embed/26b65f0b-16f1-4763-9d53-27c19ea1038a/TwoYmaLxur.json"></iframe> */}
                            <div className="absolute top-[-140px] right-[-140px]">
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
                    </div>

                    <div className="row-span-2 col-span-1 flex flex-col justify-between bg-yellow-100 rounded-xl p-5  shadow-white-xl">
                        <div>
                            <span className="text-5xl font-title">"</span>
                            <p>
                                Adipisicing laborum nisi nulla officia mollit
                                nulla pariatur aliqua excepteur veniam do. Lorem
                                ullamco magna reprehenderit tempor laborum
                                ullamco adipisicing non labore exercitation. Ad
                                nisi reprehenderit anim nulla ea.
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <IoIosArrowDropleftCircle className="text-4xl" />
                                <IoIosArrowDroprightCircle className="text-4xl" />
                            </div>
                            <div className="flex flex-col w-ful items-end justify-center">
                                <p className="font-title">Name</p>
                                <p>Company</p>
                            </div>
                        </div>
                    </div>

                    <div className="row-span-1 col-span-1 flex flex-col bg-orange-100 rounded-xl p-5  shadow-white-xl">
                        test
                    </div>

                    <div className="row-span-1 col-span-1 flex flex-col bg-orange-100 rounded-xl p-5  shadow-white-xl">
                        test
                    </div>

                    <div className="row-span-1 col-span-2 flex flex-col bg-white rounded-xl p-5  shadow-white-xl">
                        <h2 className="font-title text-lg">
                            Mes stacks&nbsp;:
                        </h2>
                        <ul className="flex items-center justify-around flex-wrap h-full">
                            <li>
                                <img
                                    src={html5}
                                    alt=""
                                    title="HTML5"
                                    className="grayscale contrast-150 hover:contrast-100 hover:grayscale-0 transition-all ease-in-out duration-300"
                                />
                            </li>
                            <li>
                                <img
                                    src={css3}
                                    alt=""
                                    title="CSS3"
                                    className="grayscale contrast-150 hover:contrast-100 hover:grayscale-0 transition-all ease-in-out duration-300"
                                />
                            </li>
                            <li>
                                <img
                                    src={javascript}
                                    alt=""
                                    title="Javascript"
                                    className="invert grayscale contrast-150 hover:contrast-100 hover:grayscale-0 hover:invert-0 transition-all ease-in-out duration-300"
                                />
                            </li>
                            <li>
                                <img
                                    src={react}
                                    alt=""
                                    title="React"
                                    className="invert grayscale contrast-150 hover:contrast-100 hover:grayscale-0 hover:invert-0 transition-all ease-in-out duration-300"
                                />
                            </li>
                            <li>
                                <img
                                    src={typescript}
                                    alt=""
                                    title="TypeScript"
                                    className="grayscale contrast-150 hover:contrast-100 hover:grayscale-0 transition-all ease-in-out duration-300"
                                />
                            </li>
                            <li>
                                <img
                                    src={sass}
                                    alt=""
                                    title="Sass"
                                    className="grayscale contrast-150 hover:contrast-100 hover:grayscale-0 transition-all ease-in-out duration-300"
                                />
                            </li>
                            <li>
                                <img
                                    src={bootstrap}
                                    alt=""
                                    title="Bootstrap"
                                    className="grayscale contrast-150 hover:contrast-100 hover:grayscale-0 transition-all ease-in-out duration-300"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
            <div className={marge}></div>
        </motion.div>
    );
};

export default About;
