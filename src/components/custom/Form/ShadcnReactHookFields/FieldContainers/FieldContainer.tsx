import React, {PropsWithChildren} from 'react';

type FieldContainerProps = {
    className: string;
} & PropsWithChildren;

export default function FieldContainer({className, children}: FieldContainerProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}