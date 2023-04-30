import styled from 'styled-components'

export const InputCardElem = styled.div`
    position: relative;
    //margin: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
    padding: 1rem;
    background-color: transparent;
    color: ${props => props.$theme === 'light' ? 'rgb(54, 54, 54)' : 'rgb(230, 230, 230);'};
    transition: all 0.15s ease;
    box-sizing: inherit;
    border: 0.1rem solid transparent;
    cursor: pointer;
    &:hover{
        .label{
            cursor: pointer;
            font-weight: 500;
        }
        border: 0.1rem solid rgba(150, 150, 150, 0.2);
    }

    &:focus{
        border: 0.1rem solid rgba(150, 150, 150, 0.2);
    }
`

export const InputLabel = styled.div`
    user-select: none;
    font-size: clamp(1rem, 4vw, 1rem);
    font-weight: 350;
    margin-left: 0.2rem;
    transition: all 0.25s ease;
    color: ${props => props.$theme === 'light' ? '#4c4c4c' : '#bbbbbb'};

    @media screen and (max-width : 720px){
        font-size: clamp(1rem, 5vw, 2rem);
    }
`


export const InfoDiv = styled.div`
    position : absolute;
    z-index: 10;
    display: flex;
    right : 1rem;
    top : 1rem;
    padding: 0.25rem;
    cursor : default;
    align-items: flex-start;
    justify-content: flex-end;
    backdrop-filter : blur(20px);
    border-radius: 0.2rem;
    box-sizing: inherit;
    ${props => props.$active ? `
        right : 0;
        top : 0;
        box-shadow: 0 0 0.35rem 0.05rem rgba(0, 0, 0, 0.1);
        width : 100%;
        height : 100%;
        padding : 1rem;
        background-color : ${props.$theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
    ` : `
        padding : 0;
    `}
`

export const InfoText = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    position: relative;
    width : 100%;
    height: 100%;
    color: ${props => props.$theme === 'light' ? '#303030' : '#d4d4d4'};
    font-weight: 100;
    padding: 0 0.5rem 0 0;
    box-sizing: inherit;
    @media screen and (max-width:720px){
        font-weight: 300;
    }
`

export const Input = styled.input.attrs(props => (
    {
        type : props.$type,
        placeholder : props.$placeholder
    }
))`
    border-width: 0.1rem 0.1rem 0.1rem 0.1rem;
    margin: 2rem 0 1rem 0;
    width: 100%;
    font-size: clamp(1rem, 2vw, 1rem);
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.15s ease;
    box-sizing: inherit;
    background-color: ${props => props.$theme === 'light' ? '#ccdf88' : '#526317'};
    color: ${props => props.$theme === 'light' ? '#777777' : '#bbbbbb'};
    font-weight: 100;
    outline: ${props => props.$theme === 'light' ? '#afc36a solid 1px' : '#404d12 solid 1px'};

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
        margin: 1rem 0;
    }
`