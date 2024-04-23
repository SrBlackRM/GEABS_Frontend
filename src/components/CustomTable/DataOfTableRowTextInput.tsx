import { StyledData, StyledInput } from "./TableStyledComponents";

interface DataOfTableRowProps{
    title: string,
    data?: string | number,
    disabled?: boolean,
}

export const DataOfTableRowTextInput = ({title, data, disabled}: DataOfTableRowProps) => {
    return(
        <StyledData>
            <th>{title}</th>
            <StyledInput type="text" defaultValue={data} disabled={disabled}/>
        </StyledData>
    )
}

