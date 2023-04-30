import styled from 'styled-components'

export const Invalid = styled.div`
    transition: display 0.15s ease;
    box-sizing: inherit;
    color : red;
    margin: 0.45rem 0 0 0.15rem;
    font-size: 0.9rem;
    font-weight: 350;

    @media (max-width:720px) {
        font-size: 0.9rem;
        font-weight: 400;
    }
`