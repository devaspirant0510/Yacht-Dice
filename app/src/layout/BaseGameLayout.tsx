import React, {FC, ReactNode} from "react";
import styled from "styled-components";

const RootWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`
const BlankWrapper = styled.div`
  width: 300px;
  flex-shrink: 1;
`
const ContentWrapper = styled.div`
  flex-shrink: 0;
`

interface Props {
    children: ReactNode
}

const BaseGameLayout: FC<Props> = ({children}: Props) => {
    return (
        <RootWrapper>
            <BlankWrapper/>
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <BlankWrapper/>
        </RootWrapper>
    )
}
export default BaseGameLayout;