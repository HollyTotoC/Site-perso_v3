import { useRef, useState, useEffect } from "react";
import { MotionStyle, useScroll, useTransform } from "framer-motion";

type ScrollOptions = {
    minMarge: string;
    maxMarge: string;
};

const useScrollScale = ({ minMarge, maxMarge }: ScrollOptions) => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["center start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const [style, setStyle] = useState<MotionStyle>({
        position: "sticky",
        filter: "blur(0px)",
        opacity: 1,
        zIndex: 1,
        transformOrigin: "center",
        transform: "scale(1)",
        top: "0",
        maxWidth: "1280px",
    });
    const [marge, setMarge] = useState(minMarge);

    useEffect(() => {
        const unsubscribeScale = scale.on("change", (latestScale) => {
            setStyle((currentStyle) => ({
                ...currentStyle,
                position: latestScale === 1 ? "sticky" : "fixed",
                filter: `blur(${30 * (1 - latestScale)}px)`,
                opacity: latestScale,
                zIndex: latestScale === 1 ? 1 : 0,
                transform: `scale(${latestScale})`,
            }));
            setMarge(latestScale === 1 ? minMarge : maxMarge);
        });

        return () => {
            unsubscribeScale();
        };
    }, [scale, minMarge, maxMarge]);

    return { scrollRef, style, marge };
};

export default useScrollScale;
