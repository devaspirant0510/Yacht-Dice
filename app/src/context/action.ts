import {DiceOptions} from "../common/DiceOptions";

export const ACTION_SET_ROUND = "ACTION_SET_ROUND";
export type typeActionSetRound = { type: typeof ACTION_SET_ROUND, data: number }
export const generateActionSetRound = (data: number): typeActionSetRound => {
    return {
        type: ACTION_SET_ROUND,
        data
    }
}

export const ACTION_CLICK_ROLL = "ACTION_CLICK_ROLL";
export type typeActionClickRoll = { type: typeof ACTION_CLICK_ROLL, data: number[] }
export const generateActionSetDices = (data: number[]): typeActionClickRoll => {
    return {
        type: ACTION_CLICK_ROLL,
        data
    }
}

export const ACTION_CLICK_RECORD = "ACTION_CLICK_RECORD";
export type typeActionClickRecord = { type: typeof ACTION_CLICK_RECORD, data:number}
export const generateActionClickRecord = (data:number): typeActionClickRecord => {
    return {
        type: ACTION_CLICK_RECORD,
        data
    }
}

export const ACTION_SET_ROLL_COUNT = "ACTION_SET_ROLL_COUNT";
export type typeActionSetRollCount = { type: typeof ACTION_SET_ROLL_COUNT, data: number }

export const generateActionSetRollCount = (data: number): typeActionSetRollCount => {
    return {
        type: ACTION_SET_ROLL_COUNT,
        data
    }
}

export const ACTION_SET_CURRENT_SCORE = "ACTION_SET_CURRENT_SCORE";
export type typeActionSetCurrentCount = { type: typeof ACTION_SET_CURRENT_SCORE, data: number }

export const generateActionSetCurrentCount = (data: number): typeActionSetCurrentCount => {
    return {
        type: ACTION_SET_CURRENT_SCORE,
        data
    }
}

export const ACTION_SET_DICES_LOCK = "ACTION_SET_DICES_LOCK";
export type typeActionSetDicesLock = { type: typeof ACTION_SET_DICES_LOCK, data: number }

export const generateActionSetDicesLock = (data: number): typeActionSetDicesLock => {
    return {
        type: ACTION_SET_DICES_LOCK,
        data
    }
}


export const ACTION_SET_CURRENT_DICE_TYPE = "ACTION_SET_CURRENT_DICE_TYPE";
export type typeActionSetCurrentDiceType = { type: typeof ACTION_SET_CURRENT_DICE_TYPE, data: DiceOptions }

export const generateActionSetCurrentDiceType = (data: DiceOptions): typeActionSetCurrentDiceType => {
    return {
        type: ACTION_SET_CURRENT_DICE_TYPE,
        data
    }
}

export const ACTION_SET_ABLE_DICE_TYPE = "ACTION_SET_ABLE_DICE_TYPE";
export type  typeActionSetAbleDiceType = {type:typeof ACTION_SET_ABLE_DICE_TYPE,data:number};

export const generateActionSetAbleDiceType = (data:number):typeActionSetAbleDiceType=>{
    return {
        type:ACTION_SET_ABLE_DICE_TYPE,
        data
    }
}

export const ACTION_SET_BONUS_SCORE = "ACTION_SET_BONUS_SCORE";
export type typeActionSetBonusScore = {type:typeof ACTION_SET_BONUS_SCORE,data:number};

export const generateActionSetBonusScore = (data:number):typeActionSetBonusScore=>{
    return {
        type:ACTION_SET_BONUS_SCORE,
        data
    }
}

export const ACTION_RETRY_GAME = "ACTION_RETRY_GAME";
export type typeActionRetryGame = {type:typeof ACTION_RETRY_GAME};

export const generateActionRetryGame = ():typeActionRetryGame=>{
    return {
        type:ACTION_RETRY_GAME,
    }
}

export type ActionType =
    typeActionSetRound |
    typeActionClickRoll |
    typeActionSetRollCount |
    typeActionClickRecord |
    typeActionSetCurrentCount |
    typeActionSetDicesLock |
    typeActionSetCurrentDiceType|
    typeActionSetAbleDiceType|
    typeActionSetBonusScore|
    typeActionRetryGame;

