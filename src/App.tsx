import "./App.css";
import { FaLinkedin } from "react-icons/fa";

function App() {
    return (
        <div className="h-[100dvh] p-4">
            <div className="h-full flex flex-col justify-between bg-zinc-100 p-10 rounded-xl">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl text-black font-bold">
                        Toto Certa.
                    </h1>
                    <div className="flex justify-center items-center gap-6">
                        <div className="flex justify-center items-center text-black bg-white rounded-full px-4 py-1">
                            <span>
                                Disponible pour{" "}
                                <span className="font-bold">Fev 2024</span>
                            </span>
                            <span className="bg-green-500 animate-pulse rounded-full h-3 w-3 ml-2"></span>
                        </div>
                        <a
                            href="#"
                            className="flex items-center bg-black text-white font-semibold leading-4 rounded-full text-center px-2 h-16 w-16"
                        >
                            Let's talk
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex justify-between items-end mb-14">
                    <h2 className="text-6xl text-black uppercase font-bold w-4/6">Developpeur Front.</h2>
                    <p className="w-1/5 font-semibold">Nulla fugiat do ea cupidatat aute qui reprehenderit fugiat laborum voluptate.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaLinkedin />
                    <div className="w-3 h-3 bg-red-400"></div>
                    <div className="w-3 h-3 bg-red-400"></div>
                    <div className="w-3 h-3 bg-red-400"></div>
                    <div className="w-3 h-3 bg-red-400"></div>
                    <button className="rounded-full bg-black text-white text-xs font-semibold uppercase px-3 py-[3px]">A propos</button>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default App;
