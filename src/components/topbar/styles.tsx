import styled from 'styled-components'

export const TopBarContainer = styled.div`
    --dark : rgba(25, 25, 25, 0.5);
    --light : rgba(255, 255, 255, 0.5);
    z-index: 100;
    position: absolute;
    top:0;
    width: 100%;
    height: 5rem;
    background-color: ${(props : any) => props.$theme === 'light' ? "var(--light)": 'var(--dark)'};   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5%;
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 10px 1px ${props => props.$theme === 'light' ? 'rgba(130, 130, 130, 0.1)' : 'rgba(0, 0, 0, 0.2)'};
    box-sizing: border-box;
`;

export const LogoContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    box-sizing: inherit;
`
export const ThemeBtn = styled.div`
    width: clamp(3rem, 3rem + 0vh , 3rem);
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 0.07rem solid ${(props : any) => props.$theme === 'light' ? '#cbcbcb;' : '#3e3e3e'};
    box-sizing: inherit;
    transition: all 0.25s ease;
    &:hover{    
        transform: ${(props : any) => props.$theme === 'light' ? `rotate(45deg)` : `rotate(-45deg)`};
        background-color : ${(props : any) => props.$theme === 'light' ? '#cbcbcb' : '#3e3e3e'};
    }

    &:focus{  
        background-color : #cbcbcb
    }

    @media screen and (max-width : 720px){
        &:hover{    
            transform: none;
            background-color : transparent;
        }
        margin : 0.5rem 0.5rem;
        height:auto;
    }

`

export const LogoText = styled.span`
    user-select: none;
    margin-left: 1%;
    color:#99BF14;
    font-weight: 500;
    font-size: clamp(0.1rem, 2.5rem + 0vw, 2.5rem);
    @media screen and (max-width : 720px){
        display: none;
    }
`

export const MenuBtn = styled.div`
    width: 3rem;
    height: 55%;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0.5rem 1rem;
    border-radius: 0.5rem;
    box-sizing: inherit;
    border-radius: 0.25rem;
    border: 0.07rem solid ${(props : any) => props.$theme === 'light' ? '#cbcbcb;' : '#3e3e3e'};
    background-color: transparent;
    @media screen and (max-width : 720px){
        display: flex;
        margin : 0.5rem 1rem;
        height:auto;
    }
`