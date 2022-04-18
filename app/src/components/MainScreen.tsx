import React, {useCallback, useEffect} from "react";
import {useYachtDispatch, useYachtState} from "../hooks/ContextHooks";
import DiceScore from "./DiceScore";
import {DiceOptions} from "../common/DiceOptions";
import Dices from "./Dices";
import {ACTION_CLICK_ROLL, ACTION_SET_ABLE_DICE_TYPE, ACTION_SET_CURRENT_SCORE} from "../context/action";
import service, {convertDiceTypeToNumber} from "../service/YachtDiceService";
import BaseGameLayout from "../layout/BaseGameLayout";
import {defaultValue as Constant} from "../util/constant"
import {MainTitle, ScoreBoardWrapper, RightTitle, RollButton, RecordButton,
    DicesWrapper, ButtonsWrapper} from "./style"

const MainScreen = () => {
    const dispatch = useYachtDispatch();
    const {
        rollCount,
        round,
        totalScore,
        dices,
        bonusScore,
        currentScore,
        dicesLock,
        currentSelectDiceType,
        ableDiceTypes
    } = useYachtState();
    const onClickDiceRoll = useCallback(() => {
        if (rollCount > 0) {
            console.log(dices, dicesLock)
            const randomDices = service.makeRandomDice(dices, dicesLock);
            dispatch({type: ACTION_CLICK_ROLL, data: randomDices})
            dispatch({type: ACTION_SET_CURRENT_SCORE, data: service.getDicesScore(randomDices)})
        }
    }, [rollCount, dicesLock, currentSelectDiceType])
    const onClickDiceRecord = useCallback(() => {
        console.log(currentSelectDiceType, ableDiceTypes)
        if (dices[0] !== 0) {
            if (currentSelectDiceType) {
                const selectData = service.getDicesScore(dices, currentSelectDiceType)
                dispatch({type: "ACTION_CLICK_RECORD", data: selectData})
                dispatch({type: ACTION_SET_ABLE_DICE_TYPE, data: convertDiceTypeToNumber(currentSelectDiceType)})
                console.log(ableDiceTypes, convertDiceTypeToNumber(currentSelectDiceType))
            }
        }
    }, [dices, currentSelectDiceType]);
    useEffect(()=>{
        if(round===Constant.gameEndScore){
            alert("게임 종료")
        }
    },[round])
    return (
        <BaseGameLayout>
            <MainTitle>round : {round}</MainTitle>
            <RightTitle>score : {totalScore}</RightTitle>
            <ScoreBoardWrapper>
                <div style={{width: "50%"}}>
                    <DiceScore index={0} diceType={DiceOptions.Aces} name={"Aces"} dices={dices}/>
                    <DiceScore index={1} diceType={DiceOptions.Twos} name={"Twos"} dices={dices}/>
                    <DiceScore index={2} diceType={DiceOptions.Threes} name={"Threes"} dices={dices}/>
                    <DiceScore index={3} diceType={DiceOptions.Fours} name={"Fours"} dices={dices}/>
                    <DiceScore index={4} diceType={DiceOptions.Fives} name={"Fives"} dices={dices}/>
                    <DiceScore index={5} diceType={DiceOptions.Sixes} name={"Sixes"} dices={dices}/>
                    <div>
                        bounds:{bonusScore}
                    </div>
                </div>
                <div style={{width: "50%"}}>
                    <DiceScore index={6} diceType={DiceOptions.Choice} name={"Choice"} dices={dices}/>
                    <DiceScore index={7} diceType={DiceOptions.FourOfAKind} name={"FourOfAKind"} dices={dices}/>
                    <DiceScore index={8} diceType={DiceOptions.FullHouse} name={"FullHouse"} dices={dices}/>
                    <DiceScore index={9} diceType={DiceOptions.SmallStraight} name={"SmallStraight"} dices={dices}/>
                    <DiceScore index={10} diceType={DiceOptions.LargeStraight} name={"LargeStraight"} dices={dices}/>
                    <DiceScore index={11} diceType={DiceOptions.Yacht} name={"Yacht"} dices={dices}/>
                    <div>
                        total:{currentScore}
                    </div>
                </div>
            </ScoreBoardWrapper>
            <DicesWrapper>
                <RightTitle>
                    Roll :{rollCount}
                </RightTitle>
                <div style={{display: 'flex'}}>
                    {dices.map((v, index) => {
                        console.log("rerender dices", v)
                        return (<Dices dicesIndex={index} lock={dicesLock[index]} key={index} diceNum={v}/>)
                    })}
                </div>
                <ButtonsWrapper>
                    <RollButton onClick={onClickDiceRoll}>
                        Roll
                    </RollButton>
                    <RecordButton onClick={onClickDiceRecord}>
                        Record
                    </RecordButton>
                </ButtonsWrapper>

            </DicesWrapper>
        </BaseGameLayout>
    )
}
export default MainScreen