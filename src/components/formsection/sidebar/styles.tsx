import styled from "styled-components";

export const SideBarContainer = styled.div`
    user-select: none;
    font-size: 0.75rem;
    width: 20rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: solid;
    border-color: ${(props : any) => props.$theme === 'light' ? '#DCDCDC' : '#2f2f2f'};
    background-color: ${(props : any) => props.$theme === 'light' ? '#f1f1f1' : '#1c1c1c'};
    padding: 7rem 1rem 0 1rem;
    overflow: auto;
    box-sizing: border-box;
    @media screen and (max-width : 720px) {
        width: 15rem;
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
            border-width: 0 0 0 0.1rem;
        ` : `
            display : none;
            border-width: 0 0.2rem 0 0;
        `}
    }
`
export const SideBarHeader = styled.div`
    user-select: none;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.1rem;
    box-sizing: inherit;
    transition: all 0.15s ease;
    font-size: clamp(0px, 1vw, 10rem);
    font-weight: 100;
    cursor: pointer;

    ${props => props.$theme === 'dark' ? `
        color: #d0d0d0;
    ` : `
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

    /* &:hover{
        .header {
            ${props => props.$theme === 'light' ? `
                color: #5d5d5d;
            ` : `
                color: #c4c4c4;
            `}
        }
    } */
`

export const ContentContainer = styled.div`
    transition: animation 0.25s ease;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 0.2rem;
    box-sizing: inherit;
    animation: slide-down 0.3s ease;
    ${props => props.$theme === 'light' ? `
        color: #000000;
        
    ` : `
        
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
    ${props => props.$theme === 'light' ? `
            color: #6e6e6e;
        ` : `
            color: #a7a7a7;
        `}
    &:hover{
        cursor: pointer;
        font-weight: 800;
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