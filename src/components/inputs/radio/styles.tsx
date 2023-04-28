import styled from 'styled-components'


export const RadioDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    margin: 1rem 0 0 0;
    width: 100%;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    padding: 0.25rem;
    border-radius: 0.5rem;
    transition: all 0.15s ease;
    box-sizing: inherit;
    background-color: ${props => props.$theme === 'light' ? '#ccdf88' : '#526317'};
    color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'};
    font-weight: 100;
    outline: ${props => props.$theme === 'light' ? '#afc36a solid 1px' : '#404d12 solid 1px'};

    @media screen and (max-width:720px) {
        font-weight: 400;
        padding: 0.25rem;
    }
`

export const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  width: 100%;
  transition: all 0.25s ease;
`

export const RadioOption = styled.input.attrs(props => (
    {
        type : 'radio',
        value : props.name,
        name : props.$name
    }
))`
  opacity: 0;
  position: absolute;
  pointer-events: none;

  &:checked + ${RadioLabel} {
    color: white;
    background: ${props => props.$theme === 'light' ? 'rgb(157, 175, 88)' : 'rgb(113, 130, 37)'};
  }
`