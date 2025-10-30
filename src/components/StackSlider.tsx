import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import useSoundPlayer from "../hooks/usePlaySound";

interface SkillCategory {
    category: string;
    skills: string[];
}

const stackData: SkillCategory[] = [
    {
        category: "Frontend Core",
        skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
        category: "Styling & Frameworks",
        skills: ["TailwindCSS", "Next.js", "Vue.js", "Bootstrap", "Sass"]
    },
    {
        category: "Creative & 3D",
        skills: ["Three.js"]
    },
    {
        category: "IA & Automation",
        skills: ["Claude Code", "GitHub Copilot", "ChatGPT", "N8N"]
    },
    {
        category: "Design & Gestion",
        skills: ["Figma", "Notion", "Slack", "Adobe Suite"]
    }
];

const StackSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const playSound = useSoundPlayer();

    // Nombre de catégories par page (2 pour Mac, ajustable)
    const categoriesPerPage = 2;
    const totalPages = Math.ceil(stackData.length / categoriesPerPage);

    // Auto-scroll toutes les 5 secondes
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentPage((prev) => (prev + 1) % totalPages);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [isPaused, totalPages]);

    const nextPage = () => {
        playSound();
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        playSound();
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToPage = (page: number) => {
        playSound();
        setCurrentPage(page);
    };

    // Obtenir les catégories de la page courante
    const startIdx = currentPage * categoriesPerPage;
    const currentCategories = stackData.slice(startIdx, startIdx + categoriesPerPage);

    return (
        <div
            className="h-full flex flex-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Contenu des catégories avec animation */}
            <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2.5 h-full"
                    >
                        {currentCategories.map((section) => (
                            <div key={section.category}>
                                <p className="text-[10px] text-orange-600 uppercase tracking-wide mb-1.5 font-semibold">
                                    {section.category}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {section.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 bg-white text-gray-700 border border-gray-300 rounded-lg text-xs font-medium hover:border-orange-500 hover:text-orange-600 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-200">
                {/* Flèches de navigation */}
                <div className="flex items-center gap-1">
                    <IoIosArrowDropleftCircle
                        className="text-2xl cursor-pointer text-gray-600 hover:text-orange-600 transition-colors"
                        onClick={prevPage}
                    />
                    <IoIosArrowDroprightCircle
                        className="text-2xl cursor-pointer text-gray-600 hover:text-orange-600 transition-colors"
                        onClick={nextPage}
                    />
                </div>

                {/* Indicateurs de page (dots) */}
                <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToPage(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentPage
                                    ? "bg-orange-600 w-4"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StackSlider;
