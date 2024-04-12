// interfaces
import { Image } from "../../interfaces/image";

// assets
import bannerImage from "../../assets/trabalho_em_altura.png"

// styles
import "../../styles/banner/Banner.scss"

// hooks
import useImageGetSize from "../../hooks/useImageGetSize";
import BannerInfo from "./bannerInfo";

export default function Banner(): JSX.Element {
    const imageBanner: Image = {
        src: bannerImage,
        size: {
            width: [100, '%'],
            height: [80, 'vh'],
        },
        type: 'banner',
    }

    const imgBannerSize = useImageGetSize(imageBanner);

    return(
        <div className="banner-container flex-rrow flex-row-v-center">
            <div className="banner-image-container">
                <img src={imageBanner.src} className={"banner-image "+imageBanner.type} style={{...imgBannerSize}}/>
            </div>
            <BannerInfo 
                title="GEABS Combat Fire" 
                desc="Carreiras profissionais" 
                buttonValue="Ver cursos"
            />
        </div>
    );
}