import React from "react";
import {useYachtDispatch, useYachtState} from "../hooks/ContextHooks";
import DiceScore from "./DiceScore";
import {DiceOptions} from "../common/DiceOptions";
import Dices from "./Dices";

const MainScreen = () => {
    const dispatch = useYachtDispatch();
    const {rollCount, round, score, dices,} = useYachtState();
    return (<>

        <div>
            <div>round{round}</div>
            <div>score {score}</div>
            <div style={{display: "flex"}}>
                <div>
                    <DiceScore diceType={DiceOptions.Aces} name={"Aces"} dices={dices}/>
                </div>
            </div>
            <div>
                Roll :{rollCount}
            </div>
            <div>
                {dices.map(v => {
                    return (<Dices diceNum={v}/>)
                })}
            </div>
            <div>
                <button>
                    Roll
                </button>
                <button>
                    Record
                </button>
            </div>
        </div>
    </>)
}
export default MainScreen