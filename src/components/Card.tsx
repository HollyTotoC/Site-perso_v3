import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useScrollScale from "../hooks/useScrollScale";
import Circle from "./Circle";
import useSoundPlayer from "../hooks/usePlaySound";

interface CardProps {
    children: React.ReactNode;
    url: string;
    bg: string;
    accent: string;
    mokeup: string;
    id: string;
}

const Card: React.FC<CardProps> = ({
    children,
    url,
    bg,
    accent,
    mokeup,
    id,
}) => {
    const { scrollRef, marge, style } = useScrollScale({
        minMarge: "h-[100dvh]",
        maxMarge: "h-[200dvh]",
    });
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "start start"],
    });

    const [tabletStyle, setTabletStyle] = useState({});

    const yValue = useRef(5000); // Valeur par défaut
    const scaleValue = useRef(1); // Valeur par défaut

    const breakpoints = {
        sm: 640, // px
        md: 768, // px
      };

    const updateTransformValues = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= breakpoints.md) {
            // Modifier la valeur pour le breakpoint 'md'
            yValue.current = 0; // Exemple de nouvelle valeur pour 'md'
            scaleValue.current = 1;
        } else {
            // Valeur par défaut pour les écrans plus petits
            yValue.current = 230;
            scaleValue.current = 2;
        }
    };

    useEffect(() => {
        updateTransformValues(); // Appel initial pour définir la valeur
        // Mettre à jour les valeurs lors du redimensionnement de la fenêtre
        window.addEventListener("resize", updateTransformValues);

        return () => {
            window.removeEventListener("resize", updateTransformValues);
        };
    }, []);


    const y = useTransform(scrollYProgress, [0, 1], [-100, yValue.current]);
    const tabletScale = useTransform(scrollYProgress, [0, 1], [2, scaleValue.current]);
    const rotateTablet = useTransform(scrollYProgress, [0, 1], [30, 5]);

    useEffect(() => {
        const unsubscribeY = y.on("change", (value) => {
            setTabletStyle({
                top: value,
                scale: tabletScale,
                transformOrigin: "top-right",
                rotate: rotateTablet,
            });
        });

        return () => {
            unsubscribeY(); // Nettoyage de l'abonnement
        };
    }, [tabletScale, y, rotateTablet, scrollYProgress]);

    const playSound = useSoundPlayer();

    return (
        <motion.section className="" ref={scrollRef}>
            <motion.div className="h-[100vh] p-4" style={style}>
                <div
                    id={id}
                    className={`h-full flex flex-col justify-end p-10 rounded-xl gap-6 ${bg} overflow-hidden relative shadow-white-xl`}
                >
                    {id === "bioseine" ? <Circle /> : null}
                    <motion.div
                        className="absolute w-3/6 right-1/4 md:right-[-3%] overflow-clip z-0"
                        style={tabletStyle}
                    >
                        <img className="" src={mokeup} alt="" />
                    </motion.div>
                    <div className="flex flex-col md:flex-row items-center justify-between h-full md:items-end">
                        {children}
                        <a
                            aria-label="live preview"
                            href={url}
                            target="#blank"
                            onClick={playSound}
                            className={`relative group w-full h-full max-h-28 max-w-28 flex items-center justify-center p-10 md:p-5 mt-3 md:mt-0 z-10 cursor-pointer `}
                        >
                            <span className="font-semibold text-white text-center text-md md:text-xl leading-5 z-10">
                                Live Preview
                            </span>
                            <div className={`absolute ${accent} w-full h-full rounded-full group-hover:md:scale-125 transition-all duration-500 ease-in-out shadow-sm group-hover:shadow-xl`} ></div>
                        </a>
                    </div>
                </div>
            </motion.div>
            <div className={marge}></div>
        </motion.section>
    );
};

export default Card;
