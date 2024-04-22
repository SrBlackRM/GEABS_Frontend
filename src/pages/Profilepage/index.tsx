import styled from "styled-components";
import { ReactElement } from "react";
import { BoxContainer } from "../../components/BoxContainer";
import { CustomButton } from "../../components/CustomButton";
import { CustomTable } from "../../components/CustomTable";
import { AddressType } from "../../interfaces/AdressType";
import { TableRow } from "../../components/CustomTable/TableStyledComponents/";
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
    return(
        <>
            <BoxContainer title="Meu Perfil">
                <StyledMyProfileTable />
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
            <TableRow  template="4fr 0.5fr">
                <DataOfTableRowTextInput title="Rua:" data={address?.street}/>
                <DataOfTableRowTextInput title="Nº:" data={address?.streetNumber} />
            </TableRow>
            <TableRow template="4fr 3fr"> 
                <DataOfTableRowTextInput title="Complemento:" data={address?.complement}/>
                <DataOfTableRowTextInput title="Referência:" data={address?.reference}/>
            </TableRow>
            <TableRow template="2fr 3fr 0.5fr"> 
                <DataOfTableRowTextInput title="Bairro:" data={address?.district}/>
                <DataOfTableRowTextInput title="Cidade:" data={address?.city}/>
                <DataOfTableRowTextInput title="Estado:" data={address?.region}/>
            </TableRow>
        </CustomTable>

        <CustomButton type={1} text="Salvar Endereço"/>
    </>
}

// TABELA MEU PERFIL
interface myProfileTableProps{
    className?: string,
}
const myProfileTable = ({className}: myProfileTableProps ):ReactElement => {
    return(
        <>
            <CustomTable className={className}>
                <TableRow template="1fr 1fr">
                    <DataOfTableFileType />
                </TableRow>
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