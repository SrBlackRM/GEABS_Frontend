import logo from "../../assets/LogoGEABS.png"

interface BannerInfo{
    title: string,
    desc: string,
    buttonValue: string
}

export default function BannerInfo({title, desc, buttonValue}: BannerInfo): JSX.Element{
    return(
        <div className="banner-info-container flex-col gap-1">
            <div className="flex-row gap-1 flex-row-v-center">
                <h1>{title}</h1><img className="logo" src={logo} style={{ width: '3rem', height: '3rem'}} />
            </div>
            <h2>{desc}</h2>
            <input type="button" value={buttonValue}/>
        </div>
    );
}