import styled from 'styled-components'

export const FormSectionContentDiv = styled.div`
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    padding: 5rem 6rem 0rem 6rem;
    box-sizing: border-box;
    transition: all 0.25s ease;

    @media screen and (max-width:720px){
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

export const ButtonDiv = styled.div`
    width: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 0 3rem 0;
`