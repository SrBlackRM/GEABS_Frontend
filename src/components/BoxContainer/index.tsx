import styled from "styled-components";
import { DivGrouping } from "../DivGrouping";
import { ReactElement } from "react";

interface BoxContainerProps{
    title: string,
    children: ReactElement,
}

export const BoxContainer = ({title, children}: BoxContainerProps) => {
    return(
        <StyledBoxContainer>
            <BoxTitle>{title}: </BoxTitle>
            <InfoContainer>
                {children}
            </InfoContainer>
        </StyledBoxContainer>
    )
}


// BOX CONTAINERS
const StyledBoxContainer = styled(DivGrouping)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(0,0,0,0.7);
    border-radius: 30px;
    margin: 2rem 15rem;
`;

// TITULOS
const BoxTitle = styled.h2`
    padding: 2rem;
    border-bottom: 1px solid gray;
`;

// CONTAINER DE INFO
const InfoContainer = styled(DivGrouping)`
    margin: 1rem 3rem;
    padding: 1rem;
`;
