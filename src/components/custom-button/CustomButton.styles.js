import styled, { css } from 'styled-components';


export const CustomButtonContainer = styled.button`
    padding: 10px 10px;
    width: 48%;
    font-weight: bold;
    border: none;
    background-color: black;
    color:white;
    border: 1px solid black;

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
        
    }
`;