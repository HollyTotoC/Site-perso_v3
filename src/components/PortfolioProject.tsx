import React from "react";
import useSoundPlayer from "../hooks/usePlaySound";

interface PortfolioProjectProps {
    children?: React.ReactNode;
    project: {
        title: string;
        desc: string;
        tags: string[];
        color: string;
        gradient?: string;
        mainPicture: string;
        link: string;
    };
    index: number;
}

const PortfolioProject: React.FC<PortfolioProjectProps> = ({
    children,
    project,
    index,
}) => {
    
    const playSound = useSoundPlayer();

    return (
        <div key={index} className={`group col-span-2 row-span-2 h-full ${project.gradient || project.color} rounded-xl overflow-hidden shadow-white-xl relative cursor-pointer text-white`}>
            
            <div className="flex justify-center items-center w-full h-full z-0 blur-0 group-hover:blur-md transition-all duration-500 ease-in-out">
                <img
                    className="object-scale-down h-5/6"
                    src={project.mainPicture}
                    alt=""
                />
            </div>

            <a href={project.link} target="_blank" onClick={playSound} className="absolute top-[-100%] group-hover:top-0 bg-zinc-900 bg-opacity-50 flex flex-col gap-3 justify-end w-full h-full p-4 transition-all duration-500 ease-in-out">
                <h1 className="text-xl font-title font-bold">
                    {project.title}
                </h1>
                <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                        <li
                            key={index}
                            className="border-2 border-white px-3 rounded-full font-semibold"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <p>{project.desc}</p>
                {children}
            </a>
        </div>
    );
};

export default PortfolioProject;
