export const Trait = ({character, description}: {character: Character; description: string;}) => {
    if (description === "racialTraits") {
        return (
            <>
                {character.descriptions.racialTraits.map((trait: string, index: number) => (
                    <p key={index}>{trait}</p>
                ))}
            </>
        );
    }
    if (description === "featureTraits") {
        return (
            <>
                {character.descriptions.featureTraits.map((t: string, index: number) => (
                    <p key={index}>{t}</p>
                ))}
            </>
        );
    }
};
