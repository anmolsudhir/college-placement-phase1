import styled from 'styled-components';

export const TextInput = styled.input.attrs(props => (
    {
        type : props.$type,
        placeholder : props.$placeholder,
    }
))`
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    margin: 1rem 0 0rem 0;
    width: 100%;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.15s ease;
    box-sizing: inherit;
    color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'};
    font-weight: 100;
    background-color: ${props => props.$theme === 'light' ? `${props.$isValid ? '#ccdf88' : '#dfd188'} ` : `${props.$isValid ? '#526317' : '#635e17'} `};
    outline: ${props => props.$theme === 'light' ? `${props.$isValid ? '#afc36a solid 1px' : '#ff0000 solid 1px'} ` : `${props.$isValid ? '#404d12 solid 1px' : '#fa6c2a solid 1px'} `};

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