import styled from "styled-components";
import { CourseCategory } from "../../interfaces/courseCategory";
import { CourseNodeElemCard } from "./CourseNodeElem";
import  './styles/CourseStyles.scss';
import { DivGrouping } from "../DivGrouping";



const ButtonCategory = ({className, direction }: {className:string, direction: 'previous' | 'next'}) => {
    let textButton: string;
    direction == "previous" ? textButton = "<" : textButton = ">";

    className = `${className} ${direction}`
    return(
        <button className={className}>{textButton}</button>
    )
}

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

    &:hover{
        cursor: pointer;
        background-color: rgb(174, 0, 255);
    }
`;

const DivGroupingButton = styled(DivGrouping)`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top:50%;
    width: 100%;

    .previous{
    margin-left: 3rem;
    }

    .next{
        margin-right: 3rem;
    }
`

export default function CourseContainerByCategory({ category, courses } : CourseCategory){

    return(
        <DivGrouping className="card-container">
            <h1 className="category-name">{category}</h1>
            <DivGrouping className="category">
                {courses.map(courseCard =>  
                    <CourseNodeElemCard name={courseCard.name} imgSrc={courseCard.imgSrc} key={courses.indexOf(courseCard)} />
                )}
            </DivGrouping>
            <DivGroupingButton>
                <StyledButtonCategory className="category-button" direction="previous" />
                <StyledButtonCategory className="category-button" direction="next" />
            </DivGroupingButton>
        </DivGrouping>
    );
}