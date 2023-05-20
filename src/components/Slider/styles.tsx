import styled from 'styled-components'

export const ContainerDiv = styled.div`
  box-sizing: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: auto;
  background-color: ${props => props.$colors.background.light};
  margin: 0 1rem 3rem 1rem;
`;

export const Bars = styled.div`
  background-color: #dbdfc9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: inherit;
  width: 100%;
  font-size: 0.75rem;
  font-weight: 100;
  text-align: center;
  height: 0.2rem;
  column-gap: 0.2rem;
`;

export const Fluid = styled.div.attrs((props) => ({ style: { width: props.$width } }))`
  box-sizing: inherit;
  flex: 0 0 auto;
  transition: width 0.5s ease-in-out;
  height: 0.2rem;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: ${(props) => props.$colors.primary.light};
`;

export const Labels = styled.div`
  flex: 0 0 auto;
  //background-color: transparent;
  border: solid;
  border-color: ${(props) => props.$colors.primary.dark};
  border-width: 0.25rem;
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 0.375rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 100;
`;