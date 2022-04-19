import React, {FC, useCallback, useState} from "react";
import {diceOperations, DiceOptions, dicesOptionsDescription} from "../common/DiceOptions";
import {DiceScoreWrapper, DefaultWrapper, AbleWrapper, DisableWrapper} from "./styles"
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
    const [isShowDescription,setShowDescription] = useState(false);
    const onClickAbleScoreBoard = useCallback(() => {
        console.log(ableDiceTypes)
        // roll 을 안할시 선택 안됨
        if(rollCount!==3){
            dispatch({type: ACTION_SET_CURRENT_DICE_TYPE, data: diceType})
        }
    }, [rollCount])
    const onContextMenuScoreBoard = useCallback((e:any)=>{
        e.preventDefault();
        if(!isShowDescription){
            setShowDescription(true)
            setTimeout(()=>{
                setShowDescription(false)
            },1500)
        }

    },[isShowDescription])
    if(ableDiceTypes[index]){
        return (
            <DiceScoreWrapper onContextMenu={onContextMenuScoreBoard}>
                <DisableWrapper>
                    {isShowDescription ?
                        <div style={{fontSize:14,padding:4}}>{dicesOptionsDescription[index]}</div>:
                        <div>{name}</div>
                    }
                </DisableWrapper>
            </DiceScoreWrapper>
        )
    }
    return (
        <DiceScoreWrapper onClick={onClickAbleScoreBoard} onContextMenu={onContextMenuScoreBoard}>
            {currentSelectDiceType === diceType ?
                <AbleWrapper>
                    {isShowDescription?
                        <div style={{fontSize:14,padding:4}}>{dicesOptionsDescription[index]}</div>:
                        <>
                            <div>
                                {name} :
                            </div>
                            <div>
                                {diceOperations(diceType, dices)}
                            </div>
                        </>
                    }
                </AbleWrapper> :
                <DefaultWrapper>
                    {isShowDescription ?
                        <div style={{fontSize:14,padding:4}}>{dicesOptionsDescription[index]}</div> :
                        <>
                            <div>
                                {name} :
                            </div>
                            <div>
                                {diceOperations(diceType, dices)}
                            </div>
                        </>
                    }

                </DefaultWrapper>


            }
        </DiceScoreWrapper>
    )

}

export default DiceScore;