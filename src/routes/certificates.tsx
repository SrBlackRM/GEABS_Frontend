import CertificatesPage from "../pages/certificatespage";
import StandTempl from "../templates/standtempl";

export default function Certificates() : JSX.Element{
    return(
        <StandTempl title="Certificados - GEABS">
            <CertificatesPage />
        </StandTempl>
    );
}