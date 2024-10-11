import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { motion } from "framer-motion";
import { BoxSection } from "../components/BoxSection";
import { CharacterProfile } from "../sections/CharacterProfile";
import { HPBar } from "../sections/HPBar/HPBar";
import { Stats } from "../sections/Stats/Stats";
import { useEffect, useState } from "react";
import { useCharacterStore } from "../store/characterStore";

export const Route = createLazyFileRoute("/")({
    component: Home,
});

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const { character }  : CharacterStore = useCharacterStore();


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);


    if (!character) {
        return <div>{isLoading ? "" : "Loading..."}</div>;
    }
    return (
        <motion.main
            className={`grid h-full w-full grid-rows-[.2fr_1fr] gap-5`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <CharacterProfile
                primaryStats={character.stats.primaryStats}
                primaryMods={character.stats.primaryMods}
                characterProfile={character.characterProfile}
            />
            <section className={`flex gap-5`}>
                <BoxSection styles="w-[40%] flex flex-col gap-5 p-5">
                    <Stats
                        saveThrows={character.stats.saveThrows}
                        skills={character.stats.skills}
                    />
                </BoxSection>
                <div className={`flex h-full w-[50%] flex-col gap-5`}>
                    <BoxSection styles="w-full flex justify-around items-center p-5">
                        <div>
                            <h2 className="text-3xl">HP Bar</h2>
                        </div>
                        <HPBar maxHP={character.stats.maxHP} />
                    </BoxSection>
                    <BoxSection styles="w-full p-5">a</BoxSection>
                </div>
                <BoxSection styles="w-[10%] flex flex-col py-5">
                    <nav className="flex flex-col gap-5 p-3">
                        <Link to="/traits" className="btn btn-primary">
                            Traits
                        </Link>
                    </nav>
                </BoxSection>
            </section>
        </motion.main>
    );
}
