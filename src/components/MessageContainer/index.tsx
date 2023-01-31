import styled from "styled-components"
import { nanoid } from "nanoid";
import Message from "../message";

interface MessageContainerPropsT {
  messages: Array<string>
  setSelItem: any
}

const MessageContainer = ({ messages, setSelItem }: MessageContainerPropsT) => {
  const StyledContainer = styled.div`
    background: #F7F7F7 0% 0% no-repeat padding-box;
    border: 1px solid #CCCCCC;
    height: 230px;
    margin-top: 35px;
    margin-bottom: 30px;
    padding: 5px 11px;
    overflow: auto;
  `

  return (
    <div>
      <StyledContainer>
        {messages.map(message => <Message message={message} setSelItem={setSelItem} />)}
      </StyledContainer>
    </div>
  )
}

export default MessageContainer
