import React, { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    useMotionTemplate,
} from "framer-motion";

const projects = [
    {
        name: "Quelor",
        description: "Développement Front-End pour...",
        color: "bg-red-400",
    },
    {
        name: "Jean de Portal",
        description: "Conception UI/UX pour...",
        color: "bg-green-400",
    },
    {
        name: "Maison N",
        description: "Création d'une API avec...",
        color: "bg-yellow-400",
    },
];

// Cette fonction n'est plus nécessaire si vous utilisez un ensemble fixe de projets
// et souhaitez simplement faire défiler ces projets de manière séquentielle.
// const randomColor = current => { ... }

const Card = ({ project, style, onDirectionLock, onDragEnd, animate }) => (
    <motion.div
        className={`card absolute left-0 top-0 p-4 w-full h-full flex flex-col justify-between rounded-xl overflow-hidden shadow-xl shadow-white cursor-grab active:cursor-grabbing ${project.color}`}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragDirectionLock
        onDirectionLock={onDirectionLock}
        onDragEnd={onDragEnd}
        animate={animate}
        style={{
            ...style,
            x: style.x,
            y: style.y,
            scale: style.scale,
            boxShadow: style.boxShadow,
        }}
        transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
        whileTap={{ scale: 0.65 }}
    >
        <h2 className="font-title">En ce moment je travail sur {project.name}</h2>
        <p>{project.description}</p>
    </motion.div>
);

const JobBox = () => {
    const [cards, setCards] = useState(projects);
    const [dragStart, setDragStart] = useState({
        axis: null,
        animation: { x: 0, y: 0 },
    });
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useTransform(
        dragStart.axis === "x" ? x : y,
        [-175, 0, 175],
        [1, 0.35, 1]
    );
    const shadowBlur = useTransform(
        dragStart.axis === "x" ? x : y,
        [-175, 0, 175],
        [0, 25, 0]
    );
    const shadowOpacity = useTransform(
        dragStart.axis === "x" ? x : y,
        [-175, 0, 175],
        [0, 0.2, 0]
    );
    const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;

    const onDirectionLock = axis => setDragStart({ ...dragStart, axis: axis });
    const animateCardSwipe = (animation) => {
        setDragStart({ ...dragStart, animation });
        setTimeout(() => {
            setDragStart({ axis: null, animation: { x: 0, y: 0 } });
            x.set(0);
            y.set(0);
            setCards((prevCards) => [
                prevCards[prevCards.length - 1],
                ...prevCards.slice(0, prevCards.length - 1),
            ]);
        }, 200);
    };

    const onDragEnd = (info) => {
        const threshold = 100;
        const offset = dragStart.axis === "x" ? info.offset.x : info.offset.y;
        if (Math.abs(offset) >= threshold) {
            const direction = offset > 0 ? 175 : -175;
            animateCardSwipe({ [dragStart.axis]: direction });
        }
    };

    const renderCards = () => {
        return cards.map((card, index) => {
            if (index === cards.length - 1) {
                return (
                    <Card
                        key={index}
                        project={card}
                        style={{
                            x,
                            y,
                            boxShadow,
                            zIndex: cards.length - index,
                            ...(index === cards.length - 1
                                ? {}
                                : { scale: 1, boxShadow: "none" }),
                        }}
                        onDirectionLock={onDirectionLock}
                        onDragEnd={(e, info) => onDragEnd(info)}
                        animate={dragStart.animation}
                    />
                );
            } else
                return (
                    <Card
                        key={index}
                        project={card}
                        style={{
                            scale,
                            boxShadow,
                            zIndex: index,
                        }}
                    />
                );
        });
    };

    return (
        <div className="infinite-cards h-full w-full bg-zinc-100 rounded-xl grid place-items-center relative overflow-hidden">
            {renderCards()}
        </div>
    );
};

export default JobBox;
