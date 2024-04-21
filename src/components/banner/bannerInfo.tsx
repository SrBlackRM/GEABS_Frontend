import logo from "../../assets/LogoGEABS.png"
import { DivGrouping } from "../DivGrouping";

interface BannerInfo{
    title: string,
    desc: string,
    buttonValue: string
}

export default function BannerInfo({title, desc, buttonValue}: BannerInfo): JSX.Element{
    return(
        <div className="banner-info-container flex-col gap-1">
            <DivGrouping className="flex-row gap-1 flex-row-v-center titulo-logo">
                <h1>{title}</h1><img className="logo" src={logo} style={{ width: '3rem', height: '3rem'}} />
            </DivGrouping>
            <h2>{desc}</h2>
            <input type="button" value={buttonValue}/>
        </div>
    );
}

