import styled from 'styled-components'

export const SelectGroup = styled.select`
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    margin: 1rem 0 0 0;
    width: 100%;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    transition: all 0.15s ease;
    box-sizing: inherit;
    color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'};
    font-weight: 100;
    border-radius: 0.2rem;
    padding: 0.5rem;
    background-color: transparent;
    outline: ${props => props.$theme === 'light' ? '#b9b9b9 solid 0.1rem' : '#555555 solid 1px'};

    &:focus{
        outline: ${props => props.$theme === 'light' ? '#97b42e solid 2px' : '#97b42e solid 1px'};
    }

    &:active{
        outline: ${props => props.$theme === 'light' ? '#afc36a solid 1px' : '#404d12 solid 1px'};
        border: none;
    }

    @media screen and (max-width:720px) {
        font-weight: 400;
        padding: 0.75rem;
    }
`

export const Option = styled.option.attrs(props => (
    {
        value : props.$value
    }
))`
    background-color: lightgray;
    color: black;
    font-size: 14px;
    font-weight: normal;
`