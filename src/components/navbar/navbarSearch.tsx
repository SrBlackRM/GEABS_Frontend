// hooks
import { useState } from "react";

// images
import searchIcon from "../../assets/search.png"

// interfaces
import { Image } from "../../interfaces/image";


interface NavbarSearchProps{
    image: Image
}

export default function NavbarSearch({ image }: NavbarSearchProps): JSX.Element{
    const navSearch :JSX.Element = <input type="text" className="nav-search"/>;
    const searchIconImage :JSX.Element = <img src={searchIcon} onClick={()=>handleToggle()} />
    const [searchButtonToggle, setSearchButtonToggle] = useState<boolean>(false);

    const handleToggle = ()=> {
        searchButtonToggle ? setSearchButtonToggle(false) : setSearchButtonToggle(true);
    }

    return(
        <div className={'search '+ image.type}>
            {searchButtonToggle ? navSearch : ''}
            {searchIconImage}
        </div>
    );
}