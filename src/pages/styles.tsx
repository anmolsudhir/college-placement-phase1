import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.$colors.background.light};
`;

export const LandingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 3rem 10rem 1rem 10rem;
  width: 50%;
  height: 100%;
  border: solid;
  border-width: 0 1px 0 0;
  border-color: ${props => props.$colors.border.light};
  box-sizing: inherit;

  @media screen and (max-width:1150px){
    display: none;
  }
`

export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  max-height: 100%;
  box-sizing: inherit;
  padding: 5rem 8rem;
  background-color: #dde0d8;
  @media screen and (max-width: 1150px) {
    width: 100%;
    padding: 0 3rem;
  }
  @media (max-width: 300px) {
    width: 100%;
    padding: 0 0.5rem;
  }

  @media (max-width: 300px) {
    width: 100%;
    padding: 0 0.5rem;
  }

  @media (max-height: 650px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

export const LogoDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const LoginLogoDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 0 1rem 0;
  box-sizing: inherit;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width:1150px){
    display : flex
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  height: auto;
  box-sizing: inherit;
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 400;
  color : #3e3e3e;
`;

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: inherit;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  color : gray;
  font-weight: 100;
  font-size: 0.75rem;
`;

export const InputDiv = styled.div`
  overflow: auto;
  position: relative;
  margin: 1rem 0rem 0.5rem 0;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 3rem;
  border: 1px solid;
  border-radius: 0.3rem;
  border-color: #c4c4c4;
  box-shadow: 0 0 0.75rem 0.2rem rgba(0, 0, 0, 0.1);
  box-sizing: inherit;
  background-color: ${(props) => props.$colors.background.light};

  @media screen and (max-width: 1150px) {
    padding: 2rem 1rem;
  }
`;

export const SwitchDiv = styled.div`
  overflow: auto;
  position: relative;
  margin: 0 0 1rem 0;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 2rem;
  border: 1px solid;
  border-radius: 0.3rem;
  border-color: #c4c4c4;
  box-shadow: 0 0 0.75rem 0.2rem rgba(0, 0, 0, 0.1);
  box-sizing: inherit;
  background-color: ${(props) => props.$colors.background.light};
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: #f00 solid;
  border-width: 0.05rem;
  width: 100%;
  height : auto;
  padding: 0.5rem;
  box-sizing: inherit;
  border-radius: 0.2rem;
  font-weight: 100;
  font-size: 0.9rem;
  text-align: center;
  color: #b90101;
  background-color: ${props => props.$colors.error.light};

  @media (max-width : 720px) {
    font-weight: 300;
  }
`

export const SubmitButton = styled.button.attrs((props) => ({
  id: props.$id || "undef-class",
  disabled: props.$disabled,
}))`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
  border: none;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: all 0.1s ease;
  padding: 0 1rem;
  cursor: ${props => !props.$disabled ? "pointer" : "default"};
  border: 0.15rem solid ${(props) => props.$colors.primary.light};
  background-color: ${(props) => props.$colors.primary.light};
  color: white;
  &:hover {
    transform: ${props => !props.$disabled && "scale(103%)"};
  }

  @media (max-width: 720px) {
    &:hover {
      transform: none;
      border: none;
      background-color: none;
    }

    &:active {
      transform: scale(103%);
      border: 0.15rem solid ${(props) => props.$colors.primary.dark};
      background-color: ${(props) => props.$colors.primary.dark};
    }
  }
`;