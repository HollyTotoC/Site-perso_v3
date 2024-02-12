import React from "react";

interface PortfolioProjectProps {
    children: React.ReactNode;
    project: {
        title: string;
        desc: string;
        tags: string[];
        color: string;
        mainPicture: string;
        link: string;
    };
    key: number
}

const PortfolioProject: React.FC<PortfolioProjectProps> = ({
    children,
    project,
    key,
}) => {
    
    return (
        <div key={key} className={`group col-span-2 row-span-2 h-full ${project.color} rounded-xl overflow-hidden shadow-white-xl relative cursor-pointer text-white`}>
            
            <div className="flex justify-center items-center w-full h-full z-0 blur-0 group-hover:blur-md">
                <img
                    className="object-scale-down h-5/6"
                    src={project.mainPicture}
                    alt=""
                />
            </div>

            <a href={project.link} target="_blank" className="absolute top-[-100%] group-hover:top-0 bg-zinc-900 bg-opacity-40 flex flex-col gap-3 justify-end w-full h-full p-4 transition-all duration-500 ease-in-out">
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
