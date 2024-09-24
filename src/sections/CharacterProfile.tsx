

export const CharacterProfile = () => {
    return (
        <header className="grid h-full w-full grid-cols-2 items-center justify-between rounded-lg border-2 border-slate-900 bg-base-300 px-5 text-neutral">
            <div className="flex gap-2">
                {/* <img
                    src={`./assets/${"bag.png"}`}
                    className="h-[50px] w-[50px]"
                    alt=""
                /> */}
                <div className="text-start">
                    <p>Vvyhs</p>
                    <hr />
                    <p>Level 6, Revenant Rogue, The Revived</p>
                </div>
            </div>
            <div className="text-2xl">
                <div className="grid grid-cols-6">
                    <p>STR</p>
                    <p>DEX</p>
                    <p>CON</p>
                    <p>INT</p>
                    <p>WIS</p>
                    <p>CHA</p>
                </div>
                <hr />
                <div className="grid grid-cols-6">
                    <p>10<span className="text-sm">+0</span></p>
                    <p>16<span className="text-sm">+3</span></p>
                    <p>14<span className="text-sm">+2</span></p>
                    <p>10<span className="text-sm">+0</span></p>
                    <p>15<span className="text-sm">+2</span></p>
                    <p>14<span className="text-sm">+2</span></p>
                </div>
            </div>
        </header>
    );
};
