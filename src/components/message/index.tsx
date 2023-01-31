import { useState } from "react"
import styled from "styled-components"


interface InputStyleProps {
  selected: boolean
}

interface MessagePropsT {
  setSelItem: any
  message: string
}

const Message = ({ setSelItem, message }: MessagePropsT) => {
  const [selectedMessage, setSelectedMessage] = useState(false)

  const StyledMessage = styled.div<InputStyleProps>`
    background: ${props => props.selected ? '#324BFF 0% 0% no-repeat padding-box' : '#F7F7F7 0% 0% no-repeat padding-box'};
    color: ${props => props.selected ? '#FFF' : '#333333'};
    font-size: 18px;
    font-family: 'Montserrat';
    font-weight: normal;
    padding: 9px 15px;
    cursor: pointer;
    &:hover {
      background: #324BFF 0% 0% no-repeat padding-box;
      color: #FFF;
      transition: ease-in-out 0.3s background;
    }
  `
  const handleSelected = (data: string) => {
    setSelItem(data)
    setSelectedMessage(true)
  }

  console.log(selectedMessage)

  return (<StyledMessage selected={selectedMessage} onClick={() => handleSelected(message)}>{message}</StyledMessage>)

}

export default Message
