import styled from "styled-components"
import StyledButton from "../button";
import MessageContainer from "../MessageContainer";
import { CiUndo } from 'react-icons/ci';
import AddMessage from "../modal";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
const Container = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Array<string>>([])
  const [selItem, setSelItem] = useState<Array<string>>([])
  const [messageKey, setMessageKey] = useState(nanoid())

  useEffect(() => {
    console.log(localStorage.getItem('messages'))
    // setMessages(JSON.parse(localStorage.getItem('messages') ?? ''))
  }, [])

  useEffect(() => {
    console.log('entra')
    localStorage.setItem('messages', JSON.stringify(messages))
  }, [messages])
  
  

  const selectItems = (item: string) => {
    setSelItem(oldItems => [...oldItems, item])
  }


  const handleSave = (data: string) => {
    if (data !== '') {
      setMessages(oldMessages => [...oldMessages, data])
      setOpen(false)
    }
  }

  const handleDelete = () => {
    selItem.forEach(data => {
      const index = messages.indexOf(data)
      if (index !== -1) {
        messages.splice(index, 1)
      }
    })
    setMessageKey(nanoid())
  }

  const handleUndo = () => {

  }

  const StyledParent = styled.div`
    display: grid;
    place-items: center;
  `;

  const StyledContainer = styled.div`
    width: 900px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0 5px 12px #0000001F;
    border-radius: 20px;
    opacity: 1;
    padding: 50px;
  `;

  const StyledTitle = styled.h1`
    text-align: center;
    color: #333333;
    letter-spacing: 0;
    opacity: 1;
    font-size: 40px;
    font-family: 'Montserrat';
    font-weight: 500;
  `;

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
console.log(selItem)
  return (
    <StyledParent>
      <StyledContainer>
        <StyledTitle>This is a technical proof</StyledTitle>
        <StyledDescription>Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc, hendrerit posuere augue fames dictumst placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.</StyledDescription>
        <MessageContainer key={messageKey} setSelItem={selectItems} messages={messages} />
        <StyledButtonContainer>
          <StyledButton handleClick={() => handleUndo} content={<CiUndo />} transparent></StyledButton>
          <StyledButton handleClick={() => handleDelete()} content='delete'></StyledButton>
          <StyledButton handleClick={() => setOpen(true)} content='add'></StyledButton>
        </StyledButtonContainer>
      </StyledContainer>
      <AddMessage key={nanoid()} open={open} setOpen={setOpen} handleSave={handleSave} />
    </StyledParent>
  )
}

export default Container
