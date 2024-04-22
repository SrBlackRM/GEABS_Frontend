import { ReactElement } from "react";

interface CustomTableProps {
    className?: string,
    children: ReactElement[] | ReactElement;
}

export const CustomTable = ({className, children}: CustomTableProps) => {
    return <table className={className}>
        {children}
    </table>
}