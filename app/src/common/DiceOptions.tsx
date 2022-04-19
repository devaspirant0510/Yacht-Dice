import {gameScoreValue} from "../util/constant"

export enum DiceOptions {
    Aces="Aces",
    Twos="Tows",
    Threes="Threes",
    Fours="Fours",
    Fives="Fives",
    Sixes="Sixes",
    Choice="Choice",
    FourOfAKind="FourOfAKind",
    FullHouse="FUllHouse",
    SmallStraight="SmallStraight",
    LargeStraight="LargeStraight",
    Yacht="Yacht",
}

export const bonusDicesList = [
    DiceOptions.Aces,
    DiceOptions.Twos,
    DiceOptions.Threes,
    DiceOptions.Fours,
    DiceOptions.Fives,
    DiceOptions.Sixes
]
export const dicesOptionsDescription = [
    "1이 나온 주사위 눈의 합",
    "2가 나온 주사위 눈의 합",
    "3이 나온 주사위 눈의 합",
    "4가 나온 주사위 눈의 합",
    "5가 나온 주사위 눈의 합",
    "6이 나온 주사위 눈의 합",
    "주사위 5개의 총합",
    "주사위 4개가 동일할때 주사위 5개의 총합",
    "동일한 주사위가 각각 3개 2개 있을시 25점",
    "주사위 4개가 이어지는 수일때 30점",
    "주사위 5개가 이어지는 수일때 40점",
    "주사위 5개가 모두 같을때 50점"
]

export const diceOperations = (diceType: DiceOptions, dices: number[]): number => {
    const diceValidation = checkDiceValidations(dices);
    if (!diceValidation) {
        throw new Error("dice is not validate")
    }
    switch (diceType) {
        case DiceOptions.Aces:
            return operationBaseScore(1, dices);
        case DiceOptions.Twos:
            return operationBaseScore(2, dices);
        case DiceOptions.Threes:
            return operationBaseScore(3, dices);
        case DiceOptions.Fours:
            return operationBaseScore(4, dices);
        case DiceOptions.Fives:
            return operationBaseScore(5, dices);
        case DiceOptions.Sixes:
            return operationBaseScore(6, dices);
        case DiceOptions.Choice:
            return operationChoice(dices);
        case DiceOptions.FourOfAKind:
            return operationFourOfAKind(dices);
        case DiceOptions.FullHouse:
            return operationFullHouse(dices);
        case DiceOptions.SmallStraight:
            return operationSmallStraight(dices)
        case DiceOptions.LargeStraight:
            return operationLargeStraight(dices)
        case DiceOptions.Yacht:
            return operationYacht(dices);
        default:
            return 0;
    }
}
const checkDiceValidations = (dices: number[]): boolean => {
    if (dices.length !== 5) {
        throw new Error("dices length must be 5");
    }
    dices.map(v => {
        if (v < 0 || v > 6) {
            throw new Error("dices must be between 0 and 6");
        }
    })
    return true
}
const operationBaseScore = (diceNumber: number, dices: number[]): number => {
    const filterDices = dices.filter(v => v === diceNumber)
    return filterDices.reduce((a, b) => a + b, 0)
}
const operationChoice = (dices: number[]): number => {
    const filterDices = dices.reduce((a, b) => a + b, 0)
    return filterDices;
}
const operationFourOfAKind = (dices: number[]): number => {
    for (let i = 0; i < dices.length; i++) {
        console.log(dices.filter(v=>v===dices[i]))
        if (dices.filter(v => v === dices[i]).length === 4) {
            return dices.reduce((a, b) => a + b)
        }
    }
    return 0
}
const operationFullHouse = (dices: number[]): number => {
    if(dices[0]===0){
        return 0;
    }
    const setDices:number[] = []
    dices.map(v=>{
        if(!setDices.includes(v)){
            setDices.push(v)
        }
    })
    if(setDices.length===1){
        return 0
    }
    console.log("setDices",setDices)
    if(setDices.length===2){
        console.log(dices.filter(v=>v===setDices[0]))
        console.log(dices.filter(v=>v===setDices[1]))
        if(dices.filter(v=>v===setDices[0]).length===3 || dices.filter(v=>v===setDices[0]).length===2){
            return gameScoreValue.fullHouseScore
        }else{
            return 0
        }
    }
    return 0;
}
const operationSmallStraight = (dices: number[]): number => {
    const copyDices = [...dices]
    copyDices.sort()
    let straightVal = 0
    for (let i = 0; i < copyDices.length - 1; i++) {
        if (copyDices[i + 1] - copyDices[i] === 1) {
            straightVal++;
        }
    }
    if (straightVal > 2) {
        return gameScoreValue.smallStraight;
    }
    return 0;
}
const operationLargeStraight = (dices: number[]): number => {
    const copyDices = [...dices]
    copyDices.sort()
    for (let i = 0; i < dices.length - 1; i++) {
        if (copyDices[i + 1] - copyDices[i] !== 1) {
            return 0;
        }
    }
    return gameScoreValue.largeStraight;
}
const operationYacht = (dices: number[]): number => {
    if(dices[0]===0){
        return 0;
    }
    if (dices.filter(v => v === dices[0]).length === 5) {
        return gameScoreValue.yacht;
    } else {
        return 0;
    }
}
