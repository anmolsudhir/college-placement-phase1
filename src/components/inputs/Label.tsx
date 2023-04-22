import styled from 'styled-components'

export const Label = styled.label.attrs({className : 'label'})`
    user-select: none;
    font-size: clamp(1rem, 4vw, 1rem);
    font-weight: 350;
    margin-left: 0.2rem;
    transition: all 0.25s ease;
    color: ${props => props.$theme === 'light' ? '#6c6c6c' : '#bbbbbb'};

    @media screen and (max-width : 720px){
        font-size: clamp(1rem, 5vw, 2rem);
    }
`