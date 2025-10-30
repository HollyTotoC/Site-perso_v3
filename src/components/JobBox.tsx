import availabilityData from "../assets/current-project.json";

/**
 * JobBox Component
 * Affiche la disponibilité actuelle et les moyens de contact
 */
const JobBox = () => {
    return (
        <div className="h-full w-full">
            <div className="bg-gradient-to-br from-orange-400/90 via-rose-400/80 to-pink-400/85 rounded-2xl p-5 shadow-xl h-full flex flex-col justify-center text-white backdrop-blur-sm">
                {/* Badge statut élégant */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-4 self-start">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg"></div>
                    <span className="text-sm font-semibold">Disponible</span>
                </div>

                {/* Infos principales */}
                <div className="space-y-2.5">
                    <h3 className="font-title text-2xl">
                        Freelance + CDI
                    </h3>
                    <p className="text-lg text-white/90">
                        <strong>Remote flexible</strong>
                    </p>
                    <p className="text-base text-white/80 leading-relaxed">
                        {availabilityData.focus}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobBox;
