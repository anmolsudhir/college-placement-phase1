import styled from "styled-components";

export const FormSlideDiv = styled.div`
    margin: 1rem 0rem;
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 3rem;
    border: 0.1rem solid ${props => props.$theme === 'light' ? 'rgb(220,220,220)' : 'rgb(56, 56, 56)'};
    border-radius: 0.3rem;
    background-color: ${props => props.$theme === 'light' ? 'transparent' : 'rgb(28,28,28)'};
    box-sizing: inherit;
    //transition: all 0.15s ease;

    @media screen and (max-width:720px){
        padding: 1rem;
    }

    @media screen and (max-width:1150px){
        flex-direction: column;
    }
`

export const SlideHeader = styled.div`
    user-select: none;
    height: 100%;
    width: 35rem;
    font-size: clamp(1.5rem, 3vw, 4rem);
    font-weight: 500;
    text-align:left;
    justify-content: flex-end;
    align-items: flex-end;
    color:rgb(100, 100, 100);

    @media screen and (max-width:1150px){
        width: 100%;
        margin: 0.5rem;
        padding: 0.5rem;
    }
`

export const InputContainer = styled.div`
    height: 100%;
    width: 100%;
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
`