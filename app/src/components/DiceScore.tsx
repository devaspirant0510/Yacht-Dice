import React, {FC, useCallback} from "react";
import {diceOperations, DiceOptions} from "../common/DiceOptions";
import {DiceScoreWrapper, DefaultWrapper, AbleWrapper, DisableWrapper} from "./style"
import {useYachtDispatch, useYachtState} from "../hooks/ContextHooks";
import {ACTION_SET_CURRENT_DICE_TYPE} from "../context/action";


interface Props {
    diceType: DiceOptions,
    name: string,
    dices: number[],
    index:number
}

const DiceScore: FC<Props> = ({diceType, name, dices,index}: Props) => {
    const dispatch = useYachtDispatch();
    const {currentSelectDiceType, rollCount,ableDiceTypes} = useYachtState();
    const onClickAbleScoreBoard = useCallback(() => {
        console.log(ableDiceTypes)
        // roll 을 안할시 선택 안됨
        if(rollCount!==3){
            dispatch({type: ACTION_SET_CURRENT_DICE_TYPE, data: diceType})
        }
    }, [rollCount])
    if(ableDiceTypes[index]){
        return (
            <DiceScoreWrapper>
                <DisableWrapper>
                    <div>{name}</div>
                </DisableWrapper>
            </DiceScoreWrapper>
        )
    }
    return (
        <DiceScoreWrapper onClick={onClickAbleScoreBoard}>
            {currentSelectDiceType === diceType ?
                <AbleWrapper>
                    <div>
                        {name} :
                    </div>
                    <div>
                        {diceOperations(diceType, dices)}
                    </div>
                </AbleWrapper> :
                <DefaultWrapper>
                    <div>
                        {name} :
                    </div>
                    <div>
                        {diceOperations(diceType, dices)}
                    </div>

                </DefaultWrapper>


            }
        </DiceScoreWrapper>
    )

}

export default DiceScore;