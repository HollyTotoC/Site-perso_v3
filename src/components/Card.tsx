import React from "react";

interface CardProps {
    children: React.ReactNode;
    url: string;
    bg: string;
    accent: string;
    mokeup: any;
}

const Card: React.FC<CardProps> = ({ children, url, bg, accent, mokeup }) => {
    return (
        <section className="">
            <div className="h-[100vh] p-4">
                <div
                    className={`h-full flex flex-col justify-end p-10 rounded-xl gap-6 ${bg} overflow-hidden relative`}
                >
                    <div className="absolute w-4/6 top-0 right-[-3%] overflow-clip z-0">
                        <img className="" src={mokeup} alt="" />
                    </div>
                    <div className="flex items-end">
                        {children}
                        <a
                            href={url}
                            className={`${accent} rounded-full w-full h-full max-h-28 max-w-28 flex items-center justify-center p-5 z-10 cursor-pointer`}
                        >
                            <span className="font-semibold text-white text-center text-lg leading-5">
                                Live Preview
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;
