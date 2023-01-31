import styled from "styled-components"
import { nanoid } from "nanoid";
import Message from "../message";
import { useState } from "react";

interface MessageContainerPropsT {
  messages: Array<string>
  setSelItem: any
  deleteMessage: any
}

const MessageContainer = ({ messages, setSelItem, deleteMessage }: MessageContainerPropsT) => {
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
        {messages.map((message, index) => <Message handleDoubleClickDelete={deleteMessage} setSelectedMessage={setSelectedMessage} key={index} message={message} setSelItem={setSelItem} selectedMessage={selectedMessage ?? false} />)}
      </StyledContainer>
    </div>
  )
}

export default MessageContainer
