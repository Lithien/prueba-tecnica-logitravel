import styled from "styled-components"
import StyledButton from "../button";
import MessageContainer from "../MessageContainer";
import { ImUndo } from 'react-icons/im';
import AddMessage from "../modal";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Message } from "../../interfaces/message";

const Container = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Array<Message>>([])
  const [selItems, setSelItems] = useState<Array<Message>>([])
  const [deletedItems, setDeletedItems] = useState<Array<Message>>([])
  const [messageKey, setMessageKey] = useState(nanoid())

  const isInArray = (item: Message) => selItems.some(message => message.id === item.id)

  const selectItems = (item: Message, index: number) => {
    const message: Message = { message: item.message, selected: !item.selected, id: item.id }
    if (message.selected && !isInArray(item)) {
      setSelItems(oldItems => [...oldItems, message])
    } else {
      selItems.splice(index, 1)
    }
    let newMessages = [...messages]
    newMessages[index] = message
    setMessages(newMessages)
  }

  const handleSave = (data: string) => {
    if (data !== '') {
      setMessages(oldMessages => [...oldMessages, { message: data, selected: false, id: nanoid() }])
      setOpen(false)
    }
  }

  const handleDelete = () => {
    selItems.forEach(data => {
      const index = messages.indexOf(data)
      setDeletedItems(oldDeleted => [...oldDeleted, { message: data.message, id: data.id, selected: !data.selected }])
      if (index !== -1) {
        messages.splice(index, 1)
      }
    })
    setSelItems([])
    setMessageKey(nanoid())
  }

  const handleUndo = (e: any) => {
    e.stopPropagation()
    setMessages([...messages, ...deletedItems])
    setDeletedItems([])
  }

  const StyledBackground = styled.div`
    background: transparent linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%) 0% 0% no-repeat padding-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `

  const StyledContainer = styled.div`
    width: 900px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0 5px 12px #0000001F;
    border-radius: 20px;
    opacity: 1;
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -500px;
    margin-top: -312.5px;
  `
  const StyledTitle = styled.h1`
    text-align: center;
    color: #333333;
    letter-spacing: 0;
    opacity: 1;
    font-size: 40px;
    font-family: 'Montserrat';
    font-weight: 500;
  `
  const StyledDescription = styled.div`
    text-align: center;
    color: #333333;
    font-size: 18px;
    font-family: 'Montserrat';
  `
  const StyledButtonContainer = styled.div`
    width: 100%;
    button {
      margin-right: 15px;
    }
    button:last-child {
      float: right;
      margin: 0;
    }
  `
  return (
    <StyledBackground>
      <StyledContainer>
        <StyledTitle>This is a technical proof</StyledTitle>
        <StyledDescription>Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc, hendrerit posuere augue fames dictumst placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.</StyledDescription>
        <MessageContainer key={messageKey} setSelItem={selectItems} messages={messages} />
        <StyledButtonContainer>
          <StyledButton handleClick={(e: any) => handleUndo(e)} content={<ImUndo />} disabled={deletedItems.length === 0} transparent></StyledButton>
          <StyledButton handleClick={() => handleDelete()} content='delete' disabled={selItems.length === 0}></StyledButton>
          <StyledButton handleClick={() => setOpen(true)} content='add'></StyledButton>
        </StyledButtonContainer>
      </StyledContainer>
      <AddMessage key={nanoid()} open={open} setOpen={setOpen} handleSave={handleSave} />
    </StyledBackground>
  )
}

export default Container
