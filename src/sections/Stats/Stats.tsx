const savingThrows = {
    STR: 0,
    DEX: 6,
    CON: 2,
    INT: 3,
    WIS: 2,
    CHA: 2,
}

const skills = {
    acrobatics: 6,
    animalHandling: 2,
    arcana: 0,
    athletics: 0,
    deception: 5,
    history: 3,
    insight: 2,
    intimidation: 5,
    investigation: 0,
    medicine: 2,
    nature: 0,
    perception: 5,
    performance: 2,
    persuasion: 2,
    religion: 0,
    sleightOfHand: 6,
    stealth: 6,
    survival: 2,
}

export const Stats = () => {
    return (
        <>
            <div className="flex w-full flex-col items-center gap-1">
                <h3 className="text-[1.875rem] underline">Saving throws</h3>

                <ul className="flex gap-2 text-[1.25rem]">
                    <li className="flex flex-col">
                        STR<span>+{savingThrows.STR}</span>
                    </li>
                    <li className="flex flex-col">
                        DEX<span>+{savingThrows.DEX}</span>
                    </li>
                    <li className="flex flex-col">
                        CON<span>+{savingThrows.CON}</span>
                    </li>
                    <li className="flex flex-col">
                        INT<span>+{savingThrows.INT}</span>
                    </li>
                    <li className="flex flex-col">
                        WIS<span>+{savingThrows.WIS}</span>
                    </li>
                    <li className="flex flex-col">
                        CHA<span>+{savingThrows.CHA}</span>
                    </li>
                </ul>
            </div>
            <div className="flex w-full flex-col items-center gap-1">
                <h3 className="text-[1.875rem] underline">Skills</h3>

                <div className="flex items-center gap-1">
                    <ul className="flex flex-col text-[0.75rem]">
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.acrobatics}
                            </span>
                            Acrobatics (Dex)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.animalHandling}
                            </span>
                            Animal Handling (Wis)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.arcana}
                            </span>
                            Arcana (Int)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.athletics}
                            </span>
                            Athletics (Str)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.deception}
                            </span>
                            Deception (Cha)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.history}
                            </span>
                            History (Int)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.insight}
                            </span>
                            Insight (Wis)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.intimidation}
                            </span>
                            Intimidation (Cha)
                        </li>
                        <li className="flex gap-2">
                            <span className="border-r-2 pr-2">
                                +{skills.investigation}
                            </span>
                            Investigation (Int)
                        </li>
                    </ul>
                    <ul className="flex flex-col text-[0.75rem]">
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.medicine}
                            </span>
                            Medicine (Wis)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.nature}
                            </span>
                            Nature (Int)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.perception}
                            </span>
                            Perception (Wis)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.performance}
                            </span>
                            Performance (Cha)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.persuasion}
                            </span>
                            Persuasion (Cha)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.religion}
                            </span>
                            Religion (Int)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.sleightOfHand}
                            </span>
                            Sleight of Hand (Dex)
                        </li>
                        <li className="flex gap-2 border-b-2">
                            <span className="border-r-2 pr-2">
                                +{skills.survival}
                            </span>
                            Survival (Wis)
                        </li>
                        <li className="flex gap-2">
                            <span className="border-r-2 pr-2">
                                +{skills.stealth}
                            </span>
                            Stealth (Dex)
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
