// styles
import "../../styles/navbar/Navbar.scss";
import "../../styles/navbar/Search.scss"
import "../../styles/navbar/Dropdown.scss"

// images
import logoIMG from "../../assets/LogoGEABS.png";
import perfilIMG from "../../assets/user.png";

// navbar components import
import NavbarContainer from "./navbarContainer";
import NavbarButton from "./navbarButton";
import NavbarDropdown from "./navbarDropdown";
import NavbarSearch from "./navbarSearch";

export default function Navbar() : JSX.Element {
    const submenu: Array<string> = ['Home', 'Perfil', 'Certificados'];

    return(
        <nav className="navbar flex-row flex-row-v-center">
            <NavbarContainer className="left-side logo-container">
                <NavbarButton toRedirect="/" image={{type:'logo', src:logoIMG}} />
            </NavbarContainer>
            <NavbarContainer className="right-side flex-row flex-row-v-center">
                <NavbarSearch image={{type:'icon'}}/>
                <NavbarDropdown list={submenu} image={{type:'logo', src:perfilIMG}}/>
            </NavbarContainer>
        </nav>
    );
}