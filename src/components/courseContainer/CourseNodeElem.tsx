import { ReactElement } from "react";
import { CourseModel } from "../../models/CourseModel";
import styled from "styled-components";

interface CourseNodeElemCardProps {
    courseModel: Omit<CourseModel,'description'>,
    className?: string,
}

export function CourseNodeElemCard({ courseModel: {name, imgSrc, page , id}, className }: CourseNodeElemCardProps): ReactElement{    
    return(
        <Card className={`course-card ${className}`} key={id} href={page}>
            <CourseName>{name}</CourseName>
            <img src={imgSrc} />
        </Card>
    )
}


/*        ---------------------        ---------------------        ESTILOS        ---------------------        ---------------------        */

// NOME CARDS
const CourseName = styled.h1`
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    color: white;
    background-color: rgba(245, 47, 113, 0.8);
    padding: 0.5rem;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
`

// CARDS
const Card = styled.a`
    display: flex;
    justify-content: center;
    border-radius: 5px;
    position: relative;
    transition: 0.3s;
    box-shadow: 4px 4px 15px rgb(100, 100, 100);
    width: 18.5%;
    height: 250px;

    &:hover{
        cursor: pointer;
        transform: translateY(-10px)
    }
`