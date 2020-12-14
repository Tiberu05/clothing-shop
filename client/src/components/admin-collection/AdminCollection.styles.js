import styled from 'styled-components';

export const ItemsCollection = styled.div`
    margin-bottom: 10px;
`;

export const AdminItem = styled.div`
    border: 1px solid black;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ItemName = styled.div`
    width: 20%;
`;

export const ItemPrice = styled.div`
    width: 20%;
`;

export const ItemActions = styled.div`
    display: flex;
`;

export const Action = styled.div`
    border: 1px solid grey;
    padding: 5px;
    margin: 2px;

    &:hover {
        cursor: pointer;
        background-color: grey;
    }
`;