// hooks
import { useState } from "react";

// components
import Dropdown from "../dropdown/dropdown";

// interfaces
import { Image } from "../../interfaces/image";


interface NavbarDropdownProps{
    list: Array<string>,
    image: Image
}

export default function NavbarDropdown({ list, image }: NavbarDropdownProps): JSX.Element{
    const [hover, setHover] = useState<boolean>(false);

    return(
        <div className={"nav-item submenu-container flex-col flex-col-h-center "+image.type} onMouseOver={ () => setHover(true)} onMouseOut={ () => setHover(false)}>
            <img src={image.src} alt=""  />
            <Dropdown submenu={list} hover={hover}/>
        </div>
    );
}