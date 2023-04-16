import styled from 'styled-components'

const StyledDiv = styled.div`
    --dark : #000;
    --light : #fff;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    align-items : center;
    justify-content: space-between;
    background-color: ${(props : any) => props.$theme === 'light' ? "var(--light)": 'var(--dark)'};
    width: 100%;
    height: 6rem;
    transition: all 0.25s ease;
`;

export default function TopBar({theme, handleTheme }){
    // const css = theme === 'dark' ? stylesDark : styles; 
    return (            
        <StyledDiv $theme={theme}>
            <span>Hey</span>
            <button onClick={()=> {handleTheme()}}>Click</button>
            <span>Hi</span>
        </StyledDiv>
    );
}