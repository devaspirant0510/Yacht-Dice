import React, {useCallback, useEffect, useState} from "react";
import {useYachtDispatch, useYachtState} from "../hooks/ContextHooks";
import DiceScore from "./DiceScore";
import {DiceOptions} from "../common/DiceOptions";
import Dices from "./Dices";
import {
    ACTION_CLICK_ROLL,
    ACTION_SET_ABLE_DICE_TYPE,
    ACTION_SET_CURRENT_SCORE,
    generateActionSetBonusScore
} from "../context/action";
import service, {convertDiceTypeToNumber} from "../service/YachtDiceService";
import BaseGameLayout from "../layout/BaseGameLayout";
import {defaultValue as Constant} from "../util/constant"
import {
    MainTitle, ScoreBoardWrapper, RightTitle, RollButton, RecordButton,
    DicesWrapper, ButtonsWrapper
} from "./styles"
import GameOverModal from "./modal/GameOverModal"
import Alert from "./notification/Alert";

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
    const [gameAlert, setGameAlert] = useState(false);
    const [gameOverAlert,setGameOverAlert] = useState(false);
    const [gameAlertMessage, setGameAlertMessage] = useState("")
    const onClickDiceRoll = useCallback(() => {
        if (rollCount > 0) {
            console.log(dices, dicesLock)
            const randomDices = service.makeRandomDice(dices, dicesLock);
            dispatch({type: ACTION_CLICK_ROLL, data: randomDices})
            dispatch({type: ACTION_SET_CURRENT_SCORE, data: service.getDicesScore(randomDices)})
        } else {
            if (!gameAlert) {
            }
            setGameAlert(true);
            setGameAlertMessage("roll 횟수를 모두 소비하였습니다. record 버튼으로 점수를 등록해주세요")
        }
    }, [rollCount, dicesLock, currentSelectDiceType])
    const onClickDiceRecord = useCallback(() => {
        console.log(currentSelectDiceType, ableDiceTypes)
        if (dices[0] !== 0) {
            if (currentSelectDiceType) {
                const selectData = service.getDicesScore(dices, currentSelectDiceType)
                if (service.existBonusScoreDice(currentSelectDiceType)) {
                    dispatch(generateActionSetBonusScore(selectData));
                }
                dispatch({type: "ACTION_CLICK_RECORD", data: selectData})
                dispatch({type: ACTION_SET_ABLE_DICE_TYPE, data: convertDiceTypeToNumber(currentSelectDiceType)})
                console.log(ableDiceTypes, convertDiceTypeToNumber(currentSelectDiceType))
            }
        } else {
            setGameAlert(true);
            setGameAlertMessage("roll 버튼을 눌러 주사위를 굴려주세요")
        }
    }, [dices, currentSelectDiceType]);
    useEffect(() => {
        if (round === Constant.gameEndScore) {
            setGameOverAlert(true);
        }
    }, [round])
    return (
        <BaseGameLayout>
            {
                gameAlert &&
                <div style={{width: "100%", textAlign: 'center'}}>
                    <Alert
                        message={gameAlertMessage}
                        messageSetState={setGameAlertMessage}
                        alertSetState={setGameAlert}/>
                </div>
            }
            { gameOverAlert &&
                <GameOverModal setValue={setGameOverAlert}/>}
            <MainTitle>round : {round}</MainTitle>
            <RightTitle>score : {totalScore}</RightTitle>
            <ScoreBoardWrapper>
                <div style={{width: "50%"}}>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={0} diceType={DiceOptions.Aces} name={"Aces"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={1} diceType={DiceOptions.Twos} name={"Twos"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={2} diceType={DiceOptions.Threes} name={"Threes"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={3} diceType={DiceOptions.Fours} name={"Fours"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={4} diceType={DiceOptions.Fives} name={"Fives"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={5} diceType={DiceOptions.Sixes} name={"Sixes"} dices={dices}/>
                    <div>
                        bounds:{bonusScore}/63
                    </div>
                </div>
                <div style={{width: "50%"}}>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={6} diceType={DiceOptions.Choice} name={"Choice"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={7} diceType={DiceOptions.FourOfAKind} name={"FourOfAKind"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={8} diceType={DiceOptions.FullHouse} name={"FullHouse"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={9} diceType={DiceOptions.SmallStraight} name={"SmallStraight"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={10} diceType={DiceOptions.LargeStraight} name={"LargeStraight"} dices={dices}/>
                    <DiceScore setGameAlert={setGameAlert} setAlertMessage={setGameAlertMessage} index={11} diceType={DiceOptions.Yacht} name={"Yacht"} dices={dices}/>
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