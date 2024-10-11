import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useCharacterStore } from "../store/characterStore";
import { Trait } from "../components/Trait";
import { BoxSection } from "../components/BoxSection";
import { useState } from "react";

export const Route = createLazyFileRoute("/traits")({
    component: TraitsScreen,
});

function TraitsScreen() {

    const { character }  : CharacterStore = useCharacterStore();
    const [description, setDescription] = useState("racialTraits");
    const changeDescription = (d: string) => {
        setDescription(d)
    }

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden">
            <BoxSection styles="w-full p-5 flex-col text-start gap-2 overflow-y-scroll">
            <div>
                <button onClick={() => changeDescription("racialTraits")} className="btn btn-ghost">Racial Traits</button>
                <button onClick={() => changeDescription("featureTraits")} className="btn btn-ghost">Features & Traits</button>
            </div>
            <Trait character={character} description={description} />
            </BoxSection>
        </motion.main>
    );
};


