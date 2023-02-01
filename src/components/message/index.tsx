import styled from "styled-components"
import { Message } from "../../interfaces/message"


interface InputStyleProps {
  selected: boolean
}

interface MessagePropsT {
  setSelItem: any
  item: Message
  selectedMessage: boolean
  setSelectedMessage: any
  index: number
}

const MessageItem = ({ setSelItem, item, selectedMessage, setSelectedMessage, index }: MessagePropsT) => {
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
  const handleClick = (e: any, item: Message) => {
    e.preventDefault()
    setSelectedMessage(!selectedMessage)
    setSelItem(item, index)
  }


  return (<StyledMessage selected={item.selected} onClick={(e) => handleClick(e, item)}>{item.message}</StyledMessage>)

}

export default MessageItem
