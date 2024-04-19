import ProfilePage from "../pages/Profilepage";
import StandTempl from "../templates/standtempl";

export default function Profile() : JSX.Element{
    return(
        <StandTempl title="Perfil - GEABS">
            <ProfilePage />
        </StandTempl>
    );
}