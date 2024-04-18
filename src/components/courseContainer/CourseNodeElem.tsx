import { ReactElement } from "react";
import { CourseModel } from "../../models/CourseModel";

export function CourseNodeElemCard({ name, imgSrc }: CourseModel ): ReactElement{    
    return(
        <div className="course-card">
            <h1 className="course-name">{name}</h1>
            <img src={imgSrc} />
        </div>
    )
}