import styled from "styled-components"

export const DicesStyle = styled.div`
  display: flex;
  border: 6px solid black;
  border-radius: 20px;
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #ec3309;
  font-size: 30px;
  font-weight: 1200;
  margin: 8px 4px;
`
export const DicesLockStyle = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 12px;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
`
export const DiceScoreWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  height: 65px;
  border-radius: 8px;
  margin: 10px;

`

export const DefaultWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  background: #ffffff;
`

export const AbleWrapper = styled.div`
  background: #33ff36;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

export const DisableWrapper = styled.div`
  background: #989898;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

export const MainTitle = styled.div`
  text-align: center;
  font-size: 30px;
`
export const RightTitle = styled.div`
  text-align: end;
  font-size: 22px;
  margin-right: 15px;
`

export const ScoreBoardWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  background: rgba(172, 170, 170, 0.34);
  padding: 20px;
`

const BaseButtonStyle = styled.button`
  display: block;
  position: relative;
  float: left;
  width: 120px;
  padding: 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: #fff;
  border-radius: 5px;
  border:0;
  transition: all 0.2s;
`
export const RollButton = styled(BaseButtonStyle)`
  background: #ec3309;
  box-shadow: 0 5px 0 0 #bd2604;

  &:active {
    box-shadow: 0 0 0 0 #bd2604;
  }
`

export const RecordButton = styled(BaseButtonStyle)`
  background: #0092fa;
  box-shadow: 0 5px 0 0 #044778;
  &:active{
    box-shadow: 0 0 0 0 #044778;
  }


`

export const DicesWrapper = styled.div`
  padding: 16px;
  border: 1px solid black;
  background: rgba(229, 237, 121, 0.77);

`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
