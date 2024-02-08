import "./App.css";
import About from "./components/About";
import Card from "./components/Card";
import Landing from "./components/Landing";

function App() {
    return (
        <>
            <Landing />
            {/* Project 1 */}
            <Card url="https://labo-bioseine.fr/">
                <div className="flex flex-col justify-end gap-6">
                    <h2 className="font-title text-6xl">Bioseine</h2>
                    <ul className="flex items-center justify-start text-md font-semibold gap-3">
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Frontend
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Backend
                        </li>
                    </ul>
                    <p className="font-semibold">
                        Labore incididunt labore sit culpa cillum magna qui. Ea
                        pariatur consectetur incididunt consectetur deserunt
                        culpa Lorem deserunt enim pariatur irure cupidatat.
                        Fugiat ad cillum est commodo aute do amet laborum Lorem
                        veniam esse commodo. Anim consectetur aliqua consequat
                        reprehenderit ullamco commodo anim excepteur ex. Eu
                        cupidatat excepteur incididunt ut elit culpa ex ex sint
                        reprehenderit reprehenderit incididunt. Ut elit sint
                        sunt consequat anim commodo irure dolore nisi non amet
                        reprehenderit tempor occaecat. Quis labore officia
                        reprehenderit in sit incididunt adipisicing aliquip
                        veniam.
                    </p>
                </div>
            </Card>
            {/* Project 2 */}
            <Card url="https://quelor.fr">
                <div className="flex flex-col justify-end gap-6">
                    <h2 className="font-title text-6xl">Quelor</h2>
                    <ul className="flex items-center justify-start text-md font-semibold gap-3">
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Frontend
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Design
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            User Experience
                        </li>
                    </ul>
                    <p className="font-semibold">
                        Labore incididunt labore sit culpa cillum magna qui. Ea
                        pariatur consectetur incididunt consectetur deserunt
                        culpa Lorem deserunt enim pariatur irure cupidatat.
                        Fugiat ad cillum est commodo aute do amet laborum Lorem
                        veniam esse commodo. Anim consectetur aliqua consequat
                        reprehenderit ullamco commodo anim excepteur ex. Eu
                        cupidatat excepteur incididunt ut elit culpa ex ex sint
                        reprehenderit reprehenderit incididunt. Ut elit sint
                        sunt consequat anim commodo irure dolore nisi non amet
                        reprehenderit tempor occaecat. Quis labore officia
                        reprehenderit in sit incididunt adipisicing aliquip
                        veniam.
                    </p>
                </div>
            </Card>

            {/* Project 3 */}
            <Card url="https://jeandeportal.fr">
                <div className="flex flex-col justify-end gap-6">
                    <h2 className="font-title text-6xl">Editions<br />Jean de Portal</h2>
                    <ul className="flex items-center justify-start text-md font-semibold gap-3">
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Frontend
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            Design
                        </li>
                        <li className="py-2 px-4 border-2 border-black rounded-full uppercase">
                            User Experience
                        </li>
                    </ul>
                    <p className="font-semibold">
                        Labore incididunt labore sit culpa cillum magna qui. Ea
                        pariatur consectetur incididunt consectetur deserunt
                        culpa Lorem deserunt enim pariatur irure cupidatat.
                        Fugiat ad cillum est commodo aute do amet laborum Lorem
                        veniam esse commodo. Anim consectetur aliqua consequat
                        reprehenderit ullamco commodo anim excepteur ex. Eu
                        cupidatat excepteur incididunt ut elit culpa ex ex sint
                        reprehenderit reprehenderit incididunt. Ut elit sint
                        sunt consequat anim commodo irure dolore nisi non amet
                        reprehenderit tempor occaecat. Quis labore officia
                        reprehenderit in sit incididunt adipisicing aliquip
                        veniam.
                    </p>
                </div>
            </Card>

            <About />
            {/* full portfolio */}
            {/* contact */}
        </>
    );
}

export default App;
