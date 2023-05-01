import styled from 'styled-components'

export const InputDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const Phone = styled.div`
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    margin: 1rem 0.25rem 0rem 0;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    padding: 0.5rem;
    border-radius: 0.2rem;
    transition: all 0.15s ease;
    box-sizing: inherit;
    color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'};
    font-weight: 100;
    background-color: ${props => props.$theme === 'light' ? 'transparent' : 'transparent'};
    outline: ${props => props.$theme === 'light' ? '#b9b9b9 solid 0.1rem'  : '#555555 solid 1px' };

    @media screen and (max-width:720px) {
        font-weight: 400;
        padding: 0.75rem;
    }
`

export const Input = styled.input.attrs(props => (
    {
        type : props.$type,
        placeholder : props.$placeholder,
    }
))`
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    margin: 1rem 0 0 0;
    width: 100%;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    padding: 0.5rem;
    border-radius: 0.2rem;
    transition: all 0.15s ease;
    box-sizing: inherit;
    color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'};
    font-weight: 100;
    background-color: ${props => props.$theme === 'light' ? `${props.$isValid ? 'transparent' : '#fff0f0'} ` : `${props.$isValid ? 'transparent' : '#1f1414'} `};
    outline: ${props => props.$theme === 'light' ? `${props.$isValid ? '#b9b9b9 solid 0.1rem' : '#ff0000 solid 1px'} ` : `${props.$isValid ? '#555555 solid 1px' : 'red solid 1px'} `};

    &:focus{
        outline: ${props => props.$theme === 'light' ? `${props.$isValid ? '#97b42e solid 2px' : '#ff0000 solid 1px'} ` : `${props.$isValid ? '#97b42e solid 1px' : 'red solid 1px'} `};
    }

    &::placeholder{
        color: #999999;
        font-weight: 200;
    }

    @media screen and (max-width:720px) {
        font-weight: 400;
        padding: 0.75rem;
    }
`