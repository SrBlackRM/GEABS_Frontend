import ProfilePage from "../pages/profilepage";
import StandTempl from "../templates/standtempl";

export default function Profile() : JSX.Element{
    return(
        <StandTempl title="Perfil - GEABS">
            <ProfilePage />
        </StandTempl>
    );
}