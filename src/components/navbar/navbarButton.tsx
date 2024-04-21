import { Image } from "../../interfaces/image";

interface ButtonProps{
    image: Image,
    toRedirect: string
}

export default function NavbarButton({ toRedirect, image }:ButtonProps): JSX.Element{
    return(
        <a href={toRedirect} className={image.type}>
            <img src={image.src} />
        </a>
    );
}