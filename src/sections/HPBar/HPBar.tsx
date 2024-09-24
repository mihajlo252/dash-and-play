import { useState } from "react";
export const HPBar = ({maxHP}: {maxHP: number}) => {
    const [scale, setScale] = useState(1);
    const [currentHP, setCurrentHP] = useState(maxHP);
    const scaleHP = (e: any) => {
        setScale((parseInt(e.target.value) / 100) * (100 / maxHP));
        setCurrentHP(parseInt(e.target.value));
    };

    const decreaseHP = () => {
        if (currentHP !== 0) {
            setScale(((currentHP - 1) / 100) * (100 / maxHP));
            setCurrentHP((currentHP - 1));
        } ;

    };

    const increaseHP = () => {
        if (currentHP < maxHP) {
            setScale(((currentHP + 1) / 100) * (100 / maxHP));
            setCurrentHP((currentHP + 1));
        }
    };

    return (
        <div className="flex items-center gap-1">
            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[100vh] border-4 border-neutral">
                <div
                    className={`h-full w-full origin-bottom bg-red-900`}
                    style={{ transform: `scaleY(${scale})` }}
                ></div>
                <p className="user-select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {currentHP}
                </p>
                <input
                    type="range"
                    className={`absolute left-1/2 top-0 h-[120px] w-full -translate-x-1/2 -rotate-90 opacity-0`}
                    min={0}
                    max={maxHP}
                    step={1}
                    onChange={(e) => scaleHP(e)}
                />
            </div>
            <div className="flex flex-col gap-1">
                <button className="btn btn-primary" onClick={increaseHP}>
                    +
                </button>
                <button className="btn btn-primary" onClick={decreaseHP}>
                    -
                </button>
            </div>
        </div>
    );
};
