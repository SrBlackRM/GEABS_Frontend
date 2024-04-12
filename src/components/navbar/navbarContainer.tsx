interface ContainerProps{
    children: JSX.Element | Array<JSX.Element>,
    className: string
}

export default function NavbarContainer( { children, className } : ContainerProps): JSX.Element {
    return(
        <div className={className}>
            { children }
        </div>
    );
}