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

const StyledFooter = styled.div`
display: flex;
justify-content: space-between;
max-width: 100vw;
border-top: 1px solid rgb(188, 188, 188);
padding: 3rem 3rem 8rem 3rem;
background-color: rgb(255, 111, 0);
`;

// apenas um exemplo de passar props
// const CopyRight = styled.p<{ $right ?: boolean; }>`
const StyledCopyRight = styled(CopyRight)`
    color: white;
    font-size: 12px;
`;

const StyledLinkToTerms = styled(LinkToTerms)`
        text-decoration: none;
        color: white;
`;


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