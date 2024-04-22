import styled from "styled-components"

// INFO 
export const StyledData = styled.td`
    display: grid;
    margin: 0 2rem;
`

// STYLE INPUT TEXT
export const StyledInput = styled.input`
    padding: 1rem;
    font-size: 16px;
    background-color: rgb(0,0,0,0.6);
    color: white;
    border: none;
    border-radius: 10px;
    width: 100%;

    &:focus{
        outline-style: none;
    }
`
// LINHAS TABELA
export const TableRow = styled.tr<{template?: string}>`
    display: grid;
    grid-template-columns: ${({template}) => template ? template : `1fr` };
    text-align: left;
`