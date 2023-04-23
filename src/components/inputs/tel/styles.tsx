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
    margin: 1rem 0.5rem 0rem 0;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.15s ease;
    box-sizing: inherit;
    background-color: ${props => props.$theme === 'light' ? '#ccdf88' : '#526317'};
    /* color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'}; */
    font-weight: 100;
    outline: ${props => props.$theme === 'light' ? '#afc36a solid 1px' : '#404d12 solid 1px'};
    color: #999999;

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
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.15s ease;
    box-sizing: inherit;
    background-color: ${props => props.$theme === 'light' ? `${props.$isValid ? '#ccdf88' : '#dfd188'} ` : `${props.$isValid ? '#526317' : '#635e17'} `};
    color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'};
    font-weight: 100;
    outline: ${props => props.$theme === 'light' ? `${props.$isValid ? '#afc36a solid 1px' : '#ff0000 solid 1px'} ` : `${props.$isValid ? '#404d12 solid 1px' : '#fa6c2a solid 1px'} `};

    &:active{
        outline: ${props => props.$theme === 'light' ? '#afc36a solid 1px' : '#404d12 solid 1px'};
        border: none;
    }

    &:focus{
        box-shadow: 0 0 5px 1px ${props => props.$theme === 'light' ? 'rgba(174, 208, 53, 0.1)' : 'rgba(62, 75, 16, 0.1)'};
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