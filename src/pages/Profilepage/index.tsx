import styled from "styled-components";
import { DivGrouping } from "../../components/DivGrouping";

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
            <BoxContainer>
                <BoxTitle>Meu perfil: </BoxTitle>
                <InfoContainer>
                    
                </InfoContainer>
            </BoxContainer>
            <BoxContainer>
                <BoxTitle>Endereço: </BoxTitle>
                <InfoContainer>
                    <AddressInfoComponents type='address' address={addressTest} className="address-info"/>
                </InfoContainer>
            </BoxContainer>
        </>
    );
}

/*        ---------------------        ---------------------        COMPONENTES        ---------------------        ---------------------        */


const InfoComponents = ({type, address, generic, className}: InfoComponentsProp) => {
    if(type === 'generic'){
        return <DivGrouping>
                    <h3>{generic?.title}</h3>
                    <p>{generic?.text}</p>
                </DivGrouping>
    }
    else if(type === 'address'){
        return <>

                <table className={className}>
                    <StyledRow  template="4fr 0.5fr">
                        <StyledData>
                            <th>Rua:</th>
                            <StyledInput type="text" value={address?.street} />
                        </StyledData>
                        <StyledData>
                            <th>Nº:</th>
                            <StyledInput type="text" value={address?.streetNumber} />
                        </StyledData>
                    </StyledRow>
                    <StyledRow template="4fr 3fr"> 
                        <StyledData>
                            <th>Complemento:</th>
                            <StyledInput type="text" value={address?.complement} />
                        </StyledData>

                        <StyledData>
                            <th>Referência:</th>
                            <StyledInput type="text" value={address?.reference} />
                        </StyledData>
                    </StyledRow>
                    <StyledRow template="2fr 3fr 0.5fr"> 
                        <StyledData>
                            <th>Bairro:</th>
                            <StyledInput type="text" value={address?.district}/>
                        </StyledData>

                        <StyledData>    
                            <th>Cidade:</th>
                            <StyledInput type="text" value={address?.city}/>
                        </StyledData>

                        <StyledData>
                            <th>Estado:</th>
                            <StyledInput type="text" value={address?.region} />
                        </StyledData>
                    </StyledRow>
                </table>

                <StyledButton>Salvar Endereço</StyledButton>
        </>
    }
}

/*        ---------------------        ---------------------        TPOS        ---------------------        ---------------------        */

interface InfoComponentsProp {
    type: 'generic' | 'address' ;
    address?: AddressType;
    generic?: GenericType;
    className?: string;
}

type AddressType = {
    street: string,
    streetNumber: number,
    complement?: string,
    reference?: string,
    district: string,
    city: string,
    region: string,
}

type GenericType = {
    title: string,
    text: string,
}


/*        ---------------------        ---------------------        ESTILOS        ---------------------        ---------------------        */

// BOX CONTAINERS
const BoxContainer = styled(DivGrouping)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(0,0,0,0.7);
    border-radius: 30px;
    margin: 2rem 15rem;
`;

// TITULOS
const BoxTitle = styled.h2`
    padding: 2rem;
    border-bottom: 1px solid gray;
`;

// CONTAINER DE INFO
const InfoContainer = styled(DivGrouping)`
    margin: 1rem 3rem;
    padding: 1rem;
`;

// INFO DO TIPO ADDRESS
const AddressInfoComponents = styled(InfoComponents)`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`
// BOTÃO SALVAR
const StyledButton = styled.button`
    display: block;
    float: right;
    padding: 1rem;
    background-color: red;
    color: white;
    border: none;
    border-radius: 10px;
    margin-top: 3rem;

    &:hover{
        cursor: pointer;
        background-color: #3d14b9;
    }
`
// STYLE INPUT TEXT
const StyledInput = styled.input`
    padding: 1rem;
    font-size: 16px;
    background-color: rgb(0,0,0,0.6);
    color: white;
    border: none;
    border-radius: 10px;
    width: 100%;

    &:focus{
        outline-style: none;
    }
`

// LINHAS TABELA
const StyledRow = styled.tr<{template: string}>`
    display: grid;
    grid-template-columns: ${({template}) => template ? template : `1fr` };
    text-align: left;
`

// INFO 
const StyledData = styled.td`
    display: grid;
    margin: 0 2rem;
`