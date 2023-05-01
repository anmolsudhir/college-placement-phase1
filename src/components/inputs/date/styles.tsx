import styled from 'styled-components'

export const DateDiv = styled.input.attrs(
    {
        type : 'date',
    }
)`
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    margin: 1rem 0 0 0;
    width: 100%;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    transition: all 0.15s ease;
    box-sizing: inherit;
    background-color: transparent;
    color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'};
    font-weight: 100;
    border-radius: 0.2rem;
    padding: 0.4rem;
    background-color: transparent;
    outline: ${props => props.$theme === 'light' ? '#b9b9b9 solid 0.1rem' : '#555555 solid 1px'};

    &:focus{
        outline: #97b42e solid 2px;
    }

    &::placeholder{
        color: #999999;
        font-weight: 200;
    }

    @media screen and (max-width:720px) {
        font-weight: 400;
        padding: 0.75rem;
    }

    &::-webkit-calendar-picker-indicator {
        background-color : ${props => props.$theme === 'dark' && '#eaeaea'};
        border-radius: 0.1rem;
        padding: 5px;
        cursor: pointer;
    }
`