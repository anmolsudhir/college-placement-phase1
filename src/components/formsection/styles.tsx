import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props : any) => props.$theme === 'light' ? '#F1F1F1' : '#0f0f0f'};
`

export const ProgressBar = styled.div`
    position: absolute;
    top: 6rem;
    left: 0;
    height: 0.1rem;
    background-color: #72BFFE;
`