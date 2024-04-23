import styled from "styled-components";
import { ReactElement } from "react";
import { BoxContainer } from "../../components/BoxContainer";
import { CustomButton } from "../../components/CustomButton";
import { CustomTable } from "../../components/CustomTable";
import { AddressType } from "../../interfaces/AdressType";
import { TableRowFlex, TableRowGrid } from "../../components/CustomTable/TableStyledComponents/";
import { DataOfTableFileType } from "../../components/CustomTable/DataOfTableFileType";
import { DataOfTableRowTextInput } from "../../components/CustomTable/DataOfTableRowTextInput";

export default function ProfilePage(): JSX.Element{
    const addressTest = {
        street: 'Avenida Argentina',
        streetNumber: 683,
        district: 'Parque Paraíso',
        city: 'Itapecerica da Serra',
        region: 'SP',
    }

    const myInfoTest = {
        name: 'Michel Rodrigues Mota',
        email: 'michelrbm@gmail.com',
        celphone: '11975523449',
        avatar: {src: 'src/assets/avatar.jpg'},
    }
    
    return(
        <>
            <BoxContainer title="Meu Perfil">
                <StyledMyProfileTable info={myInfoTest}/>
            </BoxContainer>
            <BoxContainer title="Endereço">
                <StyledAddressInfoComponents address={addressTest} className="address-info"/>
            </BoxContainer>
        </>
    );
}

/*        ---------------------        ---------------------        COMPONENTES        ---------------------        ---------------------        */


// TABELA ADDRESS
interface AddressInfoComponentsProps {
    address: AddressType;
    className?: string;
}

const AddressInfoComponents = ({address, className}: AddressInfoComponentsProps):ReactElement => {
    
    return <>
        <CustomTable className={className}>
            <TableRowGrid  template="4fr 0.5fr">
                <DataOfTableRowTextInput title="Rua:" data={address?.street}/>
                <DataOfTableRowTextInput title="Nº:" data={address?.streetNumber} />
            </TableRowGrid>
            <TableRowGrid template="4fr 3fr"> 
                <DataOfTableRowTextInput title="Complemento:" data={address?.complement}/>
                <DataOfTableRowTextInput title="Referência:" data={address?.reference}/>
            </TableRowGrid>
            <TableRowGrid template="2fr 3fr 0.5fr"> 
                <DataOfTableRowTextInput title="Bairro:" data={address?.district}/>
                <DataOfTableRowTextInput title="Cidade:" data={address?.city}/>
                <DataOfTableRowTextInput title="Estado:" data={address?.region}/>
            </TableRowGrid>
        </CustomTable>

        <CustomButton type={1} text="Salvar Endereço"/>
    </>
}

// TABELA MEU PERFIL
interface myProfileTableProps{
    info: {name: string, email: string, celphone: string, avatar?: {src: string}}
    className?: string,
}
const myProfileTable = ({info, className}: myProfileTableProps ):ReactElement => {
    return(
        <>
            <CustomTable className={className}>
                <TableRowGrid template="3fr 2fr">
                    <DataOfTableFileType imgSrc={info?.avatar?.src}/>
                    <LeftDivisionStyledTableRowFlex direction='column' >                        
                        <DataOfTableRowTextInput title="Nome:" data={info.name} disabled/>
                        <DataOfTableRowTextInput title="Email:" data={info.email} disabled/>
                        <DataOfTableRowTextInput title="Celular:" data={info.celphone} />
                    </LeftDivisionStyledTableRowFlex>
                </TableRowGrid>
            </CustomTable>

            <CustomButton type={1} text="Salvar Dados"/>
        </>
    )
}

/*        ---------------------        ---------------------        ESTILOS        ---------------------        ---------------------        */


// ESTILO TABELA ADDRESS
const StyledAddressInfoComponents = styled(AddressInfoComponents)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

// ESTILO TABELA MEU PERFIL
const StyledMyProfileTable = styled(myProfileTable)`
`;

const LeftDivisionStyledTableRowFlex = styled(TableRowFlex)`
    border-left: 1px solid white;
    padding-left: 5rem;
    gap: 2rem;
`