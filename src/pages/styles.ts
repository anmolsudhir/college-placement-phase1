import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${(props: any) =>
    props.$theme === "light"
      ? props.$colors.background.light
      : props.$colors.background.dark};
`;

export const LandingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: transparent;
`;

export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: transparent;
`;