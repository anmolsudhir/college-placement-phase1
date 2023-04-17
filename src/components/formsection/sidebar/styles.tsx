import styled from "styled-components";

export const SideCarContainer = styled.div`
    font-size: 0.75rem;
    border-radius: 0 0.5rem 0.5rem 0;
    //position: absolute;
    top: 0;
    left: 0;
    width: 15rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: solid;
    border-color: ${(props : any) => props.$theme === 'light' ? '#DCDCDC;' : '#1c1c1c'};
    border-width: 0 2px 0 0;
    box-shadow: ${(props : any) => props.$theme === 'light' ? '0 0 5px 5px rgba(0, 0, 0, 0.025)' : '0 0 5px 5px rgba(0, 0, 0, 0.05)'};
    padding: 8rem 1rem 0 1rem;
    overflow: scroll;
    transition: all 0.15s ease;
`

export const SideBarElem = styled.div`
    display:none;
`