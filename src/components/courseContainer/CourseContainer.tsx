import { CourseCategory } from "../../interfaces/courseCategory";
import { CourseButtonCategory } from "./CourseButtonCategory";
import { CourseNodeElemCard } from "./CourseNodeElem";
import  './styles/CourseStyles.scss';

export default function CourseContainerByCategory({ category, courses } : CourseCategory){

    return(
        <div className="card-container">
            <h1 className="category-name">{category}</h1>
            <div className="category">
                {courses.map(courseCard =>  
                    CourseNodeElemCard(courseCard)
                )}
            </div>
            <CourseButtonCategory direction="previous" />
            <CourseButtonCategory direction="next" />
        </div>
    );
}