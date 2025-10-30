import { useRef, useState, useEffect } from "react";
import { MotionStyle, useScroll, useTransform } from "framer-motion";

type ScrollOptions = {
    minMarge: string;
    maxMarge: string;
};

const useScrollScale = ({ minMarge, maxMarge }: ScrollOptions) => {
    const scrollRef = useRef(null);
    // Détection mobile immédiate pour éviter le flash desktop sur mobile
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            const isMobileWidth = window.innerWidth < 768;
            const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
            return isMobileWidth || isIOS;
        }
        return false;
    });

    // Détecter si mobile (incluant détection iOS/iPhone)
    useEffect(() => {
        const checkMobile = () => {
            const isMobileWidth = window.innerWidth < 768;
            const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
            const isMobileDevice = isMobileWidth || isIOS;
            setIsMobile(isMobileDevice);
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
        const unsubscribeScale = scale.on("change", (latestScale) => {
            if (isMobile) {
                // Mobile : effets légers, pas de sticky/blur
                setStyle({
                    position: "relative",
                    filter: "none",
                    opacity: latestScale,
                    zIndex: 1,
                    transformOrigin: "center",
                    transform: `scale(${0.9 + (latestScale * 0.1)})`, // Scale subtil 0.9→1
                    top: "0",
                    maxWidth: "1280px",
                });
                setMarge(minMarge);
            } else {
                // Desktop : comportement normal avec blur
                const blurValue = Math.round(30 * (1 - latestScale));

                setStyle({
                    position: latestScale === 1 ? "sticky" : "fixed",
                    filter: blurValue > 0 ? `blur(${blurValue}px)` : "none",
                    opacity: latestScale,
                    zIndex: latestScale === 1 ? 1 : 0,
                    transformOrigin: "center",
                    transform: `scale(${latestScale})`,
                    top: "0",
                    maxWidth: "1280px",
                });
                setMarge(latestScale === 1 ? minMarge : maxMarge);
            }
        });

        return () => {
            unsubscribeScale();
        };
    }, [scale, minMarge, maxMarge, isMobile]);

    return { scrollRef, style, marge };
};

export default useScrollScale;
