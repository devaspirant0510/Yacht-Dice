import {useContext} from "react";
import {MyContext, MyDispatch, YachtDispatch} from "../context/provider";
import {YachtDiceState} from "../context/state";

export const useYachtState = (): YachtDiceState => {
    const state = useContext(MyContext);
    if (!state) {
        throw new Error("context not found");
    }
    return state
}

export const useYachtDispatch = ():YachtDispatch=>{
    const dispatch = useContext(MyDispatch);
    if(!dispatch){
        throw new Error("context not found")
    }
    return dispatch;
}