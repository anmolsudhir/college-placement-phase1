import styled from 'styled-components'

export const FormSectionContentDiv = styled.div`
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    padding: 7rem 4rem 0rem 4rem;
    box-sizing: border-box;
    transition: all 0.25s ease;

    @media screen and (max-width:720px){
        padding-left: 1rem;
        padding-right: 1rem;
    }
`