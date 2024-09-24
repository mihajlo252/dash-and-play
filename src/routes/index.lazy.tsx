import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BoxSection } from "../components/BoxSection";
import { CharacterProfile } from "../sections/CharacterProfile";
import { HPBar } from "../sections/HPBar/HPBar";

export const Route = createLazyFileRoute("/")({
    component: Home,
});

const gap = "gap-5";

function Home() {
    return (
        <motion.main className={`grid h-full w-full grid-rows-[.2fr_1fr] ${gap}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <CharacterProfile />
            <section className={`flex ${gap}`}>
                <BoxSection width="w-[40%]">a</BoxSection>
                <div className={`flex h-full w-[50%] flex-col ${gap}`}>
                  <BoxSection width="w-full flex justify-around items-center">
                    <div>
                        <h2 className="text-3xl">HP Bar</h2>
                    </div>
                    <HPBar maxHP={55} />
                  </BoxSection>
                  <BoxSection width="w-full">a</BoxSection>
                </div>
                <BoxSection width="w-[10%]">a</BoxSection>
            </section>
        </motion.main>
    );
}
