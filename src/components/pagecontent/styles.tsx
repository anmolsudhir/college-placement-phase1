import styled from "styled-components";

export const PageContContainer = styled.div`
  overflow: auto;
  user-select: none;
  font-size: 0.75rem;
  width: 9rem;
  max-height : 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid;
  border-width: 0 0 0 0.1rem;
  border-color: ${(props: any) =>
    props.$theme === "light" ? "#97b42e" : "#97b42e"};
  background-color: ${(props: any) =>
    props.$theme === "light" ? "#f1f1f1" : "#1c1c1c"};
  margin-top: 5rem;
  padding: 0rem 1rem;
  overflow: auto;
  box-sizing: border-box;
  @media screen and (max-width: 720px) {
        display: none;
  }
`;
export const PageContHeader = styled.div`
    user-select: none;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.1rem;
    box-sizing: inherit;
    transition: all 0.15s ease;
    font-size: 0.75rem;
    font-weight: 100;
    cursor: pointer;

    ${props => props.$theme === 'dark' ? `
        color: #d0d0d0;
    ` : `
    `}
`

export const PageContElem = styled.div`
    user-select: none;
    margin: 0.5rem 0;
    width: 100%;
    box-sizing: inherit;

    &:hover > ${PageContHeader} {
        color : #97b42e;
    }
`

export const ContentContainer = styled.div`
    transition: animation 0.25s ease;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 0.2rem;
    box-sizing: inherit;
    animation: slide-down 0.3s ease;
    ${props => props.$theme === 'light' ? `
        color: #000000;
        
    ` : `
        
        color: #969696;
    `}

    @keyframes slide-down {
        0%{
            opacity : 0;
            transform: translateY(-100%)
        }
        30%{
            opacity : 0;
        }
        100% {
            opacity : 1;
            transform : translateY(0)
        }
    }
`

export const Content = styled.div`
    user-select: none;
    transition: all 0.25s ease;
    margin: 0.25rem;
    font-weight: 100;
    box-sizing: inherit;
    width : 100%;
    height: auto;
    ${props => props.$theme === 'light' ? `
            color: #6e6e6e;
        ` : `
            color: #a7a7a7;
        `}
    &:hover{
        cursor: pointer;
        font-weight: 800;
    }
`