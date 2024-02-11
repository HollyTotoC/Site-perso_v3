import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CardProps {
    children: React.ReactNode;
    url: string;
    bg: string;
    accent: string;
    mokeup: string;
}

const Card: React.FC<CardProps> = ({ children, url, bg, accent, mokeup }) => {

    const [isAtTop, setIsAtTop] = useState(false);
    const scrollRef = useRef(null); // Créez une ref spécifique pour useScroll
    const { ref, inView } = useInView({
        threshold: .99,
    });

    // Utilisez useEffect pour surveiller inView et ajuster isAtTop
    useEffect(() => {
        if (inView) {
            setIsAtTop(true);
        } else {
            setIsAtTop(false);
        }
    }, [inView]);

    useEffect(() => {
        console.log(bg, isAtTop);
    }, [bg, isAtTop]);

    return (
        <section className="" ref={ref}>
            <motion.div 
                className="h-[100vh] p-4"
            >
                <div
                    className={`h-full flex flex-col justify-end p-10 rounded-xl gap-6 ${bg} overflow-hidden relative shadow-white-xl`}
                >
                    <div className="absolute w-3/6 top-0 right-[-3%] overflow-clip z-0">
                        <img className="" src={mokeup} alt="" />
                    </div>
                    <div className="flex items-end">
                        {children}
                        <a
                            href={url}
                            className={`${accent} rounded-full w-full h-full max-h-28 max-w-28 flex items-center justify-center p-5 z-10 cursor-pointer`}
                        >
                            <span className="font-semibold text-white text-center text-lg leading-5">
                                Live Preview
                            </span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Card;
