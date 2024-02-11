import React from "react";
import PortfolioProject from "./PortfolioProject";
import portfolio from '../assets/portfolio.json'

const Portfolio = () => {
    return (
        <div className="p-4 min-h-[100dvh] flex flex-col justify-end">
            <div className="h-full grid grid-cols-4 auto-rows-fr gap-4 rounded-xl">
                <div className="row-span-1 col-span-2 flex flex-col justify-center bg-zinc-100 rounded-xl p-5  shadow-white-xl">
                    <h2 className="font-title uppercase text-3xl mt-20 mb-3 w-8/12">
                        Portfolio
                    </h2>
                </div>

                {/* to load colors  */}
                <div className="hidden bg-hifumi-accent bg-meteo-accent bg bg-kasa-accent bg-piiquante-accent bg-omf-accent bg-kanap-accent bg-panthere-accent"></div>

                {portfolio.map((project, index) => (
                    <PortfolioProject key={index} project={project}></PortfolioProject>
                ))}

                <div className="row-span-1 col-span-2 flex flex-col justify-center bg-zinc-100 rounded-xl p-5  shadow-white-xl">
                    <h2 className="font-title uppercase text-3xl mt-20 mb-3 w-8/12"></h2>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;
