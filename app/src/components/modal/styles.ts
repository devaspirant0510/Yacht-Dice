import styled from "styled-components";

export const CssModal = styled.div`
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */
`

export const ModalRootWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const ModalBlankWrapper = styled.div`
  width: 300px;
  flex-shrink: 1;
`
export const ModalContentWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
`