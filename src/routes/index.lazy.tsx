import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BoxSection } from "../components/BoxSection";
import { CharacterProfile } from "../sections/CharacterProfile";
import { HPBar } from "../sections/HPBar/HPBar";
import { Stats } from "../sections/Stats/Stats";

export const Route = createLazyFileRoute("/")({
    component: Home,
});

const gap = "gap-5";

function Home() {
    return (
        <motion.main
            className={`grid h-full w-full grid-rows-[.2fr_1fr] ${gap}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <CharacterProfile />
            <section className={`flex ${gap}`}>
                <BoxSection styles="w-[40%] flex flex-col gap-5 p-5">
                    <Stats />
                </BoxSection>
                <div className={`flex h-full w-[50%] flex-col ${gap}`}>
                    <BoxSection styles="w-full flex justify-around items-center p-5">
                        <div>
                            <h2 className="text-3xl">HP Bar</h2>
                        </div>
                        <HPBar maxHP={50} />
                    </BoxSection>
                    <BoxSection styles="w-full p-5">a</BoxSection>
                </div>
                <BoxSection styles="w-[10%] flex flex-col py-5">
                    <nav className="flex flex-col gap-5 p-3">
                        <button className="btn btn-primary">Traits</button>
                    </nav>
                </BoxSection>
            </section>
        </motion.main>
    );
}
