import styled from "styled-components"
import { StyledData, TableRowFlex } from "./TableStyledComponents"
import { useState } from "react"

export const DataOfTableFileType = ({ imgSrc } : {imgSrc?: string}) => {
    const [ fileName, setFileName ] = useState<string | undefined>(undefined);
    const [ fileImage, setFileImage ] = useState<string | undefined >(imgSrc);

    const handleFileChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const file = event.target.files?.item(0);

        if(file){
            const name = file.name;
            const url = URL.createObjectURL(file);
            setFileImage(url);
            setFileName(name);
        }
    }

    return(
        <TableRowFlex>
            <StyledData>
                <th>Foto de Perfil: </th>
                <AvatarImage src={fileImage} />
                <ButtonSendFile htmlFor="avatar">Enviar</ButtonSendFile>
                <StyledFileInput id="avatar" type="file" onChange={handleFileChange}/>
                <StyledFileNameSpan name={fileName}>{fileName}</StyledFileNameSpan>
            </StyledData>
        </TableRowFlex>
    )
}

const StyledFileInput = styled.input`
    display: none;
`
const ButtonSendFile = styled.label`
    border: 1px solid red;
    border-radius: 30px;
    color: red;
    padding: 1rem 2rem;
    font-weight: 500;
    max-width: fit-content;
    margin: 1rem;

    &:hover{
        cursor: pointer;
        color: #501de8;
        border-color: #501de8;
    }
`
const StyledFileNameSpan = styled.span<{name: string | undefined}>`
    display: ${({name}) => name ? 'inline-block' : 'none'};
    color: #24ff20;
`

const AvatarImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 100%;
    margin: 2rem;
`