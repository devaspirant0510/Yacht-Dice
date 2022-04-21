import {initialState, YachtDiceState} from "./state";
import {
    ACTION_CLICK_ROLL,
    ACTION_SET_ABLE_DICE_TYPE,
    ACTION_SET_BONUS_SCORE,
    ACTION_SET_CURRENT_SCORE,
    ACTION_SET_DICES_LOCK,
    ACTION_SET_ROLL_COUNT,
    ActionType
} from "./action";
import {defaultValue as Constant,gameScoreValue} from "../util/constant";

export const myReducer = (state: YachtDiceState, action: ActionType): YachtDiceState => {
    switch (action.type) {
        case "ACTION_SET_ROUND":
            return {
                ...state,
                round: action.data
            }
        case ACTION_CLICK_ROLL:
            return {
                ...state,
                dices: action.data,
                rollCount: state.rollCount - 1,
            }
        case ACTION_SET_ROLL_COUNT:
            return {
                ...state,
                rollCount: action.data
            }
        case "ACTION_CLICK_RECORD":
            return {
                ...state,
                rollCount: Constant.defaultRollCount,
                round: state.round + 1,
                dices: Constant.defaultDices,
                totalScore: state.totalScore + action.data,
                dicesLock: Constant.defaultLocks,
                currentSelectDiceType:undefined
            }
        case ACTION_SET_CURRENT_SCORE:
            return {
                ...state,
                currentScore: action.data,
            }
        case ACTION_SET_DICES_LOCK: {
            const dicesLockCopy = [...state.dicesLock]
            dicesLockCopy[action.data] = !dicesLockCopy[action.data];
            console.log(dicesLockCopy)
            console.log(dicesLockCopy.filter(v => v == true))
            return {
                ...state,
                dicesLock: dicesLockCopy
            }
        }
        case ACTION_SET_BONUS_SCORE:
            const sumScore = state.bonusScore+action.data
            if(sumScore>=gameScoreValue.bonusScore){
                return {
                    ...state,
                    bonusScore:sumScore,
                    totalScore:state.totalScore+sumScore
                }

            }else{
                return {
                    ...state,
                    bonusScore:sumScore

                }

            }
        case "ACTION_SET_CURRENT_DICE_TYPE":
            return {
                ...state,
                currentSelectDiceType:action.data
            }
        case ACTION_SET_ABLE_DICE_TYPE:
            console.log("case ",action.data)
            const copyAbleDiceType = [...state.ableDiceTypes]
            copyAbleDiceType[action.data] = true
            return {
                ...state,
                ableDiceTypes:copyAbleDiceType
            }
        case "ACTION_RETRY_GAME":
            return {
                ...state,
                ...initialState
            }
        default:
            return {
                ...state
            }
    }

}