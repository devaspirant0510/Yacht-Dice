import {createContext, Dispatch, FC, ReactNode, useReducer} from "react";
import {myReducer} from "./reducer";
import {initialState, YachtDiceState} from "./state";
import {ActionType} from "./action";

export const MyContext = createContext<YachtDiceState|null>(null);

export type YachtDispatch = Dispatch<ActionType>

export const MyDispatch = createContext<YachtDispatch|null>(null);

interface Props{
    children:ReactNode
}
export const MyProvider:FC<Props> = ({children})=>{
    const [state,dispatch] = useReducer(myReducer,initialState)
    return(
        <MyContext.Provider value={state}>
            <MyDispatch.Provider value={dispatch}>
                {children}
            </MyDispatch.Provider>
        </MyContext.Provider>
    )
}