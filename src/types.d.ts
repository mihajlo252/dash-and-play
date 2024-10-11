interface Values {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
}

interface Skills {
    acrobatics: number;
    animalHandling: number;
    arcana: number;
    athletics: number;
    deception: number;
    history: number;
    insight: number;
    intimidation: number;
    investigation: number;
    medicine: number;
    nature: number;
    perception: number;
    performance: number;
    persuasion: number;
    religion: number;
    sleightOfHand: number;
    stealth: number;
    survival: number;
}

interface Descriptions {
    racialTraits: string[];
    featureTraits: string[];
}

interface CharacterProfile {
    class: string;
    level: string;
    name: string;
    pastLife: string;
    race: string;
    subclass: string;
    subrace: string;
}



interface Stats {
    ac: number;
    hitDice: string;
    initiative: number;
    maxHP: number;
    passivePerception: number;
    proficiencyBonus: number;
    primaryMods: Values;
    primaryStats: Values;
    saveThrows: Values;
    skills: Skills;
}

interface Character {
    characterProfile: CharacterProfile;
    stats: {
        ac: number;
        hitDice: string;
        initiative: number;
        maxHP: number;
        passivePerception: number;
        proficiencyBonus: number;
        primaryMods: Values;
        primaryStats: Values;
        saveThrows: Values;
        skills: Skills;
    };
    descriptions: Descriptions;
}

interface CharacterStore  {
    character: Character;
    setCharacter: () => Promise<void>;
  }
