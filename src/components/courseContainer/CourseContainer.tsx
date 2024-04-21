import styled from "styled-components";
import { CourseCategory } from "../../interfaces/courseCategory";
import { CourseNodeElemCard } from "./CourseNodeElem";
import { DivGrouping } from "../DivGrouping";
import { useState } from "react";
import { CourseModel } from "../../models/CourseModel";


/* TIPOS AUX */

type Direction = 'previous' | 'next';


/*        ---------------------        ---------------------        COMPONENTES        ---------------------        ---------------------        */


const ButtonCategory = ({ className, direction, handleClick }: {className:string, direction: Direction, handleClick: any}) => {
    let textButton: string;
    direction == "previous" ? textButton = "<" : textButton = ">";
    
    return(
        <button className={className} onClick={handleClick}>{textButton}</button>
    )
}



export default function CourseContainerByCategory({ category, courses } : CourseCategory){
    const coursesAmount = courses.length;
    const displayAmount = 5;


    const [arrayToSaveRemovedElements, setArraToSaveRemovedElements] = useState<Array<CourseModel>>([]);
    const [positionToDisplay, setPositionToDisplay] = useState(displayAmount);

    const [coursesDisplay, setCoursesDisplay] = useState(() => {
        if(coursesAmount <= displayAmount){ return courses;}
        return courses.filter(elem => courses.indexOf(elem) < displayAmount);
    })

    const handleButtonClick = (direction: Direction) => {
        if(coursesDisplay.length < displayAmount && courses.length > displayAmount){ return coursesDisplay;}
        if(direction === "next"){

            // verifica se chegou no final do array de cursos
            if(positionToDisplay  >= coursesAmount){
                return;
            }
            else{
                // variavel que vai nos auxiliar a rolar a trilha
                setPositionToDisplay(positionToDisplay+1);

                const firstChild = coursesDisplay.shift();
                if(firstChild){
                    setArraToSaveRemovedElements(current => [...current, firstChild]);
                }

                coursesDisplay.push(courses[positionToDisplay])
            }
        }else{
            if(positionToDisplay <= displayAmount){
                return;
            }else{
                setPositionToDisplay(positionToDisplay-1);
                
                coursesDisplay.pop()
                const firstElemAuxArray = arrayToSaveRemovedElements?.pop() ;

                if(firstElemAuxArray){  
                    coursesDisplay.unshift(firstElemAuxArray);
                }
            }
        }

       
        setCoursesDisplay(coursesDisplay.map(elem => elem));
    }

    return(
        <CategoryContainer courseLengh={coursesAmount} minimum={displayAmount}>
            <h1 className="category-name">{category}</h1>
            <CategoryContainerCards>
                {coursesDisplay.map(courseCard => 
                    <CourseNodeElemCard courseModel={{...courseCard}} />
                )}
            </CategoryContainerCards>
            <StyledButtonCategory className="category-button" direction="previous" handleClick={()=>handleButtonClick("previous")}/>
            <StyledButtonCategory className="category-button" direction="next"  handleClick={()=>handleButtonClick("next")} />
        </CategoryContainer>
    );
}


/*        ---------------------        ---------------------        ESTILOS        ---------------------        ---------------------        */


// TRILHA
const CategoryContainer = styled(DivGrouping)<{courseLengh: number, minimum: number}>`
    display: flex;
    flex-direction: column;
    margin: 0 4rem 4rem;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 10px;
    position: relative;
    background-color: #000000b3;
    align-items: start;
    max-width: 100vw;

    &:hover{ 
        .category-button{ opacity: 1; }
        
    }
`;

// CATEGORY
const CategoryContainerCards = styled(DivGrouping)`
    display: flex;
    gap: 1rem;
    padding: 20px;
    border-radius: 10px;
    width: 100%;

    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

`;

// BOTÕES LATERAIS
const StyledButtonCategory = styled(ButtonCategory)`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: none;
    background-color: red;
    color: white;
    font-size: 24px;
    opacity: 0;
    transition: 0.3s ease-in-out ;
    position: absolute;
    top: 50%;
    left: ${({direction}) => direction == 'previous' ? '3rem' : ''};
    right: ${({direction}) => direction == 'next' ? '3rem' : ''};

    &:hover{
        cursor: pointer;
        background-color: rgb(174, 0, 255);
    }
`;
