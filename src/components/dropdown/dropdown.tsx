interface DropdownProps{
    submenu: Array<string>
    hover: boolean
}

export default function Dropdown({ submenu, hover }: DropdownProps): JSX.Element{
    return(
        <>
            {hover ? <ul className="dropdown submenu flex-col flex-col-h-center"> {submenu.map((elem:string) => <li key={'item'+submenu.indexOf(elem)} className="dropdown-list-item"><a href={elem.toLowerCase() == 'home' ? '/' : elem.toLowerCase() }>{elem}</a></li>)} </ul> : <></>}
        </>
    );
}