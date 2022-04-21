import {DiceOptions} from "../common/DiceOptions";
import {defaultValue} from "../util/constant";

export interface YachtDiceState{
    round:number,
    totalScore:number,
    Aces:number|boolean,
    Twos:number|boolean,
    Threes:number|boolean,
    Fours:number|boolean,
    Fives:number|boolean,
    Sixes:number|boolean,
    Choice:number|boolean,
    FourOfAKind:number|boolean,
    FullHouse:number|boolean,
    SmallStraight:number|boolean,
    LargeStraight:number|boolean,
    Yacht:number|boolean,
    bonusScore:number,
    currentScore:number
    rollCount:number,
    dices:number[],
    dicesLock:boolean[],
    currentSelectDiceType?:DiceOptions,
    ableDiceTypes:boolean[],
    isGameEnd:boolean,
    plusStateScore?:number

}
export const initialState:YachtDiceState = {
    Aces: 0,
    Choice: 0,
    Fives: 0,
    FourOfAKind: 0,
    Fours: 0,
    FullHouse: 0,
    LargeStraight: 0,
    Sixes: 0,
    SmallStraight: 0,
    Threes: 0,
    Twos: 0,
    Yacht: 0,
    bonusScore: 0,
    dices: [0,0,0,0,0],
    rollCount: 3,
    round: 1,
    totalScore: 0,
    currentScore: 0,
    dicesLock:defaultValue.defaultLocks,
    currentSelectDiceType:undefined,
    ableDiceTypes:defaultValue.defaultAbleDiceTypes,
    isGameEnd:false,
    plusStateScore:undefined
}