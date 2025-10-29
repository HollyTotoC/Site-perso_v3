import { useRef, useState, useEffect } from "react";
import { MotionStyle, useScroll, useTransform } from "framer-motion";

type ScrollOptions = {
    minMarge: string;
    maxMarge: string;
};

const useScrollScale = ({ minMarge, maxMarge }: ScrollOptions) => {
    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Détecter si mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["center start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const [style, setStyle] = useState<MotionStyle>({
        position: "sticky",
        filter: "none",
        opacity: 1,
        zIndex: 1,
        transformOrigin: "center",
        transform: "scale(1)",
        top: "0",
        maxWidth: "1280px",
    });
    const [marge, setMarge] = useState(minMarge);

    useEffect(() => {
        // Si mobile, ne pas appliquer les effets de scroll
        if (isMobile) {
            setStyle({
                position: "relative",
                filter: "none",
                opacity: 1,
                zIndex: 1,
                transformOrigin: "center",
                transform: "scale(1)",
                top: "0",
                maxWidth: "1280px",
            });
            setMarge(minMarge);
            return;
        }

        // Si desktop, comportement normal
        const unsubscribeScale = scale.on("change", (latestScale) => {
            // Calculer la valeur de flou et arrondir
            const blurValue = Math.round(30 * (1 - latestScale));

            setStyle((currentStyle) => ({
                ...currentStyle,
                position: latestScale === 1 ? "sticky" : "fixed",
                // Appliquer le flou uniquement si la valeur calculée est > 0
                filter: blurValue > 0 ? `blur(${blurValue}px)` : "none",
                opacity: latestScale,
                zIndex: latestScale === 1 ? 1 : 0,
                transform: `scale(${latestScale})`,
            }));
            setMarge(latestScale === 1 ? minMarge : maxMarge);
        });

        return () => {
            unsubscribeScale();
        };
    }, [scale, minMarge, maxMarge, isMobile]);

    return { scrollRef, style, marge };
};

export default useScrollScale;
