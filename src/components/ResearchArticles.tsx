import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FiExternalLink, FiClock } from "react-icons/fi";
import articlesMetadata from "../content/research/metadata.json";
import useSoundPlayer from "../hooks/usePlaySound";
import ArticleDialog from "./ArticleDialog";

interface Article {
    id: string;
    file: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    readTime: string;
    author: string;
    featured?: boolean;
}

const ResearchArticles = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const playSound = useSoundPlayer();

    const articles = articlesMetadata.articles as Article[];

    // Auto-scroll toutes les 8 secondes (synchronisé avec StackSlider)
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % articles.length);
            }, 8000);

            return () => clearInterval(interval);
        }
    }, [isPaused, articles.length]);

    const nextArticle = () => {
        playSound();
        setIndex((prevIndex) => (prevIndex + 1) % articles.length);
    };

    const prevArticle = () => {
        playSound();
        setIndex(
            (prevIndex) =>
                (prevIndex - 1 + articles.length) % articles.length
        );
    };

    const goToArticle = (idx: number) => {
        playSound();
        setIndex(idx);
    };

    const openArticle = (article: Article) => {
        playSound();
        setSelectedArticle(article);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setTimeout(() => setSelectedArticle(null), 300); // Clear after animation
    };

    const currentArticle = articles[index];

    return (
        <>
            <div
                className="h-full flex flex-col"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Article content */}
                <div className="flex-1 flex flex-col">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentArticle.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 flex flex-col"
                        >
                            {/* Title */}
                            <h4 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                                {currentArticle.title}
                            </h4>

                            {/* Summary */}
                            <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-1">
                                {currentArticle.summary}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {currentArticle.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-lg font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Meta info */}
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <FiClock className="text-sm" />
                                    <span>{currentArticle.readTime}</span>
                                </div>
                                <span>{new Date(currentArticle.date).toLocaleDateString('fr-FR')}</span>
                            </div>

                            {/* Read more button */}
                            <button
                                onClick={() => openArticle(currentArticle)}
                                className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium shadow-sm hover:shadow-md"
                            >
                                Lire l'article
                                <FiExternalLink className="text-sm" />
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-1">
                        <IoIosArrowDropleftCircle
                            className="text-2xl cursor-pointer text-gray-600 hover:text-orange-600 transition-colors"
                            onClick={prevArticle}
                        />
                        <IoIosArrowDroprightCircle
                            className="text-2xl cursor-pointer text-gray-600 hover:text-orange-600 transition-colors"
                            onClick={nextArticle}
                        />
                    </div>

                    {/* Dots navigation */}
                    <div className="flex items-center gap-1.5">
                        {Array.from({ length: articles.length }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToArticle(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === index
                                        ? "bg-orange-600 w-4"
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to article ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Article Dialog */}
            <ArticleDialog
                article={selectedArticle}
                isOpen={isDialogOpen}
                onClose={closeDialog}
            />
        </>
    );
};

export default ResearchArticles;