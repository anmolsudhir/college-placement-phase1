import styled from 'styled-components'

const Spinner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 0.15rem solid #fff;
  border-top-color: transparent;
  border-radius: 1.5rem;
  box-sizing: inherit;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;