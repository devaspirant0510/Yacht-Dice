import React from "react"
import {CssModal} from "./styles"
import ModalLayout from "../../layout/ModalLayout";
import styled from "styled-components";

const AB = styled.button`
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
  background: #f3f;
`
const CA = styled(AB)`
  box-shadow: 0px 5px 0px 0px #007144;
  &:hover{
    box-shadow: 0px 0px 0px 0px #007144;
  }
`
const GameOverModal = () => {
    return (
        <ModalLayout>
            <div style={{backgroundColor:"#fff",padding:"100px",marginBottom:300}}>
                <h1>게임종료</h1>
                <button>다시</button>

            </div>
        </ModalLayout>
    )
}
export default GameOverModal;