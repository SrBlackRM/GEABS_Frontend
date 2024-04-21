import { ReactElement } from "react";
import styled from "styled-components";
import { DivGrouping } from "../DivGrouping";



const LinkToTerms = ({className, children, to}: {className:string, children: string, to: string}): ReactElement => {
    return(
        <a className={className} href={to}>{children}</a>
    );
}

const CopyRight = ({ className, companyName }: {className:string, companyName: string}): ReactElement => {
    return(
        <p className={className}>Copyright © 2024 - {companyName}, Todos os Direitos Reservados  </p>
    )
}

export function Footer(): ReactElement{

    const UseTermsUrl = "#";
    const PrivacyPoliceUrl = "#";

    return(
        <StyledFooter>
            <StyledCopyRight className="styledCopy" companyName="GEABS Combat Fire" />
            <DivGrouping className="flex-col">
                <StyledLinkToTerms className="styledLinks" to={UseTermsUrl}>Temos de Uso</StyledLinkToTerms>
                <StyledLinkToTerms className="styledLinks" to={PrivacyPoliceUrl}>Política de Privacidade</StyledLinkToTerms>
            </DivGrouping>
        </StyledFooter>
    )
}


/*        ---------------------        ---------------------        ESTILOS        ---------------------        ---------------------        */


// FOOTER
const StyledFooter = styled.div`
display: flex;
justify-content: space-between;
max-width: 100vw;
border-top: 1px solid rgb(188, 188, 188);
padding: 3rem 3rem 8rem 3rem;
background-color: rgb(255, 111, 0);

@media (max-width: 480px){
    flex-direction: column-reverse;
    row-gap: 3rem;
    padding-bottom: 3rem;
}
`;


// COPYRIGHT
const StyledCopyRight = styled(CopyRight)`
    color: white;
    font-size: 12px;
`;

// LINKS
const StyledLinkToTerms = styled(LinkToTerms)`
        text-decoration: none;
        color: white;
`;
