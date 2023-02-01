import styled from "styled-components"
import { nanoid } from "nanoid";
import { useState } from "react";
import { Message } from "../../interfaces/message";
import MessageItem from "../message";

interface MessageContainerPropsT {
  messages: Array<Message>
  setSelItem: any
}

const MessageContainer = ({ messages, setSelItem }: MessageContainerPropsT) => {
  const [selectedMessage, setSelectedMessage] = useState()
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
        {messages.map((message, index) => <MessageItem key={index} index={index} setSelectedMessage={setSelectedMessage} item={message} setSelItem={setSelItem} selectedMessage={selectedMessage ?? false} />)}
      </StyledContainer>
    </div>
  )
}

export default MessageContainer
