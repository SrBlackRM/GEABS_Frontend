import { StyledData, StyledInput } from "./TableStyledComponents";

interface DataOfTableRowProps{
    title: string,
    data?: string | number,
}

export const DataOfTableRowTextInput = ({title, data}: DataOfTableRowProps) => {
    return(
        <StyledData>
            <th>{title}</th>
            <StyledInput type="text" value={data} />
        </StyledData>
    )
}

