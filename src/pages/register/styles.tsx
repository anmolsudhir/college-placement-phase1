import styled from 'styled-components'

export const Container =styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${(props : any) => props.$theme === 'light' ? '#F1F1F1' : '#1c1c1c'};
`

export default {};