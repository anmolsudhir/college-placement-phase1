import styled from "styled-components";

export const SideBarContainer = styled.div`
    user-select: none;
    font-size: 0.75rem;
    border-radius: 0 0.5rem 0.5rem 0;
    width: 15rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: solid;
    border-color: ${(props : any) => props.$theme === 'light' ? '#DCDCDC' : '#1c1c1c'};
    border-width: 0 2px 0 0;
    box-shadow: ${(props : any) => props.$theme === 'light' ? '0 0 5px 5px rgba(0, 0, 0, 0.025)' : '0 0 5px 5px rgba(0, 0, 0, 0.05)'};
    padding: 8rem 1rem 0 1rem;
    overflow: auto;
    box-sizing: border-box;
    background-color: ${(props : any) => props.$theme === 'light' ? '#f1f1f1' : '#0f0f0f'};
    @media screen and (max-width : 720px) {
        animation: slide 0.25s ease;
        z-index : 99;
        @keyframes slide {
            ${props => props.$mobile === true ? `
                0%{
                    opacity : 0;
                    width : 0;
                }
                45%{
                    opacity : 0;
                }
                100%{
                    display : inline;
                    opcaity : 1;
                    width : 15rem;
                }
            ` : `
               
            `}
        }
        
        ${props => props.$mobile === true ? `
            display : block;
            position : absolute;
            right : 0;
            top : 0;
            height: 100vh;
        ` : `
            display : none;
        `}
    }
`
export const SideBarHeader = styled.div`
    user-select: none;
    height: 3rem;
    width: 100%;
    margin: 0.25rem 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: inherit;
    transition: all 0.15s ease;
    font-size: clamp(0px, 0.9vw, medium);
    font-weight: 200;

    ${props => props.$theme === 'dark' ? `
        background-color: #1c1c1c;
        color: #bbbbbb;
    ` : `
        background-color: #DCDCDC;
    `}

    @media screen and (max-width:720px){
        font-weight: 350;
        font-size : 1rem
    }
`

export const SideBarElem = styled.div`
    user-select: none;
    margin: 0.5rem 0;
    width: 100%;
    box-sizing: inherit;

    &:hover{
        ${SideBarHeader} {
            cursor: pointer;
            border-radius: 1rem 1rem 0 0;
            ${props => props.$theme === 'light' ? `
                background-color: #c5d77f;
                font-weight: 700;
                color: #5d5d5d;
            ` : `
                background-color: #7d951d;
                font-weight: 700;
                color: #c4c4c4;
            `}
        }
    }
    `

export const ContentContainer = styled.div`
    transition: animation 0.25s ease;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    border-radius: 0 0 1rem 1rem;
    box-sizing: inherit;
    animation: slide-down 0.3s ease;
    ${props => props.$theme === 'light' ? `
        color: #000000;
        background-color: #DCDCDC;
    ` : `
        background-color: #1c1c1c;
        color: #969696;
    `}

    @keyframes slide-down {
        0%{
            opacity : 0;
            transform: translateY(-100%)
        }
        30%{
            opacity : 0;
        }
        100% {
            opacity : 1;
            transform : translateY(0)
        }
    }
`

export const Content = styled.div`
    user-select: none;
    transition: all 0.25s ease;
    margin: 0.5rem;
    font-weight: 100;
    box-sizing: inherit;
    width : 100%;
    height: auto;
    &:hover{
        cursor: pointer;
        font-weight: 800;
        ${props => props.$theme === 'light' ? `
            color: #000000;
        ` : `
            color: #bbbbbb;
        `}
    }
    @media screen and (max-width:720px){
        font-weight: 350;
        font-size : 1rem
    }
`

export const Modal = styled.div.attrs({draggable : true})`
    z-index: 98;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: red;
    opacity: 0;
`