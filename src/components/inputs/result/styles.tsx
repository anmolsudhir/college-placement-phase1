import styled from 'styled-components'

export const ResultDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const Precentage = styled.div`
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    margin: 1rem 0 0rem 0.5rem;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    transition: all 0.15s ease;
    box-sizing: inherit;
    background-color: transparent;
    font-weight: 100;
    border-radius: 0.2rem;
    padding: 0.5rem;
    outline: ${props => props.$theme === 'light' ? '#b9b9b9 solid 1px' : '#555555 solid 1px'};

    &:focus{
        outline: ${props => props.$theme === 'light' ? '#97b42e solid 2px' : '#97b42e solid 1px'};
    }
    color: #999999;

    @media screen and (max-width:720px) {
        font-weight: 400;
        padding: 0.75rem;
    }
`

export const ResultInput = styled.input.attrs((props) => ({type : 'text', placeholder : props.$placeholder}))`
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    margin: 1rem 0 0 0;
    width: 100%;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.15s ease;
    box-sizing: inherit;
    color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'};
    font-weight: 100;
    border-radius: 0.2rem;
    padding: 0.5rem;
    background-color: ${props => props.$theme === 'light' ? `${props.$isValid ? 'transparent' : '#fff0f0'} ` : `${props.$isValid ? 'transparent' : '#1f1414'} `};
    outline: ${props => props.$theme === 'light' ? `${props.$isValid ? '#b9b9b9 solid 1px' : '#ff0000 solid 1px'} ` : `${props.$isValid ? '#555555 solid 1px' : 'red solid 1px'} `};

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