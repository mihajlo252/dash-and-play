import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BoxSection } from "../../components/BoxSection";
import { useCharacterStore } from "../../store/characterStore";

export const Route = createLazyFileRoute("/traits/racial-traits")({
    component: TraitsScreen,
});

function TraitsScreen() {

    const { character }  : CharacterStore = useCharacterStore();

    
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden">
            <BoxSection styles="w-full p-5 flex-col text-start gap-2 overflow-y-scroll">
                <h2 className="text-3xl underline">Racial Traits</h2>
                {character.traits.racialTraits.map((trait: string, index: number) => (
                    <p key={index}>{trait}</p>
                ))}
            </BoxSection>
        </motion.main>
    );
};


