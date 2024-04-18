import { ReactElement } from "react";

type Direction = "previous" | "next" ;

export function CourseButtonCategory(direction: Direction): ReactElement{
    direction == "previous" ? "<" : ">";

    return(
        <input type="button">{direction}</input>
    )
}