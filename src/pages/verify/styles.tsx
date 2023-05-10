import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.$colors.background.light};
`;

export const InputDiv = styled.div`
  position: relative;
  margin: 1rem 1rem;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: auto;
  padding: 3rem;
  border: 1px solid;
  border-radius: 0.3rem;
  border-color: #c4c4c4;
  box-shadow: 0 0 0.75rem 0.2rem rgba(0, 0, 0, 0.1);
  box-sizing: inherit;
  background-color: ${(props) => props.$colors.background.light};

  @media screen and (max-width: 1150px) {
    padding: 3rem 1rem;
  }
`;

export const Content = styled.div`
  display: ${(props) => props.$display};
  flex-direction: column;
  width: 100%;
  margin: 0 0 1rem 0;
  animation: animate 0.5s ease-in-out;
  box-sizing: inherit;

  @keyframes animate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Back = styled.div`
    position : absolute;
    top : 1rem;
    left : 1rem;
`

export default {}