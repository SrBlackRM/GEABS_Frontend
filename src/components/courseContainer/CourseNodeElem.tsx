import { ReactElement } from "react";
import { CourseModel } from "../../models/CourseModel";

export function CourseNodeElemCard({ name, imgSrc }: Omit<CourseModel,'description'>, key: number ): ReactElement{    
    return(
        <div className="course-card" key={key}>
            <h1 className="course-name">{name}</h1>
            <img src={imgSrc} />
        </div>
    )
}