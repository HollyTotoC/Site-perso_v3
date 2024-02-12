import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type scrollOptions = {
    minMarge: string;
    maxMarge: string;
}

const useScrollScale = ({minMarge, maxMarge}: scrollOptions) => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["center start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const [marge, setMarge] = useState(minMarge)
    const [style, setStyle] = useState({
        position: "sticky", // Valeur par défaut
        filter: "blur(0px)",
        opacity: 1,
        zIndex: 1, // Assurez-vous que cette valeur par défaut est appropriée
        transformOrigin: "center",
        transform: "scale(1)",
        top: 0,
        maxWidth: "1280px", 
    });

    useEffect(() => {
        const unsubscribe = scale.onChange((latestScale) => {
            console.log(latestScale);
            if (latestScale === 1) {
                setStyle({
                    position: "sticky",
                    filter: "blur(0px)",
                    opacity: 1,
                    zIndex: 1,
                    transformOrigin: "center",
                    transform: `scale(${latestScale})`,
                    top: 0,
                    maxWidth: "1280px",
                });
                setMarge(minMarge)
            } else {
                setStyle({
                    position: "fixed",
                    filter: `blur(${5 * (1 - latestScale)}px)`,
                    opacity: latestScale,
                    transform: `scale(${latestScale})`,
                    zIndex: 0,
                    transformOrigin: "center",
                    top: 0,
                    maxWidth: "1280px",
                });
                setMarge(maxMarge)
            }
        });
        
        return () => unsubscribe();
    }, []);

    return {scrollRef, style, marge, scale}
}

export default useScrollScale;