import React, {FC, useCallback} from "react";
import {DicesStyle} from "./style";
import {LockFilled} from "@ant-design/icons"
import {useYachtDispatch, useYachtState} from "../hooks/ContextHooks";
import {ACTION_SET_DICES_LOCK} from "../context/action";

interface Props {
    diceNum: number,
    lock: boolean,
    dicesIndex: number
}

const Dices: FC<Props> = ({diceNum, lock, dicesIndex}: Props) => {
    const dispatch = useYachtDispatch();
    const {rollCount,dicesLock} = useYachtState();
    const onClickDicesLock = useCallback(() => {
        console.log("lock",dicesLock)
        // 주사위 값이 없거나 롤카운트가 남아있을경우 즉 0이 아닐경우만 주사위 잠금
        if(diceNum!==0 && rollCount>0){
            dispatch({type: ACTION_SET_DICES_LOCK, data: dicesIndex})
        }
    }, [diceNum,rollCount,dicesLock])
    return (
        <div onClick={onClickDicesLock}>
            {lock ?
                <DicesStyle>
                    <LockFilled/>
                    {diceNum !== 0 && <>{diceNum}</>}
                </DicesStyle> :
                <DicesStyle>
                    {diceNum !== 0 && <>{diceNum}</>}
                </DicesStyle>
            }
        </div>
    )
}
export default Dices;