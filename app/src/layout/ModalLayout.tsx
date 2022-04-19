import React, {ReactNode,FC} from "react";
import {CssModal,ModalBlankWrapper,ModalContentWrapper,ModalRootWrapper} from "../components/modal/styles"

interface Props{
    children:ReactNode
}

const ModalLayout:FC<Props> =({children}:Props)=>{
    return (
        <CssModal>
            <ModalRootWrapper>
                <ModalBlankWrapper/>
                <ModalContentWrapper>
                    {children}
                </ModalContentWrapper>
                <ModalBlankWrapper/>
            </ModalRootWrapper>
        </CssModal>
    )
}

export default ModalLayout;