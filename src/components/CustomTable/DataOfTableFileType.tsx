import styled from "styled-components"
import { StyledData } from "./TableStyledComponents"

export const DataOfTableFileType = () => {
    return(
        <StyledData>
            <th>Foto de Perfil: </th>
            <label htmlFor="avatar"></label>
            <StyleFileInput type='file' name='avatar' />
        </StyledData>
    )
}

const StyleFileInput = styled.input`
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
`