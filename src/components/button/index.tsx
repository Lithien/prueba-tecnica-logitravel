import styled from 'styled-components'

interface StyledButtonPropsT {
  content: string | any
  transparent?: boolean
  handleClick: any
}

interface StyledButtonT {
  transparent?: boolean
}

const StyledButton = ({ content, transparent, handleClick }: StyledButtonPropsT) => {
  const StyledButtons = styled.button<StyledButtonT>`
    background: ${props => props.transparent ? '#FFF' : '#324BFF 0% 0% no-repeat padding-box'};
    color: ${props => !props.transparent ? '#FFF' : '#324BFF'};
    border: 1px solid #324BFF;
    border-radius: 50px;
    text-align: center;
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    padding: 15px 30px;
    min-width: 125px;
    cursor: pointer;
  `
  return (<StyledButtons transparent={transparent} onClick={handleClick}>{content}</StyledButtons>)
}

export default StyledButton