import {randomRangeInt} from "../util/randomAPI";
import {bonusDicesList, diceOperations, DiceOptions} from "../common/DiceOptions";

const makeRandomDice = (dices: number[], locks: boolean[]): number[] => {
    return locks.map((v, index) => {
        if (locks[index]) {
            return dices[index];
        } else {
            return randomRangeInt(1, 6)
        }
    });
}
const getDicesScore = (dices: number[], diceType?: DiceOptions): number => {
    if (diceType) {
        return diceOperations(diceType, dices)
    }
    return 0;
}
export const existBonusScoreDice = (diceType:DiceOptions):boolean=>{
    if(bonusDicesList.find(v=>v===diceType)){
        return true;
    }else{
        return false;
    }
}

export const convertDiceTypeToNumber = (diceType: DiceOptions) => {
    switch (diceType) {
        case DiceOptions.Aces:
            return 0;
        case DiceOptions.Twos:
            return 1;
        case DiceOptions.Threes:
            return 2;
        case DiceOptions.Fours:
            return 3;
        case DiceOptions.Fives:
            return 4;
        case DiceOptions.Sixes:
            return 5;
        case DiceOptions.Choice:
            return 6;
        case DiceOptions.FourOfAKind:
            return 7;
        case DiceOptions.FullHouse:
            return 8;
        case DiceOptions.SmallStraight:
            return 9;
        case DiceOptions.LargeStraight:
            return 10;
        case DiceOptions.Yacht:
            return 11;
        default:
            return 0;
    }
}

export default {
    makeRandomDice,
    getDicesScore,
    existBonusScoreDice
}