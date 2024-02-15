import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSoundPlayer from "../hooks/usePlaySound";

interface TerminalProps {
    onRun: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onRun }) => {
    const playSound = useSoundPlayer();
    const [run, setRun] = useState(false);
    const [show, setShow] = useState(true);

    const terminalText = `> portfolio-totoCerta-2024@3.2.0 dev
> vite

VITE v5.0.12 ready in 556 ms

➜ Local: http://www.totocerta.dev/
➜ Network: use --host to expose
➜ press h + enter to show help`;

    const terminalLines = terminalText.split("\n");

    const Prompt = () => {
        // Calculer le délai cumulatif pour chaque ligne
        const cumulativeDelayPerLine = terminalLines.reduce<number[]>((acc, line, i) => {
            const previousDelay = i === 0 ? 0 : acc[i - 1];
            const currentDelay = line.length * 0.005;
            acc.push(previousDelay + currentDelay);
            return acc;
        }, []);

        return (
            <motion.div className="w-full max-w-lg flex flex-col">
                {terminalLines.map((line, lineIndex) => (
                    <motion.div key={lineIndex} className="w-full max-w-lg">
                        {line.split("").map((char, index) => {
                            // Calculer le délai de départ en ajoutant le délai cumulatif des lignes précédentes
                            const delay =
                                cumulativeDelayPerLine[lineIndex] -
                                line.length * 0.005 +
                                index * 0.005;
                            return (
                                <motion.span
                                    className="will-change-auto"
                                    key={lineIndex + "-" + index}
                                    initial={{ display: "none" }}
                                    animate={{ display: "inline" }}
                                    transition={{
                                        delay: delay,
                                        duration: .1,
                                    }}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </motion.div>
                ))}
            </motion.div>
        );
    };

    const handleClick = () => {
        if (!run) {
            playSound();
            setRun(true);
            setTimeout(() => {
                onRun();
                setShow(false);
            }, 3000);
        }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-left p-8 text-green-400 sm:text-md md:text-lg font-mono will-change-auto"
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <motion.div
                        className="flex items-center justify-center flex-col will-change-auto"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: [0.95, 1],
                            transition: { repeat: Infinity, duration: 0.1 },
                        }}
                    >
                        {!run ? (
                            <p className=" mb-4 w-full max-w-lg flex">
                                npm run dev{" "}
                                {!run ? (
                                    <span className="ml-2 h-5 w-2 bg-green-400 translate-y-1 animate-pulse">
                                        {" "}
                                    </span>
                                ) : null}
                            </p>
                        ) : null}
                        {run ? <Prompt /> : null}
                        {!run ? (
                            <button
                                className="mt-8 bg-transparent border-2 border-green-400 hover:bg-slate-900 0 py-2 px-4 rounded"
                                onClick={handleClick}
                            >
                                Ouvrir le portfolio
                            </button>
                        ) : null}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Terminal;
