import styled from "styled-components"

interface ButtonProps {
    text?: string,
    type?: 1 | 2,
}

export const CustomButton = ({text="Salvar", type=1}: ButtonProps) => {
    return(
        <StyledButton type={type}>
            {text}
        </StyledButton>
    )
}


// BOTÃO SALVAR
const StyledButton = styled.button<{type: number}>`
    display: block;
    float: right;
    padding: 1rem;
    background-color: ${({type}) => type == 1 ? 'red' : 'blue'};
    color: white;
    border: none;
    border-radius: 10px;
    margin-top: 3rem;
    
    &:hover{
        cursor: pointer;
        background-color: #3d14b9;
    }
`