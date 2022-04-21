import {diceOperations, DiceOptions} from "./DiceOptions"

describe("Dice operation",()=>{
    test("배열사이즈가 5가 아닐때 1",()=>{
        expect(()=>diceOperations(DiceOptions.Aces, [2,3,4,5])).toThrow("dices length must be 5")
    });
    test("배열사이즈가 5가 아닐때 2",()=>{
        expect(()=>diceOperations(DiceOptions.Aces, [2,3,4,5,3,5])).toThrow("dices length must be 5")
    });
    test("1미만 6초과를 입력할시",()=>{
        expect(()=>diceOperations(DiceOptions.Aces, [-3,7,1,1,1,])).toThrow("dices must be between 0 and 6")
    });
    test("Ace testCode 1",()=>{
        expect(diceOperations(DiceOptions.Aces, [1,2,1,1,6])).toBe(3)
    });
    test("Threes testCode",()=>{
        expect(diceOperations(DiceOptions.Threes,[3,3,3,3,4])).toBe(12)
    })
    test("Choice testCode",()=>{
        expect(diceOperations(DiceOptions.Choice, [1,6,1,6,1])).toBe(15)
    })
    test("FourOfAKind testCode1",()=>{
        expect(diceOperations(DiceOptions.FourOfAKind,[3,3,3,3,3] )).toBe(15)
    })
    test("FourOfAKind testCode2",()=>{
        expect(diceOperations(DiceOptions.FourOfAKind,[5,5,6,5,5] )).toBe(26)
    })
    test("FourOfAKind testCode3",()=>{
        expect(diceOperations(DiceOptions.FourOfAKind,[5,6,6,5,5] )).toBe(0)
    })
    test("FullHouse testCode 1",()=>{
        expect(diceOperations(DiceOptions.FullHouse, [1,1,2,2,1])).toBe(25)
    })
    test("FullHouse testCode 1",()=>{
        expect(diceOperations(DiceOptions.FullHouse, [1,2,2,2,5])).toBe(0)
    })
    test("S-straight testcode 1",()=>{
        expect(diceOperations(DiceOptions.SmallStraight, [4,1,5,2,6])).toBe(0)
    })
    test("S-straight testcode 2",()=>{
        expect(diceOperations(DiceOptions.SmallStraight, [4,1,3,2,6])).toBe(30)
    })
    test("L-straight testcode 1",()=>{
        expect(diceOperations(DiceOptions.LargeStraight, [4,1,3,2,5])).toBe(40)
    })
    test("L-straight testcode 2",()=>{
        expect(diceOperations(DiceOptions.LargeStraight, [4,1,3,2,6])).toBe(0)
    })
    test("yacht",()=>{
        expect(diceOperations(DiceOptions.Yacht, [6,6,6,6,6])).toBe(50)
    })
})