import styled from "styled-components"


interface InputStyleProps {
  selected: boolean
}

interface MessagePropsT {
  setSelItem: any
  message: string
  selectedMessage: boolean
  setSelectedMessage: any
  handleDoubleClickDelete: any
}

const Message = ({ setSelItem, message, selectedMessage, setSelectedMessage, handleDoubleClickDelete }: MessagePropsT) => {
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
  const handleClick = (message: string) => {
    setSelectedMessage(true)
    setSelItem(message)
  }


  return (<div onDoubleClick={() => handleDoubleClickDelete(message)}><StyledMessage selected={selectedMessage} onClick={() => handleClick(message)}>{message}</StyledMessage></div>)

}

export default Message
