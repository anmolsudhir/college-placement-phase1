import styled from 'styled-components'

export const TopBarContainer = styled.div`
    --dark : rgba(50, 50, 50, 0.1);
    --light : rgba(220, 220, 220, 0.1);
    z-index: 1;
    position: absolute;
    top:0;
    width: 100%;
    height: 6rem;
    background-color: ${(props : any) => props.$theme === 'light' ? "var(--light)": 'var(--dark)'};   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5%;
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;

export const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    box-sizing: inherit;
`
export const ThemeBtn = styled.div`
    width: 3rem;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0.5rem 1rem;
    border-radius: 0.5rem;
    box-sizing: inherit;
    background-color: ${(props : any) => props.$theme === 'light' ? 'rgba(220, 220, 220, 1)' : 'rgba(28, 28, 28, 1)'};
    box-shadow: 0 0 0.5rem 0.5rem ${(props : any) => props.$theme === 'light' ? 'rgba(47, 47, 47, 0.15)' : 'rgba(0, 0, 0, 0.2)'};
    &:hover{    
        transform: ${(props : any) => props.$theme === 'light' ? `rotate(45deg)` : `rotate(-45deg)`};
    }

    @media screen and (max-width : 720px){
        height:auto;
    }

`

export const LogoText = styled.span`
    margin-left: 1%;
    font-size: 4rem;
    color:#99BF14;
    font-weight: 500;
    font-size: clamp(0.7rem, 2.5rem + 0vw, 2.5rem);
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
    background-color: ${(props : any) => props.$theme === 'light' ? 'rgba(220, 220, 220, 1)' : 'rgba(28, 28, 28, 1)'};
    box-shadow: 0 0 0.5rem 0.5rem ${(props : any) => props.$theme === 'light' ? 'rgba(47, 47, 47, 0.15)' : 'rgba(0, 0, 0, 0.2)'};
    @media screen and (max-width : 720px){
        display: flex;
        height: auto;
    }
`