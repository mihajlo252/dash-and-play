import { useState } from "react";
import { sendData } from "../../utilities/sendData";
export const HPBar = ({ maxHP, currentHP, characterID }: { maxHP: number; currentHP: number; characterID: string }) => {
    const [scale, setScale] = useState((currentHP / 100) * (100 / maxHP));
    const [HP, setHP] = useState(currentHP);
    const [save, setSave] = useState(false);
    const scaleHP = (e: any) => {
        setScale((parseInt(e.target.value) / 100) * (100 / maxHP));
        setHP(parseInt(e.target.value));
        if (save === false) {
            setSave(true);
        }
        if (save === true && parseInt(e.target.value) === currentHP) {
            setSave(false);
        }
    };

    const decreaseHP = () => {
        if (HP !== 0) {
            setScale(((HP - 1) / 100) * (100 / maxHP));
            setHP(HP - 1);
            if (save === false) {
                setSave(true);
            }
            if (save === true && HP - 1 === currentHP) {
                setSave(false);
            }
        }
    };

    const increaseHP = () => {
        if (HP < maxHP) {
            setScale(((HP + 1) / 100) * (100 / maxHP));
            setHP(HP + 1);
            if (save === false) {
                setSave(true);
            }
            if (save === true && HP + 1 === currentHP) {
                setSave(false);
            }
        }
    };

    const saveCurrentHP = (e: HTMLFormElement, health: number) => {
        e.preventDefault();
        sendData("characters", characterID, health);
        if (save === true) {
            setSave(false);
        }
    };

    return (
        <div className="relative flex h-full w-full items-center justify-end gap-5 px-10">
            {save && (
                <form onSubmit={(e: any) => saveCurrentHP(e, HP)}>
                    <button type="submit" className="btn btn-accent">
                        Save
                    </button>
                </form>
            )}
            <div className="flex items-center gap-1">
                <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[100vh] border-4 border-neutral">
                    <div
                        className={`h-full w-full origin-bottom bg-gradient-to-b from-[#560000] to-[#980000]`}
                        style={{ transform: `scaleY(${scale})` }}
                    ></div>
                    <p className="user-select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {HP}/{maxHP}
                    </p>
                    <input
                        type="range"
                        value={HP}
                        className={`absolute left-1/2 top-0 h-[120px] w-full -translate-x-1/2 -rotate-90 touch-none opacity-0`}
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
        </div>
    );
};
