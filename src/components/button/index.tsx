import styled from 'styled-components'

interface StyledButtonPropsT {
  content: string | any
  transparent?: boolean
  disabled?: boolean
  handleClick: any
}

interface StyledButtonT {
  transparent?: boolean
  disabledStyle?: boolean
}

const StyledButton = ({ content, transparent, disabled, handleClick }: StyledButtonPropsT) => {
  const StyledButtons = styled.button<StyledButtonT>`
    background: ${props => props.disabledStyle ? '#324bff7a' : props.transparent ? '#FFF' : '#324BFF 0% 0% no-repeat padding-box'};
    color: ${props => props.disabledStyle ? '#FFF' : !props.transparent ? '#FFF' : '#324BFF'};
    border: 1px solid #324BFF;
    border-radius: 50px;
    text-align: center;
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    padding: 15px 30px;
    min-width: 125px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  `
  return (<StyledButtons disabled={disabled} disabledStyle={disabled} transparent={transparent} onClick={handleClick}>{content}</StyledButtons>)
}

export default StyledButton
