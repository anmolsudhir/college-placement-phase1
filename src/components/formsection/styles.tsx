import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    @media screen and (max-width:720px){
        flex-direction: row-reverse;
    }
`

export const ProgressBar = styled.div.attrs((props) => ({style : { width : `${props.width}%`}}))`
    z-index: 100;
    position: absolute;
    top: 4rem;
    left: 0;
    height: 0.1rem;
    background-color: #72BFFE;
`