import { createLazyFileRoute } from "@tanstack/react-router";

import { motion } from "framer-motion";
import { BoxSection } from "../components/BoxSection";

export const Route = createLazyFileRoute("/traits")({
    component: TraitsScreen,
});

function TraitsScreen() {
    const traits = [
        "Past Life. Human. Before your death, you were a Human and appear as an undead version of it.",
        "Living Dead. You are immune to disease. You do not need to eat or breathe. Additionally, you have two creature types: humanoid and undead. You can be affected by a spell or ability if it works on either of your creature types.",
        "Restless. You treat exhaustion as if it was one level less. In addition, instead of sleeping, you enter an inactive state for 4 hours each day. You do not dream in this state; you are fully aware of your surroundings and notice approaching enemies and other events as normal.",
        "Unholy. When you regain hit points from a source that specifies it does not function on undead, you only receive half as many hit points as the source would normally provide, rounded down",
        "Bloodless. You are immune to poison damage and the poisoned condition.",
        "You know at all times the general direction of and relative distance to a specific intelligent creature of the DM's choosing against whom you seek revenge for your death, even if the creature and you are on different planes of existence. Should this creature die by your hand or that of another, you instantly know, and your DM chooses another creature also responsible for your death for this feature to apply to, should such a creature exist.",
        "Driven. You have advantage on saving throws against effects that turn undead or would cause you to be frightened.",
        "When you drop to 0 hit points, you can choose to stay conscious instead of falling unconscious. If you do, you gain temporary hit points equal to your total character level + your Constitution modifier (minimum 1), which last for up to one minute. In this state, you can take an action or bonus action on your turn, but not both, and can move only half of your movement speed. You remain in this state until you regain hit points, or until you no longer have temporary hit points. If you lose all temporary hit points in this state while you are still at 0 hit points, you fall unconscious and begin making death saving throws as normal. Once you use this trait, you can't use it again until you finish a long rest.",
    ];
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <BoxSection styles="w-full p-5 flex-col text-start gap-2 overflow-y-scroll h-[75svh]">
                <h2 className="text-3xl underline">Racial Traits</h2>
                {traits.map((traits, index) => (
                    <p key={index}>{traits}</p>
                ))}
            </BoxSection>
        </motion.main>
    );
};


