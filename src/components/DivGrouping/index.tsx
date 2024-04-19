import { ReactElement } from "react";

interface DivGroupingProps {
    className?: string;
    children?: Array<ReactElement> | ReactElement | null;
}

export const DivGrouping = ({ className, children }: DivGroupingProps ): ReactElement =>{
    return(
        <div className={className}>
            {children}
        </div>
    )
}