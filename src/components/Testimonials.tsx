import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";
import testimonialsData from "../assets/testimonials.json";
import useSoundPlayer from "../hooks/usePlaySound";

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const playSound = useSoundPlayer()
    const nextTestimonial = () => {
        playSound();
        setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };
    
    const prevTestimonial = () => {
        playSound();
        setIndex(
            (prevIndex) =>
                (prevIndex - 1 + testimonialsData.length) %
                testimonialsData.length
        );
    };

    const { testimonial, name, company } = testimonialsData[index];

    return (
        <>
            <div className="">
                <span className="text-5xl font-title text-gray-700">"</span>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ type: "spring", duration: .5 }}
                        className="text-gray-700"
                    >
                        {testimonial}
                    </motion.p>
                </AnimatePresence>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <IoIosArrowDropleftCircle
                        className="text-4xl cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={prevTestimonial}
                    />
                    <IoIosArrowDroprightCircle
                        className="text-4xl cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={nextTestimonial}
                    />
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0}}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", duration: .5 }}
                        className="flex flex-col w-full items-end justify-center text-gray-700"
                    >
                        <p className="font-title">{name}</p>
                        <p>{company}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};

export default Testimonials;
