import React,{FC} from "react";
import {diceOperations, DiceOptions} from "../common/DiceOptions";


interface Props{
    diceType:DiceOptions,
    name:string,
    dices:number[]
}
const DiceScore:FC<Props> = ({diceType,name,dices}:Props)=>{
    return (
        <div style={{display:"flex"}}>
            <div>
                {name}
            </div>
            <div>
                {diceOperations(diceType,dices)}
            </div>
        </div>
    )

}

export default DiceScore;