import styled from 'styled-components'

export const Button = styled.button.attrs((props) => ({
  disabled: props.$disabled,
}))`
  cursor: pointer;
  height: 3rem;
  width: auto;
  border: none;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  padding: 0 1rem;
  box-sizing: border-box;

  ${(props) =>
    props.$disabled
      ? `
        cursor : default;
        cursor : default;
        color : #676e4c;
        background-color : transparent;
        ${
          props.$theme === "light"
            ? `
                border: 0.1rem solid #c3d38a;
                color: #c3d38a;
            `
            : `
                border: 0.1rem solid #5d6248;
                color: #5d6248;
            `
        }
        `
      : `
        &:hover{
            transform : scale(105%);
        }
        ${
          props.$theme === "light"
            ? `
                background-color:rgb(153, 184, 32);
                color: white;
            `
            : `
                background-color:rgb(123, 151, 11);
                color: white;
            `
        }
        @media (max-width:720px){
                    transition : transform 0.25s ease;
                    &:hover{
                        transform : none;
                    }
                    &:active{
                        background-color:rgb(118, 137, 44);
                        color: white;
                        transform : ${(props) =>
                          props.$disabled ? "scale(100%)" : "scale(103%)"};
                    }
                }
        `}
`;