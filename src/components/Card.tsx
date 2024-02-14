import React, { useEffect, useState } from "react";
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
    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const tabletScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
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
                        className="absolute w-3/6 right-[-3%] top-0 overflow-clip z-0"
                        style={tabletStyle}
                    >
                        <img className="" src={mokeup} alt="" />
                    </motion.div>
                    <div className="flex items-end">
                        {children}
                        <a
                            aria-label="live preview"
                            href={url}
                            target="#blank"
                            onClick={playSound}
                            className={`relative group w-full h-full max-h-28 max-w-28 flex items-center justify-center p-5 z-10 cursor-pointer `}
                        >
                            <span className="font-semibold text-white text-center text-xl leading-5 z-10">
                                Live Preview
                            </span>
                            <div className={`absolute ${accent} w-full h-full rounded-full group-hover:scale-125 transition-all duration-500 ease-in-out shadow-sm group-hover:shadow-xl`} ></div>
                        </a>
                    </div>
                </div>
            </motion.div>
            <div className={marge}></div>
        </motion.section>
    );
};

export default Card;
