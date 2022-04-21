import React, {FC, useEffect} from "react";
import {AlertWrapper} from "./styles"

interface Props{
    alertSetState:(value:boolean)=>void
    messageSetState:(value:string)=>void,
    message:string

}
const Alert:FC<Props> = ({messageSetState,alertSetState,message})=>{
    useEffect(()=>{
        const timer = setTimeout(()=>{
            alertSetState(false)
            messageSetState("");
        },2000)
        return ()=>{
            clearTimeout(timer)
        }
    })
    return (
        <AlertWrapper>
            {message}
        </AlertWrapper>
    )
}
export default Alert;