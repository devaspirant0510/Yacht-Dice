import React, {FC, useCallback} from "react"
import ModalLayout from "../../layout/ModalLayout";
import {UndoOutlined} from "@ant-design/icons"
import {useYachtDispatch, useYachtState} from "../../hooks/ContextHooks";
import {ACTION_RETRY_GAME} from "../../context/action";

interface Props{
    setValue:(value:boolean)=>void
}
const GameOverModal:FC<Props> = ({setValue}:Props) => {
    const {totalScore} = useYachtState();
    const dispatch = useYachtDispatch();
    const onClickRetryButton = useCallback(()=>{
        dispatch({type:ACTION_RETRY_GAME})
        setValue(false);
    },[])
    return (
        <ModalLayout>
            <div>
                <div style={{backgroundColor:"#fff",padding:"100px",marginBottom:300}}>
                    <div style={{textAlign:"center"}}>
                        <h1>게임종료</h1>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <h2>최종 스코어 : {totalScore} 점</h2>
                    </div>
                    <div style={{textAlign:"center"}} onClick={onClickRetryButton}>
                        <UndoOutlined style={{fontSize:35,color:"#019c04",fontWeight:1000}}/>
                        <div>다시하기</div>
                    </div>

                </div>
            </div>
        </ModalLayout>
    )
}
export default GameOverModal;