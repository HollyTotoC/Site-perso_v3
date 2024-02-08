import React from "react";

interface CardProps {
    children: React.ReactNode;
    url: string
}

const Card: React.FC<CardProps> = ({ children, url }) => {
    return (
        <div className="h-[100dvh] p-4">
            <div className="h-full flex flex-col justify-end bg-zinc-100 p-10 rounded-xl gap-6">
                <div className="flex items-end">
                    {children}
                    <div className="bg-white rounded-full w-full h-full max-h-28 max-w-28 flex items-center justify-center p-5">
                        <a href={url} className="font-semibold  text-center text-lg leading-5">
                            Live Preview
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
