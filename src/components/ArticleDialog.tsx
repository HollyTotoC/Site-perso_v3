import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FiClock, FiUser, FiCalendar } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import useSoundPlayer from "../hooks/usePlaySound";
import { getArticleContent } from "../utils/articlesData";

interface Article {
    id: string;
    file: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    readTime: string;
    author: string;
}

interface ArticleDialogProps {
    article: Article | null;
    isOpen: boolean;
    onClose: () => void;
}

const ArticleDialog = ({ article, isOpen, onClose }: ArticleDialogProps) => {
    const [markdownContent, setMarkdownContent] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const playSound = useSoundPlayer();

    // Load markdown content when article changes
    useEffect(() => {
        if (article && isOpen) {
            setIsLoading(true);
            // Use the static import approach
            setTimeout(() => {
                const content = getArticleContent(article.file);
                setMarkdownContent(content);
                setIsLoading(false);
            }, 100); // Small delay for better UX
        }
    }, [article, isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Handle click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    const handleClose = () => {
        playSound();
        onClose();
    };

    if (!article) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={handleBackdropClick}
                >
                    {/* Backdrop with blur */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Dialog */}
                    <motion.div
                        ref={dialogRef}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.4 }}
                        className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                            <div className="flex justify-between items-start">
                                <div className="flex-1 pr-4">
                                    <h2 className="text-2xl font-bold mb-2">
                                        {article.title}
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                                        <div className="flex items-center gap-1">
                                            <FiUser className="text-sm" />
                                            <span>{article.author}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FiCalendar className="text-sm" />
                                            <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FiClock className="text-sm" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                    aria-label="Fermer"
                                >
                                    <IoMdClose className="text-2xl" />
                                </button>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-white/20 rounded-full text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="overflow-y-auto max-h-[calc(85vh-180px)]">
                            <div className="p-6 prose prose-lg max-w-none">
                                {isLoading ? (
                                    <div className="flex items-center justify-center py-12">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                                    </div>
                                ) : (
                                    <ReactMarkdown
                                        components={{
                                            h1: ({ children }) => (
                                                <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">
                                                    {children}
                                                </h1>
                                            ),
                                            h2: ({ children }) => (
                                                <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
                                                    {children}
                                                </h2>
                                            ),
                                            h3: ({ children }) => (
                                                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
                                                    {children}
                                                </h3>
                                            ),
                                            p: ({ children }) => (
                                                <p className="mb-4 leading-relaxed text-gray-600">
                                                    {children}
                                                </p>
                                            ),
                                            ul: ({ children }) => (
                                                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-600">
                                                    {children}
                                                </ul>
                                            ),
                                            ol: ({ children }) => (
                                                <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-600">
                                                    {children}
                                                </ol>
                                            ),
                                            li: ({ children }) => (
                                                <li className="ml-4">{children}</li>
                                            ),
                                            blockquote: ({ children }) => (
                                                <blockquote className="border-l-4 border-orange-500 pl-4 py-2 my-4 italic text-gray-700 bg-orange-50 rounded-r-lg">
                                                    {children}
                                                </blockquote>
                                            ),
                                            code: ({ children, ...props }) => {
                                                const inline = !('className' in props && typeof props.className === 'string' && props.className.includes('language-'));
                                                return inline ? (
                                                    <code className="px-2 py-1 bg-gray-100 rounded text-sm text-orange-600">
                                                        {children}
                                                    </code>
                                                ) : (
                                                    <code className="block p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
                                                        {children}
                                                    </code>
                                                );
                                            },
                                            pre: ({ children }) => (
                                                <pre className="mb-4">{children}</pre>
                                            ),
                                            strong: ({ children }) => (
                                                <strong className="font-semibold text-gray-900">
                                                    {children}
                                                </strong>
                                            ),
                                            em: ({ children }) => (
                                                <em className="italic">{children}</em>
                                            ),
                                            hr: () => (
                                                <hr className="my-8 border-gray-200" />
                                            ),
                                        }}
                                    >
                                        {markdownContent}
                                    </ReactMarkdown>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ArticleDialog;