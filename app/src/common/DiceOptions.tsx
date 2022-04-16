export enum DiceOptions {
    Aces,
    Tows,
    Threes,
    Fours,
    Fives,
    Sixes,
    Choice,
    FourOfAKind,
    FullHouse,
    SmallStraight,
    LargeStraight,
    Yacht,
}

export const diceOperations = (diceType: DiceOptions, dices: number[]) => {
    const diceValidation = checkDiceValidations(dices);
    if (diceValidation) {
        switch (diceType) {
            case DiceOptions.Aces:
                return operationBaseScore(1, dices);
            case DiceOptions.Tows:
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
                return 0;
            case DiceOptions.FourOfAKind:
                return 4;
            case DiceOptions.FullHouse:
                return 4;
            case DiceOptions.SmallStraight:
                return 4;
            case DiceOptions.LargeStraight:
                return 4;
            case DiceOptions.Yacht:
                return 5;
            default:
                return 0;
        }
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
const operationBaseScore = (diceNumber:number,dices: number[]):number => {
    const filterDices = dices.filter(v => v === diceNumber)
    return filterDices.reduce((a, b) => a + b, 0)
}
const operationChoice = (dices: number[]):number => {
    const filterDices = dices.reduce((a, b) => a + b, 0)
    return filterDices;
}
const operationFourOfAKind = (dices: number[]):number => {
    const diceCount=[0,0,0,0,0,0]
    dices.map((v,index)=>{
        diceCount[v-1] +=1;
    })
    diceCount.map((v,index)=>{
        if(v===4){
            return dices.filter(v=>v===index+1).reduce((a,b)=>a+b,0);
        }
    });
    return 0
}
