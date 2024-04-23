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
    background-color: ${({disabled}) => disabled ? 'rgb(0,0,0,0.2)' : 'rgb(0,0,0,0.6)'};
    color: white;
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 1rem;

    &:focus{
        outline-style: none;
    }
`
// LINHAS TABELA GRID
export const TableRowGrid = styled.tr<{template?: string}>`
    display: grid;
    grid-template-columns: ${({template}) => template ? template : `1fr` };
    text-align: left;
    gap: 1rem;
`

// LINHAS TABELA FLEX
export const TableRowFlex = styled.tr<{direction?: 'column' | 'row', aligment?: 'start' | 'center' | 'end'}>`
    display: flex;
    flex-direction: ${({direction}) => direction };
    justify-content: ${({direction, aligment}) => direction === 'column' ? 'start' : aligment};
    align-items: ${({direction, aligment}) => direction === 'column' ? aligment : 'start'};
    text-align: left;
    gap: 1rem;
`