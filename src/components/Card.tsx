import React from "react";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    url: string;
    style?: React.CSSProperties;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, url, style }, ref) => {    

    
    return (
        <section 
            className="sticky top-0 pb-[100dvh]"
            ref={ref}
        >
                <motion.div
                    className="h-[100vh] p-4"
                    style={style}
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
});

export default Card;
