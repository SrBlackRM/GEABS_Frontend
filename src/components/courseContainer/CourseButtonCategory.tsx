import { ReactElement } from "react";

interface Direction{
    direction: 'previous' | 'next';
}

export function CourseButtonCategory({ direction }: Direction): ReactElement{
    let spanButton: string;
    direction == "previous" ? spanButton = "<" : spanButton = ">";

    const ButtonStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        border: 'none',
        backgroundColor: 'red',
        color: 'white'
    }

    return(
        <button style={ButtonStyle}>{spanButton}</button>
    )
}