import styled from 'styled-components'

export const Button = styled.button.attrs(props => (
    {
        disabled : props.$disabled,
    }
))`
    cursor: pointer;
    height : 3rem;
    width: auto;
    border: none;
    font-size: 1rem;
    color: white;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    padding : 0 1rem;

    ${props => props.$disabled ? `
        cursor : default;
        ${props.$theme === 'light' ? `
            background-color:#bdca8a;
            color: #ededed;
            ` : `
            background-color:#5f6a34;
            color: #a7a7a7;
            `
        }
        ` : `
        ${props.$theme === 'light' ? `
                background-color:#b8cd64;
                &:hover{
                    background-color: #a4be46;
                    transform: translateY(-10%);
                }
            `: `
                background-color:#5f7117;
                &:hover{
                    background-color: #4e610a;
                    transform: translateY(-10%);
                }
            `
        }
        `
    }

    @media (max-width:720px){
        transition : transform 0.25s ease;
        &:hover{
            transform : none;
        }
        &:active{
            transform : ${props => props.$disabled ? 'scale(100%)' : 'scale(103%)'};
        }
    }
`