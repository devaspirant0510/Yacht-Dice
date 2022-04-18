import styled from "styled-components"

export const DicesStyle = styled.div`
  display: flex;
  border: 6px solid black;
  border-radius: 20px;
  width: 70px;
  height: 70px;
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
  height: 75px;
  border-radius: 12px;
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
  font-size: 18px;
  margin-right: 15px;
`

export const ScoreBoardWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  background: rgba(172, 170, 170, 0.34);
  padding: 20px;
`

export const RollButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`

export const RecordButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #00ddfa;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    background-color: #00ddfa;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #0092fa;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }

`

export const DicesWrapper = styled.div`
  padding: 20px;
  border: 1px solid black;
  background: rgba(229, 237, 121, 0.77);

`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`