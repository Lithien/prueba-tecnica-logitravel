import { useState } from "react"
import styled from "styled-components"
import StyledButton from "../button"

interface AddMessagePropsT {
  open: boolean
  setOpen: any
  handleSave: any
}
const AddMessage = ({ open, setOpen, handleSave }: AddMessagePropsT) => {
  const [message, setMessage] = useState<string>('')

  const StyledContainer = styled.div`
    background: #0000001A 0% 0% no-repeat padding-box;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  `
  const StyledModal = styled.div`
    width: 700px;
    padding: 50px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 24px #0000001F;
    border-radius: 20px;
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -147.5px;
    margin-left: -400px;
    &::backdrop {
      background: #0000001A 0% 0% no-repeat padding-box;
    }
  `
  const StyledTitle = styled.span`
    text-align: left;
    font: normal normal normal 18px/26px 'Montserrat';
    letter-spacing: 0px;
    color: #333333;
    opacity: 1;
    display: block;
    margin-bottom: 20px;
  `
  const StyledInput = styled.input`
    background: #F7F7F7 0% 0% no-repeat padding-box;
    border: 1px solid #CCCCCC;
    text-align: left;
    font: normal normal normal 18px/26px 'Montserrat';
    letter-spacing: 0px;
    color: #999999;
    opacity: 1;
    padding: 19px 0 19px 21px;
    width: 97%;
    margin-bottom: 25px;
  `
  const StyledButtonContainer = styled.div`
    text-align: right;
    button {
      margin-left: 15px;
    }
  `
  return (
    open ?
      (
        <StyledContainer>
          <StyledModal>
            <StyledTitle>Add item to list</StyledTitle>
            <StyledInput autoFocus type='text' value={message} placeholder="Type the text here..." onChange={(e) => setMessage(e.target.value)} />
            <StyledButtonContainer>
              <StyledButton handleClick={() => handleSave(message)} content='add' disabled={message === ''} />
              <StyledButton handleClick={() => setOpen(false)} content='cancel' transparent />
            </StyledButtonContainer>
          </StyledModal>
        </StyledContainer>
      ) : <></>
  )
}

export default AddMessage
