import React, { useRef } from "react";
import { motion, useScroll, useTransform, } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    url: string;
}

const Card: React.FC<CardProps> = ({ children, url }) => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start .01', 'end 2']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

    

    return (
        <section 
            className="sticky top-0 pb-[100dvh]"
            ref={ref}
            
            
        >
                <motion.div
                    className="h-[100vh] p-4"
                    style={{ scale: scale }}
                >
                    <div className="h-full flex flex-col justify-end bg-zinc-100 p-10 rounded-xl gap-6">
                        <div className="flex items-end">
                            {children}
                            <div className="bg-white rounded-full w-full h-full max-h-28 max-w-28 flex items-center justify-center p-5">
                                <a
                                    href={url}
                                    className="font-semibold  text-center text-lg leading-5"
                                >
                                    Live Preview
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
        </section>
    );
};

export default Card;
