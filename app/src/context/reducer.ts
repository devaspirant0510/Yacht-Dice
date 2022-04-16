import {YachtDiceState} from "./state";
import {ActionType} from "./action";

export const myReducer = (state:YachtDiceState,action:ActionType):YachtDiceState=>{
    switch (action.type){
        case "ACTION_SET_ROUND":
            return {
                ...state,
                round:action.data
            }
    }

}